import request from "@/utils/request";

// 登录
export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/login/login',
    method: 'post',
    data
  })
}
export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: {
      token
    }
  })
}
// 登出
export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}
