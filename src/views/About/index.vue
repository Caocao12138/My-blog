<template>
  <div class="about-container" v-loading="loading || !dataIsLoading">
    <iframe
      class="about-content"
      :src="data"
      frameborder="0"
      @load="dataIsLoading = true"
    ></iframe>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      dataIsLoading: false, // data数据没有加载完成,继续v-loading
    };
  },
  computed: mapState("about", ["data", "loading"]),
  created() {
    this.$store.dispatch("about/fetchAbout");
  },
};
</script>

<style lang="less" scoped>
.about-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.about-content {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
}
</style>