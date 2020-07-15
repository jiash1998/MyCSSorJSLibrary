<template>
  <div id="layout1">
    <div class="head" @mouseenter="head_enter">1</div>
    <div class="body1">2</div>
    <div class="body2">2</div>
    <div class="body3">2</div>
    <div class="foot">3</div>
  </div>
</template>

<script>
export default {
  name: "layout1",
  methods: {
    head_enter() {
      //   console.log("1");
    }
  }
};
</script>

<style lang="scss" scoped>
#layout1 {
  height: 100%;

  .border-add{
      border: 1.5px ;
  }
  
  .head {
    width: 100%;
    height: 30%;
    background-color: gray;
  }
  .body1,
  .body2,
  .body3 {
    width: 100%;
    height: 20%;
    background-color: gainsboro;
  }
  .foot {
    width: 100%;
    height: 10%;
    background-color: blueviolet;
  }
}
</style>