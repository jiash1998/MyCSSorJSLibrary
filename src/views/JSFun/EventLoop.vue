<template>
  <div id="loop">
    <button @click="moni">模拟 setinterval</button>
    <div id="outer" ref="outer" @click="onClick">
      <div id="inner" @click="onClick" ref="inner"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventLoop",
  mounted() {
    new MutationObserver(() => console.log("mutate outer")).observe(outer, {
      attributes: true
    });
    // this.$refs.inner.click();
  },
  methods: {
    moni() {
      this.simulate(() => {
        console.log("test");
      }, 3000);
    },
    simulate(fn, time) {
      (function inner() {
        fn();
        setTimeout(inner, time);
      })();
    },
    onClick() {
      console.log("click");
      setTimeout(() => console.log("timeout"), 0);
      Promise.resolve().then(() => console.log("promise"));
      this.$refs.outer.setAttribute("data-mutation", Math.random());
    }
  }
};
</script>

<style lang="scss">
#outer {
  width: 200px;
  height: 200px;
  background-color: red;

  #inner {
    width: 100px;
    height: 100px;
    background-color: yellow;
  }
}
</style>