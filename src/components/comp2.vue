<template>
  <div id="comp2">
    <!-- provide / inject -->
    <!-- <div>comp2: {{pro2}}</div> -->

    <!-- EventBus -->
    <!-- <div>comp2:{{count}}</div> -->

    <!-- $attrs -->
    <div>comp2:{{$attrs}}</div>
  </div>
</template>

<script>
import EventBus from "../JsUtil/event-bus.js";

export default {
  name: "comp2",
  //   inject: {
  //     pro2: {
  //       from: "pro",
  //       default: "null2"
  //     }
  //   },
  //   mounted() {
  //     EventBus.$on("addMath", res => {
  //       this.count = this.count + res.num;
  //     });
  //   },
  props: {
    age: Number,
  },
  data() {
    return {
      pro2: this.pro2,
      count: 0
    };
  }
};
</script>

<style lang="scss" scoped>
</style>