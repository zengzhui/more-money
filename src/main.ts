import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Nav from "@/components/Nav.vue";
import Layout from "@/components/Layout.vue";
import Icon from "@/components/Icon.vue";

Vue.config.productionTip = false;
// 引入全局 Nav 组件
Vue.component("Nav", Nav);
//引入全局 Layout 组件
Vue.component("Layout", Layout);
//引入全局 icons 组件
Vue.component("Icon", Icon);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

// if (document.documentElement.clientWidth > 500) {
//   window.alert('请使用手机打开本页面,以保证浏览效果')
//   const img = document.createElement("img");
//   img.src = "./qrcode.png";
//   img.style.position = "fixed";
//   img.style.left = "50%";
//   img.style.top = "50%";
//   img.style.transform = "translate(-50%,-50%)";
//   img.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.25)'
//   document.body.appendChild(img);
// }
