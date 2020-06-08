<template>
  <div id="vueScoped">
    <div class="parent">parent</div>
    <div class="son">
        <p class="son_ind">sonp</p>
    </div>
    <el-button type="success">123</el-button>
    <comScoped></comScoped>
    <div id="tag1"></div>
  </div>
</template>

<script>
import comScoped from "../../components/comScoped";
export default {
  name: "vueScoped",
  components: {
    comScoped
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/css_CSS/vueScoped.scss";
</style>