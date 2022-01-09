<template>
  <RightList :list="list" @select="handleSelect" />
</template>

<script>
import RightList from "./RightList";
export default {
  components: {
    RightList,
  },
  data() {
    return {
      list: [
        { name: "a", isSelect: false },
        { name: "b", isSelect: false },
        {
          name: "c",
          isSelect: true,
          children: [
            { name: "a", isSelect: false },
            { name: "b", isSelect: false },
            {
              name: "c",
              isSelect: false,
              children: [
                { name: "a", isSelect: false },
                { name: "b", isSelect: false },
                { name: "c", isSelect: false },
                { name: "d", isSelect: false },
              ],
            },
            { name: "d", isSelect: false },
          ],
        },
        { name: "d", isSelect: false },
      ],
    };
  },
  methods: {
    handleSelect(item) {
      console.log(item);
    },
  },
};
</script>

<style>
</style>