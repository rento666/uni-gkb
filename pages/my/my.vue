<template>
	<view>
    <uni-nav-bar fixed status-bar backgroundColor="#23EBB9" :border="false" @clickLeft="click_set">
      <block slot="left">
        <uni-icons type="gear" size="30"></uni-icons>
      </block>
    </uni-nav-bar>
		<view class="top" :style="'height:' + back_height + 'px'">
      <!-- <uni-icons type="gear" size="30" color="#eaeaea"></uni-icons> -->
      <my-login v-if="!token" @islogin="islogin"></my-login>
      <my-user v-else :avatar="avatar" :nickName="nickName" ></my-user>
			<image src='/static/my_img/wave.gif' mode='scaleToFill' class='gif-wave'></image>
		</view>
    <uni-list v-for="(item,i) in my_btnList" :key="i">
      <uni-list-item :show-extra-icon="true" showArrow :extra-icon="item.icon" :title="item.title" clickable :to="item.url" @click="onClick" />
    </uni-list>
    <fui-footer isFixed text="Copyright © 2023 WangRunTong"></fui-footer>
	</view>
</template>

<script>
  // import { mapState } from 'vuex'
  import * as j_data from '../../common/jia_data.js'
import { getToken,getUserInfo } from '../../common/utils/auth.js';
  export default {
    data() {
      return {
        back_height: null,
        my_btnList: [],
        token: '',
        avatar: null,
        nickName: null,
      };
    },
    // computed: {
    //   ...mapState('m_user',['token'])
    // }
    onLoad() {
      this.getHeight()
      this.getdata()
      this.getToken()
    },
    methods: {
      // 登录成功后，刷新页面
      islogin(e){
        var that = this;
        console.log(e);
        try {
          if(e){
            // 执行onload里的函数
            that.getHeight()
            that.getdata()
            that.getToken()
          }
        }catch(err){
          console.log(err);
        }
        
      },
      // 点击各个功能按钮
      onClick(e) {
        // console.log('执行click事件', e.data)
      },
      // 点击左上角设置时，进入到设置页面
      click_set(){
        uni.openSetting({
          success(res) {
            console.log(res.authSetting);
          }
        })
      },
      // 获取绿色背景的高度
      getHeight(){
        this.back_height = uni.getSystemInfoSync().windowHeight * 0.35
      },
      // 从假数据中获取数据
      getdata(){
        this.my_btnList = j_data.my_btnList
      },
      // 获取 token
      getToken(){
        var that = this
        that.token = getToken()
        console.log("token：",this.token);
        if(that.token){
          var user = getUserInfo()
          that.avatar = user.avatarUrl
          that.nickName = user.nickName
        }
      }
    }
  }
</script>

<style lang="scss">
  // 标题栏颜色
  $nar-color: #23EBB9;
	Page {
		font-size: 14px;
    background: #fff;
	}
 
	.top { 
		width: 100%;
		// height: 300rpx;
		background: $nar-color;
		padding-top: 20rpx;
		position: relative;
    .gif-wave {
    	position: absolute;
    	width: 100%;
    	bottom: 0;
    	left: 0;
    	z-index: 99;
    	mix-blend-mode: screen;
    	height: 100rpx;
    }
	}
</style>
