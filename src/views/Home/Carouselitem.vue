<template>
  <!-- 轮播图插件 -->
  <div
    class="carousel-item-container"
    ref="container"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div class="carousel-img" :style="imagePosition" ref="image">
      <ImageLoader
        :src="carousel.bigImg"
        :placeHolder="carousel.midImg"
        @load="this.showWords"
      />
    </div>
    <div class="title" ref="title">{{ carousel.title }}</div>
    <div class="description" ref="description">{{ carousel.description }}</div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  name: "Carouselitem",
  props: ["carousel"],
  components: {
    ImageLoader,
  },
  data() {
    return {
      titleWidth: 0,
      descriptionWidth: 0,

      containerSize: null, // 外层容器的尺寸
      innerSize: null, // 里层图片的尺寸

      mouseX: 0, // 鼠标的 横坐标
      mouseY: 0, // 鼠标的 纵坐标
    };
  },
  computed: {
    // 设置图片定位
    imagePosition() {
      if (!this.innerSize || !this.containerSize) {
        return;
      }
      const extraWidth = this.innerSize.width - this.containerSize.width;
      const extraHeight = this.innerSize.height - this.containerSize.height;
      // console.log("图片比外层容器多余的宽高", extraWidth, extraHeight);
      const left = (-extraWidth / this.containerSize.width) * this.mouseX;
      const top = (-extraHeight / this.containerSize.height) * this.mouseY;
      return {
        transform: `translate(${left}px,${top}px)`,
      };
    },
    // 优化-让图片开始默认为居中
    center() {
      return {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2,
      };
    },
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth; // 标题宽度
    this.descriptionWidth = this.$refs.description.clientWidth; // 文字宽度
    // console.log(this.titleWidth, this.descriptionWidth);

    this.setSize(); //执行设置外层容器内层图片的尺寸
    // 调整鼠标位置让图片默认为居中
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    window.addEventListener("resize", this.setSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.setSize);
  },
  methods: {
    // #文字显示动画函数
    showWords() {
      // title
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      this.$refs.title.clientWidth; // reflow 强行渲染一次 (回流)
      this.$refs.title.style.transition = "1.2s";
      this.$refs.title.style.width = this.titleWidth + "px";

      // description
      this.$refs.description.style.opacity = 1;
      this.$refs.description.style.width = 0;
      this.$refs.description.clientWidth; // reflow 强行渲染一次 (回流)
      this.$refs.description.style.transition = "2s 1.2s"; // 动画2s 延迟 1.8s(等待title动画结束再运行)
      this.$refs.description.style.width = this.descriptionWidth + "px";
    },
    // #设置外层容器内层图片的尺寸
    setSize() {
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight,
      };
      this.innerSize = {
        width: this.$refs.image.clientWidth,
        height: this.$refs.image.clientHeight,
      };
      // console.log("外层容器/图片尺寸",this.containerSize, this.innerSize);
    },
    // 鼠标移动函数
    handleMouseMove(e) {
      const rect = this.$refs.container.getBoundingClientRect(); // getBoundingClientRect 返回元素的大小及其相对于视口的位置
      this.mouseX = Math.ceil(e.clientX - rect.left);
      this.mouseY = Math.ceil(e.clientY - rect.top);
    },
    // 鼠标离开图片居中
    handleMouseLeave() {
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.carousel-item-container {
  width: 100%;
  height: 100%;
  color: #fff;
  position: relative;
  overflow: hidden;
}
.carousel-img {
  width: 110%;
  height: 110%;
  position: absolute;
  left: 0;
  top: 0;
  transition: 0.2s;
}
.title,
.description {
  position: absolute;
  left: 30px;
  letter-spacing: 3px; // 字间距
  color: #fff;
  font-weight: bold;
  text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
    0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);

  opacity: 0;
  overflow: hidden;
  white-space: nowrap;
}
.title {
  top: calc(50% + 40px);
  font-size: 1.8em;
}
.description {
  font-size: 1.2em;
  top: calc(50% + 92px);
}
</style>