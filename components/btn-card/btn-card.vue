<template>
  <view>
    <view class="card" @click.native="gotoDetail(menu)">
      <view class="text">
        <view class="header">{{header}}</view>
        <view class="footer">{{footer}}</view>
      </view>
      <view class="img">
        <image :src=img ></image>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name:"btn-card",
    data() {
      return {
        
      }
    },
    props: {
      header: String,
      footer: String,
      img: String,
      menu:String
    },
    methods: {
      gotoDetail(menu){
        let path = "home_" + menu
        // 进入按钮功能详情页
        uni.navigateTo({
          url:'/subpkg/' + path + '/'+ path,
          fail() {
            uni.$showMsg('进入失败')
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  .card {
    background: #fff;
    height: 150rpx;
    width: 300rpx;
    border-radius: 10rpx;
    display: flex;
    align-items: center;
    flex-direction: row;
    column-gap: 30rpx;
    position: relative;
    .text {
      position: absolute;
      left: 30rpx;
      .header {
        top: 24rpx;
        font-size: 36rpx;
        font-weight: 600;
      }
      .footer {
        top: 30rpx;
        margin-top: 10rpx;
        font-size: 16rpx;
        font-weight: 300;
        color: #666;
      }
    }
    .img {
      justify-content: right;
      position: absolute;
      top: 46rpx;
      left: 200rpx;
      border-radius: 50%;
      background: #ededed;
      height: 64rpx;
      width: 64rpx;
      text-align: center;
      image {
        position: relative;
        top: 6rpx;
        height: 48rpx;
        width: 48rpx;
      }
    }
  }
</style>