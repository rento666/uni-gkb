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
  export default {
    data() {
      return {
        
      };
    },
    methods: {
      // 导航栏返回事件
      back() {
        uni.navigateBack({
          delta: 1
        })
      },
    }
  }
</script>

<style lang="scss">

</style>
