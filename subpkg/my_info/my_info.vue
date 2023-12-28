<template>
  <view>
    <!-- 标题栏 -->
    <uni-nav-bar fixed status-bar left-icon="left" @clickLeft="back" backgroundColor="#23EBB9" title="基本资料" />
    <!-- 资料信息 -->
    <rt-userinfo :isbr="isbr" :current="current"></rt-userinfo>
  </view>
</template>

<script>
  import {getFamilyInfo} from '@/common/utils/auth.js'
  export default {
    data() {
      return {
        isbr: true,
        current: 9999
      };
    },
    onLoad(res) {
      let current = res.current
      if(current){this.isbr=false;this.current=current}
      let type = res.type
      if(type){
        let family = getFamilyInfo() == null ? -1 : getFamilyInfo().length
        if(type == 'add'){this.isbr=false;this.current=family}
      }
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
