<template>
  <div class="blog-comment-container">
    <MessageArea
      title="评论列表"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData.js";
import { getComments, postComment } from "@/api/blog.js";
import { showMessage } from "@/utils";
import { debounce } from "@/utils";

export default {
  mixins: [fetchData({ total: 0, rows: [] })],
  components: {
    MessageArea,
  },
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },

  created() {
    this.setHandleDom = debounce(this.handleDom, 500);
    this.$bus.$on("mainScroll", this.setHandleDom);
  },

  destroyed() {
    console.log("BlogComment滚动条监听销毁");
    this.$bus.$off("mainScroll", this.setHandleDom);
  },

  computed: {
    // 是否有更多的数据可供执行
    isHasMore() {
      return this.data.rows.length <= this.data.total;
    },
  },

  methods: {
    handleDom(dom) {
      // 防止短时间重复运行多次
      if (this.isLoading || !dom) {
        return;
      }
      console.log("滚动了");
      const range = 100;
      const dec = dom.scrollHeight - Math.abs(dom.clientHeight + dom.scrollTop);
      if (range > dec) {
        this.fetchMore();
      }
    },

    async fetchData() {
      return await getComments(this.$route.params.id, this.page, this.limit);
    },

    async fetchMore() {
      if (!this.isHasMore) {
        showMessage({
          content: "没有更多评论了",
          type: "warn",
        });
        return;
      }
      this.isLoading = true;
      this.page++;
      const resp = await this.fetchData();
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
    },

    // #手动提交评论
    async handleSubmit(formData, callback) {
      // 获取提交评论数据
      const resp = await postComment({
        blogId: this.$route.params.id,
        ...formData,
      });
      this.data.rows.unshift(resp); // 添加到所有数据最前边
      this.data.total++; // 总数据加1

      callback();
    },
  },
};
</script>

<style lang="less" scoped>
.message-area-container {
  margin-bottom: 100px;
}
</style>
