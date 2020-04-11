(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var ZH_RE = /[\u4e00-\u9fa5]+:/;
  /* prettier-ignore */
  var TRIM_ITEM = function (item) { return item.trim(); };

  nx.baiduPanUrlKey = function (inString) {
    var paths = inString.split(/[\u4e00-\u9fa5]+:/);
    var res = paths.filter(TRIM_ITEM).map(TRIM_ITEM);
    return { url: res[0], key: res[1] };
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.baiduPanUrlKey;
  }
})();
