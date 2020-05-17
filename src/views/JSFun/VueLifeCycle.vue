<template>
  <div>
    <h2 id="h2" class="h2">{{msg}}</h2>
    <button @click="msg = '1998'">改变</button>
    <input v-model="test"/>
  </div>
</template>

<script>
export default {
  name: "VuevLifeCycle",
  data() {
    return {
      msg: "甲生"
    };
  },
  methods: {
    init() {
      console.log("this is init event");
    }
  },
  watch: {
      
  },
  //实例创建期间
//   beforeCreate() {
//     //在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
//     console.log("beforeCreate：", this.msg);
//     // this.init();
//   },
//   created() {
//     //想要使用 methods 或者 data 最早只能在 created 中
//     console.log("created：", this.msg);
//     this.init();
//   },
//   beforeMount() {
//     // 开始编译 Vue 中的代码，然后把这个模板字符串渲染为内存中的 DOM
//     //此时并没有把模板挂载到 真正的页面中
//     // console.log("beforeMount：", document.getElementById("h2").innerText); 报错 null
//     // console.log("beforeMount：", document.querySelector(".h2").innerHTML); 报错 null
//   },
//   mounted() {
//     //这时内存中的模板 已经挂载到页面中
//     //如果想操作页面的 DOM节点，最早只能在 mounted 中
//     console.log("mounted:", document.getElementById("h2").innerText);
//     console.log("mounted:", document.querySelector(".h2").innerHTML);
//   },
//   beforeUpdate() {
//     //数据更新时调用, 展示的是 更新前的数据
//     console.log("beforeUpdate:", document.getElementById("h2").innerText);
//     console.log("beforeUpdate:", document.querySelector(".h2").innerHTML);
//   },
//   updated() {
//     //由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
//     console.log("Update:", document.getElementById("h2").innerText);
//     console.log("Update:", document.querySelector(".h2").innerHTML);
//   },
//   beforeDestroy() {
//     //实例销毁之前调用。在这一步，实例仍然完全可用。
//   },
//   destroyed() {
//     //   /实例销毁后调用。该钩子被调用后，
//     //对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。
//   }
};
</script>

<style lang="scss">
</style>