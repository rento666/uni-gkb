
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import store from '@/store/store.js'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
    store
})
app.$mount()
// #endif

// 封装弹窗方法
uni.$showMsg = function (title = '数据加载失败！',icon = 'none') {
  uni.showToast({
    title: title,
    icon: icon
  })
}

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif