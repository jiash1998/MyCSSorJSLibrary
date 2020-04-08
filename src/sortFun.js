var self = this;
var list = [],
  exportList = [];
export default {
  initData() {
    for (let i = 0; i < 10000; i++) {
      list.push(Math.floor(Math.random() * 10001));
    }
  },
  //冒泡排序
  bubbleSort() {
    this.initData();
    var start = new Date().getTime();
    let temp = 0;
    for (let i = 0; i < list.length - 1; i++) {
      for (let j = 0; j < list.length; j++) {
        if (list[j] > list[j + 1]) {
          temp = list[j];
          list[j] = list[j + 1];
          list[j + 1] = temp;
        }
      }
    }
    var end = new Date().getTime();
    exportList = list;
    list = [];
    console.log(exportList);
    console.log("冒泡排序用时" + (end - start));
    return exportList;
  },
  //选择排序
  selectSort() {
    this.initData();
    var min = 0,
      temp = 0;
    var start = new Date().getTime();
    for (let i = 0; i <= list.length - 2; i++) {
      min = i;
      for (let j = i + 1; j < list.length; j++) {
        if (list[min] > list[j]) {
          min = j;
        }
      }
      temp = list[min];
      list[min] = list[i];
      list[i] = temp;
    }
    var end = new Date().getTime();
    exportList = list;
    list = [];
    console.log(exportList);
    console.log("选择排序用时" + (end - start));
    return exportList;
  },
  //插入排序
  insertSort() {
    this.initData();
    var temp = 0,
      inner = 0;
    var start = new Date().getTime();
    for (let outter = 1; outter < list.length; outter++) {
      temp = list[outter];
      inner = outter;
      while (inner > 0 && list[inner - 1] >= temp) {
        list[inner] = list[inner - 1];
        inner--;
      }
      list[inner] = temp;
    }
    var end = new Date().getTime();
    exportList = list;
    list = [];
    console.log(exportList);
    console.log("选择排序用时" + (end - start));
    return exportList;
  },
  //快速排序
  fastSort() {
    this.initData();
    if (list.length <= 1) {
      return list;
    }
    var small = [];
    var big = [];
    var benchmark = list[0];
    for (let i = 1; i < list.length; i++) {
      if (list[i] > benchmark) {
        small.push(list[i]);
      } else {
        big.push(list[i]);
      }
    }
    return this.fastSort(small).concat(benchmark, this.fastSort(big));
  },
};
