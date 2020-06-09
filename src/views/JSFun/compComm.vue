<template>
  <div id="compComm">
    <!-- props / $emit -->
    <!-- <comp :msg="list" @getVal = "update"></comp>
    <div>father:{{val}}</div>-->

    <!-- $parent / $children -->
    <!-- <comp></comp>
    <el-button @click="update2">buttton</el-button>-->

    <!-- provide / inject -->
    <!-- <comp></comp> -->

    <!-- ref / refs -->
    <!-- <comp ref="comp1"></comp> -->

    <!-- EventBus -->
    <!-- <comp></comp>
    <comp2></comp2>-->

    <!-- $attr / $listener -->
    <!-- <comp :name="name" :age="age" :sex="sex" @click="update"></comp> -->

    <!-- vuex -->
    <div>{{$store.state.value1}}</div>
    <el-button type="primary" @click="vuexUp">button</el-button>
  </div>
</template>

<script>
import comp from "../../components/comp.vue";
import comp2 from "../../components/comp2.vue";

export default {
  name: "compComm",
  components: {
    comp,
    comp2
  },
  // mounted() {
  //   const comA = this.$refs.comp1;
  //   console.log(comA.data1); // Vue.js
  //   comA.sayHello(); // hello
  // },
  provide: {
    pro: "123"
  },
  data() {
    return {
      list: [1, 2, 3],
      val: "",
      title: "this is title",
      name: "tom",
      age: 18,
      sex: "mm"
    };
  },
  methods: {
    update(e) {
      this.val = e;
      console.log(e);
    },
    update2() {
      // console.log(this.$parent);
      this.$children[0].titleS = this.title;
      this.$children[0].titleSS = this.title;
    },
    vuexUp() {
      // this.$store.commit("updateVal", "hello world");
      this.$store.dispatch("actionA", { name:"123", sex1:"213"}).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>