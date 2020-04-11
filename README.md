# next-baidu-pan-url-key
> Get baidu pan url and key.

## installation
```bash
npm install -S @feizheng/next-baidu-pan-url-key
```

## usage
```js
import '@feizheng/next-baidu-pan-url-key';

var str1 = "链接:https://pan.baidu.com/s/1zNVdo1cpsYYbWM7YTb0EvQ  密码:mdxe";
var str2 = "链接: https://pan.baidu.com/s/1W0VYRMHcHA4IKK2Cd8a2VA 提取码: t2nu";


nx.baiduPanUrlKey(str1);
nx.baiduPanUrlKey(str2;

// results
{ url: 'https://pan.baidu.com/s/1W0VYRMHcHA4IKK2Cd8a2VA', key: 't2nu' }
{ url: 'https://pan.baidu.com/s/1zNVdo1cpsYYbWM7YTb0EvQ', key: 'mdxe' }
```
