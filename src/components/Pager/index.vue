<template>
  <!-- 只有总页数大于1时,元素才会显示 -->
  <div class="pager-container" v-if="pageNumber > 1">
    <a @click="handClick(1)" :class="{ disabled: current === 1 }">|&lt;&lt;</a>
    <a @click="handClick(current - 1)" :class="{ disabled: current === 1 }">
      |&lt;&lt;
    </a>
    <a
      @click="handClick(n)"
      v-for="(n, i) in numbers"
      :key="i"
      :class="{ active: n === current }"
    >
      {{ n }}
    </a>
    <a
      @click="handClick(current + 1)"
      :class="{ disabled: current === pageNumber }"
      >&gt;&gt;</a
    >
    <a
      @click="handClick(pageNumber)"
      :class="{ disabled: current === pageNumber }"
      >&gt;&gt;|</a
    >
  </div>
</template>
<script>
export default {
  name: "Pager",
  // #返回的属性
  props: {
    // 当前页码
    current: {
      tyep: Number,
      default: 1,
    },
    // 总数据量
    total: {
      tyep: Number,
      default: 0,
    },
    // 当前页显示那几页
    limit: {
      tyep: Number,
      default: 10,
    },
    // 当前页可见页码数量
    visibleNumber: {
      tyep: Number,
      default: 10,
    },
  },
  // #计算
  computed: {
    // 总页数函数
    pageNumber() {
      // ceil: 向上取整
      // floor: 向下取整
      return Math.ceil(this.total / this.limit);
    },
    // 获取当前页最小的页码
    visibleMin() {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    // 获取当前页最大的页码
    visibleMax() {
      let max = this.visibleMin + (this.visibleNumber - 1);
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      return max;
    },
    // 全部页码
    numbers() {
      let nums = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        nums.push(i);
      }
      return nums;
    },
  },
  // #方法
  methods: {
    // 手动点击改变页码
    handClick(newPage) {
      // 抛出一个事件
      this.$emit("pageChange", newPage);
      /* $emit() 表示在组件中抛出一个事件
          参数1: 抛出事件(时间名)   type: String
          参数2: 事件参数   type: 所有类型
      */
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
/* ~@
    ~@: 在style里表示src目录
    @ : 在script里表示src目录
*/
.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
a {
  cursor: pointer;
  color: @primary;
  margin: 0 6px;
  &.disabled {
    color: @lightWords;
    cursor: not-allowed;
  }
  &.active {
    color: @words;
    font-weight: bold;
    cursor: text;
  }
}
</style>