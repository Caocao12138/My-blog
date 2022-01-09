<template>
  <div @click="handleClickTop" v-show="show" class="to-top-container">Top</div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destroyed() {
    console.log("Top,滚动条监听销毁");
    this.$bus.$off("mainScroll", this.handleScroll);
  },

  methods: {
    handleScroll(dom) {
      if (!dom) {
        this.show = false;
        return;
      }
      this.show = dom.scrollTop >= 500;
    },
    handleClickTop() {
      this.$bus.$emit("setMainScroll", 0); // 参数0: 设置滚动条位置
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.to-top-container {
  background: @primary;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  color: #fff;
  font-weight: bold;
  line-height: 60px;
  text-align: center;

  position: absolute;
  right: 60px;
  bottom: 40px;
  z-index: 999;
  cursor: pointer;
}
</style>