<template>
  <nav class="menu-container">
    <router-link
      v-for="item in items"
      :key="item.link"
      :to="{ name: item.name }"
      :exact="item.exact"
      active-class="selected"
      exact-active-class=""
    >
      <!-- 
      active-class  更改匹配样式
      exact-active-class  更改精确匹配样式    
     -->
      <Icon :type="item.icon" />
      <span>{{ item.title }}</span>
    </router-link>
  </nav>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  name: "Menu",
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        { name: "Home", title: "首页", icon: "home", exact: true },
        { name: "Blog", title: "文章", icon: "blog", exact: false }, // 激活状态是否要精确匹配
        { name: "About", title: "关于我", icon: "about", exact: true },
        { name: "Project", title: "项目&效果", icon: "code", exact: true },
        { name: "Message", title: "留言板", icon: "chat", exact: true },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.menu-container {
  @itemHeight: 48px;
  a {
    text-decoration: none;
    color: @gray;
    line-height: @itemHeight;
    height: @itemHeight;
    display: flex;
    font-size: 16px;
    padding: 0 24px;
    &.selected {
      background: darken(@words, 3%); // darken 变暗 3%
    }
    .icon-container {
      font-size: 20px;
      margin-right: 10px;
    }
    &:hover {
      color: @primary;
    }
  }
}
</style>