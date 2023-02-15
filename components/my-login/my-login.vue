<template>
  <view class="border">
    <view class="tips">登录授权后，可体验更多功能</view>
    <button class="btn" type="primary" @click="login">微信授权</button>
  </view>
</template>

<script>
  import api from '@/common/api/api.js'
  import { getConfig,setUserInfo,getUserInfo,setToken,getToken,removeUserInfo,removeToken} from '@/common/utils/auth.js';
  export default {
    name:"my-login",
    methods: {
      login(){
        var that = this
        uni.getUserProfile({
          desc: '获取您的头像和昵称以授权小程序',
          lang:'zh_CN',
          success(UserProfileRes) {
            uni.showLoading({ title: '登录中...',mask: true })
            uni.login({
              provider:'weixin',
              success:function(loginRes){
                let form = {};
                form.code = loginRes.code; //用户code  注:用户的code每次登录都是随机的，所以不需要进行存储
                form.avatarUrl = UserProfileRes.userInfo.avatarUrl; //用户头像
                form.nickName = UserProfileRes.userInfo.nickName; //用户微信名
                form.sex = UserProfileRes.userInfo.gender;//性别
                api.login(form).then(res=>{
                  console.log('wxlogin Success:',res);
                  if(res.data.state){
                    uni.hideLoading()
                    that.userInfo = res.data
                    setToken(res.data.token)
                    setUserInfo(res.data)
                    that.$emit('islogin',res.data) // 传给父组件
                  }else{
                    uni.$showMsg()
                  }
                }).catch(err=>{
                  console.log('wxlogin Fail:',err);
                })
              },
              fail(err) {
                console.log(err);
              }
            })
          },
          fail(err) {
            console.log(err);
          }
        })
      },
    }
  }
</script>

<style lang="scss">
  .border {
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    top: 20%;

    .tips {
      margin-bottom: 40rpx;
      font-size: 14px;
      color: #6a6a6a;
    }
    .btn {
      font-size: 14px;
      border-radius: 40rpx;
    }
  }

</style>