<template>
  <div id="sortFun">
    <button @click="bubble">冒泡排序</button>
    <button @click="select">选择排序</button>
    <button @click="insert">插入排序</button>
    <button @click="fast">快速排序</button>
  </div>
</template>

<script>
import bubbleFun from "../sortFun.js";
import selectFun from "../sortFun.js";
import insertFun from "../sortFun.js";
// import fastFun from "../sortFun.js";

export default {
  name: "sortFun",
  data() {
    return {
      list: []
    };
  },
  methods: {
    bubble() {
      bubbleFun.bubbleSort();
    },
    select() {
      selectFun.selectSort();
    },
    insert() {
      insertFun.insertSort();
    },
    fast() {
      for (let i = 0; i < 10000; i++) {
        this.list.push(Math.floor(Math.random() * 10001));
      }
      var start = new Date().getTime();
      var result = this.fastSort(this.list);
      // var result = fastFun.fastSort();
      var end = new Date().getTime();
      console.log(result);
      console.log("快排时长" + (end - start));
      this.list = [];
    },
    fastSort(list) {
      if (list.length <= 1) {
        return list;
      }
      var small = [];
      var big = [];
      var benchmark = list[0];
      for (let i = 1; i < list.length; i++) {
        if (list[i] > benchmark) {
          small.push(list[i]);
        } else {
          big.push(list[i]);
        }
      }
      return this.fastSort(small).concat(benchmark, this.fastSort(big));
    }
  }
};
</script>

<style lang="scss" scoped>
</style>