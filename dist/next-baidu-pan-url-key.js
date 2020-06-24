/*!
 * name: @feizheng/next-baidu-pan-url-key
 * description: Get baidu pan url and key.
 * homepage: https://github.com/afeiship/next-baidu-pan-url-key
 * version: 1.0.1
 * date: 2020-06-24T14:28:37.283Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var ZH_RE = /[\u4e00-\u9fa5]+:/;
  var TRIM_ITEM = function (item) { return item.trim(); };

  nx.baiduPanUrlKey = function (inString) {
    var paths = inString.split(ZH_RE);
    var res = paths.filter(TRIM_ITEM).map(TRIM_ITEM);
    return { url: res[0], key: res[1] };
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.baiduPanUrlKey;
  }
})();

//# sourceMappingURL=next-baidu-pan-url-key.js.map
