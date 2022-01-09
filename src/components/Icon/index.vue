<template>
  <i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
const classMap = {
  home: "iconzhuye", //主页
  success: "iconzhengque", //成功
  error: "iconcuowu", //错误
  close: "iconguanbi", //关闭
  warn: "iconjinggao", //警告
  info: "iconxinxi", //信息
  blog: "iconblog", //博客
  code: "iconcode", //code(双箭头)
  about: "iconset_about_hov", //关于
  weixin: "iconweixin", //微信
  email: "iconemail", //邮箱
  github: "icongithub", //开源Github
  qq: "iconsign_qq", //QQ
  arrowUp: "iconiconfonticonfonti2copy", //上箭头
  arrowDown: "iconiconfonticonfonti2", //下箭头
  empty: "iconempty", //无数据
  chat: "iconliuyan", //留言
};
export const types = Object.keys(classMap); // 导出所有图标
export default {
  name: "Icon",
  props: {
    // 属性名
    type: {
      type: String, // 属性类型
      requitred: true,
    },
  },
  computed: {
    //#图标类样式函数
    fontClass() {
      return classMap[this.type];
    },
  },
};
</script>

<style>
/* @import "//at.alicdn.com/t/font_2484699_skl1k8fhpu.css";  */
@import "//at.alicdn.com/t/font_2164449_nalfgtq7il.css";
.iconfont {
  color: inherit;
  font-size: inherit;
}
</style>