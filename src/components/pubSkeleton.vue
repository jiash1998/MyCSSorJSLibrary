<template>
  <div id="pubSkeleton">
    <div class="s_body" :class="{'dir_rtl':RtL}">
      <!-- 图像块 -->
      <div class="s_avatar" :class="isAvatar===true?'':'isDis'"></div>
      <!-- 各种大小矩形块 -->
      <div class="s_block add" :class="isBlock===true?'':'isDis'"></div>
      <!-- 矩形条 -->
      <div class="s_contain_art" :class="+article > 0?'':'isDis'">
        <div class="s_article"></div>
        <div class="s_article_add" v-for="index in +article" :key="index"></div>
        <div class="s_article_end"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pubSkeleton",
  props: {
    //方向问题
    RtL:Boolean,
    //是否显示
    isAvatar: Boolean,
    isBlock: Boolean,
    isArticle: Boolean,
    //矩形条数量
    article: {
      type: String,
      default: 0
    }
  },
  mounted() {
    console.log(+this.article);
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/com_CSS/pubSkeleton.scss";
</style>