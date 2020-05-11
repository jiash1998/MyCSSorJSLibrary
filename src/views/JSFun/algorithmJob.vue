<template>
  <div>
    <button @click="use">分治作业</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      x: [1, 3, 4, 2, 3, 4],
      y: [6, 4, 3, 4, 2, 1, 3, 4, 2, 3],
      z: [3, 1, 5, 0, 2, 3, 4, 5, 6, 7]
    };
  },
  methods: {
    use() {
      //   console.log(this.maxSubString(this.x, this.y));
      //   console.log(this.z);
      //   console.log("最长自增子序列长度：", this.maxStep(this.z));
    //   var a = this.knapsack([2, 3, 4, 1], [2, 5, 3, 2], 5);
    //   console.log(a);
      var b = this.knapsack([2, 2, 6, 5, 4], [6, 3, 5, 4, 6], 10);
      console.log(b);
    },
    knapsack(weights, values, W) {
      var n = weights.length;
      var f = new Array(n);
      f[-1] = new Array(W + 1).fill(0);
      var selected = [];
      for (var i = 0; i < n; i++) {
        //注意边界，没有等号
        f[i] = []; //创建当前的二维数组
        for (var j = 0; j <= W; j++) {
          //注意边界，有等号
          if (j < weights[i]) {
            //注意边界， 没有等号
            f[i][j] = f[i - 1][j]; //case 1
          } else {
            f[i][j] = Math.max(
              f[i - 1][j],
              f[i - 1][j - weights[i]] + values[i]
            ); //case 2
          }
        }
      }
      var j = W,
        w = 0;
      for (var i = n - 1; i >= 0; i--) {
        if (f[i][j] > f[i - 1][j]) {
          selected.push(i);
          console.log("物品", i, "其重量为", weights[i], "其价格为", values[i]);
          j = j - weights[i];
          w += weights[i];
        }
      }
      console.log(
        "背包最大承重为",
        W,
        " 现在重量为",
        w,
        " 总价值为",
        f[n - 1][W]
      );
      return [f[n - 1][W], selected.reverse()];
    },
    maxStep(arr1) {
      let index = 0,
        len = 0,
        min = arr1[0];
      for (let i = 1; i < arr1.length; i++) {
        if (min < arr1[i]) {
          //   console.log(index, i);
          if (i - index > 1) {
            len = 0;
          }
          len += 1;
          index = i;
        }
        min = arr1[i];
      }
      return len + 1;
    },
    maxSubString(arr1, arr2) {
      console.log(arr1);
      console.log(arr2);
      if (!arr1 || !arr2) return [];
      var len1 = arr1.length,
        len2 = arr2.length;
      var maxSubStr = [];
      for (var i = 0; i < len1; i++) {
        for (var j = 0; j < len2; j++) {
          var tempStr = [],
            k = 0;
          while (i + k < len1 && j + k < len2 && arr1[i + k] === arr2[j + k]) {
            tempStr.push(arr1[i + k]);
            k++;
          }
          if (tempStr.length > maxSubStr.length) {
            maxSubStr = tempStr;
          }
        }
      }
      return maxSubStr;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>