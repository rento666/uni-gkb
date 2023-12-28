<template>
  <view>
    <view class="wrapper">
      <!-- 提示语 -->
      <view class="tips">
        <text>{{tip}}</text>
        <uni-icons type="help-filled" size="16" color="#999999" @click="isshow=true"></uni-icons>
      </view>
      <!-- 分割线  -->
      <view class="line"></view>
      <view class="judge" v-for="(item,i) in questionList" :key="i">
        <view class="question">{{i+1}}.{{item.title}}</view>
        <view class="little_tip" :v-if="item.little_tip">{{item.little_tip}}</view>
        <rt-yn @getRadio="getRadio" :i="i"></rt-yn>
        <view class="line"></view>
      </view>
      <button @click="btn">查看自测结果</button>
    </view>
    <zwy-popup :ishide='isshow' width="466rpx" height="640rpx" radius="16rpx">
      <view class="content">
        <text class="title">如何修改当前用户</text>
        <image src="/static/question/question_yanshi1.png"></image>
        <text class="text">操作流程：[我的]页面=>[我的家庭]页面=>[点击切换]按钮 </text>
        <image src="/static/question/question_yanshi2.png"></image>
        <text class="text">当显示为“当前使用”时为切换成功。</text>
      </view>
      <view class="close" @click="isshow=false">✕</view>
    </zwy-popup>
  </view>
</template>

<script>
  /**
   * YnQuestion 判断题
   * @description 判断题组件
   * @author wrt  
   * @property {String} tip 提示语
   * 在此组件进行答案整合，每选择一项，进度就会相应的加上
   */
  import * as jia_data from '../../common/jia_data.js'
  import {getUserInfo} from '@/common/utils/auth.js'
  export default {
    name:"rt-ynquestion",
    data() {
      return {
        isshow:false,
        questionList: [],
        yn: [{
          text: '是',
          value: 1
        },{
          text: '否',
          value: 2
        }]
      };
    },
    props: {
      tip: String,
      percent: Number,
    },
    mounted() {
      this.setQuestion()
    },
    methods: {
      getRadio(e){    // 得到子组件传来的值，e为一个对象 {'id': 第几题(index,实际上题号 = id + 1), 'choose': 1是 2否 }
        this.$emit('getRadio',e) // 传给父组件
      },
      setQuestion(){    // 从假数据里传来数据，实际开发需要去请求服务器的数据，不过这里的问题都是不变的问题，所以就不去请求了
        var sex = getUserInfo().sex
        if(sex == '0'){
          var data = JSON.parse(JSON.stringify(jia_data.rt_question_boy))
        }else if(sex == '1'){
          var data = JSON.parse(JSON.stringify(jia_data.rt_question_girl))
        }else{
          var data = JSON.parse(JSON.stringify(jia_data.rt_question))
        }
        this.questionList = data
      },
      btn(){
        var that = this
        if(that.percent < 100){
          uni.showModal({
            title: '提示',
            content: '请完整填写测试量表',
            showCancel: false,
            confirmText: '知道了'
          })
        }else {
          // 进度为100%时，点击查看自测结果按钮，触发的事件
          //console.log(this.answer);
          that.$emit('click')
        }
      }
    }
  }
</script>

<style lang="scss">
  .wrapper {
    position: relative;
    top: -20px;          // 向上
    background: #fff;
    margin: 0 15px;     // 左右间距15px
    padding: 20px;     // 内部间距
    border-radius: 7px; 
    .tips {
      text-align: center;
      font-size: 12px;
      font-weight: 300;
      margin-bottom: 10px;  // 距离下一个标签10px
      uni-icons{
        position: absolute;
        right: 35rpx;
      }
    }
    .line {
      margin: 20px 0;     // 距离上一个标签20px （ + 10px），距离下一个标签20px
      border: 1px solid #ededed;
    }
    .judge {
      .question {
        font-size: 15px;
        font-weight: 500;
      }
      .little_tip {
        font-size: 11px;
        font-weight: 300;
      }
    }
    button {
      width: 40%;
      font-size: 13px;
      background: #1ac18a;
      color: #fff;
    }
  }
  .pops {
    width: 60%;
    height: 150px;
    background-color: #23EBB9;
    position: relative;
    left: 15%;
    // margin-top: 25%;
    border-radius: 10px;

    view {
      position: relative;
      top:35px;
      text-align: center;
      font-size: 14px;
      padding-bottom: 20px;
    }
  }
  .content {
    padding: 10rpx;
    .title{
      display: block;
      text-align: center;
      font-size: 40rpx;
      font-weight: 700;
      margin-bottom: 20rpx;
    }
    image{
      width: 100%;
      max-height: 200rpx;
      image-rendering:-moz-crisp-edges;
      image-rendering:-o-crisp-edges;
      image-rendering:-webkit-optimize-contrast;
      image-rendering: crisp-edges;
      -ms-interpolation-mode:nearest-neighbor;
    }
    .text{
      font-size: 26rpx;
      font-weight: 300;
    }
  }
  .close {
  	width: 60rpx;
  	height: 60rpx;
  	color: #FFFFFF;
  	line-height: 60rpx;
  	text-align: center;
  	border-radius: 50%;
  	border: 1px solid #FFFFFF;
  	position: relative;
  	bottom: -10%;
  	left: 50%;
  	transform: translate(-50%, -50%);
  }
</style>