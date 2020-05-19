import request from 'axios'

request.interceptors.request.use(function (config) {
    window.globalObj.token && (config.headers.Authorization = 'Bearer ' + window.globalObj.token)
    // 添加请求头，则添加
    // config.headers[] =
    // 全局参数在这里
    var obj = {}
    if (config.method === 'get') {
        config.params = {
            ...config.params,
            ...obj
        }
    } else {
        config.data = {
            ...config.data,
            ...obj
        }
    }
    return config
}, function (error) {
    return Promise.reject(error)
})

request.interceptors.response.use(function (res) {
    return res.data
}, function (error) {
    return Promise.reject(error)
})

export default request
