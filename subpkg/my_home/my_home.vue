<template>
  <view>
    <!-- 标题栏 -->
    <uni-nav-bar :border="false" fixed status-bar left-icon="left" @clickLeft="back" backgroundColor="#23EBB9" title="我的家庭" />
    <view class="sub-header heng">
      <!-- sub header 提示用户栏 -->
      <view class="shu">
        <text>我的家人朋友（{{ num }}人）</text>
        <view class="tips">年龄无需填写，选择生日之后自动计算</view>
      </view>
      <!-- 新增、删除按钮 -->
      <view class="btn">
        <button size="mini" @click="add">添加成员</button>
        <button size="mini" @click="del">删除成员</button>
      </view>
    </view>
    <!-- 详细信息 -->
    <uni-collapse accordion>
      <view v-for="(item,i) in homeList" :key="i">
        <uni-collapse-item :title="item.type">
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
                  <input name="username" class="slot-input" type="text" placeholder="请输入" :value="item.username" />
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
                    <!-- <view>{{date}}</view> -->
                    <view>{{item.birthday}}</view>
                  </picker>
                </template>
              </uni-list-item>
              <uni-list-item>
                <template v-slot:header>
                  <view class="slot-box">
                    <text class="slot-box slot-text">年龄</text>
                  </view>
                </template>
                <template v-slot:footer>
                  <!-- 年龄 text -->
                  <!-- <text class="age">{{age}}岁</text> -->
                  <text class="age">{{item.age}}岁</text>
                </template>
              </uni-list-item>
            </uni-list>
            <button form-type="submit" class="save-btn">保存</button>
          </form>
        </uni-collapse-item>
      </view>
    </uni-collapse>
    <view>
      <!-- 添加成员弹窗 -->
      <uni-popup ref="popup1" background-color="#fff" @change="change">
        <rt-home></rt-home>
      </uni-popup>
      <!-- 删除成员弹窗 -->
      <uni-popup ref="popup2" background-color="#fff" @change="change">
        <form @submit="del">
          <radio-group @change="radioChange"  name="type">
            <label v-for="(item,i) in homeList" :key="i" class="delradio heng">
              <view class="">
                <radio :value="item.type" /><text>{{item.type}}</text>
              </view>
            </label>
          </radio-group>
          <button form-type="submit" class="del-btn">删除</button>
        </form>
      </uni-popup>
    </view>
  </view>
</template>

<script>
  import graceChecker from '../../common/graceChecker.js'
  import * as jia_data from '../../common/jia_data.js'
  export default {
    data() {
      const currentDate = this.getDate({
        format: true
      })
      return {
        homeList: [],
        num: 0,
        date: currentDate,
        age: 1,
        delindex: 0
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
    onLoad() {
      this.getHomeList()
    },
    methods: {
      back() {
        uni.navigateBack({
          delta: 1
        })
      },
      getHomeList(){
        this.homeList = JSON.parse(JSON.stringify(jia_data.my_homeList))
        this.num = this.homeList.length
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
        }else{
            uni.showToast({ title: graceChecker.error, icon: "none" });
        }
      },
      add(){
        this.$refs.popup1.open('bottom')
      },
      del(){
        this.$refs.popup2.open('bottom')
      },
      change(e) {
        console.log('当前模式：' + e.type + ',状态：' + e.show);
      },
    }
  }
</script>

<style lang="scss">
  .sub-header {
    background: #23EBB9;
    // text-align: center;
    padding: 20px;
    font-size: 13px;
  }
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
  .age {
    font-size: 13px;
    color: gray;
  }
  .slot-text {
    margin-left: 10px;
  	flex: 1;
  	font-size: 13px;
  }
  .tips {
    font-size: 12px;
    color: gray;
    margin: 10px 0 0 0;
  }
  .save-btn {
    margin: 10px 80px;
    background: #3588fe;
    font-size: 13px;
    color: #fff;
  }
  .heng {
    display: flex;
    flex-direction: row;
    .shu {
      display: flex;
      flex-direction: column;
    }
    .btn {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      button{
        font-size: 12px;
        background: #3588fe;
        margin: 5px 0;
        color: #fff;
      }
    }
  }
  .delradio {
    display: flex;
    flex-direction: column;
    margin: 10px;
  }
  .del-btn {
    margin: 10px 80px;
    background: #ff3810;
    font-size: 13px;
    color: #fff;
  }
</style>
