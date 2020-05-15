import imgList from "../css_js/imgList";

//处理单个节点
// export const dealNode = (el) => {
//   return new Promise((resolve, reject) => {
//     if (document.querySelector(el)) {
//       resolve(document.querySelector(el));
//     } else {
//       reject(new Error(el + " may not be the right name!"));
//     }
//   });
// };

//处理 img 群节点
export const dealNodeList = (el = "img", vuename) => {
  if (el !== "img" || document.querySelectorAll(el).length === 0) {
    return new Error("Check that the node name or page name is correct!");
  }

  //imgVue url 和 list node 数组
  let imgVue = imgList[vuename];
  let list = document.querySelectorAll(el);

  console.log(list);

  //加载完成 设置路径
  list.forEach((item) => {
    imgOnload(item, imgVue[item.className]);
  });

  return "loaded";
};

//加载图片
const imgOnload = (node, url = imgList.load) => {
  let image = new Image();
  image.src = imgList.load;
  image.onload = () => {
    node.src = url;
  };
  image.onerror = () => {
    console.log("Error loading image");
  };
};
