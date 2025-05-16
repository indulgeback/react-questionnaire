import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QuestionnaireAnswer } from '@/common/schemas/answer.schema';
import * as nodejieba from 'nodejieba';

// 定义题目类型枚举
enum QuestionType {
  QUESTION_TITLE = 'questionTitle',
  SHORT_ANSWER = 'questionShortAnswer',
  PARAGRAPH = 'questionParagraph',
  RADIO = 'questionRadio', // 单选题
  CHECKBOX = 'questionCheckbox', // 多选题
  DROPDOWN = 'questionDropdown', // 下拉选择题
  RATING = 'questionRating', // 评分题
  NPS = 'questionNPS', // NPS评分题
  MATRIX_RADIO = 'questionMatrixRadio', // 矩阵单选题
  MATRIX_CHECKBOX = 'questionMatrixCheckbox', // 矩阵多选题
  SLIDER = 'questionSlider', // 滑块题
  DATE = 'questionDate', // 日期选择题
  OTHER = 'other',
}

// 图表数据的接口定义
export interface ProcessedAnswerData {
  questionId: string | number;
  questionType: string;
  totalResponses: number;
  statistics?:
    | Record<string, { count: number; percentage: number }>
    | Record<string, Record<string, { count: number; percentage: number }>>;
  rawAnswers?: any[];
  textAnswers?: string[];
  summary?: {
    averageScore?: number;
    medianScore?: number;
    maxScore?: number;
    minScore?: number;
    mostCommon?: { value: any; count: number }[];
  };
}

@Injectable()
export class AnswerService {
  constructor(
    @InjectModel(QuestionnaireAnswer.name)
    private readonly questionnaireAnswerModel: Model<QuestionnaireAnswer>,
  ) {}

  // 按题目ID分组并统计答案数据
  async getAnswersByQuestionId(
    questionnaireId: number,
  ): Promise<ProcessedAnswerData[]> {
    // 先获取所有答案记录
    const allRecords = await this.questionnaireAnswerModel
      .find({ questionnaire_id: questionnaireId })
      .lean()
      .exec();

    if (!allRecords || allRecords.length === 0) {
      return [];
    }

    // 按题目ID分组
    const answersByQuestionId = {};

    // 遍历所有记录
    for (const record of allRecords) {
      // 遍历每条记录中的答案
      for (const answer of record.answers) {
        try {
          // 使用类型断言处理可能的属性名差异
          const questionId =
            (answer as any).questionId || (answer as any).question_id;
          if (!questionId) {
            console.warn('跳过无ID答案');
            continue;
          }

          // 获取题目类型，如果是标题题或其他不需要的类型，直接跳过
          const questionType = answer.question_type || 'other';
          if (
            [QuestionType.QUESTION_TITLE, QuestionType.OTHER].includes(
              questionType as QuestionType,
            )
          ) {
            continue;
          }

          // 预处理矩阵题的回答数据
          if (
            [QuestionType.MATRIX_RADIO, QuestionType.MATRIX_CHECKBOX].includes(
              questionType as QuestionType,
            )
          ) {
            // 如果是矩阵题，且答案是字符串，尝试解析为JSON
            if (typeof answer.answer === 'string') {
              try {
                const parsedAnswer = JSON.parse(answer.answer);
                // 移除特殊标记
                if (parsedAnswer.__incomplete__) {
                  delete parsedAnswer.__incomplete__;
                }
                answer.answer = parsedAnswer;
              } catch (e) {
                console.error(`矩阵题答案解析错误 (ID: ${questionId}):`, e);
              }
            }
          }

          // 如果该题目ID尚未在分组中，则初始化
          if (!answersByQuestionId[questionId]) {
            answersByQuestionId[questionId] = [];
          }

          // 添加答案到对应的题目ID分组
          answersByQuestionId[questionId].push(answer);
        } catch (error) {
          console.error('处理答案记录错误:', error);
        }
      }
    }

    // 处理每个题目的答案数据
    const processedResults: ProcessedAnswerData[] = [];
    for (const questionId in answersByQuestionId) {
      const answers = answersByQuestionId[questionId];

      // 再次检查题目类型，确保标题题不被处理
      const questionType = answers[0]?.question_type || 'other';
      if (questionType === QuestionType.QUESTION_TITLE) continue;

      // 根据题目类型不同处理数据
      let processedAnswer: ProcessedAnswerData;

      switch (questionType) {
        case QuestionType.RADIO:
        case QuestionType.DROPDOWN:
          processedAnswer = this.processSingleChoiceQuestion(
            questionId,
            answers,
            questionType,
          );
          break;
        case QuestionType.CHECKBOX:
          processedAnswer = this.processMultipleChoiceQuestion(
            questionId,
            answers,
            questionType,
          );
          break;
        case QuestionType.RATING:
        case QuestionType.NPS:
        case QuestionType.SLIDER:
          processedAnswer = this.processRatingQuestion(
            questionId,
            answers,
            questionType,
          );
          break;
        case QuestionType.MATRIX_RADIO:
          processedAnswer = this.processMatrixRadioQuestion(
            questionId,
            answers,
            questionType,
          );
          break;
        case QuestionType.MATRIX_CHECKBOX:
          processedAnswer = this.processMatrixCheckboxQuestion(
            questionId,
            answers,
            questionType,
          );
          break;
        case QuestionType.SHORT_ANSWER:
        case QuestionType.PARAGRAPH:
          processedAnswer = this.processTextQuestion(
            questionId,
            answers,
            questionType,
          );
          break;
        case QuestionType.DATE:
          processedAnswer = this.processDateQuestion(
            questionId,
            answers,
            questionType,
          );
          break;
        case QuestionType.QUESTION_TITLE:
          // 标题题不需要处理
          continue;
        default:
          // 其他类型题目，返回原始答案
          processedAnswer = {
            questionId,
            questionType,
            totalResponses: answers.length,
            rawAnswers: answers.map((a) => this.removeMongoProps(a)),
          };
      }

      processedResults.push(processedAnswer);
    }

    return processedResults;
  }

  // 处理单选题和下拉选择题的统计
  private processSingleChoiceQuestion(
    questionId: string | number,
    answers: any[],
    questionType: string,
  ): ProcessedAnswerData {
    // 统计每个选项被选择的次数
    const optionCounts = {};
    const totalResponses = answers.length;

    for (const answerObj of answers) {
      const option = answerObj.answer;
      if (option === undefined || option === null) continue;

      optionCounts[option] = (optionCounts[option] || 0) + 1;
    }

    // 计算每个选项的百分比
    const statistics = {};

    for (const option in optionCounts) {
      statistics[option] = {
        count: optionCounts[option],
        percentage: (optionCounts[option] / totalResponses) * 100,
      };
    }

    return {
      questionId,
      questionType,
      totalResponses,
      statistics,
    };
  }

  // 辅助方法：移除MongoDB特有属性
  private removeMongoProps(obj: any): any {
    if (!obj) return obj;

    if (Array.isArray(obj)) {
      return obj.map((item) => this.removeMongoProps(item));
    }

    if (typeof obj === 'object') {
      const cleanObj = { ...obj };
      // 移除MongoDB特有属性
      [
        '_id',
        '__v',
        '$__',
        '$init',
        '$isNew',
        '$locals',
        '$op',
        '$where',
      ].forEach((prop) => {
        if (prop in cleanObj) delete cleanObj[prop];
      });

      // 递归处理嵌套对象
      Object.keys(cleanObj).forEach((key) => {
        if (typeof cleanObj[key] === 'object' && cleanObj[key] !== null) {
          cleanObj[key] = this.removeMongoProps(cleanObj[key]);
        }
      });

      return cleanObj;
    }

    return obj;
  }

  // 处理多选题统计
  private processMultipleChoiceQuestion(
    questionId: string | number,
    answers: any[],
    questionType: string,
  ): ProcessedAnswerData {
    // 统计每个选项被选择的次数
    const optionCounts = {};
    const totalResponses = answers.length;

    for (const answerObj of answers) {
      const options = answerObj.answer;
      if (!Array.isArray(options)) continue;

      for (const option of options) {
        optionCounts[option] = (optionCounts[option] || 0) + 1;
      }
    }

    // 计算每个选项的百分比
    const statistics = {};

    for (const option in optionCounts) {
      statistics[option] = {
        count: optionCounts[option],
        percentage: (optionCounts[option] / totalResponses) * 100,
      };
    }

    return {
      questionId,
      questionType,
      totalResponses,
      statistics,
    };
  }

  // 处理评分题、NPS题和滑块题
  private processRatingQuestion(
    questionId: string | number,
    answers: any[],
    questionType: string,
  ): ProcessedAnswerData {
    const totalResponses = answers.length;
    const scores = [];

    // 收集所有评分
    for (const answerObj of answers) {
      const score = Number(answerObj.answer);
      if (!isNaN(score)) {
        scores.push(score);
      }
    }

    if (scores.length === 0) {
      return {
        questionId,
        questionType,
        totalResponses: 0,
        summary: {
          averageScore: 0,
          medianScore: 0,
        },
      };
    }

    // 计算评分统计数据
    scores.sort((a, b) => a - b);
    const sum = scores.reduce((acc, score) => acc + score, 0);
    const average = sum / scores.length;
    const median =
      scores.length % 2 === 0
        ? (scores[scores.length / 2 - 1] + scores[scores.length / 2]) / 2
        : scores[Math.floor(scores.length / 2)];

    // 计算每个分值的分布
    const scoreCounts = {};
    scores.forEach((score) => {
      scoreCounts[score] = (scoreCounts[score] || 0) + 1;
    });

    // 准备统计数据
    const statistics = {};
    for (const score in scoreCounts) {
      statistics[score] = {
        count: scoreCounts[score],
        percentage: (scoreCounts[score] / totalResponses) * 100,
      };
    }

    return {
      questionId,
      questionType,
      totalResponses,
      statistics,
      summary: {
        averageScore: parseFloat(average.toFixed(2)),
        medianScore: median,
        maxScore: Math.max(...scores),
        minScore: Math.min(...scores),
      },
    };
  }

  // 处理矩阵单选题
  private processMatrixRadioQuestion(
    questionId: string | number,
    answers: any[],
    questionType: string,
  ): ProcessedAnswerData {
    const totalResponses = answers.length;
    const rowData: Record<string, Record<string, number>> = {};

    console.log(`处理矩阵单选题 ID:${questionId}, 答案数量:${answers.length}`);

    // 打印收到的答案数据，帮助调试
    if (answers.length > 0) {
      console.log('示例答案:', JSON.stringify(answers[0].answer));
    }

    // 收集所有行的数据
    for (const answerObj of answers) {
      try {
        let matrixAnswer = answerObj.answer;

        // 如果答案是字符串格式，尝试解析JSON
        if (typeof matrixAnswer === 'string') {
          try {
            matrixAnswer = JSON.parse(matrixAnswer);
            // 移除特殊标记
            if (matrixAnswer.__incomplete__) {
              delete matrixAnswer.__incomplete__;
            }
          } catch (e) {
            console.error('矩阵答案解析错误:', e);
            continue;
          }
        }

        // 确保答案是对象类型
        if (typeof matrixAnswer !== 'object' || matrixAnswer === null) {
          console.warn(`矩阵单选题：无效答案格式 - ${typeof matrixAnswer}`);
          continue;
        }

        // 遍历矩阵答案的每一行
        for (const row in matrixAnswer) {
          if (!rowData[row]) {
            rowData[row] = {};
          }

          const columnValue = matrixAnswer[row];
          if (!columnValue) continue;

          // 统计每一列的选择
          rowData[row][columnValue] = (rowData[row][columnValue] || 0) + 1;
        }
      } catch (error) {
        console.error('处理矩阵单选题答案错误:', error);
      }
    }

    // 计算每行每列的统计数据
    const statistics: Record<
      string,
      Record<string, { count: number; percentage: number }>
    > = {};

    // 计算每行每列的统计数据
    for (const row in rowData) {
      statistics[row] = {};
      const rowTotal = Object.values(rowData[row]).reduce(
        (sum, count) => sum + count,
        0,
      );

      for (const column in rowData[row]) {
        statistics[row][column] = {
          count: rowData[row][column],
          percentage: (rowData[row][column] / rowTotal) * 100,
        };
      }
    }

    console.log(`矩阵单选题统计结果: ${Object.keys(statistics).length}行数据`);

    return {
      questionId,
      questionType,
      totalResponses,
      statistics,
    };
  }

  // 处理矩阵多选题
  private processMatrixCheckboxQuestion(
    questionId: string | number,
    answers: any[],
    questionType: string,
  ): ProcessedAnswerData {
    const totalResponses = answers.length;
    const rowData = {};

    console.log(`处理矩阵多选题 ID:${questionId}, 答案数量:${answers.length}`);

    // 打印收到的答案数据，帮助调试
    if (answers.length > 0) {
      console.log('示例答案:', JSON.stringify(answers[0].answer));
    }

    // 收集所有行的数据
    for (const answerObj of answers) {
      try {
        let matrixAnswer = answerObj.answer;

        // 如果答案是字符串格式，尝试解析JSON
        if (typeof matrixAnswer === 'string') {
          try {
            matrixAnswer = JSON.parse(matrixAnswer);
            // 移除特殊标记
            if (matrixAnswer.__incomplete__) {
              delete matrixAnswer.__incomplete__;
            }
          } catch (e) {
            console.error('矩阵多选题答案解析错误:', e);
            continue;
          }
        }

        // 确保答案是对象类型
        if (typeof matrixAnswer !== 'object' || matrixAnswer === null) {
          console.warn(`矩阵多选题：无效答案格式 - ${typeof matrixAnswer}`);
          continue;
        }

        // 遍历矩阵答案的每一行
        for (const row in matrixAnswer) {
          if (!rowData[row]) {
            rowData[row] = {};
          }

          const columnValues = matrixAnswer[row];

          // 确保列值是数组
          if (!Array.isArray(columnValues)) {
            console.warn(`矩阵多选题：行 ${row} 的值不是数组`);
            continue;
          }

          // 统计每一行中被选中的每一列
          for (const col of columnValues) {
            rowData[row][col] = (rowData[row][col] || 0) + 1;
          }
        }
      } catch (error) {
        console.error('处理矩阵多选题答案错误:', error);
      }
    }

    // 计算每行每列的统计数据
    const statistics = {};

    // 计算每行每列的统计数据
    for (const row in rowData) {
      statistics[row] = {};

      for (const column in rowData[row]) {
        statistics[row][column] = {
          count: rowData[row][column],
          percentage: (rowData[row][column] / totalResponses) * 100,
        };
      }
    }

    console.log(`矩阵多选题统计结果: ${Object.keys(statistics).length}行数据`);

    return {
      questionId,
      questionType,
      totalResponses,
      statistics,
    };
  }

  // 处理文本题（短答案和段落）
  private processTextQuestion(
    questionId: string | number,
    answers: any[],
    questionType: string,
  ): ProcessedAnswerData {
    const totalResponses = answers.length;
    const textAnswers: string[] = [];

    // 收集所有文本答案
    for (const answerObj of answers) {
      const text = answerObj.answer;
      if (text && typeof text === 'string') {
        textAnswers.push(text);
      }
    }

    // 词频统计
    const wordFrequency: Record<string, number> = {};
    if (textAnswers.length > 0) {
      const allText = textAnswers.join(' ');

      // 使用nodejieba.cut进行分词，获取全部词语
      const allWords = nodejieba.cut(allText);

      // 统计每个词的实际出现次数
      allWords.forEach((word) => {
        // 过滤掉单个字符、数字、标点符号和空白
        if (word.length > 1 && !/^[\d\s\p{P}]+$/u.test(word)) {
          wordFrequency[word] = (wordFrequency[word] || 0) + 1;
        }
      });

      // 处理英文单词，同样统计实际频率
      const englishWords: string[] = allText.match(/\b[a-zA-Z]{3,}\b/g) || [];
      englishWords.forEach((word: string) => {
        const lowerWord = word.toLowerCase();
        if (lowerWord.length > 2) {
          wordFrequency[lowerWord] = (wordFrequency[lowerWord] || 0) + 1;
        }
      });
    }

    // 获取最常见的词
    const mostCommonWords = Object.entries(wordFrequency)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 30) // 增加到30个词，为词云提供更多数据
      .map(([word, count]) => ({ value: word, count: count as number }));

    return {
      questionId,
      questionType,
      totalResponses,
      textAnswers,
      summary: {
        mostCommon: mostCommonWords,
      },
    };
  }

  // 处理日期选择题
  private processDateQuestion(
    questionId: string | number,
    answers: any[],
    questionType: string,
  ): ProcessedAnswerData {
    const totalResponses = answers.length;
    const dates = [];

    // 收集所有日期
    for (const answerObj of answers) {
      const date = answerObj.answer;
      if (date) {
        dates.push(date);
      }
    }

    // 按日期分组计数
    const dateCounts = {};
    dates.forEach((date) => {
      dateCounts[date] = (dateCounts[date] || 0) + 1;
    });

    // 准备统计数据
    const statistics = {};
    for (const date in dateCounts) {
      statistics[date] = {
        count: dateCounts[date],
        percentage: (dateCounts[date] / totalResponses) * 100,
      };
    }

    return {
      questionId,
      questionType,
      totalResponses,
      statistics,
    };
  }
}
