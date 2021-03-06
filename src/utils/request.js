import axios from 'axios'
import {
  Message,
  MessageBox
} from 'element-ui'
import store from '../store'
import {
  getToken
} from '@/utils/auth';



// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API,  //api 接口地址
  timeout: 5000 //请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['X-Token'] = getToken(); //让每个请求携带自定义token
    }
    return config;
  },
  error => {
    console.log(error);
    Promise.reject(error);
  }
)

//response拦截器
service.interceptors.response.use(
  response => response,
  // 下面的注释为通过在response里，自定义code来标示请求状态
  //  * 当code返回如下情况则说明权限有问题，登出并返回到登录页
  //  * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中

  // response => {
  //   // code 为非20000 是抛出错误
  //   const res = response.data;
  //   if (res.code !== 20000) {
  //     Message({
  //       message: res.message,
  //       type: 'error',
  //       duration: 5 * 1000
  //     })

  //     // 50008:非法的token; 50012:其他客户端登录;  50014:Token 过期;
  //     if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
  //       MessageBox.confirm(
  //         '你已被登出，可以取消继续留在该页面，或者重新登录',
  //         '确定登出', {
  //           confirmButtonText: '重新登录',
  //           cancelButtonText: '取消',
  //           type: 'warning'
  //         }
  //       ).then(() => {
  //         store.dispatch('FedLogOut').then(() => {
  //           location.reload(); // 为了重新实例化vue-router对象 避免bug
  //         })
  //       })
  //     }
  //     return Promise.reject('error')
  //   } else {
  //     return response.data;
  //   }
  // },
  error=>{
      Message({
          message:error.message,
          type:'error',
          duration:5*1000
      })
      return Promise.reject(error);
  }
)

export default service
