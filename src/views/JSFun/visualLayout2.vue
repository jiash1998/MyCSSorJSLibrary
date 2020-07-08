<template>
  <div class="visualLayout2">
    <div class="demo1" ref="demo1" @mouseup="drag1" @mousemove="move1">1</div>
    <div class="demo2">2</div>
    <div class="demo3"></div>
    <div class="demo4"></div>
    <div class="display"></div>
  </div>
</template>

<script>
export default {
  name: "visualLayout2",
  data() {
    return {};
  },
  mounted() {
    // console.log(event.pageX);
  },
  methods: {
    //拖拽
    drag1() {
      console.log(this.$refs.demo1);
      console.log(this.$refs.demo1.clientHeight);
      console.log(this.$refs.demo1.clientWidth);
      let a = document.createElement("div");
      //   a.clientHeight = this.$refs.demo1.clientHeight;
      //   a.clientWidth = this.$refs.demo1.clientWidth;
      this.$refs.demo1.style.cssText = "background-color:red;";
      document.body.appendChild(a);
      console.log(this.$refs.demo1.offsetLeft);
      console.log(this.$refs.demo1.offsetTop);
      console.log(event.pageX);
    },
    //移动
    move1() {
      //   console.log(event.pageX);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/js_CSS/visualLayout2.scss";
</style>