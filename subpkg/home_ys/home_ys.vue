<template>
  <view>
    <!-- 标题栏 -->
    <uni-nav-bar :border="false" fixed status-bar left-icon="left" @clickLeft="back" backgroundColor="#23EBB9" title="饮食" />
    <view class="container">
      <view class="wrapper">
        <text class="week">{{week}}</text>
        <text class="day">{{day}}</text>
        <text class="year">{{year}}</text>
      </view>
      <view class="eat-wrapper" @click="trans">
        <view class="item" :class="{'ac':active == 1}" @click="active = 1">早餐</view>
        <view class="item" :class="{'ac':active == 2}" @click="active = 2">午餐</view>
        <view class="item" :class="{'ac':active == 3}" @click="active = 3">晚餐</view>
        <view class="bg" :style="{'--leftbg':leftBg}"></view>
      </view>
    </view>
    <div class="shape" :style="{'--left':leftVar}">
      <o-empty height="100rpx" bg="" />
    </div>
    <view class="progress">
      <mushan-pie :number_value="0.5" :PieStyle="PieStyle" :PieText="'每日钙摄入量'" :PieText2="active*100+'mg'"></mushan-pie>
      <mushan-pie :number_value="1" :PieStyle="PieStyle" :PieText="'推荐摄入量'" :PieText2="'800mg'"></mushan-pie>
    </view>
    <view class="scroll-view-container">
      <scroll-view class="left-scroll-view" :scroll-y="true" style="height: 480rpx;">
        <block v-for="(item,i) in ys_list" :key="i">
          <view :class="['left-scroll-view-item',i === ys_ac ? 'active': '']" @click="change(i)">{{item.name}}</view>
        </block>
      </scroll-view>
      <scroll-view scroll-y="true" style="height: 40vh;" :scroll-top="ys_scrollTop">
        <view class="ys-lv2" v-for="(item2,i2) in ys_list2" :key="i2">
          <view class="ys-lv2-title">{{item2.name}}</view>
          <view class="ys-lv3-list">
            <view class="ys-lv3-item" v-for="(item3,i3) in item2.children" :key="i3">
              <image :src="item3.icon != null ? item3.icon : 'https://cdn.colorhub.me/J1ljmghVz-k/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vMzYvODUvNGI5NzFiY2MwYmU2Njg3ZTUzMmJhNjNhYzI5M2IxMzcxMDdiMzY4NS5qcGVn.webp'" mode=""></image>
              <text>{{item3.name}}</text>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
    <view style="height: 20px;"></view>
  </view>
</template>

<script>
  import * as jia_data from '@/common/jia_data.js'
  import api from '@/common/api/api.js'
  export default {
    data() {
      return {
        ys_list: [],
        ys_list2: [],
        ys_ac: 0,
        ys_scrollTop: 0,
        week: '',
        day: '',
        year: '',
        active: 1,
        leftBg: '15rpx',
        leftVar: '35%',
        PieStyle:{
          circular: '240rpx',    // 当前圆的大小
          animite : true,        // 是否要有动画效果
          ring :0.85,             // 中间是空心的宽度，0是不显示，0.5是半圆大小
          color : '#7abea0',       // 自定义饼图的颜色,
          numberShow :true,       // 是否要显示圆中间的文本
          numberSize:'28rpx',      // 中间文字大小默认是12px
          numberColor:'#00aa00',   // 中间文字字体颜色
          rotate : 0,             // 是否需要旋转图形
        },
      };
    },
    onLoad() {
      this.setTime()
       
      this.getYsList()
    },
    methods:{
      // 导航栏返回事件
      back() {
        uni.navigateBack()
      },
      // 设置时间（星期、月日、年
      setTime(){
        var myDate = new Date();
        this.year = myDate.getFullYear().toString()
        this.day = (myDate.getMonth() + 1).toString() + '.' + myDate.getDate().toString();
        var a = new Array("Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat");  
        var week = myDate.getDay();  
        this.week = a[week].toString();  
      },
      // 切换早餐午餐晚餐
      trans(){
        if(this.active == 1){this.leftVar = '35%'; this.leftBg = '15rpx'}
        if(this.active == 2){this.leftVar = '60%'; this.leftBg = '200rpx'}
        if(this.active == 3){this.leftVar = '86%'; this.leftBg = '375rpx'}
      },
      change(i){
        this.ys_ac = i
        this.ys_list2 = this.ys_list[i].children
        this.ys_scrollTop = 1 - this.ys_scrollTop
      },
      getYsList(){
        this.ys_list = JSON.parse(JSON.stringify(jia_data.ys_list))
        this.ys_list2 = JSON.parse(JSON.stringify(jia_data.ys_list[0].children))
      }
    }
  }
</script>

<style lang="scss">
  $b-r-10 : 10px;
  $b-r-20 : 20px;
  .container {
    margin: 15rpx 30rpx;
    display: flex;
    flex-direction: row;
  }
  .wrapper {
    height: 150rpx;
    width: 150rpx;
    border: 1px solid #f2f5f5;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-around;
    background: #fff;
    z-index: 0;
  }
  .week, .year {
    font-size: 20rpx;
    font-weight: 300;
  }
  .day {
    font-size: 36rpx;
    font-weight: 600;
  }
.eat-wrapper{
	width: 540rpx;
	height: 60rpx;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
  left: 10rpx;
  border: 1px solid #26A69A;
  border-radius: $b-r-20;
  padding: 0 10rpx;
  background: #f2f5f5;
	.item{
		text-align: center;
		width: 180rpx;
		height: 60rpx;
		line-height: 60rpx;
		position: relative;

		z-index: 3;
	}
	.ac{
		color: #fff;
	}
	.bg{
		position: absolute;
		left: var(--leftbg);
		top: 5rpx;
		z-index: 1;
		width: 170rpx;
		height: 50rpx;
		background: #7abea0;
    border-radius: $b-r-10;
		transition: all .5s;
	}
}
.shape {
  width: 92%;
  height: 100rpx;
  border-radius: 8px;
  background: #faf8f4;
  border: 1px solid #e6d9b3;
  position: relative;
  margin: 2%;
  padding: 2%;
}
.shape::before {
  content:'';
  position: absolute;
  left: var(--left);
  top: 0;
  overflow: hidden;
  transform: translate(-50%,-50%) rotate(135deg);
  width: 30px;
  height: 30px;
  background: #faf8f4;
  border: 1px solid #e6d9b3;
  border-style: none none solid solid
}
.progress{
  display: flex;
  flex-direction: row;
  margin: auto 10%;
  justify-content: space-between;
}
.scroll-view-container {
  display: flex;
  margin-top: 20px;
  .left-scroll-view {
    width: 240rpx;
    .left-scroll-view-item {
      background-color: #F7F7F7F7;
      line-height: 120rpx;
      text-align: center;
      font-size: 30rpx;
      
      &.active {
        background: #fff;
        position: relative;
        &::before {
          content: '';
          display: block;
          width: 6rpx;
          height: 60rpx;
          background-color: #23EBB9;
          position: absolute;
          top: 0;
          left: 0;
          transform: translateY(50%);
        }
      }
    }
  }
}
.ys-lv2-title {
  font-size: 26rpx;
  font-weight: bold;
  padding: 15px 0;
  text-align: center;
}
.ys-lv3-list{
  display: flex;
  flex-wrap: wrap;  // 一行放不下就换行
  .ys-lv3-item {
    width: 33.33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10rpx;
    image {
      width: 120rpx;
      height: 120rpx;
    }
    text {
      font-size: 26rpx;
    }
  }
}
</style>
