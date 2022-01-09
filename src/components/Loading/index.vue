<template>
  <div class="loading-container">
    <img :src="loadingUrl" alt="" />
    <p>加载中...</p>
  </div>
</template>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.loading-container {
  .self-center();
}
img {
  position: relative;
}
p {
  margin: 0;
  font-size: 1.2em;
  height: 32px;
  line-height: 32px;
  position: absolute;
  white-space: nowrap;
  left: -20%;
}
</style>

<script>
import loadingUrl from "@/assets/loading.svg";
export default {
  data() {
    return {
      loadingUrl: loadingUrl,
    };
  },
};
</script>