# next-baidu-pan-url-key
> Get baidu pan url and key.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

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

## license
Code released under [the MIT license](https://github.com/afeiship/next-baidu-pan-url-key/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/next-baidu-pan-url-key
[version-url]: https://npmjs.org/package/@feizheng/next-baidu-pan-url-key

[license-image]: https://img.shields.io/npm/l/@feizheng/next-baidu-pan-url-key
[license-url]: https://github.com/afeiship/next-baidu-pan-url-key/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/next-baidu-pan-url-key
[size-url]: https://github.com/afeiship/next-baidu-pan-url-key/blob/master/dist/next-baidu-pan-url-key.min.js

[download-image]: https://img.shields.io/npm/dw/@feizheng/next-baidu-pan-url-key
[download-url]: https://www.npmjs.com/package/@feizheng/next-baidu-pan-url-key
