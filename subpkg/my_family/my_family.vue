<template>
  <view>
    <!-- 标题栏 -->
    <uni-nav-bar :border="false" fixed status-bar left-icon="left" @clickLeft="back" backgroundColor="#23EBB9" title="家庭管理" />
    <view class="wrapper">
      <uni-section title="主账号(每次登录默认使用账号)" type="line"></uni-section>
      <family_card type="本人" :avatar="br_avatar" :nickname="br_nickname" :ising="iswho == 9999" @click="clickbr" @editf="clickbr"></family_card>
      <view style="height: 30rpx;"></view>
      
        <uni-section title="其他成员" type="line"></uni-section>
        <template v-if="homeList.length > 0">
        <view v-for="(item,i) in homeList" :key="i">
          <uni-swipe-action>
            <uni-swipe-action-item>
              <family_card :type="item.relation" :nickname="item.username" :ising="iswho == i" @click="click(i)" @editf="edit(i)"></family_card>
              <template v-slot:right>
                <view class="slot-button" @click="del(i)">
                  <text class="slot-button-text">删除成员</text>
                </view>
              </template>
            </uni-swipe-action-item>
          </uni-swipe-action>
        </view>
        </template>
        <template v-else>
          <o-empty height="400rpx" />
        </template>
        <view style="height: 140rpx;"></view>
        <view class="footer">
          <button class="button" hover-class="click" @click="add">添加成员</button>
          <button class="button" hover-class="click" @click="onClick('删除')">删除成员</button>
        </view>
    </view>
  </view>
</template>

<script>
  import api from '@/common/api/api.js'
  import {getUserInfo,getFamilyInfo,removeFamilyInfo,setFamilyInfo,getCurrentUserInfo,setCurrentUserInfo} from '@/common/utils/auth.js'
  export default {
    data() {
      return {
        br_avatar: '',
        br_nickname: '',
        iswho: 9999,
        homeList: [],
        options: [{
          text: '删除'
        }],
      };
    },
    onLoad() {
      this.getBenRen()
      if(!getCurrentUserInfo()){
        var currentUser = {}
        currentUser.iswho = 9999
        setCurrentUserInfo(currentUser)
      }else{
        this.iswho = getCurrentUserInfo().iswho
      }
    },
    onShow() {
      if(!getFamilyInfo()){
        this.getfamily()
      }else{
        this.homeList = getFamilyInfo()
      }
    },
    methods:{
      // 导航栏返回事件
      back() {
        uni.navigateBack()
      },
      onClick(res){
        let hd = res == '添加' ? '向右滑动' : '向左滑动'
        uni.$showMsg("尝试把卡片"+hd+"吧")
      },
      getBenRen(){
        let user = getUserInfo()
        this.br_avatar = user.avatarUrl ? user.avatarUrl : '../../static/my_img/defaultAvatarUrl.png'
        this.br_nickname = user.username ? user.username : '微信用户'
      },
      clickbr(type){
        if(type == '修改资料'){
          uni.navigateTo({url: '/subpkg/my_info/my_info'})
        }
        if(type == '切换'){
          if(this.iswho != 9999){
            this.iswho = 9999
            var currentUser = {}
            currentUser.iswho = 9999
            setCurrentUserInfo(currentUser)
            uni.$showMsg('切换成功')
          }
        }
      },
      add(){
        uni.navigateTo({url:'/subpkg/my_info/my_info?type=add'})
      },
      del(id){
        var that = this
        // 判断删除的是否正在使用，如果是，则提示正在使用，不能删除
        let curr = getCurrentUserInfo().iswho
        if(curr == id){uni.$showMsg('当前正在使用,无法删除!'); return;}
        let user = getFamilyInfo()[id]
        uni.showModal({
          title: '提示',
          content: '您确定删除['+user.username+']的全部信息吗？',
          confirmText: '删除',
          confirmColor: "#ff0000",
          success(res) {
            if (res.confirm) {
              //console.log('用户点击确定');
              api.delFamily(user.id).then(res=>{
                if(res) {
                  removeFamilyInfo()
                  that.getfamily()
                  uni.$showMsg('删除成功!','success')
                }else{
                  uni.$showMsg('删除失败!')
                }
              })
            } else if (res.cancel) {
              //console.log('用户点击取消');
            }
          }
        })
      },
      // 将其他成员中的一个设为使用状态
      click(type){
        if(getCurrentUserInfo().iswho==type){return}
        var currentUser = {}
        currentUser.iswho = type
        setCurrentUserInfo(currentUser)
        this.iswho = type
        uni.$showMsg('切换成功')
      },
      // 修改其他成员的基础信息
      edit(type){
        uni.navigateTo({url:'/subpkg/my_info/my_info?current='+type})
      },
      getfamily(){
        var that = this
        var user = getUserInfo()
        var userid = user.userid
        api.getFamily(userid).then(res=>{
          if(res.code == 200){
            var family = JSON.parse(JSON.stringify(res.data))
            // family.forEach((item,index)=>{
            //   item.type = item.relation
            //   delete item.relation
            // })
            that.homeList = family
            setFamilyInfo(family)
          }else {
            console.log(res.data);
          }
        })
      },
    }
  }
</script>

<style lang="scss">
  .footer{
    position: fixed;
    width: 100%;
    bottom: 20rpx;
    display: flex;
    flex-direction: row;
  }
.button {
    width: 45%;
		display: flex;
		margin: 2%;
    padding: 2%;
		line-height: 50rpx;
		justify-content: center;
		border-radius: 25px;
    border: 1px solid #e1e1e1;
		font-size: 34rpx;
    font-weight: 700;
	}
.click {
		background-color: #a7a9ff;
	}
  .slot-button {
  		/* #ifndef APP-NVUE */
  		display: flex;
  		height: 80%;
  		/* #endif */
  		flex: 1;
  		flex-direction: row;
  		justify-content: center;
  		align-items: center;
      margin-top: 40rpx;
  		padding: 0 20px;
  		background-color: #ff5a5f;
  	}
  
  	.slot-button-text {
  		color: #ffffff;
  		font-size: 14px;
  	}
</style>
