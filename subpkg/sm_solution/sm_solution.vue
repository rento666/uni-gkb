<template>
  <view>
    <!-- 标题栏 -->
    <uni-nav-bar :border="false" fixed status-bar left-icon="left" @clickLeft="back" backgroundColor="#23EBB9" title="解决方案" />
    <!-- title、description、answer -->
    <view class="wrapper">
      <view class="title">
        <text>{{sm.title}}</text>
      </view>
      <!-- markdown引用样式的文字 -->
      <view class="ref-border">
        <view class="left-line"></view>
        <view class="right-text">
          <text>{{sm.description}}</text>
        </view>
      </view>
      <view class="answer">
        <text>解决方案</text>
        <bctos-rich-text :nodes="sm.answer"></bctos-rich-text>
      </view>
    </view>
  </view>
</template>

<script>
  import * as jia_data from '@/common/jia_data.js'
  export default {
    data() {
      return {
        sm: {},
      };
    },
    onLoad(res) {
      var list = JSON.parse(JSON.stringify(jia_data.sm_list))
      list.forEach((item,value)=>{
        if(item.id.toString() === res.id) {
          this.sm = JSON.parse(JSON.stringify(item))
          return
        }
      })
    },
    methods:{
      // 导航栏返回事件
      back() {
        uni.navigateBack()
      },
    }
  }
</script>

<style lang="scss">
  .wrapper {
    margin: 20rpx;
    background: #fff;
    padding: 20rpx;
  }
  .title {
    font-size: 40rpx;
    font-weight: 700;
    margin: 0 20rpx 20rpx 0;
  }
  .ref-border {
    display: flex;
    flex-direction: row;
  }
  .left-line {
    width: 20rpx;
    background: #cccccc;
    margin-right: 20rpx;
  }
  .right-text {
    color: #777777;
  }
  .answer{
    text {
      font-size: 34rpx;
      font-weight: 600;
    }
    line-height: 2;
    margin: 20px 0 50rpx;
  }
</style>
