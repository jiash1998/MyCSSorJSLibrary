<template>
  <div id="suckTop">
    <div class="body">
      <div class="head">head</div>
      <div class="content">
        body
        <div class="test"></div>
      </div>
      <div class="foot"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "suckTop",
  mounted() {},
  methods: {
    suck() {
      let head = document.querySelector(".head");
      console.log(head.offsetTop);
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/css/css_CSS/suckTop.scss";
</style>