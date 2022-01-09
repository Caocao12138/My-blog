<template>
  <ul class="right-list-container">
    <li v-for="(item, i) in list" :key="i">
      <span
        :class="{ active: item.isSelect }"
        @click="handleClick(item)"
        class="blogName"
        >{{ item.name }}</span
      >
      <span
        v-if="item.aside"
        class="aside"
        :class="{ active: item.isSelect }"
        @click="handleClick(item)"
        >{{ item.aside }}</span
      >
      <!-- 组件递归 -->
      <RightList :list="item.children" @select="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  props: {
    // [{name: "xxx", isSelect: true, children: [{name: "yyy", isSelect: false}]}]
    list: {
      type: Array,
      default: () => [], // 当默认值 为数组或对象 得让一个函数返回的值为对象或数组
    },
  },
  methods: {
    handleClick(item) {
      if (!item.isSelect) {
        // 没有选中的时候触发
        this.$emit("select", item);
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.right-list-container {
  list-style: none;
  padding: 0;
  .right-list-container {
    margin-left: 1em;
  }
  li {
    min-height: 36px;
    line-height: 36px;
    cursor: pointer;
    font-size: 14px;
    .active {
      color: @warn;
      font-weight: bold;
    }
    .blogName {
      letter-spacing: 1px;
    }
  }
}
.aside {
  width: 40px;
  font-size: 12px;
  margin-left: 2em;
  color: @gray;
}
</style>