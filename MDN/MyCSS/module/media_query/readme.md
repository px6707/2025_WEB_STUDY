## 媒体查询
CSS 媒体查询（media query）是响应式设计的关键组成部分，你可以根据各种设备特征和参数是否存在以及对应的值来应用 CSS 样式。



### HTML 中的meta
1. link 元素的 media 属性，这种资源将只在满足媒体条件的情况下才会加载
```html
<link
  href="mobile.css"
  rel="stylesheet"
  media="screen and (max-width: 600px)" />
```
2. source 元素的media 属性，定义资源媒体在那种条件下才会加载
```html
<video controls>
  <source src="foo-large.webm" media="(min-width: 800px)" />
  <source src="foo.webm" />
  抱歉，你的浏览器不支持 HTML 视频。
</video>
<picture>
  <source
    srcset="landscape.png"
    media="(min-width: 1000px)"
    width="1000"
    height="400" />
  <source
    srcset="portrait.png"
    media="(min-width: 600px)"
    width="600"
    height="800" />
  <img
    src="fallback.png"
    alt="当浏览器不支持来源时使用的图片"
    width="500"
    height="400" />
</picture>
```
3. style media 属性，据视口宽度等媒体特性，有选择性地将内部样式表应用到文档中
```html
<style media="all and (max-width: 500px)">
      p {
        color: blue;
        background-color: yellow;
      }
    </style>
```
### @media
 CSS at 规则可用于基于一个或多个媒体查询的结果来应用样式表的一部分。

```css
@media screen {
  body {
    font-size: 13px;
  }
}

/* 范围语法 */

@media (400px <= width <= 700px) {
  body {
    line-height: 1.4;
  }
}
```
### @improt
在没有任何媒体查询的情况下，导入是无条件的。
```css
@import url("styles.css");
@import "styles.css";

@import url("print.css") print;
@import "mobile.css" screen and (max-width: 768px);
```
- 必须在 CSS 文件开头（@charset 规则除外）
- 可以在 <style> 标签中使用
- 不能在条件组规则内使用。 条件组规则包括：  @media (媒体查询)  @supports (特性查询) @document @layer @container 不能在这些规则中使用
- 会影响性能（阻塞并行下载）
- 每个导入都会产生新的 HTTP 请求
- 建议在开发环境使用，生产环境用构建工具合并文件