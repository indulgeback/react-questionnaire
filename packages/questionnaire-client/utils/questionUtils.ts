import { Question } from "@/types/question";

/**
 * 处理后端返回的问卷数据，确保兼容性
 */
export function processQuestionnaireData(data: any[]): Question[] {
  return data.map(item => {
    // 提取必要字段
    const question: Question = {
      fe_id: item.fe_id,
      type: item.type,
      question: item.question || item.props?.title || "",
      options: item.options || item.props?.options,
      placeholder: item.placeholder || item.props?.placeholder,
      required: item.required || false,
      props: item.props
    };

    // 处理特殊题型的额外属性
    if (item.matrix || item.props?.rows) {
      question.matrix = {
        rows: item.matrix?.rows || item.props?.rows || [],
        columns: item.matrix?.columns || item.props?.columns || []
      };
    }

    // 处理其他属性
    if (item.maxLength !== undefined) question.maxLength = item.maxLength;
    if (item.rows !== undefined) question.rows = item.rows;
    if (item.min !== undefined) question.min = item.min;
    if (item.max !== undefined) question.max = item.max;
    if (item.step !== undefined) question.step = item.step;

    // 从props中获取属性
    if (item.props) {
      if (item.props.maxLength !== undefined && question.maxLength === undefined)
        question.maxLength = item.props.maxLength;
      if (item.props.rows !== undefined && question.rows === undefined)
        question.rows = item.props.rows;
      if (item.props.min !== undefined && question.min === undefined) question.min = item.props.min;
      if (item.props.max !== undefined && question.max === undefined) question.max = item.props.max;
      if (item.props.step !== undefined && question.step === undefined)
        question.step = item.props.step;
    }

    return question;
  });
}
