<template>
  <div class="message-area-container">
    <DataForm v-on="$listeners" />
    <h3>
      {{ title }}
      <span>{{ subTitle }}</span>
    </h3>
    <DataList :list="list" />
    <div class="loading" v-loading="isListLoading"></div>
  </div>
</template>

<script>
import DataForm from "./DataForm.vue";
import DataList from "./DataList.vue";
export default {
  name: "MessageArea", // 整个评论区
  components: {
    DataForm,
    DataList,
  },
  props: {
    title: {
      //列表标题
      type: String,
      default: "",
    },
    subTitle: {
      //列表副标题
      type: String,
      default: "",
    },
    list: {
      //列表数据
      type: Array,
      default: () => [],
    },
    isListLoading: {
      //列表是否正在加载中
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="less" scoped>
.loading {
  position: relative;
}

</style>