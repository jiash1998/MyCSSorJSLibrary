<template>
  <div>
    <button @click="use">分治作业</button>
    <button @click="use2">回溯作业</button>
    <button @click="use3">回溯作业</button>
    <button @click="use4">回溯作业</button>
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
      // var b = this.knapsack([2, 2, 6, 5, 4], [6, 3, 5, 4, 6], 10);
      // console.log(b);
    },
    use2() {
      console.log(this.knapSack2(5, [1, 2, 3, 4, 5], [2, 3, 4, 5, 6], 5));
    },
    use3() {
      var queens = this.NQueens(8);
      this.printQ(queens);
    },
    NQueens(order) {
      if (order < 4) {
        console.log("N Queens problem apply for order bigger than 3 ! ");
        return;
      }

      var nQueens = [];
      var backTracking = false;
      rowLoop: for (var row = 0; row < order; row++) {
        //若出现row小于0, 则说明问题无解
        if (row < 0) {
          console.log("This N Queens problem has no solution ! ");
          break;
        }
        //第一次检测到新的一行
        if (nQueens[row] === undefined) {
          nQueens[row] = [];
        }
        //回溯时运行的程序块
        for (var col = 0; col < order; col++) {
          //0为已经检测过并为能放置皇后的位置
          if (nQueens[row][col] === 0) {
            continue;
          }
          //回溯过程中，遇到能放皇后的位置，说明这个位置在后面的验证没有通过，需要重新处理
          else if (backTracking && nQueens[row][col] == 1) {
            //回溯时发现,上一行也到行末,需要继续回溯
            if (col === order - 1) {
              this.resetRow(nQueens, order, row);
              row = row - 2;
              continue rowLoop;
            }
            //回溯的行还没到行尾, 标0, 继续
            nQueens[row][col] = 0;
            backTracking = false;
            continue;
          }
          //放置一个皇后
          nQueens[row][col] = 1;
          //找到一个可以放置皇后的位置，跳出到下一行（一行上只能放一个皇后）。
          if (this.isQueenValid(nQueens, row, col)) {
            continue rowLoop;
          }
          //每一行都应该有一个皇后，到列尾了还没有找到合适的位置，说明前面的皇后放置有问题，需要回溯！
          else if (col == order - 1) {
            backTracking = true;
            //0与1都表示这个位置已经检测过，因此要将本行清为undefined
            this.resetRow(nQueens, order, row);
            //减2是因为循环尾还有个自加，其实就是回到上一行
            row = row - 2;
            //退到外层循环，继续
            continue rowLoop;
          } else {
            //未到行未，继续检测未检测过的
            nQueens[row][col] = 0;
            continue;
          }
        }
      }
      return nQueens;
    },
    //回溯前, 将本行清除
    resetRow(nQueens, order, row) {
      for (var col = 0; col < order; col++) {
        nQueens[row][col] = undefined;
      }
    },
    //检测位置是否能放置皇后
    isQueenValid(nQueens, row, col) {
      //行检测
      for (var i = 0; i < col; i++) {
        if (nQueens[row][i] == 1) {
          return false;
        }
      }
      for (var j = 1; j < row + 1; j++) {
        //   列检测           左上45度             右上45度
        if (
          nQueens[row - j][col] == 1 ||
          nQueens[row - j][col - j] == 1 ||
          nQueens[row - j][col + j] == 1
        ) {
          return false;
        }
      }
      return true;
    },

    printQ(queens) {
      for (var row = 0; row < queens.length; row++) {
        var rowText = "";
        for (var col = 0; col < queens.length; col++) {
          if (queens[row][col] === undefined) {
            queens[row][col] = 0;
          }
          rowText = rowText + queens[row][col] + " ";
        }
        console.log(rowText);
      }
    },

    knapSack2(weightLimit, weightArray, valueArray, account) {
      //ks是保存数据的二维数组，可以看做是矩阵
      //初始化一个长度为account+1的二维空数组，每一个子数组都可以看成是选用多少个物品时的情况。
      let ks = [];
      for (let i = 0; i <= account; i++) {
        ks.push([]);
      }

      for (let i = 0; i <= account; i++) {
        for (let w = 0; w <= weightLimit; w++) {
          //重量限制为0，或者选用0个物品组合，结果都为0
          if (i === 0 || w === 0) {
            ks[i][w] = 0;
          } else if (weightArray[i - 1] <= w) {
            let a = valueArray[i - 1] + ks[i - 1][w - weightArray[i - 1]];
            ks[i][w] = Math.max(a, ks[i - 1][w]);

            //如果加入组合的物品的重量超过单轮循环的重量限制，那么这个物品不加入组合
            //即这种情况下取上一行同列的值
          } else {
            ks[i][w] = ks[i - 1][w];
          }
        }
      }
      //最终我们需要的结果就是第i行第w列的值。
      return ks[account][weightLimit];
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