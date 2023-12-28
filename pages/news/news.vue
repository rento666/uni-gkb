<template>
  <view>
    <!-- 标题栏 -->
    <uni-nav-bar fixed status-bar backgroundColor="#23EBB9" title="资讯" />
    <view style="padding: 10px 0;" v-for="item in articles" :key="item.id">
      <view class="article-card">
        <navigator class="navigator" hover-class="navigator-hover" :url="'/subpkg/articles_detail/articles_detail?id=' + item.id">
          <view class="img">
            <image :src="item.cover" mode="aspectFill"></image>
          </view>
          <view class="title-time">
            <text class="title">{{item.title}}</text>
            <text>{{item.outline}}</text>
            <view class="subtitle">
              <text style="margin-right: 10px;">{{item.user}}</text>
              <text>{{item.time}}</text>
            </view>
          </view>
        </navigator>
      </view>
      <view class="addBtn" @click="toAddArticle()">
        <uni-icons type="plus" size="40"></uni-icons>
      </view>
    </view>
    <view v-if="articles.length == 0">
      <o-empty />
      <view class="addBtn" @click="toAddArticle()">
        <uni-icons type="plus" size="40"></uni-icons>
      </view>
    </view>
  </view>
</template>

<script>
  import api from '@/common/api/api.js'
  import timer from '../../common/timeUtils.js'
  import {getArticle,setArticle,removeArticle} from '@/common/utils/auth.js'
  export default {
    data() {
      return {
        isLoading: false,
        articles: [],
        time: '10小时前',
        cover: 'https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
        iStatusBarHeight: 0,
        customHeight: 0,
        navigationBarHeight: 0,
        navHeight: 0,
        pageNum: 1,
        pageSize: 10,
      };
    },
    onLoad() {
      if(!getArticle()){
        this.pageNum = 1
        this.pageSize = 10
        this.getArticle()
      }else{
        this.articles = getArticle()
      }
    },
    // 触底事件
    onReachBottom() {
      // 页码 + 1，重新获取列表数据 
    },
    // 下拉刷新事件
    onPullDownRefresh() {
      console.log("下拉begin...")
      if(this.isLoading){
        return;
      }
      console.log("下拉ing...")
      removeArticle()
      this.getArticle()
      setTimeout(function(){
        if(getArticle()){
          uni.$showMsg('刷新成功')
          uni.stopPullDownRefresh()
        }else{
          uni.$showMsg('获取文章失败')
          uni.stopPullDownRefresh()
        }
      },1000)
      console.log("下拉end...")
    },
    methods: {
      getArticle(){
        var that = this
        that.isLoading = true
        api.getArticle(this.pageNum,this.pageSize).then(res=>{
          let data = res.records
          if(data.length>0){
            data.forEach(item => {
              item.time = timer(item.time)
            })
            this.articles = data
            setArticle(data)
          }
        }).finally(res=>{
          that.isLoading = false
        })
      },
    toAddArticle(){
      uni.navigateTo({url: '/subpkg/add_article/add_article'})
    }
    }
  }
</script>

<style lang="scss">
  .article-card {
    background: #fff;
    margin: 0;
    margin: 10px 15px;
    box-shadow:0rpx 2rpx 5rpx 5rpx #c8c3c3;
    border-radius: 8px;
    overflow: hidden;
  }
  .navigator-hover{
    opacity: 0.9;
    background: #ededed;
  }
  .img {
    height: 250rpx;
    width: 100%;
    image {
      height: 100%;
      width: 100%;
    }
  }
  .title-time{
    padding: 10px;
  }
  .title{
    font-size: 36rpx;
    font-weight: 700;
    /* 定义为自适应布局   */
      display: -webkit-box;       
      /* 超出部分隐藏 */
      overflow: hidden;
      /* 竖直方向的超出隐藏 */
      -webkit-box-orient: vertical;  
      /* 限制最多1行 */
      -webkit-line-clamp: 1;
  }
  .subtitle{
    margin-top: 10px;
    font-size: 24rpx;
    font-weight: 300;
    color: #999;
  }
  .addBtn {
    z-index: 999;
    position: fixed;
    bottom: 50rpx;
    right: 30rpx;
  }
</style>
