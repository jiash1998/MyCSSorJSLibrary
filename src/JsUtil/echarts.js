// 加载echarts，注意引入文件的路径
import echarts from "echarts/lib/echarts";

// 再引入你需要使用的图表类型，标题，提示信息等
import "echarts/lib/chart/pie";
import "echarts/lib/chart/sankey";
import "echarts/lib/component/legend";
// import "echarts/lib/component/title";

// const echarts = equire([
//   // 写上你需要的
//   "pie",
//   "legend",
//   "title",
// ]);

export default echarts;
