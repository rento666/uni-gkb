<template>
  <view>
    <!-- 标题栏 -->
    <uni-nav-bar :border="false" fixed status-bar left-icon="left" @clickLeft="back" backgroundColor="#23EBB9" title="运动" />
    <!-- 运动时长 -->
    <uni-section title="运动时长" type="line">
      <view class="grid">
        <view class="grid-item" v-for="(item,index) in ydsc" :key="index" @click="time(item.id)">
          <text>{{item.title}}</text>
          <view class="time">
            <text>{{item.time}}</text>
          </view>
        </view>
      </view>
    </uni-section>
    <!-- 天气 -->
    <uni-section title="今日天气" type="line">
      <rt-weather></rt-weather>
    </uni-section>
    <!-- 推荐运动 -->
    <uni-section title="推荐运动" type="line">
      <uni-group title="推荐户外运动" mode="card">
        <uni-grid :column="3" :show-border="false" :square="false">
          <uni-grid-item v-for="(item ,index) in hwyd" :index="index" :key="index">
            <view class="grid-item-box">
              <image class="img" :src="item.url" mode="aspectFill" />
              <text class="text">{{item.text}}</text>
            </view>
          </uni-grid-item>
        </uni-grid>
      </uni-group>
      <uni-group title="推荐户内运动" mode="card">
        <!-- <uni-grid :column="3" :show-border="false" :square="false" @change="change"> -->
        <uni-grid :column="3" :show-border="false" :square="false">
          <uni-grid-item v-for="(item ,index) in hnyd" :index="index" :key="index">
            <view class="grid-item-box">
              <image class="img" :src="item.url" mode="aspectFill" />
              <text class="text">{{item.text}}</text>
            </view>
          </uni-grid-item>
        </uni-grid>
      </uni-group>
    </uni-section>
    <view style="height: 50rpx;"></view>
  </view>
</template>

<script>
  import * as jia_Data from '@/common/jia_data.js'
  export default {
    data() {
      return {
        ydsc: [],
        hwyd: [],
        hnyd: []
      };
    },
    onLoad() {
      this.jia()
    },
    methods:{
      // 导航栏返回事件
      back() {
        uni.navigateBack()
      },
      jia(){
        var that = this
        that.ydsc = jia_Data.ydsc
        let d = JSON.parse(JSON.stringify(jia_Data.yd_list))
        d.forEach(item=>{
          if(item.type == '1'){
            that.hwyd.push(item)
          }else{
            that.hnyd.push(item)
          }
        })
      },
      time(id){
        console.log(id);
      }
    }
  }
</script>

<style lang="scss">
  body {
    background: #ededed;
  }
  .grid {
    display: grid;
    background: #ffffff;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: 100px;
    border: 1px solid #EBEEF5;
    border-radius: 6px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin: 20rpx;
    background: url(https://img.zcool.cn/community/01c8f15aeac135a801207fa16836ae.jpg@1280w_1l_2o_100sh.jpg);
  }
  .grid-item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    // border: 1px solid #EBEEF5;
    
    .time {
      margin-top: 10rpx;
      padding: 20rpx 60rpx;
      text {
        font-size: 50rpx;
      }
      // border: 1px solid #EBEEF5;
    }
  }
  .grid-item-box {
  		flex: 1;
  		display: flex;
  		flex-direction: column;
  		align-items: center;
  		justify-content: center;
  	}
  .img {
    height: 140rpx;
    width: 200rpx;
    image {
      height: 100%;
      width: 100%;
    }
  }
  .text {
    font-size: 30rpx;
    margin-top: 5px;
  }
</style>
