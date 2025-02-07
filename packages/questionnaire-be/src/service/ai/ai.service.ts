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
  async generate(theme: string): Promise<Observable<MessageEvent>> {
    return new Observable((subscriber) => {
      // 构建提示词，要求生成特定格式的问卷 JSON
      const description = `生成关于${theme}的20题问卷，类型包括选择题、是非题、简答题。输出JSON格式：
{"survey":{"title":"问卷标题","description":"问卷目的","questions":[{"id":1,"type":"multiple-choice","question":"问题文本","options":["选项1","选项2"]},...]}}。确保每题ID唯一，内容围绕${theme}。`;

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
