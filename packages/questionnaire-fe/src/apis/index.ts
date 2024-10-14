import { getQuestionById, createQuestion, getQuestionList } from './modules/question'
import { register, login } from './modules/auth'

export default {
  createQuestion,
  getQuestionById,
  getQuestionList,
  register,
  login
}
