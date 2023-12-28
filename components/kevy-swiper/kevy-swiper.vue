<template>
	<view>
		<view :style="{height: height+'rpx', width: width+'rpx'}" class="swiper-container" @touchstart="touchStart" @touchend="touchEnd">
			<view class="swiper-item" v-for="(item, index) in list" :key="index"
				:style="{transform: styleList[index].transform, zIndex: styleList[index].zIndex, opacity: styleList[index].opacity,display:styleList[index].display}">
				<view class="wrap">
					<image :id="index" @click="itemClick(index)" class="image" :src="item"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			/**
			 * 图片url列表
			 */
			list: {
				type: Array,
				default: []
			},
			/**
			 * swiper高度--单位rpx
			 */
			height:{
				type: Number,
				default: 690
			},
			/**
			 * swiper宽度--单位rpx
			 */
			width:{
				type: Number,
				default: 640
			},
			/**
			 * 是否自动播放
			 */
			autoPlay:{
				type: Boolean,
				default: false
			},
			/**
			 * 自动播放间隔毫秒
			 */
			autoPlayInterval:{
				type: Number,
				default: 5000
			},
		},
		data() {
			return {
				curr:0,
				/**
				 * 开始触摸点坐标
				 */
				start: {
					x: 0,
					y: 0
				},
				/**
				 * 每个item样式列表
				 */
				styleList: [],
				timer:undefined,
			};
		},
		created() {
			this.list.forEach((item, index) => {
				this.styleList.push(this.addStyle(index))
			});
			this.openTimer();
		},
		methods: {
			
			//开启自动定时器
			openTimer(){
				if(this.autoPlay === true){
					this.timer = setInterval(() => {
						this.curr = (this.curr==this.list.length-1)?0:(this.curr+1);
						this.toSlideLeft();
					},this.autoPlayInterval);
				}
			},
			//关闭自动定时器
			closeTimer(){
				if(this.autoPlay === true){
					clearInterval(this.timer);
					this.timer = undefined;
				}
			},
			/**
			 * 计算每个item样式
			 * @param {Object} idx
			 */
			addStyle(idx) {
				const len = this.list.length;
				if (idx > len / 2) {
					//这里是数组后一半的item放在左边,平移位置由远到近，例如共6个，后2个处理在这里
					var left = len - idx
					return {
						transform: 'scale(' + (1 - left / 10) + ') translate(-' + (left * 9) + '%,0px)',
						zIndex: 9999 - left,
						opacity: 0.8 / left,
						display: idx == len - 1 ? "block" : "none"
					}
				} else {
					//这里是数组前一半item放在右边，平移位置由近到远，例如共6个，前4个处理在这里，这里第一个元素始终放在中间位置
					return {
						transform: 'scale(' + (1 - idx / 10) + ') translate(' + (idx * 9) + '%,0px)',
						zIndex: 9999 - idx,
						opacity: 0.8 / (idx === 0 ? 0.8 : idx),
						display: idx > 1 ? "none" : "block"
					}
				}
			},
			/**
			 * 触摸开始
			 * @param {Object} e
			 */
			touchStart(e) {
				this.start.x = e.changedTouches[0] ? e.changedTouches[0].pageX : 0;
				this.start.y = e.changedTouches[0] ? e.changedTouches[0].pageY : 0;
				this.closeTimer();
			},
			/**
			 * 触摸结束
			 * @param {Object} e
			 */
			touchEnd(e) {
				var len = this.styleList.length;
				var touchIdx = Number(e.target.id)
				let tx = e.changedTouches[0].pageX - this.start.x
				let ty = e.changedTouches[0].pageY - this.start.y
				if (Math.abs(tx) > Math.abs(ty)) {
					//左右方向滑动
					if(tx === 0){//点击事件拦截
						return;
					}
					if (tx < 0) {
						// 向左滑动--手指向左滑动
						this.curr = (touchIdx===len-1)?0:(touchIdx+1)
						this.toSlideLeft()
					} else if (tx > 0) {
						// 向右滑动--手指向右滑动
						this.curr = (touchIdx===0)?(len-1):(touchIdx-1);
						this.toSlideRight()
					}
				} else {
					//这里就不处理上下方向的事件了，有此需求的同仁可以在这里写逻辑
					//上下方向滑动
					if(tx === 0){//点击事件拦截
						return;
					}
					if (ty < 0) {
						// 向上滑动
					} else if (ty > 0) {
						// 向下滑动
					}
				}
				this.openTimer()
			},
			// 向左滑动--手指向左滑动
			toSlideLeft(){
				var newStyleList = JSON.parse(JSON.stringify(this.styleList))
				var last = [newStyleList.pop()]
				newStyleList = last.concat(newStyleList)
				this.styleList = newStyleList
				//触发change事件
				this.$emit('change', this.curr);
			},
			// 向右滑动--手指向右滑动
			toSlideRight(){
				var newStyleList = JSON.parse(JSON.stringify(this.styleList))
				var first = [newStyleList.shift()]
				newStyleList = newStyleList.concat(first)
				this.styleList = newStyleList
				//触发change事件
				this.$emit('change', this.curr);
			},
			/**
			 * 当前item点击返回索引下标
			 * @param {Object} idx
			 */
			itemClick(idx) {
				this.$emit('click', idx);
			}
		}
	}
</script>

<style lang="scss">
	.swiper-container {
		box-sizing: border-box;
		height: 690rpx;
		width: 100%;
		overflow: hidden;
		position: relative;

		.swiper-item {
			height: 100%;
			width: 100%;
			position: absolute;
			top: 0;
			left: 0;
			transition: all .5s;

			.wrap {
				height: 100%;
				width: 90%;
        // height: 200rpx;
        // width: 200rpx;
				margin: 2rpx auto;
				.image {
					height: 100%;
					width: 100%;
					border-radius: 10rpx;
					// box-shadow: 0 0 10rpx #333;//加阴影的话去掉注释即可
				}
			}
		}
	}
</style>
