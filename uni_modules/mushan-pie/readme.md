# css圆形饼图百分比


突然需要用到圆形百分比图就找了下，看到有个大佬发了一个js是做好的但是用的是jq做的放到uni上用不了，所有就把js代码拿过来自己修改了下。插件参考地址https://blog.csdn.net/weixin_33728268/article/details/89411706

虽然我们也能用charts去实现图形，但是就像大佬说的有点杀鸡用牛刀的感觉，有些图形其实只是需要简单的放上看而已。


调用插件 ：
```
import pie from '@/uni_modules/mushan-pie/components/mushan-pie/mushan-pie.vue';
components:{
	pie
},
```

页面调用插件：

```
<pie :number_value="0.2" :PieStyle="PieStyle" :PieText="'熟练100%'"></pie>
```

number_value 圆的百分比数值,1是百分百

PieText 中间显示的文本

PieStyle 是插件自定义参数

```
PieStyle:{
	circular: '100rpx',    // 当前圆的大小
	animite : false,        // 是否要有动画效果
	ring :0.75,             // 中间是空心的宽度，0是不显示，0.5是半圆大小
	color : '#F71F7E',       // 自定义饼图的颜色,
	numberShow :true,       // 是否要显示圆中间的文本
	numberSize:'12px',    	// 中间文字大小默认是12px
	numberColor:'#F71F7E',   // 中间文字字体颜色
	rotate : 0,             // 是否需要旋转图形
},
```