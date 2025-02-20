## node
 js的服务端（非浏览器的）运行环境，基于v8引擎，封装了一下服务端的runtime，能够实现非常多的业务功能。
 也是单线程的，可以通过cluster/pm2等工具进行并发处理。

 ## 基础模块
 - file styletem fs 文件IO
 - Path 路径
 - http
 - Net 
 - Cmd 命令行
 - process 线程

 ## V8核心
 - 事件循环
 - 内存原理

### 版本管理
nvm

### Buffer
字符集是一系列字符（文字、标点符号）的集合。常见字符集由 ASCII、Unicode、UTF-8、UTF-16、UTF-32 等集合组成。
Node.js 目前支持的字符编码包括：
- ASCII 支持7 为ASCII数据，如果设置去掉高位的话，编码非常快
- utf-8 多字节编码的uncode字符，很多网页和其他文档格式使用UTF-8
- utf16le 2或4个字节，小字节编码的Unicode字符，支持代理对
- ucs2 utf16le
- base64 包括小写字符a-z，大写字符A-Z，数字0-9，符号 + / = 共65个字符的集合。任何符号都可以转换成这个字符集中的字符，这个转换过程就叫做Base64编码
- latinl 一种把Buffer编码成一字节编码的字符串的方式
- binary latinl 的别名
- hex 将每个字节编码为2个16禁止字符


Buffer 对象用于表示固定长度的字节序列，在js中，Buffer 类是 Uint8Array 类的子类，8位无符号的整数数组 。并使用涵盖额外用例的方法对其进行扩展。Node.js API 在支持Buffer的地方也接受纯Unit8Array。虽然Buffer类在全局作用域内可用，但仍然建议使用import或者require 语句显式地引用它
js:Unit8Array 表示一个8位无符号整数数组。内容初始化为0.一但建立，就可以使用对象的方法或者使用标准数组索引语法引用数组中的元素
```js
const buf = Buffer.from('hello')
const buf2 = Buffer.from('hello', 'utf-8')
const buf3 = Buffer.alloc(5)
const buf4 = Buffer.allocUnsafe(5)
```

### base编码原理
一个byte = 8 个二进制位（bite）
1. 先将字符串转换成ASCII编码
2. 将ASCII编码装换成二进制bite
3. 每6个二进制位分成一组，每组不够一个byte，所以在前面补两个0 构成一个byte
4. 如果前面补了两个0，仍不满8位，则在后面补0
5. 将编码装换成十进制
6. 使用十进制在base64索引表中查询对应的字符

### process
node全局对象提供进程信息和控制
process.env 环境对象
process.argv 命令行参数
process.cwd() 当前工作目录
```js
process.exit(0); // 正常退出
process.exit(1); // 带错误退出
```
### crypto
加密 jwt

### HTTP
express  koa


### http： 
- 每个请求都需要建立单独的TCP连接
- 支持长久链接keep-alive
限制：
- 队头阻塞 多个请求组成的请求队列，如果请求1阻塞，则后续请求都必须等待
- 无法复用连接
- 每个包有严格的传输顺序，必须等待丢失包的重传
### Http2： 
改进：
- 多路复用 即同一个连接中同时传输多个数据流，并行处理多个请求和响应，多个数据流之间相互不影响。每个请求/响应都分配一个唯一的流ID，所有通信都被分割成小的二进制帧，帧中包含流ID，接收端通过流ID重组数据。
- 二进制分帧层 即将每个HTTP请求和响应都分割成小的二进制帧，帧中包含流ID，接收端通过流ID重组数据。它是多路复用的基础
- 服务器推送 可以在获取模版时，主动推送模版需要的js、css资源
- 头部压缩 使用Hpack压缩，头部以二进制形式传输，自动记录之前见过的头部，后续发送变化的部分（这样就分成了静态字典和动态字典），重复信息通过索引表查找。
特点：
- 单个TCP可以处理多个HTTP请求
- 并行传输多个资源
- 必须使用HTPPS
- 没有完全解决队头阻塞问题，tcp包丢失会影响所有流，需要重新发送，但在应用层已经做的了多个流的复用
优势：
- 提升页面加载速度
- 减少服务器压力
- 更高效的头部压缩

```js
// Node.js HTTP/2 服务器推送示例
const http2 = require('http2');
const server = http2.createSecureServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt')
});

server.on('stream', (stream, headers) => {
  if (headers[':path'] === '/') {
    // 推送关联资源
    stream.pushStream({ ':path': '/style.css' }, (err, pushStream) => {
      pushStream.respondWithFile('./style.css');
    });
    // 发送主要资源
    stream.respondWithFile('./index.html');
  }
});
```
### http3
变化
- 基于QUIC协议 Quick UDP Internet Connection，基于UDP 内置加密，
- 使用UDP作为传输层
- 内置加密 基于TLS1.3
特性：
- 0-RTT链接建立 zero round trip time 传统的HTTP IP协议，需要三次握手3RTT，QUIC 首次连接1RTT（需要发送证书等信息）， 后续都是0RTT。
- 改进的多路复用
- 连接迁移 不基于IP协议，切换IP地址可以，保持连接
- 更好的丢包恢复，一个包的丢失不影响其他流，只重传丢失的包
优势：
- 减少延迟
- 更好的移动网络支持
- 解决了http、http2的TCP队头阻塞问题 所有流独立，一个流的丢失不影响其他流
