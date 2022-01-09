<template>
  <div class="test-container">
    <div class="item" v-for="(i, t) in types" :key="t">
      <Icon :type="i" />
      <label>{{ i }}</label>
    </div>
  </div>
</template>
    
<script>
import Icon, { types } from "./";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      types,
    };
  },
};
</script>

<style>
.test-container {
  display: flex;
  justify-content: center;
  margin: 30px auto;
  width: 580px;
  flex-wrap: wrap;
}
.item {
  margin: 1em;
  text-align: center;
}

.icon-container {
  display: block;
}
</style>
