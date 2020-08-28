//函数节流
//连续触发事件但是在 n 秒中只执行一次函数。节流会稀释函数的执行频率。
// export function throttle(fnc, wait, type) {
//   let previous = 0;
//   let timeout;

//   return function() {
//     var context = this;
//     var args = arguments;

//     //时间戳执行，函数触发在开始阶段
//     if (type === 1) {
//       var now = Date.now();
//       if (now - previous > wait) {
//         fnc.apply(context, args);
//         previous = now;
//       }
//     } else if (type === 2) {
//     //定时器执行，函数触发在结束阶段
//       if (!timeout) {
//         timeout = setTimeout(() => {
//           fnc.apply(context, args);
//           timeout = null;
//         }, wait);
//         console.log(timeout);
//       }
//     }
//   };
// }

export function throttle(func, wait, mustRun) {
  var timeout,
    startTime = new Date();

  return function() {
    var context = this,
      args = arguments,
      curTime = new Date();

    clearTimeout(timeout);
    // 如果达到了规定的触发时间间隔，触发 handler
    if (curTime - startTime >= mustRun) {
      func.apply(context, args);
      startTime = curTime;
      // 没达到触发间隔，重新设定定时器
    } else {
      timeout = setTimeout(func, wait);
    }
  };
}
