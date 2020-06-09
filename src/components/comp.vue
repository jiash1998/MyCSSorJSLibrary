<template>
  <div id="comp">
    <!-- props / $emit -->
    <!-- <el-button type="primary" @click="get">click</el-button>
    <div>son:{{msg}}</div>-->

    <!-- $parent / $children -->
    <!-- <el-button type="primary">click</el-button>
    <div>1:{{titleS}}</div>
    <div>2:{{titleSS}}</div>
    <div>2:{{titleUp}}</div>
    <div>3:{{titleUp2}}</div>-->

    <!--  provide / inject -->
    <!-- <div>comp: {{pro1}}</div>
    <comp2></comp2>-->

    <!-- ref / refs -->
    <!-- <div>comp:{{num}}</div>
    <button @click="addNum">to comp2</button>-->

    <!-- $attr / $listener -->
    <div>comp:{{$attrs}}</div>
    <comp2 v-bind="$attrs"></comp2>
  </div>
</template>

<script>
import comp2 from "../components/comp2.vue";
import EventBus from "../JsUtil/event-bus.js";
export default {
  name: "comp",
  components: {
    comp2
  },
  inject: {
    pro1: {
      from: "pro",
      default: "null"
    }
  },
  // props: {
  //   msg: {
  //     type: Array
  //   }
  // },
  inheritAttrs: false,
  props: {
    name: String
  },
  data() {
    return {
      titleS: "",
      titleSS: "",
      pro1: this.pro1,
      data1: "comp1.vue",
      num: 1
    };
  },
  computed: {
    titleUp() {
      return this.$parent.msg;
    },
    titleUp2() {
      return this.titleS
        .split("")
        .reverse()
        .join("");
    }
  },
  mounted() {
    console.log(this.$listeners);
    
  },
  methods: {
    get() {
      // console.log(this.msg);
      this.$emit("getVal", [1, 2, 3]);
    },
    sayHello() {
      console.log("hemoo");
    },
    addNum() {
      EventBus.$emit("addMath", {
        num: this.num++
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>