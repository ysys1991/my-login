import axios from 'axios'
import { Message } from 'element-ui'
import url from './url'
import { getToken } from '@/utils/auth'
 
const service = axios.create({
  baseURL: url.baseUrl,
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(config => { 
  if (getToken()) {
    const { Token } = JSON.parse(getToken())
    config.headers.Authorization = Token
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      // message:data.status.reMsg,
      type: 'error',
      duration: 10 * 1000
    })
    return Promise.reject(error)
  })

export default service
