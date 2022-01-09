<template>
  <!-- select选中状态未完成 -->
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="tocWithSelect" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList.vue";
import { debounce } from "@/utils";
export default {
  name: "BlogTOC", // 文章详情页右边栏
  components: { RightList },
  props: {
    toc: {
      type: Array,
    },
  },

  data() {
    return {
      activeAnchor: "",
    };
  },

  computed: {
    // 根据toc属性以及activeAnchor得到带有isSelect属性的toc数组
    tocWithSelect() {
      const getTOC = (toc = []) => {
        return toc.map((t) => ({
          ...t,
          isSelect: t.anchor === this.activeAnchor,
          children: getTOC(t.children),
        }));
      };
      return getTOC(this.toc);
    },

    // 根据toc.anchor得到他们对应的元素
    doms() {
      const doms = [];

      const addToDoms = (toc) => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor));
          if (t.children && t.children.length) {
            addToDoms(t.children);
          }
        }
      };
      addToDoms(this.toc);
      return doms;
    },
  },
  created() {
    this.setSelectDebouce = debounce(this.setSelect, 50);
    this.$bus.$on("mainScroll", this.setSelectDebouce);
  },

  destroyed() {
    this.$bus.$off("mainScroll", this.setSelectDebouce);
  },

  methods: {
    handleSelect(item) {
      //   console.log(item);
      location.hash = item.anchor;
    },

    // 设置data数据 activeAnchor为当前选中的值
    setSelect(scrollDom) {
      // 元素不存在
      if (!scrollDom) {
        return;
      }
      // console.log("BlogTOC文件 setSelec函数 滚动了");
      this.activeAnchor = ""; // 清空上一次的选中状态
      // document.body.getBoundingClientRect() 获取body的 宽高\上下左右
      const range = 200;
      for (const dom of this.doms) {
        if (!dom) {
          // 判断当前dom元素是否被选中
          continue;
        }
        const top = dom.getBoundingClientRect().top; // 得到当前元素的离视口的高度
        if (top >= 0 && top <= range) {
          // 在规定范围内,选中当前元素
          this.activeAnchor = dom.id;
          return;
        } else if (top > range) {
          // 比规定范围大,在视口下面
          return;
        } else {
          // 在视口上面
          this.activeAnchor = dom.id;
        }
      }
    },
  },
};
</script>
<style lang="less" scoped>
.blog-toc-container {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
  h2 {
    font-weight: bold;
    letter-spacing: 3px;
    font-size: 1.2em;
    margin: 0;
  }
}
</style>