<template>
  <view>
    <!-- 标题栏 -->
    <uni-nav-bar fixed status-bar left-icon="left" @clickLeft="back" backgroundColor="#23EBB9" title="基本资料" />
    <!-- 资料信息 -->
    <rt-userinfo></rt-userinfo>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        
      };
    },
    methods: {
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
