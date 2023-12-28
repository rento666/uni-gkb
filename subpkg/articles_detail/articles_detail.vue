<template>
  <view>
    <!-- 标题栏 -->
    <uni-nav-bar fixed status-bar left-icon="left" @clickLeft="back" backgroundColor="#23EBB9" title="资讯详情" />
    <view class="wrapper">
      <view class="article">
        <!-- 文章标题头部 -->
        <view class="header">
          <text class="title">{{article.title}}</text>
          <view class="sub-title">
            <text class="author">{{article.user}}</text>
            <text class="time" preview={true}>{{article.time}}</text>
          </view>
        </view>
        <!-- 文章内容 -->
        <view class="content">
          <rich-text :nodes="article.content" ></rich-text>
        </view>
       <!-- 分享、点赞、评论 -->
        <view class="btn-border">
          <view class="btn">
            <uni-icons type="redo" size="26" color="#576b95"></uni-icons>
            <text>分享</text>
          </view>
          <view class="btn">
            <uni-icons type="heart" size="26" color="#576b95"></uni-icons>
            <text>点赞</text>
          </view>
          <view class="btn" @click="write">
            <uni-icons :type="comment ? `chatbubble` : `chatbubble-filled`" size="26" color="#576b95"></uni-icons>
            <text>评论</text>
          </view>
        </view>
      </view>
     <!-- 评论 / 输入框 -->
      <view class="comment" :style="{minHeight: comment ? `50px` : mh + `px`}">
        <view class="header">
          <text>{{ comment ? '评论' : '写评论' }}</text>
          <text v-if="!comment" class="cancel">取消</text>
        </view>
        <uni-easyinput v-if="!comment" type="textarea"
        focus autoHeight v-model="value" placeholder="写下你的想法吧~"
        @focus="focus" @blur="blur" @keyboardheightchange="changekb"
        ></uni-easyinput>
      </view>
      <lt-back-top v-if="!comment" />
    </view>
  </view>
</template>

<script>
  import {getArticle} from '@/common/utils/auth.js'
  // 导入组件        
  import LtBackTop from '@/components/lt-back-top/lt-back-top.vue'
  // 导入mixin
  import backMixins from '@/components/lt-back-top/back-mixins.js'

  export default {
    mixins: [backMixins],
    components: { LtBackTop },
    data() {
      return {
        // 文章数据
        article: [],
        // 是评论还是需要输入框，默认是评论，输入框需要点击评论才行
        comment: true,
        mh: 0
      };
    },
    onLoad(e) {
      if(e.id){
        this.getArticle(e.id)
        this.setminheight()
      }else{
        uni.switchTab({url: '/pages/news/news'})
      }
    },
    methods: {
      setminheight(){
        this.mh = uni.getSystemInfoSync().windowHeight * 0.5
      },
      back() {
        uni.navigateBack({
          delta: 1
        })
      },
      getArticle(id) {
        let data = getArticle()
        data.forEach(item => {
          if(item.id.toString() === id) {
            let d = JSON.parse(JSON.stringify(item))
            this.article = d
            return
          }
        })
      },
      write(){
        this.comment = !this.comment
      },
      // 输入框获取焦点时
      focus(e) {
        uni.pageScrollTo({
          scrollTop:200000,
          duration:0
        })
      },
      // 输入框失去焦点后
      blur(e){
        this.comment = true
        uni.pageScrollTo({
          scrollTop:200000,
          duration:0
        })
      },
      // 软键盘高度变化时
      changekb(e){
        uni.pageScrollTo({
          scrollTop:200000,
          duration:0
        })
      }
    }
  }
</script>

<style lang="scss">
  .wrapper {
    height: auto !important;
  }
  .article {
    margin: 0 3% 0 3%;
    flex-grow: 1;
    overflow: auto;
    .header {
      display: flex;
      flex-direction: column;
      .title {
        font-size: 44rpx;
        font-weight: 600;
        margin: 3% 0 5% 0;
      }
      .sub-title {
        font-size: 26rpx;
        font-weight: 300;
        flex-direction: row;
        margin-bottom: 50rpx;
        .author {
          margin-right: 30rpx;
          color: #5555ff;
        }
        .time {
          color: slategray;
        }
      }
    }
    .content {
      line-height: 2;
      margin-bottom: 50px;
    }
    .btn-border {
      padding: 50rpx 0 10rpx;
      display: flex;
      flex-direction: row;
      text-align: center;
      .btn {
        margin-right: 8%;
        display: flex;
        flex-direction: column;
        text {
          color: #576b95;
          font-size: 24rpx;
        }
      }
    }
  }
  .comment {
    background: #ededed;
    padding: 50rpx 5% 50px;
    min-height: 600px;
    .header {
      display: flex;
      justify-content: space-between;
      font-size: 26rpx;
      font-weight: 300;
      margin-bottom: 20rpx;
      .cancel {
        color: #576b95;
      }
    }
  }
</style>
