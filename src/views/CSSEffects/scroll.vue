<template>
  <div id="scroll">
    <!-- <button @click="get">btn</button> -->
    <div class="div1">
      <h1>1scrollHeight 的值等于该元素在不使用滚动条的情况下为了适应视口中所用内容所需的最小高度。 没有垂直滚动条的情况下，scrollHeight值与元素视图填充所有内容所需要的最小值</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
    </div>
    <div @click="get" class="div2">div2</div>
  </div>
</template>

<script>
export default {
  name: "scroll",
  mounted() {
    document.body.scrollTop = document.documentElement.clientHeight;
  },
  methods: {
    get() {
      var div1 = document.querySelector(".div1");
      var div2 = document.querySelector(".div2");
      var scroll = document.querySelector("#scroll");

      //   window.scrollTop += 100;

    //   setInterval(() => {
    //     window.scrollBy(0, 20);
    //   }, 20);
      //   scroll.scrollTop += 100;
      //   div1.scrollLeft += 20;
      //   div1.scrollTop += 20;
      if (div1.scrollTop === div1.scrollHeight) {
        console.log("bottom");
      }
        console.log("div1 height", div1.scrollHeight);
        console.log("div1 width", div1.scrollWidth);
        console.log("div1 top", div1.scrollTop);
        console.log("div1 left", div1.scrollLeft);

        console.log("div2 height", div2.scrollHeight);
        console.log("div2 width", div2.scrollWidth);
        console.log("div2 top", div2.scrollTop);
        console.log("div2 left", div2.scrollLeft);
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/css/css_CSS/scroll.scss";
</style>