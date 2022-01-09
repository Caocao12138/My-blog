// 网站标题控制
// 路由标题  // 仓库的siteTitle

let routerTitle = "", siteTitle = "";
function setTitle() {
    if (!routerTitle && !siteTitle) {
        document.title = "加载中...";
    } else if (routerTitle && !siteTitle) {
        document.title = routerTitle
    } else if (!routerTitle && siteTitle) {
        document.title = siteTitle
    } else {
        document.title = `${routerTitle}-${siteTitle}`
    }
}
export default {
    setRouterTitle(title) {
        routerTitle = title;
        setTitle()
        // console.log("路由标题", title)
    },
    setSiteTitle(title) {
        siteTitle = title;
        setTitle()
        // console.log("仓库标题", title)
    }
}