<template>
  <view>
    <view class="wrapper">
      <text class="type">{{type}}</text>
      <view class="container">
        <view class="left">
          <image :src="avatar" mode=""></image>
          <text>{{nickname}}</text>
        </view>
        <view class="icon" @click="onClick('修改资料')" hover-class="">
          <uni-icons type="compose" size="22" color="#969696"></uni-icons>
        </view>
        <view class="btn" hover-class="hover" @click="onClick('切换')" :class="{'ising' : ising}">{{ising?'当前使用':'点击切换'}}</view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name:"family_card",
    data() {
      return {
      };
    },
    /**
     * @property {String} type 本人/儿子/父亲……
     * @property {String} avatar 为空则默认头像
     * @property {String} nickname 昵称
     * @property {Boolean} ising 是当前使用的用户吗 默认为true
     */
    props:{
      type: {
        type:String,
        default: '亲属朋友'
      },
      avatar: {
        type: String,
        default: '../../static/my_img/defaultAvatarUrl.png'
      },
      nickname:{
        type:String,
        default: '微信用户'
      },
      ising:{
        type: Boolean,
        default: false
      }
    },
    methods:{
      onClick(type){
        if(type == '修改资料'){this.$emit('editf',type)}
        if(type == '切换'){this.$emit('click',type)}
      }
    }
  }
</script>

<style lang="scss">
  .wrapper{
    .type{
      background: #e4f2ec;
      position: relative;
      top: 34rpx;
      left: 32rpx;
      padding: 8rpx;
      border-radius: 16rpx 5rpx;
      font-size: 20rpx;
    }
  }
  .container{
    // height: 50rpx;
    // width: 80%;
    background: #fff;
    border: 1px solid #e1e1e1;
    border-radius: 16rpx;
    box-shadow: 0 0 2rpx #d6d6d6;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 30rpx;
    padding: 30rpx;
    .left {
      margin-left: 3%;
      height: 60rpx;
      width: 350rpx;
      display: flex;
      flex-direction: row;
      image{
        height: 60rpx;
        width: 60rpx;
        margin-right: 20rpx;
        border-radius: 50%;
      }
      text{
        line-height: 60rpx;
        text-align: center;
      }
    }
    .btn{
      border: 1px solid #e1e1e1;
      border-radius: 60% / 100%;
      box-shadow: 0 0 2rpx #f2f5f5;
      padding: 20rpx;
      background-color: #f2f5f5;
      font-size: 24rpx;
    }
    .ising{
      background-color: #23ebb9;
    }
    .hover{
      background-color: #ced0d0;
    }
  }
</style>