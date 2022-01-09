<template>
  <div class="test-container">
    <MyContact />
  </div>
</template>

<script>
import MyContact from "./";
export default {
  components: {
    MyContact,
  },
};
</script>

<style>
.test-container {
  width: 400px;
  height: 600px;
  border: 2px solid red;
  background-color: #202020;
  margin: 0 auto;
  padding-top: 200px;
}
</style>