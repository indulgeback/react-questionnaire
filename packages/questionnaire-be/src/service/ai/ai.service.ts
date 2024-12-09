import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class AiService {
  async generate(body: any) {
    const description = `生成关于${body.theme}的20题问卷，类型包括选择题、是非题、简答题。输出JSON格式：
{"survey":{"title":"问卷标题","description":"问卷目的","questions":[{"id":1,"type":"multiple-choice","question":"问题文本","options":["选项1","选项2"]},...]}}。确保每题ID唯一，内容围绕${body.theme}。`;

    const openai = new OpenAI({
      baseURL: 'https://api.deepseek.com',
      apiKey: 'sk-2edf4f402e524747923f625f5154e808',
    });

    try {
      const stream = await openai.chat.completions.create({
        messages: [{ role: 'system', content: description }],
        model: 'deepseek-chat',
        stream: true,
      });

      let jsonString = '';
      for await (const chunk of stream) {
        // 假设每个chunk是一个字符串片段
        jsonString += chunk.choices[0].delta.content;
        console.log('Received chunk:', jsonString);
      }
    } catch (error) {
      console.error('Error generating questionnaire:', error);
      throw new Error('生成问卷时出错，请稍后重试。');
    }
  }
}
