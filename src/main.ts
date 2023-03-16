import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue'
import Layout from '@/components/Layout.vue'
import Icon from '@/components/Icon.vue'
import tagListModel from './models/tagListModel';

Vue.config.productionTip = false
// 引入全局 Nav 组件
Vue.component('Nav', Nav)
//引入全局 Layout 组件
Vue.component('Layout', Layout)
//引入全局 icons 组件
Vue.component('Icon', Icon)

window.tagList = tagListModel.fetch()
window.createTag = (name: string) => {
  const message = tagListModel.create(name)
  if(message === 'duplicated'){
    window.alert('标签名重复了')
  }else if(message === 'success'){
    window.alert('添加成功')
  }
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
