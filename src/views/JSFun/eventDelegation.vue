<template>
  <div id="eventDelegation">
    <!-- <div id="d1">1</div>
    <div id="d2">2</div>
    <div id="d3">3</div>
     <div id="d4">4</div>
    <div id="d5">5</div>
    <div id="d6">6</div>
    <div id="d7">7</div>
    <div id="d8">8</div>
    <div id="d9">9</div>
    <div id="d10">10</div>-->
  </div>
</template>

<script>
export default {
  name: "eventDelegation",
  data() {
    return {
      list: [1, 2, 3],
    };
  },
  mounted() {
    // this.addElement(4);
    // this.getTop();
    let count = document.getElementsByTagName("div");
    console.log(count.length);
    this.init();
    window.addEventListener("scroll", () => {
      let cont = this.calcScreen();
      for (let i = 1, len = this.list.length; i <= len; i++) {
        if (document.getElementById("d" + i)) {
          //   console.log("1");
        //   document.getElementById("d" + i).style.cssText +=
        //     "background-color:yellow;";
        }
      }
    });
  },
  methods: {
    calcScreen() {
      let clientH = document.documentElement.clientHeight;
      let clientW = document.documentElement.clientWidth;
      let scrollT = document.documentElement.scrollTop;

      //   console.log(clientH, scrollT);
      return { clientH, scrollT };
    },
    getTop() {
      for (let i = 1; i <= 10; i++) {
        console.log(document.getElementById("d" + i).offsetTop);
      }
    },
    addElement(i) {
      let div0 = document.createElement("div");
      div0.id = "d" + i;
      div0.innerHTML = i;
      div0.style.cssText = `width: 90%;
        height: 200px;
        border-radius: 8px;
        background-color: pink;
        margin: 10px auto;
        transition: 4s;`;
      document.body.appendChild(div0);
    },
    init() {
      for (let i = 1, len = this.list.length; i <= len; i++) {
        this.addElement(i);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#eventDelegation {
  width: 100%;
  #d1,
  #d2,
  #d3,
  #d4,
  #d5,
  #d6,
  #d7,
  #d8,
  #d9,
  #d10 {
    width: 90%;
    height: 200px;
    border-radius: 8px;
    background-color: pink;
    margin: 10px auto;
    transition: 2s;
  }
}
</style>