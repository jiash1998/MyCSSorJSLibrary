<template>
  <div id="es6_proxy">
    <el-button type="primary" @click="test">get测试</el-button>
  </div>
</template>

<script>
export default {
  name: "es6_proxy",
  methods: {
    test() {
      let a = Function.prototype.apply.call(Math.floor, undefined, [1.75]);
      console.log(a);
      console.log(Function.prototype.call(Math.floor,1.75));
    },
    double(n) {
      return 2 * n;
    },
    pow(n) {
      return n * n;
    },
    getTest() {
      var _self = this;
      var pipe = function(value) {
        var funcStack = [];
        var oproxy = new Proxy(
          {},
          {
            get: function(pipeObject, fnName) {
              console.log("enter get,fnName:", fnName);
              if (fnName === "get") {
                console.log("fnName == get时,funcStack：", funcStack);
                return funcStack.reduce(function(val, fn) {
                  return fn(val);
                }, value);
              }
              funcStack.push(_self[fnName]);
              console.log("funcStack:", funcStack);
              return oproxy;
            }
          }
        );
        return oproxy;
      };

      console.log(pipe(3).double.pow); // 63
      console.log(pipe(3).double.pow.get); // 63
    }
  }
};
</script>

<style lang="scss" scoped>
</style>