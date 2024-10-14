export class ResponseBody<T> {
  constructor(
    public code: number,
    public data: T,
    public msg: string,
  ) {}
}
