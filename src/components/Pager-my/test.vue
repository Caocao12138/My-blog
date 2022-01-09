<template>
  <div>
    <MyPager
      :current="current"
      :visibleNumber="10"
      :total="156"
      @changPage="handSwitchPage"
    />
  </div>
</template>

<script>
import MyPager from "./";
export default {
  components: {
    MyPager,
  },
  data() {
    return {
      current: 1,
    };
  },
  methods: {
    handSwitchPage(newPage) {
      this.current = newPage;
      console.log(newPage);
    },
  },
};
</script>

<style>
</style>