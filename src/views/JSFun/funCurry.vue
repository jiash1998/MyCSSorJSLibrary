<template>
  <div>
    <button @click="test">柯里化</button>
  </div>
</template>

<script>
export default {
  methods: {
    curry(fn) {
      var args = Array.prototype.slice.call(arguments, 1);
      console.log(args);

      return function() {
        var innerArgs = Array.prototype.slice.call(arguments);
        var finalArgs = args.concat(innerArgs);
        return fn.apply(null, finalArgs);
      };
    },
    add(num1, num2, num3) {
      return num1 + num2 + num3;
    },
    test() {
      var a = this.curry(this.add, 5, 7);
      console.log(a(3));
    }
  }
};
</script>

<style lang="scss">
</style>