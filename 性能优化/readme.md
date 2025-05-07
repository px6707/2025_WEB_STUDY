## 性能优化

### url输入到浏览器到渲染页面的过程

1. 输入
URL - 资源定位符，提供了访问资源的具体方法
URI - 资源标识符，用于标识某个资源的字符串


URL示例：
- https://www.example.com/users/123
包括协议、域名、端口（默认）

协议：http和TCP的关系
物理层->数据链路层->网络层->传输层->会话层->表示层->应用层
物理层：物理设备
数据链路层：物理设备手机
网络层：搭建一个管道，网络
传输层：协议 TCP
会话层：单双工
表示层：业务协议 
应用层：应用程序 http

http基于tcp实现连接盒通道的建立，包括三次握手4次挥手。

SYNC表示发起同步请求，ACK表示是不是返回
三次握手：
发起方    --》  SYNC=1  ACK=0     --》      接收方
发起方    《--  SYNC=1  ACK=1     《--      接收方
发起方    --》  SYNC=0  ACK=1     --》      接收方

四次挥手：
发起方    --》  FIN=1             --》      接收方
发起方    《--  FIN=1  ACK=1      《--      接收方
发起方    《--  FIN=1  ACK=0      《--      接收方
发起方    --》  ACK=1              --》     接收方


http的职能？
http 1.0 文本传递
http 1.1 长连接 keep-alive
http 2.0 多路复用、头部压缩、服务端主动推送，必定是https
http 3.0 quci 协议 UDP的不安全协议，自带加密，基于TLS1.3


https 和http的区别？
https =  http + SSL/TLS非对称加密层
1. 客户端向服务器发起请求
2. 服务端返回SSl证书
3. 客户端验证证书合法性
4. 双方协商产生会话秘钥
5. 使用会话秘钥加密通信


2. 域名
通过域名查找IP  映射表多级缓存机制，浏览器->系统缓存(HOST)->路由器->运营商->根域名服务器

预请求？
prefetch  preload
prefetch 预触达，空闲时候下载资源，适用于下一页可能用用到的资源，非当前页核心资源
preload 告诉浏览器立即加载资源，当前页的高优先级资源
```html
<link rel="preload" href="http://example.com/page2.html">
```

文件加载优化？
文件根据距离不同具有加载时间差
使用CDN  content delivery network，多节点具有相同的主机内容，负载均衡

3. 端口
同一域名的不同版本（桌面版、移动版）？
代理嗅探用户的UerAgent，然后使用不同的port

代理服务器，正向代理，反向代理
正向代理：掩盖真正的request，服务端感知不到真正的requester
反向代理： 掩盖真正的服务方，客户端感知不到真正的responser

4. path query hash
浏览器解析URL 通过网络操作获取静态资源

文件加载性能？
文件资源访问形式：1. 通过外链进行访问 2. 转译文件 3. 服务端渲染
优化性能：
1. CDN加速  静态文件长韩缓存
2. gzip 压缩大小
3. 首屏加载白屏优化，关键脚本预加载，defer async进行非阻塞加载和懒加载

5. js解析
文件执行
HTML 解析 =》 JS 解析 =》DOM

浏览的脚本执行优化？
js字节码， 相对于机器码减少了存储空间，相对于高级语言减少了转译事件
字节码执行/ JIT ， 浏览器通过预执行扫描代码，标记哪些转译为字节码，哪些转译为机器码。字节码是机器码的封装，可以直接执行，对于常使用的代码转译为机器码，只使用一次的代码转译为机器码即可


内存管理？

全局变量
闭包
循环引用的深拷贝
未清除的定时器

6. DOM
HTML 生成DOM树
DOM隔离的方式 微前端
    1. iframe 进行隔离
    2. weComponent 

7. css
css解析 生成CSS树
CSS处理过程：
CSS预处理器： 模块化、变量、层级结构

性能优化：
    1. 选择器 使用class， 尽量精确，不要选择过多的节点
    2. 选择器书写优化 ，保持简单不要过多嵌套 css解析是从右到左的，每次遇到嵌套都要查找，层级过深就会影响性能
    3. 尽量不使用通配符 
    4. 注释不如删除，影响包大小
    5. 减少使用高级选择器，性能损耗大 例如 a[class~="logo"]
    6. 优化统一选择器。属性简写（a,不占代码大小b. 分开每条都要解析,简写只要解析一次）选择器合并写法（a. 减少代码大小 b.浏览器对组合只需要解析一次声明块 c.属性值存储一次）
        ```css
            .tab1 { width: 100px }
            .tab2 { width: 100px }
            .tab3 { width: 100px }
            写成
            .tab1, .tab2, .tab3 { width: 100px }
        ```
    7. 写法优化 @import模块化，只写复用部分。对于简单动画使用css利用GPU硬件加速，不占主线程不阻塞js。复杂动画使用JS，添加控制能力


8. cssOM和htmlDOM 结合生成 render 渲染树 然后进行 排列和绘制 ，如果css发生改变可能发生重拍和重绘

减少重绘，避免重排

1. 批量修改CSS，不要挨个赋值
2. 批量修改DOM，使用fragment代码片段
3. 元素脱离文档流操作，防止影响其他元素的布局，例如displau:none position:absolute ，克隆节点后操作
4. 不要频繁查询offset、client、scroll和集合相关方法getBoundingClientRect(),getClientRect(),window.innerWidth、window.innerHeight、widnwo.pageXOffset、window.pageYOffset,计算样式copmputedStyle、currentStyle都会引起重拍。因为这些信息浏览器需要重新布局才能返回正确信息
5. transform 代替位置移动（left、right）