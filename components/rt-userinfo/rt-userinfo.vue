<template>
  <view>
    <view class="wrapper">
      <form @submit="save">
        <uni-list>
          <uni-list-item v-for="(item,i) in btnList" :key="i">
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
              <input name="nickName" v-if="item.type == 'nickName'" class="slot-input" type="nickname" placeholder="请输入" :value="nickName" />
              <!-- 姓名 input -->
              <input name="username" v-if="item.type == 'input'" class="slot-input" type="text" placeholder="请输入" :value="username" />
              <!-- 性别 radio -->
              <radio-group name="sex"  v-if="item.type == 'radio'">
                <label class="radio">
                  <radio value="0" :checked="sex == '0'" /><text>男</text>
                </label>
                <label class="radio">
                  <radio value="1" :checked="sex == '1'" /><text>女</text>
                </label>
              </radio-group>
              <!-- 出生年月 picker -->
              <picker name="birthday" class="picker" v-if="item.type == 'picker'" mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
                <view>{{date}}</view>
              </picker>
              <!-- 年龄 text -->
              <text v-if="item.type == 'text'" class="age">{{age}}岁</text>
              <!-- 关系text -->
              <input name="relation" v-if="item.type == 'text_type'" class="slot-input" type="text" placeholder="请输入" :value="relation" />
            </template>
          </uni-list-item>
        </uni-list>
        <view class="tips">年龄无需填写，选择出生年月之后自动计算</view>
        <button form-type="submit" class="save-btn">{{btn_text}}</button>
      </form>

    </view>
  </view>
</template>

<script>
  import * as jia_data from '../../common/jia_data.js'
  import { getUserInfo,setUserInfo,getCurrentUserInfo,getFamilyInfo,removeFamilyInfo } from '@/common/utils/auth.js'
  import graceChecker from '../../common/graceChecker.js'
  import api from '@/common/api/api.js'
  export default {
    name:"rt-userinfo",
    props: {
      /* 是本人吗，默认为true */
      isbr: {
        type: Boolean,
        default: true
      },
      current:{
        type: Number,
        default: 9999
      }
    },
    data() {
      const currentDate = this.getDate({
        format: true
      })
      return {
        btnList: [],
        avatarUrl: 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0',
        nickName: '微信用户',
        username: '',
        date: currentDate,
        age: 1,
        sex: 0,
        relation: '亲属朋友',
        btn_text: '保存'
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
      if(this.isbr){ // 如果是本人
        this.btnList = JSON.parse(JSON.stringify(jia_data.my_userinfoList))
        this.setUser()
      }else{ // 如果是亲属朋友
        this.btnList = JSON.parse(JSON.stringify(jia_data.family_userinfoList))
        // 如果不是新增，则为<，下式为true；如果是新增，则是 = ,为false
        // this.current == getFamilyInfo().length 为 "添加成员"功能
        if(getFamilyInfo()==null){
          this.btn_text = '添加'
          return;
        }
        if(this.current < getFamilyInfo().length){
          let user = getFamilyInfo()[this.current]
          this.relation = user.relation
          this.date = user.birthday
          this.age = user.age
          this.sex = user.sex
          this.username = user.username
        }
      }
    },
    methods:{
      setUser(){
        let user = getUserInfo()
        this.avatarUrl = user.avatarUrl
        this.nickName = user.nickName
        this.date = user.birthday
        this.age = user.age
        this.sex = user.sex
        this.username = user.username
      },
      onChooseAvatar(e) {
        var that = this;
        console.log(e.detail.avatarUrl)
        const avatarUrl = e.detail.avatarUrl
        wx.uploadFile({
          // url: 'http://localhost:9999/file/upload',
          url: 'http://101.43.138.115:9999/file/upload',
          filePath: avatarUrl,
          name: 'file',
          success(res) {
            that.avatarUrl = res.data
          },
          fail(res) {
            console.log(res)
          }
        })
      },
      bindDateChange: function(e) {
          this.date = e.detail.value
          this.age = this.getAge(this.date)
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
        if(this.isbr && this.current == 9999){ // 如果是本人
          this.saveBr(e)
        }else{ // 如果是亲属朋友
          if(this.current == -1)  {
            this.addType(e);
            return;
          }
          if(this.current < getFamilyInfo().length){ // 修改
            this.saveType(e)
          }else{ // 新增
            this.addType(e)
          }
        }
      },
      // 保存按钮，本人
      saveBr(e){
        var that = this
        // {"nickName":"Xtutu","username":"jyjy","sex":"1","birthday":"2002-07-04"}
        console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
        //定义表单规则
        var rule = [
            {name:"username", checkType : "notnull", checkRule:"",  errorMsg:"请填写姓名"},
            {name:"sex", checkType : "in", checkRule:"1,0",  errorMsg:"请选择性别"},
        ];
        //进行表单检查
        var formData = e.detail.value;
        var checkRes = graceChecker.check(formData, rule);
        if(checkRes){
          var user = getUserInfo()
          var age1 = that.getAge(formData.birthday)
          formData.age = age1
          formData.avatarUrl = that.avatarUrl
          formData.userid = user.userid
          console.log("formData :" + JSON.stringify(formData))
          api.saveUserInfo(formData).then(res=>{
            if(res.code == 200) {
              user.age = formData.age
              user.username = formData.username
              user.avatarUrl = formData.avatarUrl
              user.nickName = formData.nickName
              user.sex = formData.sex
              user.birthday = formData.birthday
              setUserInfo(user)
              uni.$showMsg('保存成功','success')
            }else{
              uni.$showMsg('保存失败')
            }
          })
        }else{
          uni.$showMsg(graceChecker.error);
        }
      },
      // 保存按钮 亲属朋友
      saveType(e){
        var that = this
        console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
        //定义表单规则
        var rule = [
            {name:"username", checkType : "string", checkRule:"1,4",  errorMsg:"姓名应在1-4个字之间"},
            {name:"sex", checkType : "in", checkRule:"1,0",  errorMsg:"请选择性别"},
        ];
        //进行表单检查
        var formData = e.detail.value;
        var checkRes = graceChecker.check(formData, rule);
        if(checkRes){
          var user = getUserInfo()
          var age1 = that.getAge(formData.birthday)
          formData.age = age1
          formData.userid = user.userid
          formData.id = getFamilyInfo()[that.current].id
          api.editFamily(formData).then(res=>{
            if(res) {
              removeFamilyInfo()
              uni.$showMsg('修改成功!','success')
            }else{
              uni.$showMsg('修改失败!')
            }
          })
          
        }else{
          uni.$showMsg(graceChecker.error)
        }
      },
      addType(e){
        var that = this
        console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
        //定义表单规则
        var rule = [
            {name:"relation", checkType : "string", checkRule:"1,6",  errorMsg:"亲属关系应在1-6个字之间"},
            {name:"username", checkType : "string", checkRule:"1,4",  errorMsg:"姓名应在1-4个字之间"},
            {name:"sex", checkType : "in", checkRule:"1,0",  errorMsg:"请选择性别"},
        ];
        //进行表单检查
        var formData = e.detail.value;
        var checkRes = graceChecker.check(formData, rule);
        if(checkRes){
          var user = getUserInfo()
          var age1 = that.getAge(formData.birthday)
          formData.age = age1
          formData.userid = user.userid    
          api.addFamily(formData).then(res=>{
            if(res) {
              removeFamilyInfo()
              uni.$showMsg('添加成功!','success')
            }else{
              uni.$showMsg('添加失败!')
            }
          })
        }else{
          uni.$showMsg(graceChecker.error)
        }
      },
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