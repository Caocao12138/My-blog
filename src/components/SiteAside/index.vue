<template>
  <div class="site-aside-container" v-if="data">
    <Avatar
      url="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=155346741,3953923104&fm=26&gp=0.jpg"
      :size="120"
    />
    <h1 class="title">{{ data.siteTitle }}</h1>
    <div class="menu">
      <Menu />
    </div>
    <div class="contactMy">
      <ContactMy />
    </div>
    <p class="footer">{{ data.icp }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Avatar from "@/components/Avatar";
import ContactMy from "./ContactMy";
import Menu from "./Menu";
export default {
  name: "SiteAside",
  components: {
    Avatar,
    ContactMy,
    Menu,
  },
  computed: mapState("setting", ["data"]),
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.site-aside-container {
  background-color: @dark;
  width: 100%;
  height: 100%;
  padding: 40px 0 20px;
  box-sizing: border-box;
  overflow-x: hidden;
  // overflow-y: scroll;
  overflow-y: hidden;
}
.avatar-container {
  margin: 0 auto;
}
.footer {
  color: @words;
  font-size: 12px;
  text-align: center;
}
.title {
  font-size: 1em;
  color: #fff;
  text-align: center;
  letter-spacing: 8px; // 字间距
}
.menu {
  margin: 40px 0;
}
.contactMy {
  margin: 0 0 120px;
}
</style>