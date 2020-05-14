// const imgload = url =>{
//     return new Promise((resolve, reject) =>{

//     })
// };

export const imgonload = (imgs, url) => {
  let img = new Image();
  console.log(img, imgs);

  img.src = imgs.src;
  img.onload = () => {
    imgs.src = url;
  };
};
