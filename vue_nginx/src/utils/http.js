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
      if (res.data.code == 200) {
        return res.data.data
      }
      return res.data
    }
    Message({
      message: res.message || "Error",
      type: "error",
      duration: 5 * 1000,
    })
    return res
  },
  (error) => {
    console.log("响应拦截器 err = ", error)
    Message({
      message: error.message || "Error",
      type: "error",
      duration: 5 * 1000,
    })
    return Promise.reject(error)
  }
)

export default http
