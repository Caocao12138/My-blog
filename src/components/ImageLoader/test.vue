<template>
  <div class="test-container">
    <ImageLoader
      placeHolder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      @load="autoload"
      :duration="3000"
    />
  </div>
</template>

<script>
import ImageLoader from "./";
export default {
  components: {
    ImageLoader,
  },
  methods: {
    autoload() {
      console.log("自动加载事件函数触发,图片加载完毕");
    },
  },
};
</script>

<style scoped>
.test-container {
  width: 600px;
  height: 400px;
  border: 2px solid;
  margin: 0 auto;
}
</style>