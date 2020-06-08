<template>
  <div id="btnEffects">
    <!-- 配合after伪元素使用 content:attr(data-text) -->
    <div class="body" data-text="Start">
      <button class="btn btn-contral btn-text-up">
        <div class="border">
          <div class="border-top"></div>
          <div class="border-right"></div>
          <div class="border-bottom"></div>
          <div class="border-left"></div>
        </div>
        <span class="btn-text">Start</span>
      </button>
      <!-- <button
        data-text="Start"
        class="btn btn-primary btn-ghost btn-border-stroke btn-text-float-up"
      >
        <div class="btn-borders">
          <div class="border-top"></div>
          <div class="border-right"></div>
          <div class="border-bottom"></div>
          <div class="border-left"></div>
        </div>
        <span class="btn-text">Start</span>
      </button>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "btnEffects",
  data() {
    return {
      data: 123
    };
  },
  beforeRouteEnter: (to, from, next) => {
    // alert(this.data); 这是无法访问 this
    // alert(23); //页面停留在 from 路由
    next(vm => {
      //页面停留在 to 路由
      alert(vm.data);
    });
  },
  beforeRouteUpdate (to, from, next){
    console.log("updata");
    next();
  },
  beforeRouteLeave(to, from, next) {
    const answer = window.confirm(
      "Do you really want to leave? you have unsaved changes!"
    );
    if (answer) {
      next();
    } else {
      next(false);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/css_CSS/btnEffects.scss";
</style>