<template>
  <view style="background: #f7f7f7;">
    <!-- 标题栏 -->
    <uni-nav-bar fixed status-bar left-icon="left" @clickLeft="back" backgroundColor="#23EBB9" title="添加资讯" />
    <view class="container">
      <view style="padding: 20px 10px;background: #ededed;">
        <textarea v-model="form.title" auto-height placeholder="请输入文章标题..." />
      </view>
      <view style="margin: 10px 0; padding: 5px;background: #ededed;">
          <input v-model="form.user" placeholder="请输入文章作者..." />
      </view>
      <view style="margin: 10px 0;display: flex;flex-direction: row;align-items: center;justify-content: center;">
        <text>请选择封面图：</text>
        <uni-file-picker 
        	v-model="imageValue"  
        	file-mediatype="image"
        	mode="grid"
        	:limit="1"
        	@progress="progress" 
        	@success="success" 
        	@fail="fail" 
        	@select="select"
        />
      </view>
      <view style="padding: 20px 10px;background: #ededed;">
        <textarea v-model="form.outline" auto-height placeholder="请输入文章摘要..." />
      </view>
      <piaoyiEditor :values="values" :maxlength="3000" @changes="saveContens" :readOnly="readOnly" :photoUrl="photoUrl" :api="api" :name="name"/>
      <!-- <view style="border: 1px solid #aaaaaa;"></view> -->
<!--      <view class="">
            {{txt}}
      </view> -->
      <!-- <rich-text :nodes="txt"></rich-text> -->
      <view>
        <button type="primary" @click="push">发布</button>
      </view>
    </view>
  </view>
</template>

<script>
  import piaoyiEditor from '@/uni_modules/piaoyi-editor/components/piaoyi-editor/piaoyi-editor.vue';
  import api from '@/common/api/api.js'
  export default {
    data() {
      return {
        readOnly: false, //是否只读
        //photoUrl: 'http://localhost:9999', //服务器图片域名或者ip
        photoUrl: 'http://101.43.138.115:9999', //服务器图片域名或者ip
        api: '/file/upload', //上传图片接口地址
        txt: '',
        name: 'file',
        values: '',
        imageValue: [],
        form: {
          title: '',  // 标题
          outline: '',  // 摘要
          user: '骨康宝',  // 发布人
          cover: '', // 封面图片
          content: '' ,//内容
          time: ''
        },
      }
    },
    components: {
        piaoyiEditor
    },
    methods: {
      push(){
        this.form.content = this.txt
        const f = this.form
        console.log(f)
        if(f.title===''||f.outline===''||f.user===''||f.cover===''||f.content===''){
          wx.showToast({
          	title: '请填写完整！',
          	icon: 'none'
          })
          return;
        }
        f.time = Date.now()
        api.addArticle(f).then(res=>{
          console.log(res)
          if(res){
            uni.showToast({
              title: '添加资讯成功！',
              duration: 1500,
            })
            setTimeout(()=>{
              uni.navigateBack()
            },1500)
          }
        })
      },  
      back() {
        uni.navigateBack({
          delta: 1
        })
      },
      saveContens(e) {
        this.txt = e.html
      },
      bindTextAreaBlur: function (e) {
          console.log(e.detail.value)
      },
      onShareAppMessage(res) {
          if (res.from === 'button') { // 来自页面内分享按钮
              console.log(res.target)
          }
          return {
              title: '多功能富文本编辑器！',
              path: '/pages/editor/editor'
          }
      },
      onShareTimeline(res) {
          if (res.from === 'button') { // 来自页面内分享按钮
              console.log(res.target)
          }
          return {
              title: '多功能富文本编辑器！'
          }
      },
      // 获取上传状态
      select(e){
        console.log('选择文件：',e.tempFilePaths[0])
        uni.uploadFile({
        	// url: 'http://localhost:9999/file/upload',
        	url: 'http://101.43.138.115:9999/file/upload',
        	filePath: e.tempFilePaths[0],
        	name: 'file',
        	formData: {},
        	success: (uploadFileRes) => {
            console.log(uploadFileRes)
        		var obj = uploadFileRes.data
        		if (obj!= null) {
        			this.form.cover = obj
        			wx.showToast({
        				title: '图片上传成功！',
        				icon: 'none'
        			})
        		} else {
        			wx.showToast({
        				title: '上传图片出错了！',
        				icon: 'none'
        			})
        		}
        	},
        });
      },
      // 获取上传进度
      progress(e){
        console.log('上传进度：',e)
      },
      
      // 上传成功
      success(e){
        console.log('上传成功')
      },
      
      // 上传失败
      fail(e){
        console.log('上传失败：',e)
      }
    }
  }
</script>

<style>
.container {
		padding: 10px;
	}

	#editor {
		width: 100%;
		height: 300px;
		background-color: #CCCCCC;
	}

	button {
		margin-top: 10px;
	}
</style>
