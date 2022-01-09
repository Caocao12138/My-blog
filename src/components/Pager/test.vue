<template>
  <div>
    <Pager :current="current" :total="total" @pageChange="handChange($event)" />
    <Pager
    :current="current"
    :total="total"
    @pageChange="handChange"
  />
  </div>
</template>

<script>
import Pager from "./";
export default {
  components: {
    Pager,
  },
  data() {
    return {
      current: 1,
      total: 302,
    };
  },
  methods: {
    handChange(newPage) {
      if (newPage < 1) {
        newPage = 1;
      }
      if (newPage > this.pageNumber) {
        newPage = this.pageNumber;
      }
      if (newPage == this.current) {
        return;
      }
      console.log("页码改变了,App", newPage);
      this.current = newPage;
      // 后续还要添加 "正在加载数据组件"
    },
  },
};
</script>

<style scoped>
</style>