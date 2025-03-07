## 跨域

### 什么是跨域
相同的协议、相同的域名、相同的端口，否则就跨域

不受跨域影响的标签：script、img、link、video、audio

### 跨域的工作机制
浏览器的同源策略不会阻止请求的发送，而是阻止响应的获取。具体流程如下：

1. 请求发送阶段：
    - 浏览器正常发送跨域请求
    - 服务器正常接收请求
    - 服务器正常处理请求并返回数据
    - 网络传输正常完成
2. 响应处理阶段：
    - 浏览器接收到响应数据
    - 浏览器检查响应头中的CORS相关字段
    - 如果没有正确的CORS配置，浏览器会：
        - 阻止JavaScript代码获取响应内容
        - 在控制台显示跨域错误
        - 但请求已经完整执行了

### 解决方案
1. CORS，最主流的跨域解决方案，服务器设置 Access-Control-Allow-Origin 响应头控制跨域访问
    ```js
    Access-Control-Allow-Origin: *
    Access-Control-Allow-Methods: GET, POST, PUT
    Access-Control-Allow-Headers: Content-Type
    ```
2. JSONP, 利用script标签不受同源策略限制的特点，只能应用于get请求，可以支持老版本浏览器，需要服务器配合返回指定格式的数据。
    - 前端动态添加script标签，并动态给url添加callback参数，在url数据返回、拒绝或者错误时，清理script标签 
    - 服务端设置响应头 `Content-Type: application/javascript`，返回的数据格式为 `callback({})` 也就是使用callback函数名包裹返回数据，前端就可以执行callback函数名来接收返回数据

3. 代理服务器 在同源服务器上设置代理，接受客户端请求，代为向目标服务器发送请求
    - 开发环境下可以使用webpack-devserver 的proxy功能
    - 生成环境下可以使用nodejs搭建代理服务器，因为服务器之间没有跨域问题

4. WebSocket 基于ws或者wss协议，天然支持跨域，适合实时通信场景
5. postMessage HTML5提供的跨域通信方案，适用于不同的窗口或者iframe之间通信
6. document.domain 仅适用于主域名相同的情况，将子域和父域的document.domain设置为相同的值，就可以实现跨域访问(`逐渐废弃`)
7. Nginx 反向代理，配置Nginx转发请求，把跨域请求转换成同源请求
8. 浏览器插件或者开发者工具，仅适用于开发阶段，可以通过修改浏览器的安全策略解决跨域
    ```bash
    # Windows启动命令
    chrome.exe --disable-web-security --user-data-dir=任意目录

    # Mac启动命令
    open -n -a "Google Chrome" --args --disable-web-security --user-data-dir=任意目录
    ```
    浏览器插件:如Allow CORS、CORS Unblock）：
    原理：修改响应头，自动添加Access-Control-Allow-Origin字段

### 代理和反向代理
1. 正向代理，代理"客户端"，帮客户端发请求。在跨域中，客户端知道请求发送给了哪一个服务器，但服务器不知道请求来自哪一个客户端
2. 反向代理，代理"服务器"，帮服务器接收请求。在跨域中，前端只知道发送给了Nginx，不知道请求最终转发到了哪个真实服务器