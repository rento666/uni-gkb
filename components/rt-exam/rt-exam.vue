<template>
  <view>
    <view class="wrapper">
      <text class="header">骨康宝骨质疏松风险调查表</text>
      <view class="progress" :style="{ top: topHeight + 'px' }">
        <rt-progress :percent="percent"></rt-progress>
      </view>
      <rt-ynquestion :tip="tip" :percent="percent" @getRadio="getRadio" :answer="answer"></rt-ynquestion>
    </view>
  </view>
</template>

<script>
  import * as jia_data from '../../common/jia_data.js'
  export default {
    name:"rt-exam",
    data() {
      return {
        tip: '几个简单问题,帮您了解自己的骨骼问题',
        topHeight: 102,
        percent: 0,  // 当前进度
        answer: []  // 选择题答案，默认10个全是0，选是为1，选否为2，所以判断数组不为0的个数 * (100 / 总个数) 就是 进度占的百分比数值
      };
    },
    mounted() {
      this.init()
    },
    methods: {
      init(){ // 初始化answer、tip、topHeight
         // 初始化答案数组长度，用于进度条总数 
        var length = jia_data.rt_question.length
        for(var i=0; i<length; i++){
          this.answer.push(0)
        }
        // 初始化提示信息
        this.tip = length + '个简单问题,帮您了解自己的骨骼问题'
        //  初始化进度条高度，用于粘性布局
        const { statusBarHeight } = wx.getSystemInfoSync(); //拿到的状态栏高度单位是px
        this.topHeight = statusBarHeight + 44; // 44是因为我的导航栏是自定义的, 且高度为44px
      },
      setProgress(){ // 调整进度条
        var data = JSON.parse(JSON.stringify(this.answer))
        // 找出选择了 是/否 的 选项，得到的是一个新数组，其length为已选择的选项
        var newArray = data.filter(function(item){
          return item != 0;
        })
        var total = 100 / this.answer.length  // 平均一个答案所占百分比
        var percent = newArray.length * total   // 当前百分比进度
        // this.percent = percent.toFixed(2)     // 取两位小数
        this.percent = Math.round(percent)       // 取四舍五入后的整数
      },
      getRadio(e){ // e为一个对象 {'id': 第几题(index,实际上题号 = id + 1), 'choose': 1是 2否 }
        // console.log(e);
        this.answer[e.id] = e.choose
        this.setProgress()
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

</style>