<template>
  <view>
    <!-- 标题栏 -->
    <uni-nav-bar :border="false" fixed status-bar left-icon="left" @clickLeft="back" backgroundColor="#23EBB9" title="睡眠" />
    <view v-for="(item,index) in sm_list" :key="index">
      <view @click="toSolution(item.answer,item.id)" :hover-class="item.title == '指导方案' ? 'none': 'hover'">
       <uni-card :title="item.title" :extra="item.extra">
         <text>{{item.description}}</text>
       </uni-card> 
      </view>
    </view>
  </view>
</template>

<script>
  import * as jia_data from '@/common/jia_data.js'
  export default {
    data() {
      return {
        sm_list: jia_data.sm_list,
      };
    },
    methods:{
      // 导航栏返回事件
      back() {
        uni.navigateBack()
      },
      // 查看解决方案
      toSolution(answer,id){
        
        if(!answer){ return }
        uni.navigateTo({ url: '/subpkg/sm_solution/sm_solution?id=' + id })
      }
    }
  }
</script>

<style lang="scss">
  .hover {
    opacity: 0.9;
    background: #ededed;
  }
</style>
