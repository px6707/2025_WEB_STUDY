## 缓存

### 强缓存
1. 先检查cache-control和expires
2. 如果命中且未过期，直接使用缓存
3. 如果未命中或者已过期，进入协商缓存阶段

```js
// 强缓存配置
// 缓存一小时
Cache-Control: max-age=3600

// 禁止缓存
Cache-Control: no-store
// 每次需要验证，进入协商缓存阶段
Cache-Control: no-cache
// 仅浏览器可缓存
Cache-Control: private
// 中间代理可缓存
Cache-Control: public
```
### 协商缓存
1. 发送带有if-none-match 或者 if-modifyed-since的请求
2. 服务器判断资源是否有变化
3. 未变化返回304，使用本地缓存
4. 已变换返回200和新的资源
```js
// 协商缓存控制
// 基于内容的验证
// 内容的唯一标识
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
// 验证，再次发送请求时，将上一次的Etag发送给服务器，由服务器验证内容是否变化
If-None-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"

// 基于时间的验证
Last-Modified: Wed, 21 Oct 2015 07:28:00 GMT
If-Modified-Since: Wed, 21 Oct 2015 07:28:00 GMT

```

