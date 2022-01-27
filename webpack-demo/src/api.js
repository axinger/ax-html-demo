import axios from 'axios'

const service = axios.create({
    baseURL: '1111111', // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
})

export default service