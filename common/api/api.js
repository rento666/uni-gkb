import request from '@/common/request.js'
export default {
  // 用户登录
  login(params){
    return request('/user/login','POST',params)
  },
  // 设置往期数据（各种日志）
  setWqsj(params){
    return request('/wqsj','POST',params)
  },
  // 得到往期数据
  getWqsj(params){
    return request('/wqsj/getAllByUserid?userid='+params,'GET',null)
  },
  // 保存用户信息
  saveUserInfo(params){
    return request('/user/update','POST',params)
  },
  getFamily(params){
    return request('/family/u?userid='+params,'GET',null)
  },
  addFamily(params){
    return request('/family','POST',params)
  },
  editFamily(params){
    return request('/family','POST',params)
  },
  delFamily(params){
    return request('/family/'+params,'DELETE',)
  },
  // 获取资讯文章，默认参数0,10
  getArticle(pageNum,PageSize){
    if(!pageNum){
      pageNum = 1
    }
    if(!PageSize){
      PageSize = 10
    }
    return request('/article/page?pageNum='+ pageNum + "&pageSize="+ PageSize,'GET',null)
  },
  addArticle(params){
    return request("/article","POST",params)
  },
  // add自测答案
  addAnswer(params){
    return request('/answer','POST',params)
  },
  findAnswer(params){
    return request('/answer/find?userid='+params,"GET",null)
  },
  // 自测结果
  getAnswer(params){
    return request('/answer/'+params,'GET',null)
  },
  // 饮食列表
  getYs(){
    return request('/yslist/list','POST',null)
  },
}