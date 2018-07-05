import axios from '../../src/http'
import router from '../../src/router/index'
import qs from 'qs'

let root = 'http://archie.web.hengdikeji.com';
let headers = [
  {'Content-Type':'application/x-www-form-urlencoded'},
  {'Content-Type': 'application/json'},
  {'Content-Type': 'raw'}
]
function axiosPost(url,index,params,fun) {
  axios({
    method:'post',
    baseURL:root,
    url:url,
    headers:headers[index],
    data:params,
    transformRequest:[function (data) {
      if(index==0){
        Object.keys(data).forEach((key) => {
          if ((typeof data[key]) === 'object') {
            data[key] = JSON.stringify(data[key]) // 这里必须使用内置JSON对象转换
          }
        })
        data = qs.stringify(data); // 这里必须使用qs库进行转换
        return data
      }else{
        data = JSON.stringify(data);
        return data
      }
    }]
  }).then(res=>{
   if(typeof fun=="function"){
      fun(res)
    }
  })
}
function axiosGet(url,params,fun) {
  axios({
    method:'get',
    baseURL:root,
    url:url,
    params:params
  }).then(res=>{
    if(typeof fun=="function"){
      fun(res)
    }
  })
}

export default {
  axiosPost:axiosPost,
  axiosGet:axiosGet
}
