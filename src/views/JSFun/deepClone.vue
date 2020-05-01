<template>
  <div id="deepClone">
    <h4>树形的速度比普通快了将近 10 倍</h4>
    <button @click="clonePri">普通深度克隆</button>
    <button @click="cloneTree">树形深度克隆</button>
    <button @click="cloneLost">引用丢失-深度克隆</button>
    <button @click="cloneCycle">循环引用-深度克隆</button>
  </div>
</template>

<script>
export default {
  name: "deepClone",
  methods: {
    clonePri() {
      //1.2W 爆栈
      var a = new Date().getTime();
      console.log(this.clonedeep(this.createData(10000, 1)));
      var b = new Date().getTime();
      console.log(b - a);
    },
    cloneTree() {
      //   var a = new Date().getTime();
    //   console.log(this.createData(3, 2));
      console.log(this.cloneLoop(this.createData(3, 2)));
      //   var b = new Date().getTime();
      //   console.log(b - a);
    },
    cloneLost() {
      var b = {};
      var a = { a1: b, a2: b };
      console.log(a.a1 === a.a2);
      var aC = this.cloneForce(a);
      console.log(aC.a1 === aC.a2);
    },
    cloneCycle() {
      var a = {};
      a.obj = a;
      console.log(this.cloneJSON(a));
    },
    cloneJSON(source) {
      return JSON.parse(JSON.stringify(source));
    },
    // 树结构 深度循环
    cloneLoop(x) {
      const root = {};

      // 栈
      const loopList = [
        {
          parent: root,
          key: undefined,
          data: x
        }
      ];

      while (loopList.length) {
        // 深度优先
        console.log("1");

        const node = loopList.pop();
        console.log("node:",node);

        const parent = node.parent;
        const key = node.key;
        const data = node.data;

        // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
        let res = parent;

        if (typeof key !== "undefined") {
          res = parent[key] = {};
          console.log("res:",res);
        }

        for (let k in data) {
          if (data.hasOwnProperty(k)) {
            console.log("2");

            if (typeof data[k] === "object") {
              // 下一次循环
              loopList.push({
                parent: res,
                key: k,
                data: data[k]
              });
            } else {
              res[k] = data[k];
            }
          }
        }

        console.log("3");
      }

      return root;
    },
    // 解决循环引用的深度克隆
    cloneForce(x) {
      const uniqueList = []; // 用来去重
      let root = {};

      // 循环数组
      const loopList = [
        {
          parent: root,
          key: undefined,
          data: x
        }
      ];

      while (loopList.length) {
        // 深度优先
        const node = loopList.pop();
        const parent = node.parent;
        const key = node.key;
        const data = node.data;

        // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
        let res = parent;
        if (typeof key !== "undefined") {
          res = parent[key] = {};
        }

        // 数据已经存在
        let uniqueData = this.find(uniqueList, data);
        if (uniqueData) {
          parent[key] = uniqueData.target;
          continue; // 中断本次循环
        }

        // 数据不存在
        // 保存源数据，在拷贝数据中对应的引用
        uniqueList.push({
          source: data,
          target: res
        });
        console.log("data:", data, "res:", res);
        console.log(uniqueList);
        for (let k in data) {
          if (data.hasOwnProperty(k)) {
            if (typeof data[k] === "object") {
              // 下一次循环
              loopList.push({
                parent: res,
                key: k,
                data: data[k]
              });
            } else {
              res[k] = data[k];
            }
          }
        }
      }

      return root;
    },

    find(arr, item) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].source === item) {
          return arr[i];
        }
      }

      return null;
    },
    //生成指定深度和广度函数
    createData(deep, breadth) {
      var data = {};
      var temp = data;

      for (var i = 0; i < deep; i++) {
        temp = temp["data" + i] = {};
        for (var j = 0; j < breadth; j++) {
          temp[j] = j;
        }
      }
      return data;
    },
    //普通 深度复制
    isObject(obj) {
      return typeof obj === "object" && obj != null;
    },
    clonedeep(source) {
      if (!this.isObject(source)) return source;

      var target = Array.isArray(source) ? [] : {};
      for (var key in source) {
        if (source.hasOwnProperty(key)) {
          if (this.isObject(source[key])) {
            target[key] = this.clonedeep(source[key]);
          } else {
            target[key] = source[key];
          }
        }
      }
      return target;
    }
  }
};
</script>

<style lang="scss">
</style>