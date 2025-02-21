### s

删除线来渲染文本,表示不再相关，或者不再准确的事情
删除文本建议使用 <del>

### samp
识别计算机程序输出，通常使用浏览器缺省的 monotype 字体


### script
嵌入可执行代码或数据

- async 异步下载，执行还是阻塞html解析
- defer HTML解析和脚本下载是并行的。脚本会在HTML全部解析完成后DOMContentLoaded事件
- crossorigin 
    - anonymous
    - use-credentials
- fetchpriority提供一个指示，说明在获取外部脚本时要使用的相对优先级。允许的值：
    - high
    - low
    - auto
- integrity 包含用户代理可用于验证所获取到资源的完整性的内联元数据
- nomodule 标明这个脚本不应该在支持 ES 模块的浏览器中执行。实际上，这可用于在不支持模块化 JavaScript 的旧浏览器中提供回退脚本。
- nonce 安全相关的属性，主要用于内容安全策略（CSP）中。
    ```html
    <!-- 在script标签中使用nonce -->
    <script nonce="rAnd0m123">
    // 脚本内容
    </script>
    <!-- 服务器端设置CSP header -->
    Content-Security-Policy: script-src 'nonce-rAnd0m123'
    ```
    nonce 是随机生成的，由服务器产生，添加到脚本上，浏览器会检查nonce会response头，是否匹配
- referrerPolicy
    - no-referrer
    - no-referrer-when-downgrade
    - origin
    - origin-when-cross-origin
    - same-origin
    - strict-origin-when-cross-origin
    - unsafe-url
- src 脚本URL
- type 
    - module 代码被视为 JavaScript 模块。charset 和 defer 属性不会生效
    - importmap 表元素体内包含导入映射（importmap）表。导入映射表是一个 JSON 对象，开发者可以用它来控制浏览器在导入 JavaScript 模块时如何解析模块标识符。
- blocking 
    - render 阻断屏幕渲染

### search
搜索元素

### section
文档中一个通用独立章节，它没有更具体的语义元素来表示。一般来说会包含一个标题。

### select
选项控件
- size 同时可见的行数
- multiple 允许多选
- disabled 禁用
- required 必须选中

### slot
插槽

### small
旁注、小字印刷，默认情况下，它以比其中的文本小一号的字体大小呈现


### source
为 <picture>、<audio> 和 <video> 元素指定一个或多个媒体资源。
- type
- src
- ssrcset 
- sizes
- media
- height
- width

```html
<picture>
    <!-- WebP 格式源 -->
    <source type="image/webp" 
            srcset="small.webp 300w,   <!-- WebP格式，实际宽度300px -->
                   medium.webp 600w,   <!-- WebP格式，实际宽度600px -->
                   large.webp 900w">   <!-- WebP格式，实际宽度900px -->
    
    <!-- JPG 格式源（后备） -->
    <img srcset="small.jpg 300w,      <!-- JPG格式，实际宽度300px -->
                 medium.jpg 600w,      <!-- JPG格式，实际宽度600px -->
                 large.jpg 900w"       <!-- JPG格式，实际宽度900px -->
         sizes="(max-width: 600px) 300px,  <!-- 视口<=600px时，图片显示宽度为300px -->
                600px"                      <!-- 其他情况，图片显示宽度为600px -->
         src="fallback.jpg"           <!-- 最后的后备方案 -->
         alt="图片">
</picture>
```

### span
通用的行级容器，本身不具备特殊含义


### strike
已弃用 删除线

### strong
重要，粗体文本


### style
包含文档的样式信息
- blocking
    - render 屏幕上的内容渲染被阻断
- media 规定该样式适用于哪个媒体。
- nonce csp安全相关的属性，主要用于内容安全策略（CSP）中。
- title 替代样式表集，只有火狐支持


### sub
下标
### sup
上标

### summary
摘要，details元素展开盒子内容的摘要。
点击summary时，details元素展开或关闭