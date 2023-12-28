<template>
  <view>
    <!-- 标题栏 -->
    <uni-nav-bar :border="false" fixed status-bar left-icon="left" @clickLeft="back" backgroundColor="#23EBB9" title="健康自测" />
    <view class="wrapper">
      <rt-exam></rt-exam>
    </view>
  </view>
</template>

<script>
  import {getToken,getUserInfo} from '@/common/utils/auth.js'
  export default {
    data() {
      return {
      };
    },
    onLoad() {
      // 如果没有token，或者没有选择性别，则弹窗提示
      if(!getToken()){
        this.showTips()
      }
      var user = getUserInfo()
      if(!user){
        this.showTips()
      }else{
        if(!user.sex){
          this.showTips()
        }
      }
    },
    methods: {
      // 导航栏返回事件
      back() {
        uni.navigateBack({
          delta: 1
        })
      },
      // 展示提示消息
      showTips(){
        uni.showModal({
          title: '提示',
          content: '登录并选择性别后再来自测吧',
          showCancel: false,
          complete() {
            uni.switchTab({
              url: '/pages/my/my'
            })
          }
        })
      }
    }
  }
</script>

<style lang="scss">

</style>
