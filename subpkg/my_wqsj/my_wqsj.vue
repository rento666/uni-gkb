<template>
  <view>
    <!-- 标题栏 -->
    <uni-nav-bar fixed status-bar left-icon="left" @clickLeft="back" backgroundColor="#23EBB9" title="往期数据" />
    <timeline v-for="(item,i) in wqsjList" :key="i">
      <timelineItem :leftTime='item.time'>
        <view class="tripItem" @click="click(item.url)">
          <view class="title">{{item.title}}</view>
          <view class="tips">{{item.tips}}</view>
        </view>
      </timelineItem>
    </timeline>
  </view>
</template>

<script>
  import timeline from '../../components/chenbin-timeline/timeLine.vue'
  import timelineItem from '../../components/chenbin-timeline/timelineItem.vue'
  import api from '@/common/api/api.js'
  import {getUserInfo} from '@/common/utils/auth.js'
  export default {
    components:{
      timeline,
      timelineItem
    },
    data() {
      return {
        wqsjList: []
      };
    },
    onLoad() {
      this.getWqsj()
    },
    methods: {
      back() {
        uni.navigateBack({
          delta: 1
        })
      },
      click(url) {
        if(null == url){
          uni.$showMsg('您好啊')
          return
        }
        console.log(url);
        uni.navigateTo({url: '/subpkg/' + url})
      },
      getWqsj(){
        var that = this
        var user = getUserInfo()
        let userid =  user.userid
        api.getWqsj(userid).then(res=>{
          let arr = res.data
          that.wqsjList = arr
        })
      }
    }
  }
</script>

<style lang="scss">
  .tripItem {
    height:140rpx;
    padding: 20rpx 30rpx;
    box-sizing: border-box;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 20px 0px rgba(0,0,0,0.08);
    border-radius:10px;
    margin-bottom: 30rpx;
    .title {
        font-size:28rpx;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:500;
        color:rgba(51,51,51,1);
    }
    .tips {
        font-size:22rpx;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(153,153,153,1);
        margin-top: 20rpx;

    }
  }
</style>
