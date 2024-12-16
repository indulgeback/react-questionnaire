const sseRequest = (url: string) => {
  const eventSource = new EventSource(url)
  return {
    eventSource,
    onMessage: (callback: (data: any) => void) => {
      eventSource.onmessage = event => {
        callback(event.data)
      }
    },
    onError: (callback: (error: any) => void) => {
      eventSource.onerror = error => {
        callback(error)
      }
    },
    close: () => {
      eventSource.close()
    }
  }
}

export default sseRequest
