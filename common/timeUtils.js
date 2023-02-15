function timer(start_time) {
  // 当前时间的时间戳
  var current_time = Date.now()
  // 文章发表时间的时间戳
  var stime = Date.parse(new Date((start_time)))
  // 当前时间时间戳 - 文章发表时间时间戳 = 差值（时间戳）
  var usedTime = current_time - stime
  // 计算相差的年数
  var years = Math.floor(usedTime / (12 * 30 * 24 * 3600 * 1000));
  // 计算相差的月数
  var months = Math.floor(usedTime / (30 * 24 * 3600 * 1000));
  // 计算相差的天数  
  var days = Math.floor(usedTime / (24 * 3600 * 1000));
  // 计算相差的小时数
  var hours = Math.floor(usedTime / (3600 * 1000));
  // 计算相差分钟数
  var minutes = Math.floor(usedTime / (60 * 1000));
  
  if(years > 0) {
    var time = years + "年前";
    return time
  }
   if(months > 0) {
    var time = months + "月前";
    return time
  }
  if(days > 0){
    var time = days + "天前";
    return time
  }
  if(hours > 0){
    var time = hours + "小时前";
    return time
  }
  if(minutes > 0){
    var time = minutes + "分钟前";
    return time
  }
  return "刚刚"
}
export default timer;