<template>
  <view>
    <view class="wrapper">
      <view class="header">
        <text class="left city">{{weather.province}}省{{weather.city}}</text>
        <view :class="isReload ? 'reload' : ''" @click="reload">
          <uni-icons type="reload" size="30" color="#ffffff"></uni-icons>
        </view>
      </view>
      <uni-dateformat :date="weather.now" format="yyyy-MM-dd hh:mm 更新"></uni-dateformat>
      <view class="temperature">
        <view>
          <text class="weather">{{weather.weather}}</text>
          <text class="temp">{{weather.temperature}}</text>
        </view>
        <text class="ssd">℃</text>
      </view>
    </view>
  </view>
</template>

<script>
  import amap from '@/common/amap-wx.130.js'
  export default {
    name:"rt-weather",
    data() {
      return {
        isReload: false,
        amapPlugin: null,  
        key: '282b8ba57e565f8c5df25417cfb8f2e1',
        weather: {'province': 'XX','city':'xx','weather': '晴','temperature':'0','now': Date.now()},
      };
    },
    mounted() {
      this.amapPlugin = new amap.AMapWX({
          key: this.key
      });
      this.getWeather()
    },
    methods:{
      getWeather(){
        uni.showLoading({title: '获取信息中'})
        this.amapPlugin.getWeather({
          success: (data) =>{
            console.log(data)
            let form = {}
            form.province = data.liveData.province
            form.city = data.city.data
            form.weather = data.weather.data
            form.temperature = data.temperature.data
            form.now = Date.now()
            this.weather = form
            uni.hideLoading()
            this.isReload = false
          },
          fail(res){
            console.log(res);
            uni.$showMsg('获取天气失败,不要频繁刷新哦')
            uni.hideLoading()
            this.isReload = false
          }
        })
      },
      reload(){
        this.isReload = true
        this.getWeather()
      }
    }
  }
</script>

<style lang="scss">
  .wrapper {
    margin: 20rpx;
    padding: 20rpx;
    border: 1px solid #EBEEF5;
    border-radius: 6px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    background-image: linear-gradient(-225deg, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100%);
  }
  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10rpx;
  }
  .left {
    display: flex;
    flex-direction: column;
  }
  .city{
    font-size: 40rpx;
    font-weight: 700;
    color: #ffffff;
  }
  uni-dateformat{
    font-size: 28rpx;
    font-weight: 400;
    color: #ffffff;
  }
  .reload {
    -webkit-animation: iconRotate 1s linear infinite;
    animation: iconRotate 1s linear infinite;
  }
  @-webkit-keyframes iconRotate {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes iconRotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .temperature {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .weather{
    vertical-align: middle;
    font-size: 30px;
    color: #ffffff;
    margin-right: 60rpx;
  }
  .temp {
    vertical-align: middle;
    font-size: 88px;
    font-weight: 700;
    color: #ffffff;
  }
  .ssd {
    font-size: 30px;
    color: #ffffff;
  }
</style>