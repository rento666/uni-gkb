<template>
  <view>
    <!-- 标题栏 -->
    <uni-nav-bar fixed status-bar backgroundColor="#23EBB9" title="资讯" />
          <!-- <uni-dateformat class="time" :date="item.time" :threshold="[60000,3600000 * 24 * 365]" :format="'yyyy-MM-dd hh:mm'"></uni-dateformat> -->
    <!-- 文章栏 -->
    <!-- <view style="padding: 10px 0 20px;" v-for="item in articles" :key="item.id">

      <fui-card src="/static/tab_icons/my.png" imageRadius="50%" :title="item.author" color="#0055ff" :tag="item.time" :headerLine="false" showBorder @click="onClick(item.id)">
        <view class="fui-list__item">
          <image class="fui-cover" :src="cover" mode="widthFix">
          </image>
          <view class="fui-list__title">{{item.cover}}</view>
        </view>
      </fui-card>
    </view> -->
    <view style="padding: 10px 0;" v-for="item in articles" :key="item.id">
      <article-card :url="'/subpkg/articles_detail/articles_detail?id=' + item.id" 
                    :title="item.cover" :author="item.author" mode="single" 
                    :path="item.img" :publishTime="item.time"></article-card>
    </view>

  </view>
</template>

<script>
  import * as j_data from '../../common/jia_data.js'
  import timer from '../../common/timeUtils.js'
  export default {
    data() {
      return {
        articles: [],
        time: '10小时前',
        cover: 'https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
        iStatusBarHeight: 0,
        customHeight: 0,
        navigationBarHeight: 0,
        navHeight: 0,
      };
    },
    onLoad() {
      this.getArticle()
    },
    // 触底事件
    onReachBottom() {
      // 页码 + 1，重新获取列表数据 
    },
    // 下拉刷新事件
    onPullDownRefresh() {
      //   // 1. 重置关键数据
      //   this.queryObj.pagenum = 1
      //   this.total = 0
      //   this.isloading = false
      //   this.goodsList = []
      
      //   // 2. 重新发起请求
      //   this.getGoodsList(() => uni.stopPullDownRefresh())
      this.getArticle()
    },
    methods: {
      getArticle(){
        // 不直接使用 let data = j_data.news_articleCover ，是因为那样不是深拷贝，对象的地址一致，不利于操作
        let data = JSON.parse(JSON.stringify(j_data.news_articleCover))

        data.forEach(item => {
          item.time = timer(item.time)
        })
        this.articles = data
      },
    	actionsClick(text){
    		uni.showToast({
    			title:text,
    			icon:'none'
    		})
    	},
      getNarHeight(){
        //状态栏高度
        this.iStatusBarHeight = uni.getSystemInfoSync().statusBarHeight;
        //胶囊高度
        // 获取微信胶囊的位置信息 width,height,top,right,left,bottom
        this.customHeight = wx.getMenuButtonBoundingClientRect()
         // 导航栏高度(标题栏高度) = 胶囊高度 + (顶部距离 - 状态栏高度) * 2
        this.navigationBarHeight = this.customHeight.height + (this.customHeight.top - this.iStatusBarHeight) * 2
        // 总体高度 = 状态栏高度 + 导航栏高度
        this.navHeight = this.navigationBarHeight + this.iStatusBarHeight
        console.log(this.iStatusBarHeight);
        console.log(this.customHeight);
        console.log(this.navigationBarHeight);
        console.log(this.navHeight);
      }
    }
  }
</script>

<style lang="scss">
  .time {
    display: flex;
    text-align: center;
    justify-content: center;
    margin-top: 20rpx;
    font-size: 24rpx;
    font-weight: 300;
    color: #666;
  }
	.card-actions {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		height: 45px;
		border-top: 1px #eee solid;
	}
	.card-actions-item {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.card-actions-item-text {
		font-size: 12px;
		color: #666;
		margin-left: 5px;
	}
  .fui-list__item {
  		position: relative;
  	}
  	.fui-cover {
  		width: 100%;
  		height: 385rpx;
  		display: block;
  	}
  	.fui-list__title {
  		position: absolute;
  		left: 0;
  		bottom: 0;
  		color: #fff;
  		font-weight: 500;
  		padding: 24rpx 20rpx;
  		box-sizing: border-box;
  		background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.6));
  	}

</style>
