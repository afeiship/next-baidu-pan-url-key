/*!
 * name: @jswork/next-baidu-pan-url-key
 * description: Get baidu pan url and key.
 * homepage: https://github.com/afeiship/next-baidu-pan-url-key
 * version: 1.0.0
 * date: 2020-11-21 09:09:30
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
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
