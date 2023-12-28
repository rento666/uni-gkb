// 该文件用来存储localStorage 本地缓存的方法
/**
 * 操作用户token
 */
export function setToken(value){
  uni.setStorageSync('token',value);
}
/**
 * 获取缓存的userid
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
/**
 * 设置缓存的资讯文章信息
 */
export function setArticle(value){
  try {
    let newValue = JSON.stringify(value);
    uni.setStorageSync('article', newValue);
  } catch (e) {
    return;
  }
}
/**
 * 获取缓存的资讯文章信息
 */
export function getArticle(value){
  let article = uni.getStorageSync('article');
  if (article) {
    return JSON.parse(article);
  }
}
/**
 * 移除缓存的文章信息
 */
export function removeArticle(){
	uni.removeStorageSync('article');
}
/**
 * 操作家庭信息
 * 缓存家庭成员信息
 */
export function setFamilyInfo(value) {
  try {
    let newValue = JSON.stringify(value);
    uni.setStorageSync('family', newValue);
  } catch (e) {
    return;
  }
}
/**
 * 获取缓存的家庭成员信息
 */
export function getFamilyInfo() {
  let family = uni.getStorageSync('family');
  if (family) {
    return JSON.parse(family);
  }
}
/**
 * 移除缓存的家庭成员信息
 */
export function removeFamilyInfo(){
	uni.removeStorageSync('family');
}
/**
 * 操作当前用户信息
 * 缓存当前用户信息
 */
export function setCurrentUserInfo(value) {
  try {
    let newValue = JSON.stringify(value);
    uni.setStorageSync('currentUser', newValue);
  } catch (e) {
    return;
  }
}
/**
 * 获取缓存的家庭成员信息
 * 9999为默认用户
 */
export function getCurrentUserInfo() {
  let current = uni.getStorageSync('currentUser');
  if (current) {
    return JSON.parse(current);
  }
}
/**
 * 移除缓存的家庭成员信息
 */
export function removeCurrentUserInfo(){
	uni.removeStorageSync('currentUser');
}