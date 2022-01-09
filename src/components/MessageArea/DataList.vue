<template>
  <ul class="data-list-container">
    <li v-for="item in list" :key="item.id">
      <Avatar :url="item.avatar" :size="40" />
      <div class="data">
        <div class="nickname">{{ item.nickname }}</div>
        <div class="content">{{ item.content }}</div>
        <div class="date">{{ formatDate(item.createDate, true) }}</div>
      </div>
    </li>
  </ul>
</template>

<script>
import Avatar from "@/components/Avatar";
import { formatDate } from "@/utils";
export default {
  name: "DataList", // 所以评论内容
  components: {
    Avatar,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    formatDate,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.data-list-container {
  margin: 0;
  padding: 0;
  list-style: none;
}
li {
  display: flex;
  border-bottom: 1px solid lighten(@gray, 10%);
  padding: 15px 0;
}
.avatar-container {
  margin-right: 12px;
}
.nickname {
  color: @success;
  font-weight: bold;
  margin-bottom: 4px;
}
.content {
  font-size: 14px;
  letter-spacing: 1px;
  color: @dark;
}
.data {
  flex: 1 1 auto;
  position: relative;
}
.date {
  position: absolute;
  right: 0;
  top: 5px;
  font-size: 12px;
  color: @gray;
}
</style>
