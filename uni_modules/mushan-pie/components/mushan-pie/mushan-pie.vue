<template>
	<view>
		
		
		<view :style="pie_style" class="pie">
			<text v-if="PieStyle.numberShow" :style="strong_style" class="strong">{{PieText.replace(/\\n/,'\n')}}</text>
      <text v-if="PieStyle.numberShow" :style="strong_style" class="strong2">{{PieText2}}</text>
			<view class="div_pub div_1" :style="styleMb+div_1_style"></view>
			<view class="div_pub div_2" :style="styleMb+div_2_style"></view>
			<view :style="ringStyle" v-if="PieStyle.ring" class="ring"></view>
		</view>
		
		

		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				styleMb:'',
				
				pie_style:'',
				strong_style:'',
				div_1_style:'',
				div_2_style:'',
				ringStyle:'',
				
			};
		},
		props: {
			//参数
			PieText:{
				type: String,
				default: ''
			},
      //参数
      PieText2:{
      	type: String,
      	default: ''
      },
			//参数
			PieStyle:{
				type: Object,
				default: ''
			},
			//圆的百分比数值
			number_value: {
				type: Number,
				default: ''
			},
		},
		mounted() {
			this.piejs();
		},
		methods: {
			
			piejs(){
				let isAnimate = this.PieStyle.animite, // 是否需要动画
					isRing = this.PieStyle.ring,  // 是否空心
					color = this.PieStyle.color,  // 自定义颜色
					isShowNumber = this.PieStyle.numberShow, // 是否显示中间的文本
					rotate = this.PieStyle.rotate,    // 是否旋转
					circular = this.PieStyle.circular,  //圆的大小
					numbersize = this.PieStyle.numberSize,  //中间文字大小
					numberColor = this.PieStyle.numberColor;   //中间文字颜色
					
				//空心操作
				if (isRing) {
					let w = isRing*100;
					this.ringStyle = 'width:'+ w +'%;'+
								'height:'+ w +'%;'+
								'top:'+ (50-w/2) +'%;'+
								'left:'+ (50-w/2) +'%;'+
								'background:#fff;';
				}
				
				//设置圆的宽高
				this.pie_style = 'width:'+circular+';height:'+circular+';line-height:'+circular+';'
				
				//设置文字大小，和颜色
				this.strong_style = 'font-size: '+numbersize+';color: '+numberColor+';'
				
				//解决边框毛边问题
				this.styleMb = `border-top-right-radius: ${circular};border-bottom-right-radius: ${circular};`
				
				//自定义颜色操作
				let div_2_style = ''
				if(color){
					this.pie_style = ''+this.pie_style+'background-image:linear-gradient(to right, transparent 50%, '+ color +' 0)'
					div_2_style = 'background:'+color+''
				}
				
				//中间百分比显示操作和动画
				if (this.number_value > 0.5) {
					if (isAnimate) {
						setTimeout(()=>{
							this.div_1_style = 'transform:rotate(0.5turn)'
						},50);
						setTimeout(()=>{
							this.div_2_style = ''+div_2_style+';opacity:1;transform:rotate('+ (this.number_value - 0.5) +'turn)'
						},700);
					}else{
						this.div_1_style = 'transform:rotate(0.5turn)'
						this.div_2_style = ''+div_2_style+';opacity:1;transform:rotate('+ (this.number_value - 0.5) +'turn)'
					}
				}else{
					if (isAnimate){
						setTimeout(()=>{
						    this.div_1_style = 'border-right: 1rpx solid transparent;height: calc(100%);transform:rotate('+ this.number_value +'turn)'
						},50);
					}else{
						this.div_1_style = 'border-right: 1rpx solid transparent;height: calc(100%);transform:rotate('+ this.number_value +'turn)'
					}
				}
				
				
				
				//旋转操作
				if(rotate){
					this.pie_style = 'transform:rotate('+ rotate +'deg)'
					this.strong_style = 'transform:rotate('+ -rotate +'deg)'
				}

				
			}
			
			
		}
	}
</script>

<style scoped lang="scss">
	.pie{
		position: relative;
		z-index: 0;
		left: 0;
		top: 0;
		border-radius: 100%;
		text-align: center;
		color: #000;
		background-color: #f0f0f0;
		background-image: linear-gradient(to right, transparent 50%, yellowgreen 0);
		cursor: pointer;
		.div_pub{
			position: absolute;
			opacity:3;
			top: 0;
			width: 50%;
			height: 100%;
			left: 50%;
			transform: rotate(0turn);
			transform-origin: center left;
			transition: transform 0.7s linear;
		}
		>.div_1{
			background-color: inherit;
			z-index: -2;
		}
		>.div_2{
			opacity: 0;
			z-index: -1;
			background-color: yellowgreen;
		}
		.strong{
			position: absolute;
			font-size: 24rpx;
			width: 100%;
			left: 0;
			z-index: 1;
		}
    .strong2{
    	position: absolute;
    	font-size: 24rpx;
    	width: 100%;
    	left: 0;
      top: 30rpx;
    	z-index: 1;
    }
		.ring{
			display: block;
			border-radius: 50%;
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 0;
		}
	}
</style>