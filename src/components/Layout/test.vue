<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <div class="left">左边栏</div>
      </template>
      <div class="mian">
        中间区域中间区域中间区域中间区域中间区域中间区域中间区域中间区域中间区域中间区域中间区域中间区域中间区域中间区域中间区域中间区域中间区域中间区域中间区域中间区域
      </div>
      <template #right>
        <div class="right">右边栏</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./";
export default {
  components: {
    Layout,
  },
};
</script>

<style scoped>
.test-container {
  width: 60%;
  height: 800px;
  border: 2px solid;
  white-space: nowrap;
}
.left {
  width: 100%;
  height: 100%;
  background: yellow;
}
.main {
  width: 100%;
  height: 100%;
  background: blue;
}
.right {
  width: 100%;
  height: 100%;
  background: red;
}
</style>