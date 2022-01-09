<template>
  <div class="project-container" ref="projectContainer" v-loading="loading">
    <div class="project-item" v-for="item in data" :key="item.id">
      <a
        :href="item.url ? item.url : `javascript: alert('此项目没有权限访问')`"
        :target="item.url ? '_blank' : '_self'"
      >
        <img v-lazy="item.thumb" alt="项目缩略图" class="thumb"
      /></a>
      <div class="info">
        <a
          :href="
            item.url ? item.url : `javascript: alert('此项目没有权限访问')`
          "
          :target="item.url ? '_blank' : '_self'"
        >
          <h3 class="title">{{ item.name }}</h3>
        </a>
        <a class="guthub" :href="item.github ? item.github : ''">github</a>
        <p class="desc" v-for="(desc, i) in item.description" :key="i">
          {{ desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import mainScroll from "@/mixins/mainScroll";
import { mapState } from "vuex";
export default {
  mixins: [mainScroll("projectContainer")],
  computed: mapState("project", ["data", "loading"]),
  created() {
    this.$store.dispatch("project/fetchProject");
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.project-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  overflow-y: auto;
  scroll-behavior: smooth;
}
.project-item {
  transition: 0.5s;
  border: 1px @gray solid;
  display: flex;
  margin-bottom: 30px;
  border-radius: 12px;
  padding: 20px;
  &:hover {
    box-shadow: -1px 1px 5px @gray;
    transform: scale(1.01) translate(3px, -3px);
    color: inherit;
  }

  .thumb {
    transition: 0.5s;
    width: 240px;
    height: 180px;
    flex: 0 0 auto;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 16px;
    &:hover {
      box-shadow: -1px 1px 5px @gray;
      transform: scale(1.1);
    }
  }
  .info {
    flex: 1 1 auto;
    line-height: 1.6em;
    .title {
      margin: 0;
    }
    .guthub {
      color: @primary;
      font-size: 14px;
    }
    .desc {
      font-size: 14px;
      color: @words;
    }
  }
}
</style>