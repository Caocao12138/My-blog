<template>
  <img
    class="avatar-container"
    :src="url"
    :style="{
      width: size + 'px',
      height: size + 'px',
    }"
  />
</template>

<script>
export default {
  name: "Avatar",
  props: {
    url: {
      type: String, // url属性值必须是一个字符串
      required: true, // url属性值必须要传递,不须为空
    },
    size: {
      type: Number,
    },
  },
};
</script>

<style scoped>
/*  scoped 带有作用域的样式
    作用: 比用样式重合
 */
.avatar-container {
  border-radius: 50%;
  object-fit: cover; /* 保持宽高比 */
  display: block;
}
</style>