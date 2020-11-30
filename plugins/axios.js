import axios from 'axios'

// axios 实例
const request = axios.create({
  baseURL: '/api',
  timeout: 5000,
})

// 响应拦截器
// Add a request interceptor
request.interceptors.request.use(
  config => {
    // Do something before request is sent
    return config
  },
  error => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
request.interceptors.response.use(
  response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)

const fetch = options => {
  return new Promise((resolve, reject) => {
    request(options).then(response => {
      const { errcode, errmsg, data, ...rest } = response.data
      if (errcode === 0) return resolve({ ...data, ...rest })
      window.utils.showmsg(errmsg)
    })
  })
}

export const get = (url, params) => fetch({ method: 'get', url, params })
export const put = (url, data) => fetch({ method: 'put', url, data })
export const post = (url, data) => fetch({ method: 'post', url, data })
