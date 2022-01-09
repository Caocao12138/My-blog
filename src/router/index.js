import Vue from "vue";
import VueRouter from "vue-router"; // 导入路由插件
import routes from "./routes";
import webTitle from "@/utils/webTitle";

if (!window.VueRouter) {
    Vue.use(VueRouter); // 使用路由插件
}

// #配置路由
const router = new VueRouter({
    routes, //#路由匹配规则
    mode: "history" // 路由模式: 三种获取路径的方式
});

router.afterEach((to, from) => {
    // 当前页的网站标题
    if (to.meta.webTitle) {
        webTitle.setRouterTitle(to.meta.webTitle);
    }
})

export default router; // 导出router