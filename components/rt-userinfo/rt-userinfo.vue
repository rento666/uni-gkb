<template>
  <view>
    <view class="wrapper">
      <form @submit="save">
        <uni-list>
          <uni-list-item v-for="(item,i) in userinfo" :key="i">
            <template v-slot:header>
              <view class="slot-box">
                <text class="slot-box slot-text">{{item.title}}</text>
              </view>
            </template>
            <template v-slot:footer>
              <!-- 头像 image -->
              <button v-if="item.type == 'avatar'" class="slot-image" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">
                <image class="slot-image" :src="avatarUrl" mode='aspectFill'></image>
              </button>
              <!-- 昵称 input -->
              <input name="nickName" v-if="item.type == 'nickName'" class="slot-input" type="nickname" placeholder="请输入" />
              <!-- 姓名 input -->
              <input name="username" v-if="item.type == 'input'" class="slot-input" type="text" placeholder="请输入" />
              <!-- 性别 radio -->
              <radio-group name="gender"  v-if="item.type == 'radio'">
                <label class="radio">
                  <radio value="1" /><text>男</text>
                </label>
                <label class="radio">
                  <radio value="2" /><text>女</text>
                </label>
              </radio-group>
              <!-- 出生年月 picker -->
              <picker name="birthday" class="picker" v-if="item.type == 'picker'" mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
                <view>{{date}}</view>
              </picker>
              <!-- 年龄 text -->
              <text v-if="item.type == 'text'" class="age">{{age}}岁</text>
            </template>
          </uni-list-item>
        </uni-list>
        <view class="tips">年龄无需填写，选择出生年月之后自动计算</view>
        <button form-type="submit" class="save-btn">保存</button>
      </form>

    </view>
  </view>
</template>

<script>
  import * as jia_data from '../../common/jia_data.js'
  import graceChecker from '../../common/graceChecker.js'
  export default {
    name:"rt-userinfo",
    props: {
      
    },
    data() {
      const currentDate = this.getDate({
        format: true
      })
      return {
        userinfo: [],
        avatarUrl: 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0',
        date: currentDate,
        age: 1
      };
    },
    computed: {
      startDate(){
        return this.getDate('start');
      },
      endDate(){
        return this.getDate('end');
      }
    },
    mounted() {
      this.userinfo = JSON.parse(JSON.stringify(jia_data.my_userinfoList))
    },
    methods:{
      onChooseAvatar(e) {
        const avatarUrl = e.detail.avatarUrl
        this.avatarUrl = avatarUrl
      },
      bindDateChange: function(e) {
          this.date = e.detail.value
          this.getAge(this.date)
      },
      getDate(type) {
        const date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        if(type === 'start'){
          year = year - 90;
        }else if (type === 'end') {
          year = year + 2;
        }
        month = month > 9 ? month : '0' + month;
        day = day > 9 ? day : '0' + day;
        return `${year}-${month}-${day}`;
      },
      getAge(birthday){
        //出生时间 毫秒
        var birthDayTime = new Date(birthday).getTime(); 
        //当前时间 毫秒
        var nowTime = new Date().getTime(); 
        //一年毫秒数(365 * 86400000 = 31536000000)
        this.age = Math.ceil((nowTime-birthDayTime)/31536000000);
      },
      save(e){
        console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
        //定义表单规则
        var rule = [
            {name:"username", checkType : "notnull", checkRule:"",  errorMsg:"请填写姓名"},
            {name:"gender", checkType : "in", checkRule:"1,2",  errorMsg:"请选择性别"},
        ];
        //进行表单检查
        var formData = e.detail.value;
        var checkRes = graceChecker.check(formData, rule);
        if(checkRes){
            uni.showToast({title:"保存成功", icon:'success'});
            // console.log(this.avatarUrl,JSON.stringify(e.detail.value),this.age); // http://tmp/VEczLQpNebEo4ee2115517070ea69d41495e992c1417.jpeg {"nickName":"Xtutu","username":"111","gender":"1","birthday":"2011-01-12"} 13
        }else{
            uni.showToast({ title: graceChecker.error, icon: "none" });
        }
      }
    }
  }
</script>

<style lang="scss">
  .wrapper {
    margin: 5px 10px;
  }
  .slot-box {
		display: flex;
		// flex-direction: row;
		align-items: center;
	}
	.slot-image {
		width: 50px;
		height: 50px;
    border-radius: 10px;
    image {
      position: absolute;
      right: 0;
    }
	}
  .slot-input {
    font-size: 14px;
    text-align: right;
  }
  .radio {
    margin-left: 20px;
    font-size: 14px;
  }
  .picker {
    font-size: 14px;
  }
  .age {
    font-size: 14px;
    color: gray;
  }
	.slot-text {
		flex: 1;
		font-size: 14px;
	}
  .tips {
    font-size: 12px;
    color: gray;
    margin-left: 10px;
  }
  .save-btn {
    position: fixed;
    bottom: 30px;
    width: 90%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #3588fe;
    font-size: 14px;
    color: #fff;
  }
</style>