/**
 * 异步引入百度地图，并promise化
 * @param {*} ak 
 */
export function MP(ak) {
  return new Promise((resolve, reject) => {
    window.init = function () {
      resolve(BMap)
    }
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://api.map.baidu.com/api?v=2.0&ak=" + ak + "&callback=init";
    script.onerror = reject;
    document.head.appendChild(script);
  })
}
