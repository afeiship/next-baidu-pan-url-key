(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.baiduPanUrlKey for Desktop', function () {
      var str1 = '链接:https://pan.baidu.com/s/1zNVdo1cpsYYbWM7YTb0EvQ  密码:mdxe';
      var res = nx.baiduPanUrlKey(str1);
      expect(res).toEqual({ url: 'https://pan.baidu.com/s/1zNVdo1cpsYYbWM7YTb0EvQ', key: 'mdxe' });
    });

    test('nx.baiduPanUrlKey for Website', function () {
      var str2 = '链接: https://pan.baidu.com/s/1W0VYRMHcHA4IKK2Cd8a2VA 提取码: t2nu';
      var res = nx.baiduPanUrlKey(str2);
      expect(res).toEqual({ url: 'https://pan.baidu.com/s/1W0VYRMHcHA4IKK2Cd8a2VA', key: 't2nu' });
    });
  });
})();
