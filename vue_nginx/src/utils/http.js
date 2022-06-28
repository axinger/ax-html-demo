import axios from "axios"
import { Message } from "element-ui"

const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
})

// 添加响应拦截器
http.interceptors.response.use(
  (res) => {
    console.log("响应拦截器 = ", res)

    if (res.status == 200) {
      console.log("响应拦截器200  = ", res.data)

      if (res.data.code == 200) {
        return res.data.data
      }

      return res.data
    }

    return res
  },
  (error) => {
    console.log("响应拦截器 err = ", error)
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000,
    })
    return Promise.reject(error)
  }
)

export default http
