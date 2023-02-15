import request from '@/common/request.js'
export default {
  // 用户登录
  login(params){
    return request('/login','POST',params)
  },
  
}