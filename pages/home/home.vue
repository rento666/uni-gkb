<template>
  <view>
    <!-- 标题栏 -->
    <uni-nav-bar fixed status-bar backgroundColor="#23EBB9" title="首页" />
    <!-- 通告栏 -->
    <uni-notice-bar scrollable showClose showIcon :text="notice"></uni-notice-bar>
     <!-- 轮播图 -->
     <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
       <swiper-item v-for="(item, i) in swiperList" :key="i">
         <!-- <navigator class="swiper-item" :url="'/subpkg/goods_detail/goods_detail?goods_id=' + item.goods_id"> -->
         <view class="swiper-item">
            <image :src="item.image_src"></image>
         </view>
         <!-- </navigator> -->
       </swiper-item>
     </swiper>
     <!-- 功能卡片 -->
     <uni-section class="mb-10" type="line" title="健康专区" titleFontSize="34rpx"></uni-section>
     <view class="btn-cards-border">
       <view class="btn-cards-item" v-for="(item, i) in btnList" :key="i">
         <btn-card :header="item.title" :footer="item.footer" :img="item.img" :menu="item.menu"></btn-card>
       </view>
     </view>
     
     
  </view>
</template>

<script>
  import * as j_data from '../../common/jia_data.js'
  export default {
    data() {
      return {
        // 通告栏
        notice: '',
        // 轮播图
        swiperList: [],
        // 功能按钮
        btnList: []
      };
    },
    onLoad() {
      this.getNotice(),
      this.getSwiperList(),
      this.getBtnList()
    },
    methods: {
      // 获取通告栏数据
      getNotice(){
        this.notice = j_data.home_notice
      },
      // 获取轮播图数据
      getSwiperList() {
        this.swiperList = j_data.home_swiperList
      },
      // 获取功能按钮
      getBtnList() {
        this.btnList = j_data.home_btnList
      }
    }
  }
</script>

<style lang="scss">
  * {
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
  }
  // 轮播图
  swiper {
    height: 350rpx;
    .swiper-item,image {
      width: 100%;
      height: 100%;
    }
  }
  // 健康专区
  .btn-cards-border {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    background: #f7f7f7;
    margin: 5% 0 5% 7%;
    .btn-cards-item {
      margin-bottom: 5%;
      width: 50%;
    }
  }
</style>
