<template>
  <div id="cssMiddle">
    <!-- <h2>水平居中</h2>
    <div class="horizontal">
      <h4>text-align: center/margin/Flex 布局/transform/absolute</h4>
      <span>行内文本</span>
      <p>块级文本</p>
      <div class="son"></div>
    </div>-->
    <h2>垂直居中</h2>
    <div class="vertical">
      <!-- <span>内联文本</span>

      <p>123</p>
      <p>123</p>
      <p>123</p>-->
      <!-- <p>123</p> -->
      <div class="v1"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cssMiddle",
  mounted() {
    this.test();
  },
  methods: {
    test() {
      // const originArray = [1, 2, 3, 4, 5];
      // const cloneArray = JSON.parse(JSON.stringify(originArray));
      // console.log(cloneArray === originArray); // false

      const originObj = {
        a: "a",
        c: [1, 2, 3],
        d: { dd: "dd" },
        fun1: () => {}
      };
      const cloneObj = JSON.parse(JSON.stringify(originObj));
      console.log(cloneObj === originObj); // false

      cloneObj.a = "aa";
      cloneObj.c = [1, 1, 1];
      cloneObj.d.dd = "doubled";

      console.log(originObj);
      console.log(cloneObj);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/css_CSS/css_Middle.scss";
</style>