<template>
  <div id="skeletomSec">
      <pub-skeleton isAvatar isBlock article="1" RtL></pub-skeleton>
      <pub-skeleton isBlock article="2" ></pub-skeleton>
      <pub-skeleton article="3"></pub-skeleton>

  </div>
</template>

<script>
import pubSkeleton from "../../components/pubSkeleton.vue";
export default {
  name: "skeletomSec",
  components: {
    pubSkeleton
  }
};
</script>

<style lang="scss" scoped>
</style>