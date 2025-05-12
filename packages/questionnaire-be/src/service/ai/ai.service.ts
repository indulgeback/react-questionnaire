import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { Observable } from 'rxjs';
import configuration from '@/config';

enum Model {
  deepseek = 'deepseek',
  QwenMax = 'qwen-max',
  QwenPlus = 'qwen-plus',
  DeepseekR1 = 'deepseek-r1',
  DeepseekV3 = 'deepseek-v3',
}

@Injectable()
export class AiService {
  // OpenAI 客户端实例
  private readonly openai: OpenAI;
  private readonly model: Model;
  constructor() {
    this.model = Model.QwenMax;
    // 初始化 OpenAI 客户端，配置 baseURL 和 apiKey
    this.openai = new OpenAI({
      baseURL: configuration().openai[this.model].baseURL,
      apiKey: configuration().openai[this.model].apiKey,
    });
  }

  // 生成问卷的方法，接收主题参数，返回 Observable<MessageEvent>
  async generate(
    theme: string,
    count: number,
  ): Promise<Observable<MessageEvent>> {
    return new Observable((subscriber) => {
      // 构建提示词，要求生成特定格式的问卷 JSON
      const description = `生成一份关于${theme}的问卷，要求如下：
1. 问卷需包含${count}个问题，每个问题都要与${theme}主题相关
2. 输出格式为JSON，结构如下：
{
  "survey": {
    "title": "问卷标题",
    "description": "问卷目的说明",
    "questions": [
      {
        "fe_id": "数字字符串，确保唯一",
        "type": "问题类型，必须是以下之一：
          - questionTitle（分段标题）
          - questionShortAnswer（简答题）
          - questionParagraph（段落题）
          - questionRadio（单选题）
          - questionCheckbox（多选题）
          - questionDropdown（下拉选择题）
          - questionRating（评分题）
          - questionNPS（NPS评分题）
          - questionMatrixRadio（矩阵单选题）
          - questionMatrixCheckbox（矩阵多选题）
          - questionSlider（滑块题）
          - questionDate（日期选择题）
          - questionImageChoice（图片选择题）
          - questionRank（排序题）",
        "title": "问题标题",
        "props": {
          // 根据不同类型设置不同属性
          // 单选、多选、下拉题：options: string[]
          // 评分题：count: number
          // NPS题：min: number, max: number
          // 矩阵题：rows: string[], columns: string[]
          // 滑块题：min: number, max: number, step: number
          // 日期题：format: "YYYY-MM-DD"
          // 排序题：options: string[]
        }
      }
    ]
  }
}

3. 问题类型分配建议：
- 使用questionTitle作为分段标题，合理分隔不同类型的问题
- 包含2-3个简答或段落题
- 包含4-5个单选或多选题
- 包含1-2个评分或NPS题
- 包含1-2个矩阵题
- 其他类型根据主题合理分配

4. 确保生成的JSON格式正确，每个问题的props属性符合对应类型的要求。`;

      // 用于累积流式响应内容
      let accumulatedContent = '';
      // 用于取消请求的控制器
      const abortController = new AbortController();

      // 调用 OpenAI API 创建聊天完成
      this.openai.chat.completions
        .create(
          {
            messages: [{ role: 'system', content: description }],
            model: configuration().openai[this.model].model,
            stream: true, // 启用流式响应
          },
          {
            signal: abortController.signal,
          },
        )
        .then(async (stream) => {
          try {
            // 处理流式响应的每个数据块
            for await (const chunk of stream) {
              const content = chunk.choices[0].delta.content || '';
              accumulatedContent += content;
              // 向订阅者发送累积的内容
              subscriber.next({ data: accumulatedContent } as MessageEvent);
              if (subscriber.closed) {
                abortController.abort();
              }
            }
            // 发送完成标记
            subscriber.next({ data: '{[DONE]}' } as MessageEvent);
          } catch (error) {
            subscriber.error(error);
          }
        })
        .catch((error) => {
          console.error('Error generating questionnaire:', error);
          subscriber.error(new Error('生成问卷时出错，请稍后重试。'));
        });

      // 清理函数，在取消订阅时调用
      return () => {
        abortController.abort();
        subscriber.complete();
      };
    });
  }
}
