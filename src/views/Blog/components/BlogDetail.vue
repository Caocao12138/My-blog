<template>
  <div class="blog-detail-container">
    <h1>{{ blog.title }}</h1>
    <div class="aside">
      <span>日期:{{ formatDate(blog.createDate) }}</span>
      <span>浏览:{{ blog.scanNumber }}</span>
      <span
        ><a href="#data-form-container">评论:{{ blog.commentNumber }}</a></span
      >
      <span
        ><router-link
          :to="{
            name: 'CategoryBlog',
            params: {
              categoryId: blog.category.id,
            },
          }"
          >分类:{{ blog.category.id }}</router-link
        ></span
      >
    </div>
    <div v-html="blog.htmlContent"></div>
  </div>
</template>

<script>
import { formatDate } from "@/utils";
import "@/styles/markdown.css";
import "highlight.js/styles/github.css";
export default {
  name: "BlogDetail", // 文章文字内容
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.blog-detail-container {
  width: 100%;
  overflow-x: hidden;
  h1 {
    margin: 0;
    margin-bottom: 0.1em;
  }
  .aside {
    span {
      color: @gray;
      margin-right: 24px;
      font-size: 14px;
    }
  }
}
</style>