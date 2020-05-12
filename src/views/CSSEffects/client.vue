<template>
  <div id="client">
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
    <button @click="stop">stop</button>
    <div class="div2" @click="bot"></div>
  </div>
</template>

<script>
export default {
  name: "client",
  data() {
    return {
      timeid: 0
    };
  },
  mounted() {
    // if (document.documentElement.scrollTop === 0) {
    //   alert("123");
    // }
  },
  methods: {
    stop() {
      console.log(this.timeid);

      window.clearInterval(this.timeid);
    },
    bot() {
      // console.log(window.pageYOffset);
      // console.log(window.scrollY);
      //   console.log(document.body.scrollTop);
      //   console.log(document.documentElement.scrollTop);

      //   setInterval(() => {
      //     document.documentElement.scrollTop += 20;
      //   }, 20);
      this.timeid = setInterval(() => {
        document.documentElement.scrollTop -= 20;
        console.log(document.documentElement.scrollTop);
        if (document.documentElement.scrollTop == 0) {
          window.clearInterval(this.timeid);
        }
      }, 20);

      //   console.log(document.documentElement.clientHeight);
      //   console.log(document.body.scrollHeight);

      //   if (
      //     document.documentElement.scrollTop +
      //       document.documentElement.clientHeight ===
      //     document.body.scrollHeight
      //   ) {
      //     console.log("到底了 div1 SH - ST");
      //     alert("123");
      //   }
    },

    get() {
      var div1 = document.querySelector(".div1");

      console.log("设置宽高为300，client不包含滚动条");
      console.log(div1.getBoundingClientRect());

      console.log("div1 H", div1.clientHeight);
      console.log("div1 W", div1.clientWidth);
      console.log("div1 T", div1.clientTop);
      console.log("div1 L", div1.clientLeft);
      console.log("div1 SH", div1.scrollHeight);
      console.log("div1 ST", div1.scrollTop);
      if (div1.scrollHeight - div1.scrollTop === div1.clientHeight) {
        console.log("到底了 div1 SH - ST", div1.scrollHeight - div1.scrollTop);
      }
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/css/client.scss";
</style>