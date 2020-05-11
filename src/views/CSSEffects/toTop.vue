<template>
  <div id="toTop" ref="toTop">
    <div class="body" ref="body">
      <p>body</p>
      <div class="h1">h1</div>
      <div class="outer">
        <span class="span">Short span.Long span that wraps withing this div.</span>
      </div>
      <div class="to" ref="to" @click="toTop">
        <p class="to_p">To</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "toTop",
  mounted() {
    //   this.$nextTick(()=>{
    //       this.$refs.to.scrollTo(0, 300);
    //   })
  },
  methods: {
    toTop() {
      var to = document.querySelector(".to");
      var h1 = document.querySelector(".h1");
      var body = document.querySelector(".body");
      var span = document.querySelector(".span");
      var toTop = document.querySelector("#toTop");
      var to_p = document.querySelector(".to_p");

      //   console.log("toTop Parent", toTop.offsetParent);
      //   console.log("toTop Width", toTop.offsetWidth);
      //   console.log("toTop Height", toTop.offsetHeight);
      //   console.log("toTop Top", toTop.offsetTop);
      //   console.log("toTop Left", toTop.offsetLeft);

      //   console.log("body Parent", body.offsetParent);
      //   console.log("body Width", body.offsetWidth);
      //   console.log("body Height", body.offsetHeight);
      //   console.log("body Top", body.offsetTop);
      //   console.log("body Left", body.offsetLeft);

      //   console.log(h1);

      //   console.log("h1 Parent", h1.offsetParent);
      //   console.log("h1 Width", h1.offsetWidth);
      //   console.log("h1 Height", h1.offsetHeight);
      //   console.log("h1 Top", h1.offsetTop);
      //   console.log("h1 Left", h1.offsetLeft);

      // console.log(span);

      // console.log("span Parent", span.offsetParent);
      // console.log("span Width", span.offsetWidth);
      // console.log("span Height", span.offsetHeight);
      // console.log("span Top", span.offsetTop);
      // console.log("span Left", span.offsetLeft);

      console.log(to);

      console.log("to Parent", to.offsetParent);
      console.log("to Width", to.offsetWidth);
      console.log("to Height", to.offsetHeight);
      console.log("to Top", to.offsetTop);
      console.log("to Left", to.offsetLeft);

      //   console.log(to_p);

      //   console.log("to_p Parent", to_p.offsetParent);
      //   console.log("to_p Width", to_p.offsetWidth);
      //   console.log("to_p Height", to_p.offsetHeight);
      //   console.log("to_p Top", to_p.offsetTop);
      //   console.log("to_p Left", to_p.offsetLeft);
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/css/toTop.scss";
</style>