<template>
  <div class="image-loader-container">
    <img
      v-if="!everythingDone"
      :src="placeHolder"
      alt=""
      class="place-holder"
    /><!-- 占位图 -->
    <img
      :src="src"
      alt=""
      @load="autoLoad"
      :style="{ opacity: originOpacity, transition: `${duration}ms` }"
    /><!-- 原始图 -->
  </div>
</template>

<script>
export default {
  name: "ImageLoader",
  props: {
    // 原始图片的路径
    src: {
      type: String,
      required: true,
    },
    // 原始图片加载完成前的占位图片
    placeHolder: {
      type: String,
      required: true,
    },
    // 原始图片加载完成后,切换到原始图经过的毫秒数
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      originLoad: false, // 原图加载: 没有完成
      everythingDone: false, // 所有事件完成: 没有
    };
  },
  computed: {
    originOpacity() {
      return this.originLoad ? 1 : 0;
    },
  },
  methods: {
    // #自动加载函数
    autoLoad() {
      this.originLoad = true;
      // console.log("原图自动加载完毕");
      setTimeout(() => {
        this.everythingDone = true;
        this.$emit("load");
      }, this.duration);
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    .self-fill();
    object-fit: cover;
  }
}
.place-holder {
  filter: blur(2vw);
}
</style>