<template>
  <div id="sortFun">
    <button @click="bubble">冒泡排序</button>
    <button @click="select">选择排序</button>
    <button @click="insert">插入排序</button>
    <button @click="fast">快速排序</button>
    <button @click="to">to other</button>
  </div>
</template>

<script src="https://cdn.bootcdn.net/ajax/libs/blueimp-md5/2.16.0/js/md5.js"></script>
<script>
import bubbleFun from "../../JsUtil/sortFun.js";
import selectFun from "../../JsUtil/sortFun.js";
import insertFun from "../../JsUtil/sortFun.js";

export default {
  name: "sortFun",
  data() {
    return {
      list: []
    };
  },
  methods: {
    to() {
      console.log(hex_md5(123));
      
      // let id = window.btoa(123);
      // this.$router.push({
      //   path: "/main",
      //   query: {
      //     id: id
      //   }
      // });
    },

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