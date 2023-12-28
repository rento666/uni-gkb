// 全局请求封装
import { getToken } from '@/common/utils/auth.js'
export default (url, method, params) => {
  // http://localhost:80/wxapi
  // const baseUrl = 'http://localhost:9999'
  const baseUrl = 'http://101.43.138.115:9999'
  const token = getToken()
  const header = {
    // 'Authorization': 'Bearer ' + token,
    "Accept": "application/json",
    "Content-Type": "application/json; charset=UTF-8"
  }
	uni.showLoading({ title: '加载中' })
	if(!token && url !='/user/login'){
		// 执行没有登录的逻辑
     uni.$showMsg()
		return
	}
	return new Promise((resolve, reject) => {
		wx.request({
			url: baseUrl + url,
			method: method,
			header: header, // 设置token，请根据实际情况判断是否要设置，若依项目默认设置
			data: { ...params },
			success(res) {
                console.log('响应拦截器succeess接口返回:', res)
                if (res.data.code === 401) {
                	// 如果后端返回401无权限，则本地同步删除缓存(token等信息)
                    uni.clearStorageSync()
                    resolve(res.data)
                } else {
                    resolve(res.data)
                }
			},
			fail(err) {
				reject(err)
			},
			complete() {
				uni.hideLoading()
			}
		})
	})
}

