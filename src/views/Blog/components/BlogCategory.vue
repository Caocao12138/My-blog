<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h2>文章分类</h2>
    <RightList :list="list" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList.vue";
import fetchData from "@/mixins/fetchData.js";
import { getBlogTypes } from "@/api/blog.js";
export default {
  name: "BlogCategory", //博客文章分类文件
  mixins: [fetchData([])],
  components: {
    RightList,
  },
  computed: {
    categoryId() {
      return +this.$route.params.categoryId || -1;
    },
    limit() {
      return +this.$route.query.limit || 10;
    },
    list() {
      // console.log(this.data);
      const totalArticleCount = this.data.reduce(
        (a, b) => a + b.articleCount,
        0
      );
      const result = [
        { name: "全部", id: -1, articleCount: totalArticleCount },
        ...this.data,
      ];
      return result.map((it) => ({
        ...it,
        isSelect: it.id === this.categoryId,
        aside: `${it.articleCount}篇`,
      }));
    },
  },
  methods: {
    async fetchData() {
      return await getBlogTypes();
    },
    // 手动点击博客分类右边栏切换博客分类
    handleSelect(item) {
      // console.log(item);
      const query = {
        page: 1,
        limit: this.limit,
      };
      if (this.id === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: item.id,
          },
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.blog-category-container {
  margin-left: 12px;
  border-left: 1px solid @gray;
  width: 300px;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  height: 100%;
  overflow-y: auto;
  h2 {
    font-weight: bold;
    letter-spacing: 3px;
    font-size: 1em;
    margin: 0;
  }
}
</style>