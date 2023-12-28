<template>
  <view>
    <form @submit="save">
      <uni-list>
        <uni-list-item>
          <template v-slot:header>
            <view class="slot-box">
              <text class="slot-box slot-text">姓名</text>
            </view>
          </template>
          <template v-slot:footer>
            <!-- 姓名 input -->
            <input name="username" class="slot-input" type="text" placeholder="请输入" />
          </template>
        </uni-list-item>
        <uni-list-item>
          <template v-slot:header>
            <view class="slot-box">
              <text class="slot-box slot-text">性别</text>
            </view>
          </template>
          <template v-slot:footer>
            <!-- 性别 radio -->
            <radio-group name="gender">
              <label class="radio">
                <radio value="1" :checked="item.sex == 1" /><text>男</text>
              </label>
              <label class="radio">
                <radio value="2" :checked="item.sex == 2" /><text>女</text>
              </label>
            </radio-group>
          </template>
        </uni-list-item>
        <uni-list-item>
          <template v-slot:header>
            <view class="slot-box">
              <text class="slot-box slot-text">生日</text>
            </view>
          </template>
          <template v-slot:footer>
            <!-- 出生年月 picker -->
            <picker name="birthday" class="picker" mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
              <view>{{date}}</view>
            </picker>
          </template>
        </uni-list-item>
        <uni-list-item>
          <template v-slot:header>
            <view class="slot-box">
              <text class="slot-box slot-text">关系</text>
            </view>
          </template>
          <template v-slot:footer>
            <!-- 关系 input -->
            <input name="type" class="slot-input" type="text" placeholder="与你本人的关系,例如:父亲" placeholder-class="sz-10" />
          </template>
        </uni-list-item>
      </uni-list>
      <button form-type="submit" class="save-btn">添加</button>
    </form>
  </view>
</template>

<script>
  import { getUserInfo } from '@/common/utils/auth.js'
  import graceChecker from '../../common/graceChecker.js'
  import api from '@/common/api/api.js'
  export default {
    name:"rt-home",
    data() {
      const currentDate = this.getDate({
        format: true
      })
      return {
        date: currentDate,
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
    methods:{
      bindDateChange: function(e) {
          this.date = e.detail.value
      },
      getDate(type) {
        const date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        if(type === 'start'){
          year = year - 90;
        }else if (type === 'end') {
          // year = year + 2;
          year = year;
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
        return Math.ceil((nowTime-birthDayTime)/31536000000);
      },
      save(e){
        var that = this
        //定义表单规则
        var rule = [
            {name:"username", checkType : "notnull", checkRule:"",  errorMsg:"请填写姓名"},
            {name:"gender", checkType : "in", checkRule:"1,2",  errorMsg:"请选择性别"},
        ];
        //进行表单检查
        var formData = e.detail.value;
        var checkRes = graceChecker.check(formData, rule);
        if(checkRes){
          var user = getUserInfo()
          formData.userid = user.userid
          formData.age = that.getAge(formData.birthday)
          api.addFamily(formData).then(res=>{
            if(res.code == 200){
              uni.$showMsg("添加成功",'success');
            }else{
              uni.$showMsg('添加失败')
            }
            setTimeout(function(){
              that.$emit('close','close')
            },500)
          })
        }else{
          uni.$showMsg(graceChecker.error,'none');
        }
      },
    }
  }
</script>

<style lang="scss">
.slot-box {
  	display: flex;
  	// flex-direction: row;
  	align-items: center;
  }
  .slot-input {
    font-size: 13px;
    text-align: right;
  }
  .radio {
    margin-left: 20px;
    font-size: 13px;
  }
  .picker {
    font-size: 13px;
  }
  .slot-text {
  	flex: 1;
  	font-size: 13px;
  }
  .save-btn {
    margin: 10px 80px;
    background: #3588fe;
    font-size: 13px;
    color: #fff;
  }
  .sz-10{
    font-size: 10px;
  }
</style>