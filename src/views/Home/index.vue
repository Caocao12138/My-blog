<template>
  <div
    v-loading="loading"
    class="home-container"
    ref="container"
    @wheel="handleWheel"
  >
    <ul
      class="carousel-container"
      :style="{ marginTop }"
      @transitionend="handleTransitionEnd"
    >
      <li v-for="item in data" :key="item.id">
        <Carouselitem :carousel="item" />
      </li>
    </ul>
    <div class="icon-up icon" v-show="index >= 1" @click="switchTo(index - 1)">
      <Icon type="arrowUp" />
    </div>
    <div
      class="icon-down icon"
      v-show="index < data.length - 1"
      @click="switchTo(index + 1)"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="indecator">
      <!-- 指示器/索引点 -->
      <li
        v-for="(item, i) in data"
        :key="item.id"
        :class="{ active: index === i }"
        @click="switchTo(i)"
      ></li>
    </ul>
  </div>
</template>

<script>
import Carouselitem from "./Carouselitem";
import Icon from "@/components/Icon";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Carouselitem,
    Icon,
  },
  data() {
    return {
      index: 0, // 当前轮播图的索引值 起始值为0
      containerHeight: 0, // 整个容器的高度
      switching: false, // 是否正在切换页中...
      /* 组件混入有此公共代码
      banners: [],
      isLoading: true, // 等待动画是否执行 */
    };
  },
  /* 组件混入有此公共代码
  // 注入的时候函数
  async created() {
    this.banners = await getBanners(); // 取到远程数据
    this.isLoading = false;
  }, */

  created() {
    this.$store.dispatch("banner/fetchBanner");
  },

  // 挂载后的函数
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight; // 获取整个容器的高度
    window.addEventListener("resize", this.handleResize);
  },
  // 销毁组件后的函数
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
    ...mapState("banner", ["loading", "data"]),
  },
  methods: {
    // 索引点点击切换页函数
    switchTo(i) {
      this.index = i;
    },

    // 滚轮切换页函数
    handleWheel(e) {
      // #测试代码
      // console.log("鼠标滚动距离: " + e.deltaY);
      // console.log("下一页可以执行",this.index < this.banners.length - 1);
      // console.log("上一页可以执行",this.index > 0);
      if (this.switching) {
        // 正在切换页中
        return;
      } else {
        if (e.deltaY >= 100 && this.index < this.data.length - 1) {
          this.switching = true;
          // console.log("下一页");
          this.index++;
        } else if (e.deltaY <= -100 && this.index > 0) {
          // -1 >大于 -100
          this.switching = true;
          // console.log("上一页");
          this.index--;
        }
      }
    },
    // 监听过渡动画结束函数
    handleTransitionEnd() {
      // console.log("过度效果结束");
      this.switching = false;
    },
    handleResize() {
      console.log(
        "获取整个容器的高度成功",
        (this.containerHeight = this.$refs.container.clientHeight)
      );
      this.containerHeight = this.$refs.container.clientHeight; // 获取整个容器的高度
    },
  },
};
</script>


<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";
// #总内容区
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden; // 触发bfc,避免外边距合并

  // #测试代码
  // width: 60%;
  // height: 30%;
  // border: 4px red solid;
  // overflow: visible;
  // margin: 160px auto;
  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }
}
// 总内容区 - ul
.carousel-container {
  width: 100%;
  height: 100%;
  transition: 600ms;

  li {
    width: 100%;
    height: 100%;
  }
}

// #上下箭头
.icon {
  .self-center();
  /* .self-center(@pos: absolute) {
    position: @pos;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
} */
  &:hover {
    color: lighten(@success, 6%); //Lighten 变亮
  }
  cursor: pointer;
  color: @gray;
  @gap: 24px;
  transform: translateX(-50%);
  &.icon-up {
    top: @gap;
    animation: jump-up 2s infinite;
  }
  &.icon-down {
    top: auto;
    bottom: @gap;
    animation: jump-down 2s infinite;
  }
  .icon-container {
    font-size: 32px;
  }
}
@jump: 12px;
@keyframes jump-up {
  0% {
    transform: translate(-50%, @jump);
  }
  50% {
    transform: translate(-50%, -@jump);
  }
  100% {
    transform: translate(-50%, @jump);
  }
}
@keyframes jump-down {
  0% {
    transform: translate(-50%, -@jump);
  }
  50% {
    transform: translate(-50%, @jump);
  }
  100% {
    transform: translate(-50%, -@jump);
  }
}

// #指示器/索引点
.indecator {
  position: absolute;
  right: 20px;
  top: 50%;
  // transform: translateY(-50%);
  @primary: 10px; // 原尺寸
  @present: 12px; // 现尺寸
  li {
    width: @primary;
    height: @primary;
    border-radius: 50%;
    background: #fff;
    margin-bottom: 12px;
    cursor: pointer;
  }
  .active {
    background: @success;
    // width: @present;
    // height: @present;
  }
}
</style>