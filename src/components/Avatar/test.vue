<template>
  <div>
    <Avatar
      class="avatar"
      url="https://img2.woyaogexing.com/2021/05/07/f1105e54a7354fe99dbb6767360eda32!400x400.jpeg"
      :size="200"
    />
  </div>
</template>

<script>
import Avatar from "./";
export default {
  components: {
    Avatar,
  },
};
</script>

<style scoped>
/* 父组件自己调配样式 */
.avatar {
  margin: 50px auto;
}
</style>