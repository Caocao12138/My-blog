// #路由匹配规则文件

// import Home from "@/views/Home";
// import About from "@/views/About";
// import Blog from "@/views/Blog";
// import BlogDetail from "@/views/Blog/Detail";
// import Project from "@/views/Project";
// import Message from "@/views/Message";


/*  

component: () => import("@/views/Home");

 相当于: 

component: () => ({
     component: import("@/views/Home");
})
 还可以加载其他属性,例如: 
  loading: () => ({})
  error: () => ({})
  delay: 200
  timeout: 3000
  
 */

export default [
  {
    name: "Home",
    path: "/",
    component: () => import(/* webpackChunkName: "home" */"@/views/Home"),
    meta: {
      webTitle: "主页"
    }
  }, // name: "路由名字"
  {
    name: "About", path: "/about", component: () => import(/* webpackChunkName: "about" */"@/views/About"), meta: {
      webTitle: "关于我"
    }
  },
  {
    name: "Blog", path: "/article", component: () => import(/* webpackChunkName: "blog" */"@/views/Blog"), meta: {
      webTitle: "文章"
    }
  },
  {
    name: "CategoryBlog", path: "/article/cate/:categoryId", component: () => import(/* webpackChunkName: "categoryId" */"@/views/Blog"), meta: {
      webTitle: "文章"
    }
  },
  //name: 文章分类 // :catagoryId 冒号后面为动态路由配对,categoryId为动态路由的名字. 可以有多个动态路由配对
  {
    name: "BlogDetail", path: "/article/:id", component: () => import(/* webpackChunkName: "blogDetail" */"@/views/Blog/Detail"), meta: {
      webTitle: "文章详情"
    }
  },
  {
    name: "Project", path: "/project", component: () => import(/* webpackChunkName: "project" */"@/views/Project"), meta: {
      webTitle: "项目&效果"
    }
  },
  {
    name: "Message", path: "/message", component: () => import(/* webpackChunkName: "message" */"@/views/Message"), meta: {
      webTitle: "留言板"
    }
  },
]