import axios from 'axios'
import router from './router/index'
import {Loading,Message} from 'element-ui'

axios.defaults.timeout = 10000 //超时时间

//http请求拦截器
var loadinginstace
axios.interceptors.request.use(config=>{
//  element ui Loading 方法
  loadinginstace = Loading.service({fullscreen:true})
  return config
},error => {
  loadinginstace.close()
  Message.error({
    message: '加载超时'
  })
  return Promise.reject(error)
})

//http响应拦截器
axios.interceptors.response.use(data=>{
//  响应成功关闭loading
  loadinginstace.close()
  return data
},error => {
  loadinginstace.close()
  Message.error({
    message: '加载失败,请稍后重试'
  })
  return Promise.reject(error)
})


export default axios
