<template>
  <div class="blog-list-container" ref="mainContainer" v-loading="isLoading">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <RouterLink
            :to="{
              name: 'BlogDetail',
              params: {
                id: item.id,
              },
            }"
          >
            <img v-lazy="item.thumb" :alt="item.title" :title="item.title" />
          </RouterLink>
        </div>
        <div class="main">
          <RouterLink
            :to="{
              name: 'BlogDetail',
              params: {
                id: item.id,
              },
            }"
            ><h2>{{ item.title }}</h2></RouterLink
          >
          <div class="aside">
            <span>日期: {{ formatDate(item.createDate) }}</span>
            <span>浏览: {{ item.scanNumber }}</span>
            <span>评论: {{ item.commentNumber }}</span>
            <RouterLink
              :to="{
                name: 'CategoryBlog',
                params: { categoryId: item.category.id },
              }"
            >
              {{ item.category.name }}
            </RouterLink>
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <Empty v-if="data.rows.length === 0 && !isLoading" />
    <MyPager
      v-if="data.total"
      :total="data.total"
      :current="routeInfo.page"
      :limit="routeInfo.limit"
      :visibleNumber="10"
      @pageChange="handlePageChange"
    />
  </div>
</template>

<script>
import Empty from "@/components/Empty";
import MyPager from "@/components/Pager-my";
import fetchData from "@/mixins/fetchData.js";
import mainScroll from "@/mixins/mainScroll.js";
import { getBlogs } from "@/api/blog.js";
import { formatDate } from "@/utils";
export default {
  name: "BlogList", //博客文章列表文件
  mixins: [fetchData({ total: 0, rows: [] }), mainScroll("mainContainer")],
  components: {
    MyPager,
    Empty,
  },

  computed: {
    // 获取路由信息
    routeInfo() {
      const categoryId = +this.$route.params.categoryId || -1; // 分类id
      const limit = +this.$route.query.limit || 10; // 页容量
      const page = +this.$route.query.page || 1; // 页码
      return { categoryId, limit, page };
    },
  },

  methods: {
    formatDate,
    async fetchData() {
      return await getBlogs(
        this.routeInfo.categoryId,
        this.routeInfo.limit,
        this.routeInfo.page
      );
    },
    // #手动切换页码
    handlePageChange(newPage) {
      // console.log(newPage); // 新的页码
      const query = {
        page: newPage,
        limit: this.routeInfo.limit,
      };
      /* 跳转页码 
          有两种情况
            1: 有分类的
              article/cate/this.routeInfo.categoryId?this.routeInfo.limit&this.routeInfo.page
            2:没有分类的
              article/?this.routeInfo.limit&this.routeInfo.page
      */
      if (this.routeInfo.categoryId === -1) {
        //等于 -1 没有分类
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        // 有分类的情况
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: this.routeInfo.categoryId,
          },
        });
      }
    },
  },
  watch: {
    async $route() {
      this.isLoading = true;
      // 让滚动条自动置顶
      this.$refs.mainContainer.scrollTop = 0;
      this.data = await this.fetchData();
      this.isLoading = false;
    },
  },
};
</script> 

<style scoped lang="less">
@import "~@/styles/var.less";
.blog-list-container {
  border-right: 1px solid @gray;
  line-height: 1.7;
  position: relative;
  padding: 20px;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  scroll-behavior: smooth; // 滚动条滚动方式: 平滑滚动
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main {
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
// pager组件
.pager-container {
  position: fixed;
  bottom: -50px;
  left: calc(50% - 278px);
  background: @gray;
  border-radius: 80px;
  // box-shadow: 4px 4px 12px @gray;
}
</style>