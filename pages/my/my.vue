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
			<!-- <image src='/static/my_img/wave.gif' mode='scaleToFill' class='gif-wave'></image> -->
		</view>
    <view :style="{'display': token ? 'block':'none'}">
      <uni-list v-for="(item,i) in my_btnList" :key="i">
        <uni-list-item :show-extra-icon="true" showArrow :extra-icon="item.icon" :title="item.title" clickable :to="item.url" @click="onClick" />
      </uni-list>
    </view>
    <fui-footer isFixed text="Copyright © 2023 TwoZiBro"></fui-footer>
	</view>
</template>

<script>
  // import { mapState } from 'vuex'
  import * as j_data from '../../common/jia_data.js'
  import api from '@/common/api/api.js'
import { getToken,getUserInfo,setCurrentUserInfo } from '../../common/utils/auth.js';
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
    onShow() {
      this.getToken()
    },
    methods: {
      //获取当前日期函数、年月日
      getNowFormatDate() {
        let date = new Date(),
        year = date.getFullYear(), //获取完整的年份(4位)
        month = date.getMonth() + 1, //获取当前月份(0-11,0代表1月)
        strDate = date.getDate() // 获取当前日(1-31)
        if (month < 10) month = `0${month}` // 如果月份是个位数，在前面补0
        if (strDate < 10) strDate = `0${strDate}` // 如果日是个位数，在前面补0
        return `${year}-${month}-${strDate}`
      },
      // 登录成功后，刷新页面
      islogin(e){
        var that = this;
        try {
          if(e){
            // 初次登录，记在往期数据中
            if(e.remark == '初次登录'){
              let form = {}
              let user =  getUserInfo()
              form.userid = user.userid
              form.time = that.getNowFormatDate()
              form.title = '您第一次登录注册骨康宝'
              form.tips = '初次认识'
              form.remark = user.userid + '初次登录'
              api.setWqsj(form).then(res=>{
                console.log('设置日志(往期数据)：',res);
              })
            }
            let currentUser = {}
            currentUser.iswho = 9999
            setCurrentUserInfo(currentUser)
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
