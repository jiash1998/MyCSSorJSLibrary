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
  name: "btnEffects"
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/btnEffects.scss";
</style>