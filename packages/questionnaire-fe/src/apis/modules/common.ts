import request from '@/utils/request'

const prefix = '/api'

const uploadFile = (formData: FormData) => request.post(`${prefix}/file`, formData)
