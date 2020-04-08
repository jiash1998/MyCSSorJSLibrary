<template>
  <div id="btnSocialShare">
    <div class="main">
      <!-- <div class="social-btns">
        <a class="btn facebook" href="#">
          <img src="../assets/img/facebook.png" />
        </a>
        <a class="btn google" href="#">
          <img src="../assets/img/google.png" />
        </a>
        <a class="btn twitter" href="#">
          <img src="../assets/img/twitter.png" />
        </a>
      </div>-->
      <div class="btn">
        <div class="test">
          <div class="testDiv"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    // document.getElementsByTagName("body")[0].className = "bg";
  },
  name: "btnSocialShare"
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/btnSocialShare.scss";
</style>