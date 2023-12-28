<template>
  <view>
    <view class="wrapper">
      <text class="header">骨康宝骨质疏松风险调查表</text>
      <view class="progress" :style="{ top: topHeight + 'px' }">
        <rt-progress :percent="percent"></rt-progress>
      </view>
      <rt-ynquestion :tip="tip" :percent="percent" @getRadio="getRadio" @click="submit"></rt-ynquestion>
    </view>
    <!-- 提交弹窗 -->
    <zwy-popup :ishide='isshow' width="466rpx" height="700rpx" radius="16rpx">
    	<!-- 自定义展示内容 -->
    	<view class="content">
    		<view class="image"></view>
    		<view class="title">自测结果</view>
    		<view>您这次得分{{score}}分</view>
    		<view class="info">每题5分，分数越低代表骨质越差</view>
    		<!-- <view class="btn">查看影响健康的风险因素</view> -->
    	</view>
    	<!-- 自定义关闭按钮 -->
    	<view class="close" @click="isshow=false">✕</view>
    </zwy-popup>
  </view>
</template>

<script>
  import * as jia_data from '../../common/jia_data.js'
  import {getUserInfo,getCurrentUserInfo,getFamilyInfo, setCurrentUserInfo} from '@/common/utils/auth.js'
  import api from "@/common/api/api.js"
  export default {
    name:"rt-exam",
    data() {
      return {
        questionList: [],
        tip: '几个简单问题,帮您了解自己的骨骼问题',
        topHeight: 102,
        percent: 0,  // 当前进度
        answer: [],  // 选择题答案，默认19个全是{'id': id,'answer': 0}，选是为1，选否为2，所以判断数组不为0的个数 * (100 / 总个数) 就是 进度占的百分比数值
        isshow: false,
        score: 0
      };
    },
    mounted() {
      this.init()
    },
    methods: {
      init(){ // 初始化answer、tip、topHeight
        var that = this
         // 初始化答案数组长度，用于进度条总数 
        var sex = getUserInfo().sex
        var data = null
        if(sex == '0'){
          console.log("男")
          data = jia_data.rt_question_boy
        }else if(sex == '1'){
          console.log("女")
          data = jia_data.rt_question_girl
        }else{
          console.log("未知")
          data = jia_data.rt_question
        }
        that.questionList = data
        console.log(data)
        var length = that.questionList.length
        for(var i=0; i< length; i++){
          var data = {'id':that.questionList[i].id,'answer':0}
          that.answer.push(data)
        }
        // 初始化提示信息
        let iswho = getCurrentUserInfo().iswho
        if(!iswho){
          iswho == 9999;
          let currentUser = {}
          currentUser.iswho = 9999
          setCurrentUserInfo(currentUser)
        }
        if(iswho == 9999){var c_name = '自己'}
        else{var c_name = "'"+getFamilyInfo()[iswho].username+"'"}
        that.tip = length + '个简单问题,帮您了解'+c_name+'的骨骼问题'
        //  初始化进度条高度，用于粘性布局
        const { statusBarHeight } = wx.getSystemInfoSync(); //拿到的状态栏高度单位是px
        that.topHeight = statusBarHeight + 44; // 44是因为我的导航栏是自定义的, 且高度为44px
      },
      setProgress(){ // 调整进度条
        var data = JSON.parse(JSON.stringify(this.answer))
        // 找出选择了 是/否 的 选项，得到的是一个新数组，其length为已选择的选项
        var newArray = data.filter(function(item){
          return item.answer != 0;
        })
        var total = 100 / this.answer.length  // 平均一个答案所占百分比
        var percent = newArray.length * total   // 当前百分比进度
        // this.percent = percent.toFixed(2)     // 取两位小数
        this.percent = Math.round(percent)       // 取四舍五入后的整数
      },
      getRadio(e){ // e为一个对象 {'id': 第几题(index,实际上题号 = id + 1), 'choose': 1是 2否 }
        // console.log(e);
        this.answer[e.id].answer = e.choose
        this.setProgress()
      },
      submit(){
        var that = this
        console.log(that.answer);   // 此答案格式为： [{'id':1,'answer':1},{'id':2,'answer':2},...] 
        var arr = that.answer
        var form = {}
        form.userid = getUserInfo().userid
        form.answer = JSON.stringify(arr)
        var score = 0
        arr.forEach(item => {
          if(item.answer == 2){
            score += 5
          }
        })
        that.score = score
        form.score = score
        api.addAnswer(form).then(res=>{
          if(res){
            // 数据库答案的userid\remark，后续可以通过这个去查看做过的题(remark为uuid，随机不唯一)
            var f = getUserInfo().userid
            var id = res
            var params = {}
            params.userid = f
            params.time = that.getNowFormatDate()
            params.title = '您提交了健康自测调查表'
            params.tips = '得分：' + score + '分'
            params.url = 'answer/answer?id=' + id
            api.setWqsj(params).then(res=>{
              console.log('设置往期数据',res);
            })
          }else{
            // 往数据库插入失败
          }
        })
        var username = !getUserInfo().username ? getUserInfo().nickName : getUserInfo().username
        that.isshow = !that.isshow
        // uni.showModal({
        //   title: username + " 您好",
        //   content: '每题5分，您这次得分'+ score +'分，分数越低代表骨质越差'
        // })
      },
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
    }
  }
</script>

<style lang="scss">
  .wrapper {
    height: 100%;
  }
  .header {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: #23EBB9;
    padding: 20px 0;
    text{
      margin-bottom: 20px;
      font-size: 34rpx;
      font-weight: 600;
    }
  }
  .progress {
    position: sticky;
    top: 102px;
    background: #23EBB9;
    padding: 20px 0 20px;
    margin-bottom: 30px;
    z-index: 1;
  }
  rt-ynquestion {
    z-index: 0
  }
  
  // 弹窗css
  .content {
  	width: 100%;
  	height: 100%;
  	display: flex;
  	align-items: center;
  	flex-direction: column;
  	justify-content: center;
  }
  
  .image {
  	width: 115rpx;
  	height: 115rpx;
  	border-radius: 50%;
  	background: #4CD964;
  }
  
  .title {
  	font-size: 36rpx;
  	margin: 70rpx 0 40rpx 0;
  }
  
  .info {
  	margin: 40rpx 0;
  	font-size: 24rpx;
  	text-align: center;
  	background: #F5F5F5;
  	border-radius: 16rpx;
  	padding: 16rpx 20rpx;
  }
  
  .btn {
  	width: 310rpx;
  	height: 60rpx;
  	font-size: 26rpx;
  	line-height: 60rpx;
  	text-align: center;
  	border-radius: 30rpx;
  	background: linear-gradient(-90deg, #FEEF43, #E9D81B);
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