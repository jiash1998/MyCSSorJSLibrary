<template>
  <div id="demo">
    <div class="display">
      <layout1></layout1>
    </div>
  </div>
</template>

<script>
import layout1 from "../../components/design/layout1";
export default {
  name: "demo",
  components: {
    layout1
  }
};
</script>

<style lang="scss" scoped>
#demo {
  width: 100%;
  height: 100%;
  .display {
    width:100%;
    height: 650px;
    min-height: 1000px;
    margin: 0 auto;
    background-color: pink;
  }
}
</style>