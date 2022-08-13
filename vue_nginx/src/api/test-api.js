import http from "@/utils/http"

export default {
  getTest() {
    return http({
      url: `/ip1`,
      method: "get",
    })
  },

  getTest2() {
    return http({
      url: `/ip2`,
      method: "get",
    })
  },
}
