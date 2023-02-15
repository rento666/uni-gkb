<template>
  <view>
    <view class="answer">
      <view :class="[ isSelectA ? 'radioSelect' : 'radioNo' ]" @click="sendRadio(i,1)">
        <text>是</text>
      </view>
      <view :class="[ isSelectB ? 'radioSelect' : 'radioNo' ]" @click="sendRadio(i,2)">
        <text>否</text>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name:"rt-yn",
    data() {
      return {
        isSelectA: false,
        isSelectB: false,
        radioList: {
          'id': null,
          'choose': null
        }
      };
    },
    props: {
      i: Number
    },
    methods: {
      sendRadio(index,choose) {
        if(choose === 1) {
          this.isSelectA = true
          this.isSelectB = false
        }else {
          this.isSelectA = false
          this.isSelectB = true
        }
        this.radioList.id = index
        this.radioList.choose = choose
        this.$emit('getRadio',this.radioList)
      },
    }
  }
</script>

<style lang="scss">
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
</style>