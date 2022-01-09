<template>
  <div class="message-container" ref="messageContainer">
    <MessageArea
      title="留言板"
      :subTitle="`(${data.total})`"
      :isListLoading="isLoading"
      :list="data.rows"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData.js";
import mainScroll from "@/mixins/mainScroll.js";
import * as msgApi from "@/api/message.js";
import { showMessage } from "@/utils";
import { debounce } from "@/utils";
export default {
  mixins: [fetchData({ total: 0, rows: [] }), mainScroll("messageContainer")],
  components: {
    MessageArea,
  },
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },

  computed: {
    // 是否有更多的数据可供执行
    isHasMore() {
      return this.data.rows.length <= this.data.total;
    },
  },

  created() {
    this.setHandleDom = debounce(this.handleDom, 500);
    this.$bus.$on("mainScroll", this.setHandleDom);
  },

  destroyed() {
    console.log("BlogComment滚动条监听销毁");
    this.$bus.$off("mainScroll", this.setHandleDom);
  },

  methods: {
    async fetchData() {
      return msgApi.getMessages(this.page, this.limit);
    },
    async handleSubmit(data, callback) {
      const resp = await msgApi.postMessage(data);
      callback();
      this.data.rows.unshift(resp);
      this.data.total++; // 总数据加1
    },

    handleDom(dom) {
      // 防止短时间重复运行多次
      if (this.isLoading || !dom) {
        return;
      }
      console.log("滚动了");
      const range = 200;
      const dec = dom.scrollHeight - Math.abs(dom.clientHeight + dom.scrollTop);
      if (range > dec) {
        this.fetchMore();
      }
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
  },
};
</script>
 

<style lang="less" scoped>
.message-container {
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  scroll-behavior: smooth;
}

.message-area-container {
  width: 700px;
  margin: 0 auto;
}
</style>