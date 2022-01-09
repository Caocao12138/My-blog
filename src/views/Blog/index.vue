<template>
  <Layout>
    <BlogList />
    <template #right>
      <BlogCategory />
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import BlogList from "./components/BlogList";
import BlogCategory from "./components/BlogCategory";

export default {
  name: "Blog", //博客主页文件
  components: {
    Layout,
    BlogList,
    BlogCategory,
  },
};
</script>

<style>
</style>
