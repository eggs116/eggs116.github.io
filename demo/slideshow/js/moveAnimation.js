function moveAnimation(obj, json, fn) {
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
      var flag = true;
      //用来判断是否停止定时器的条件，一定要写到定时器的里面（每隔30ms判断一次定时器是否应该停止），遍历的外面
      for (var attr in json) {
          var current = 0;
          if (attr == "opacity") {
              current = parseInt(getStyle(obj, attr) * 100)||0;  // 防止ie中不认识opacity从而输出undefined
          } else {
              current = parseInt(getStyle(obj, attr));
          }
          var step = (json[attr] - current) / 10;
          step = step > 0 ? Math.ceil(step) : Math.floor(step);
          if (attr == "opacity") {  // 判断要做动画的样式中是否有opacity
              if ("opacity" in obj.style) {  // 判断浏览器是否支持opacity样式
                  obj.style[attr] = (current + step) / 100;
              } else {
                  obj.style.filter = "alpha(opacity=" + (current + step) + ")";
              }
          } else if (attr == "zIndex") {
              obj.style[attr]=json[attr];  // zIndex一般不要加过渡动画
          } else {
              obj.style[attr] = current + step + "px";
          }
          if (current != json[attr]) {
              flag = false;
          }
      }
      if (flag) {
          clearInterval(obj.timer);
          if (fn) {
              fn();//定时器停止后执行回调函数
          }
      }
  }, 30)
}
function getStyle(obj, attr) {
  if (obj.currentStyle) {
      return obj.currentStyle[attr];
  } else {
      return window.getComputedStyle(obj, null)[attr];
  }
}