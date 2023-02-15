// 该文件用来存储localStorage 本地缓存的方法
/**
 * 操作用户token
 */
export function setToken(value){
  uni.setStorageSync('token',value);
}
/**
 * 获取缓存的Openid
 */
export function getToken() {
  let token = uni.getStorageSync('token');
  return token;
}
/**
 * 移除用户token
 */
export function removeToken() {
  uni.removeStorageSync('token');
}
/**
 * 操作用户信息
 * 缓存微信用户信息
 */
export function setUserInfo(value) {
  try {
    let newValue = JSON.stringify(value);
    uni.setStorageSync('userinfo', newValue);
  } catch (e) {
    return;
  }
}
/**
 * 获取缓存的微信用户信息
 */
export function getUserInfo() {
  let userinfo = uni.getStorageSync('userinfo');
  if (userinfo) {
    return JSON.parse(userinfo);
  }
}
/**
 * 移除缓存的用户信息
 */
export function removeUserInfo(){
	uni.removeStorageSync('userinfo');
}