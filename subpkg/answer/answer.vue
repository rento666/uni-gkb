<template>
  <view>
    <!-- 标题栏 -->
    <uni-nav-bar :border="false" fixed status-bar left-icon="left" @clickLeft="back" backgroundColor="#23EBB9" title="自测结果" />
    <view class="wrapper">
      <!-- 提示语 -->
      <view class="tips">日期：{{time}}</view>
      <!-- 分割线  -->
      <view class="line"></view>
      <view class="judge" v-for="(item,i) in questionList" :key="i">
        <view class="question">{{i+1}}.{{item.title}}</view>
        <view class="little_tip" :v-if="item.little_tip">{{item.little_tip}}</view>
        <view class="answer">
          <view :class="[ item.answer == '1' ? 'radioSelect' : 'radioNo' ]">
            <text>是</text>
          </view>
          <view :class="[ item.answer == '2' ? 'radioSelect' : 'radioNo' ]">
            <text>否</text>
          </view>
        </view>
        <view class="line"></view>
      </view>
    </view>
  </view>
</template>

<script>
  import * as jia_data from '@/common/jia_data.js'
  import api from '@/common/api/api.js'
  export default {
    data() {
      return {
        time: '1970-01-01',
        questionList: [],
        answerList: []
      };
    },
    onLoad(res) {
      this.getResult(res.id)
    },
    methods:{
      back() {
        uni.navigateBack({
          delta: 1
        })
      },
      getResult(id){

        api.getAnswer(id).then(res=>{
          if(res.answer){
            this.time = res.created
            const al = JSON.parse(res.answer)
            this.answerList = al
            let length = this.answerList.length
            if(length == 16){
              var question1 = JSON.parse(JSON.stringify(jia_data.rt_question_boy))
            }else if(length == 18){
              var question1 = JSON.parse(JSON.stringify(jia_data.rt_question_girl))
            }else{
              var question1 = JSON.parse(JSON.stringify(jia_data.rt_question))
            }
            question1.forEach((item,index)=>{
              if(item.id == al[index].id){
                item.answer = al[index].answer
              }
            })
            this.questionList = question1
          }else{
            uni.$showMsg('未查找到此次自测记录！')
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  .wrapper {
    background: #fff;
    margin: 10px 15px;     // 左右间距15px
    padding: 20px;     // 内部间距
    border-radius: 7px; 
    .tips {
      text-align: center;
      font-size: 14px;
      margin-bottom: 10px;  // 距离下一个标签10px
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
      .answer {     // 判断题答案，是或否
        display: flex;
        flex-direction: row nowrap;
        justify-content:  space-between;
        padding: 10px 20% 0;
        .radioSelect {
          border: 1px solid #1ac18a;
          padding: 4px 18px;
          background: #1ac18a;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 300;
          color: #ffffff;
        }
        .radioNo {
          border: 1px solid #23EBB9;
          padding: 4px 18px;
          background: #f5f5f5;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 300;
        }
      }
    }
  }
</style>
