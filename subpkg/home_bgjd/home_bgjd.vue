<template>
  <view>
    <!-- 标题栏 -->
    <uni-nav-bar :border="false" fixed status-bar left-icon="left" @clickLeft="back" backgroundColor="#23EBB9" title="报告解读" />
    <uni-section title="快捷跳转" type="line"></uni-section>
    <uni-grid :column="3" >
      <uni-grid-item v-for="(item, index) in list" :index="index" :key="index">
        <navigator class="grid-item-box" :url="item.url">
          <image :src="item.src" class="image" mode="aspectFill" />
          <text class="text">{{ item.text }}</text>
        </navigator>
      </uni-grid-item>
    </uni-grid>
    <o-empty height="400rpx" bg="" />
  </view>
</template>

<script>
  export default {
    data() {
      return {
        list: [
          {src: '/static/btn_icons/3.png',text:'睡眠',url: '/subpkg/home_sm/home_sm'},
          {src: '/static/btn_icons/4.png',text:'饮食',url: '/subpkg/home_ys/home_ys'},
          {src: '/static/btn_icons/5.png',text:'运动',url: '/subpkg/home_yd/home_yd'}
        ]
      };
    },
    methods:{
      // 导航栏返回事件
      back() {
        uni.navigateBack()
      },
    }
  }
</script>

<style lang="scss">
.image {
		width: 25px;
		height: 25px;
	}

	.text {
		font-size: 14px;
		margin-top: 5px;
	}
.grid-item-box {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
	}
</style>
