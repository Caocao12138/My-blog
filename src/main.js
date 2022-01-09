// 入口文件
import "./mock";
import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from "@/router";

// 全局弹窗
import showMessage from "./utils/showMessage";
Vue.prototype.$showMessage = showMessage; // 导出Vue实例

// 导入自定义配置
import "./eventBus";

// 导入仓库
import store from "./store";
store.dispatch("setting/fetchSetting")

// #注册全局指令
// v-loading 加载中
import vLoading from "./directives/loading";
// v-lazy 图片懒加载
import vLazy from "./directives/lazy";
Vue.directive("loading", vLoading);
Vue.directive("lazy", vLazy)





new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");


// Api获取数据测试
// import * as  blogAip from "./api/blog.js";

// blogAip.getBlog("dada").then(r => {
//   console.log(r)
// });

// blogAip.postComment({
//   nickname: "昵称",
//   comment: "评论内容,纯文本",
//   blogId: "123"
// }).then(r => {
//   console.log(r)
// })

// blogAip.getComments("213").then(r => {
//   console.log(r)
// })



// #事件总线
// import eventBus from "./eventBus";
// function handler1(data) {
//   console.log("handler1", data)
// }

// function handler2(data) {
//   console.log("handler2", data)
// }

// eventBus.$on("event1", handler1);
// eventBus.$on("event1", handler2);
// eventBus.$on("event2", handler1);

// window.eventBus = eventBus;
// window.handler1 = handler1;
// window.handler2 = handler2;


// getSetting获取数据测试
// import { getSetting } from "./api/setting";

// getSetting().then((resp) => {
//   console.log(resp);
// });
