<template>
  <div id="echarts">
    <div id="mycharts" ref="mycharts"></div>
  </div>
</template>

<script>
import echarts from "../../JsUtil/echarts";
import garbageJson from "../../../src/garbage.json";
export default {
  name: "echarts",
  mounted() {
    this.draw();
  },
  methods: {
    draw() {
      mycharts = echarts.init(this.$refs.mycharts);
      mycharts.setOption({
        series: {
          type: "sankey",
          layout: "none",
          focusNodeAdjacency: "allEdges",
          data: garbageJson.node,
          links: garbageJson.data,
          focusNodeAdjacency: true,
          levels: [
            {
              depth: 0,
              itemStyle: {
                color: "#55efc4"
              },
              lineStyle: {
                color: "source",
                opacity: 0.6
              }
            },
            {
              depth: 1,
              itemStyle: {
                color: "#b3cde3"
              },
              lineStyle: {
                color: "source",
                opacity: 0.6
              }
            },
            {
              depth: 2,
              itemStyle: {
                color: "#ccebc5"
              },
              lineStyle: {
                color: "source",
                opacity: 0.6
              }
            },
          ]
        }
      });
    }
  }
};
</script>

<style lang="scss">
#mycharts {
  height: 500px;
  //   width: 500px;
}
</style>