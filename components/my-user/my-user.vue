<template>
  <view class="border">
    <!-- 头像和昵称 -->
    <view class="avatar-name">
      <view class="avatar-border">
        <image :src="avatar" mode="aspectFill"></image>
      </view>
      <view class="name">{{nickName}}</view>
    </view>
    
  </view>
</template>

<script>
  export default {
    name:"my-user",
    data() {
      return {
      };
    },
    props:{
      avatar: {
        type: String,
        default: '/static/my_img/defaultAvatarUrl.png'
      },
      nickName:{
        type: String,
        default: '微信用户'
      }
    },
    onLoad() {
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  @keyframes rotate {
  	100% {
  		transform: rotate(1turn);
  	}
  }
  @keyframes t_rotate {
    100% {
    	transform: rotate(-1turn);
    }
  }
  .border {
    .avatar-name {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: relative;
      // top: 5%;
      .avatar-border {
        margin-bottom: 30rpx;
        height: 250rpx;
        width: 250rpx;
        border-radius: 50%;
        overflow: hidden;
        border: 3px solid #23EBB9;
        border-top-color: #e59b9c;
        border-bottom-color: #d87dde;
        animation: rotate 4s linear infinite;
        image {
          height: 250rpx;
          width: 250rpx;
          animation: t_rotate 4s linear infinite;
        }
      }
      .name {
        font-size: 35rpx;
        font-weight: 700;
        color: #1a2a3a;
      }
    }
    
  }
</style>