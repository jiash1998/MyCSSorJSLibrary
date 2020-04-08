//函数防抖
//触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计时。
export function debounce(func, wait, immediate) {
  let timeout; //undefined
  return function(...args) {
    let context = this;
    console.log(...args);

    if (timeout) clearTimeout(timeout);

    if (immediate) {
      //立即执行
      //第一次点击，立即执行；
      //间隔指定时间后点击，定时器执行完，!timeout为true
      let callNow = !timeout;
      //这时timeout的id是上次点击时的
      //多次点击，定时器执行不完，timeout始终有值，！timeout为false，不执行函数
      timeout = setTimeout(function() {
        timeout = null;
        //当停止点击后，置为null，然后再执行函数
      }, wait);
      //这时timeout的id是新的
      //settimeout函数返回值为一个id整型，用于cleartimeout
      if (callNow) func.apply(context, args);
    } else {
      //延时执行
      timeout = setTimeout(function() {
        func.apply(context, args);
      }, wait);
    }
  };
}

// export function debounce(func, wait = 1000) {
//   let timeout;
//   return function(event) {
//     clearTimeout(timeout);
//     console.log(event);
//     timeout = setTimeout(() => {
//       func.call(this, event);
//     }, wait);
//   };
// }

// export function debounce(func, wait) {
//   let timeout;
//   return function() {
//     let context = this;
//     let args = arguments;
//     console.log(args);

//     if (timeout) clearTimeout(timeout);

//     timeout = setTimeout(() => {
//       func.apply(context, args);
//     }, wait);
//   };
// }
