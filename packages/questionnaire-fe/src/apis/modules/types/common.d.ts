/**
 * 请求响应标准类型
 */
export interface RespType<T> {
  code: number
  data: T
  msg: string
}
