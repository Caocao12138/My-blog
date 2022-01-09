<template>
  <div class="pager-container" v-if="pageNumber > 1">
    <a @click="handSwitch(1)" :class="{ notClick: current == 1 }">|&lt;&lt;</a>
    <a @click="handSwitch(current - 1)" :class="{ notClick: current == 1 }"
      >&lt;&lt;</a
    >
    <a
      @click="handSwitch(n)"
      v-for="(n, i) in numbers"
      :key="i"
      :class="{ active: n == current }"
      >{{ n }}
    </a>
    <a
      @click="handSwitch(current + 1)"
      :class="{ notClick: current == pageNumber }"
      >&gt;&gt;</a
    >
    <a
      @click="handSwitch(pageNumber)"
      :class="{ notClick: current == pageNumber }"
      >&gt;&gt;|</a
    >
  </div>
</template>

<script>
export default {
  name: "Pager-my",
  // #属性
  props: {
    current: {
      // 含义: 当前页码
      type: Number,
      default: 1,
    },
    total: {
      // 含义: 总页数
      type: Number,
      default: 0,
    },
    limit: {
      // 含义: 页容量(设置一页可以放多少数据)
      type: Number,
      default: 10,
    },
    visibleNumber: {
      // 含义: 可见页码数(设置当前一组显示几个分页)
      type: Number,
      default: 10,
    },
  },
  // #计算数据
  computed: {
    pageNumber() {
      // 总页数
      let pn = Math.ceil(this.total / this.limit);
      return pn;
    },
    visibleMin() {
      // 当前页最小的页码
      let min = this.current - Math.floor(this.visibleNumber / 2);
      // Math.floor 小数向上取整
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    // 当前页最大的页码
    visibleMax() {
      let max = this.visibleMin + Math.ceil(this.visibleNumber - 1);
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      return max;
    },
    numbers() {
      // 总页数 dom树
      let nums = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        nums.push(i);
      }
      return nums;
    },
  },
  methods: {
    // #手动点击切换页
    handSwitch(newPage) {
      if (newPage < 1) {
        console.log("到1了");
        newPage = 1;
      }
      if (newPage > this.pageNumber) {
        console.log("到最后了");
        newPage = this.pageNumber;
      }
      if (this.current == newPage) {
        console.log("多次重复点击");
        return;
      }
      this.$emit("pageChange", newPage);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
.pager-container {
  display: flex;
  justify-content: center;
  margin: 80px 0px;
  a:hover {
    cursor: pointer;
    font-weight: bolder;
  }
}
a {
  margin: 0 10px;
}
.active {
  color: @primary;
  font-weight: bold;
}
.notClick {
  cursor: not-allowed;
  color: @lightWords;
}
</style>