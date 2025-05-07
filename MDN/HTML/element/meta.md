## 元数据

- application-name 网页中所运行的应用程序的名称。
- author 文档作者的名字。
- description 网页的描述。
- generator 标识网页是由什么软件或工具生成的 <meta name="generator" content="Vue.js">
- keywords 关键词，逗号分割
- referrer 控制当前页面发出请求的http referer请求头
    - no-referrer 当前页面不向服务器发送referer请求头
    - origin 只发送源信息（协议、域名和端口）
    - no-referrer-when-downgrade 从 HTTPS 页面导航到 HTTP 页面时不发送 Referrer
    - origin-when-cross-origin 同一请求发送完整URL，跨源请求只发送源信息origin
    - same-origin 对于同源请求，发送 referrer；跨源请求不会包含 referrer 信息。
    - strict-origin HTTPS → HTTPS：发送源信息； HTTPS → HTTP：不发送 Referrer； HTTP → 任何协议：发送源信息
    - strict-origin-when-cross-origin 默认值，同源请求：发送完整 URL； 跨源 HTTPS → HTTPS：只发送源信息；跨源 HTTPS → HTTP：不发送 Referrer
    - unsafe-url 始终发送完整的 URL（不安全）
- theme-color 当前页面的建议颜色，影响android标题栏颜色，影响windows系统任务栏颜色，影响pwa主题色
- color-scheme 指指定网页支持的配色方案，主要用于适配浏览器的明暗模式。值可以空格分割
    - light 支持亮色
    - dark 支持暗色
    ```css
        /* 针对不同模式设置样式 */
        @media (prefers-color-scheme: dark) {
        :root {
            --background-color: #333;
            --text-color: #fff;
        }
        }

        @media (prefers-color-scheme: light) {
        :root {
            --background-color: #fff;
            --text-color: #333;
        }
        }
    ```
- viewport 视口初始大小提供指示
    - width 正整数或device-width 
    - height 正整数或device-height `未被任何浏览器使用`
    - initial-scale 0-10之间的值，默认缩放比例
    - maximum-scale 0-10之间的值，默认最大缩放比例
    - minimum-scale 0-10之间的值，默认最小缩放比例
    - user-scalable yes no 是否允许用户缩放，默认值为no
    - viewport-fit auto 浏览器处理、contain 缩放适应安全区域、cover延伸到设备边缘可能需要处理刘海屏和圆角等 用于控制网页在全面屏设备上的显示方式。
- creator 创建者
- googleboot roots的替代名称，只能被gooleboot goole的网页爬虫搜索引擎使用
- publisher 当前文档的发布者、出版者
- robots 控制搜索引擎爬虫行为的meta标签。优先使用robots.txt进行站点级控制
    - index 允许搜索引擎索引页面
    - noindex
    - follow 允许跟踪页面链接
    - nofollow
    - all 等同于index follow
    - none 等同于noindex nofollow
    - noarchive 禁止搜索引擎存档页面
    - nosnippet 禁止搜索引擎显示网页描述
    - noimageindex 禁止图片索引
    - nocache noachive的替代名称