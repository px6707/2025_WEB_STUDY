## css 条件规则模块

CSS条件规则模块定义CSS媒体并支持查询，使您能够定义仅在满足特定条件时应用的样式。此模块中定义的条件规则基于设备、用户代理和视口功能。使用条件规则，你可以基于查询值或浏览器和设备特性来定位CSS样式，而不依赖于正在渲染的文档。

```css
@media
@supports
@when
@else
```
### @media
可用于基于一个或多个媒体查询的结果来应用样式表的一部分。
#### 媒体类型：
- all 所有设备
- print 打印预览模式
- screen 屏幕
#### 媒体特性
描述了用户代理、输出设备或环境的具体特征。媒体特性表达式是完全可选的，其用于测试这些特征是否存在以及它们的值。每个媒体特性表达式都必须用括号括起来。
- any-hover 是否有任何可用的输入机制允许用户（将鼠标等）悬停在元素上
- any-pointer 可用的输入机制中是否有任何指针设备
- aspect-ratio 视口（viewport）的宽高比。
- color 输出设备每个颜色分量的比特值，如果设备不支持输出彩色，则该值为 0
- color-gamut 用户代理和输出设备大致程度上支持的色域。
- color-index 输出设备的颜色查询表（color lookup table）中的条目数量
- display-mode 应用程序的显示模式，显示模式由 web 应用的清单（manifest）中的 display 成员所指定。
- dynamic-range 用户代理和输出设备支持的亮度、对比度和色彩深度的组合。
- forced-colors 检测用户代理是否限制调色板。
- grid 输出设备使用网格屏幕还是点阵屏幕
- height 输出设备的高度
- hover 主输入机制是否允许用户在元素上悬停
- inverted-colors 用输出设备单色帧缓冲区中每个像素的位深度。如果设备并非单色屏幕，则该值为 0。户代理或者底层操作系统是否反转了颜色
- monochrome 输出设备单色帧缓冲区中每个像素的位深度。如果设备并非单色屏幕，则该值为 0。
- orientation 输出设备的方向
- overflow-block 输出设备如何处理沿块轴溢出视口的内容。
- overflow-inline 沿行轴溢出视口的内容是否可以滚动。
- pointer 主输入机制是一个指针设备吗？
- prefers-color-scheme 检测用户倾向于选择亮色还是暗色的配色方案
- prefers-contrast 检测用户是否有向系统要求提高或降低相近颜色之间的对比度
-  prefers-reduced-motion 用户是否希望页面上出现更少的动态效果
- resolution 输出设备的像素密度（分辨率）
- scripting 检测脚本（例如 JavaScript）是否可用
- update 输出设备修改渲染内容的频率。 实验属性
- video-dynamic-range 用户代理的视频平面（video plane）和输出设备支持的亮度、对比度及色彩深度的组合。
- width 输出设备的宽度
```css
@media (hover: hover) {
  abbr:hover {
    color: limegreen;
    transition-duration: 1s;
  }
}

@media screen and (min-width: 900px) {
  article {
    padding: 1rem 3rem;
  }
}
@media (400px <= width <= 700px) {
  body {
    line-height: 1.4;
  }
}
```

#### @supports 
指定依赖于浏览器中的一个或多个特定的 CSS 功能的支持声明。这被称为特性查询。该规则可以放在代码的顶层，也可以嵌套在任何其他条件组规则中。

1. 最基本的支持条件就是 CSS 声明，也就是一个 CSS 属性后跟一个值，中间用冒号分开。
```css
@supports (display: grid) {
  .grid {
    display: grid;
  }
}
```
2. 函数语法selector
测试浏览器是否支持经过测试的选择器语法。
```css
@supports selector(A > B) {
}
```

例子：
```css
@supports (animation-name: test) {
  /* 如果支持不带前缀的 animation-name，则下面指定的 CSS 会生效 */
  @keyframes {
    /* @supports 是一个 CSS 条件组 at-rule，它可以包含其他相关的 at-rules */
  }
}
/* 测试是否支持自定义属性 */
@supports (--foo: green) {
  body {
    color: var(--varName);
  }
}
```


### container-name
指定了@container at-rule在容器查询中使用的查询容器名称列表。
- none 没有名称
- <custom-ident> 的字符串名称，允许多个名称，用空格分隔
```css
.post-meta {
  container-type: inline-size;
  container-name: meta card;
}
@container meta (max-width: 500px) {
  p {
    visibility: hidden;
  }
}

@container card (max-height: 200px) {
  h2 {
    font-size: 1.5em;
  }
}
```

### container-type
用于定义一个容器的类型，以便于在使用 CSS Container Queries 时进行响应式设计。这个属性的主要作用是指示一个元素是否是一个容器，以及它的行为如何影响其子元素的样式。
- size  这个值表示容器的大小会影响其子元素的样式。使用 size 时，容器的宽度和高度都会被考虑。
- inline-size 表示容器的宽度会影响其子元素的样式。使用此值时，只有容器的宽度会被用于容器查询，而高度则不影响子元素。
- normal 默认值，表示该元素不是一个容器。使用此值时，容器的大小不会影响其子元素的样式。

### container
将元素建立为查询容器，并指定容器查询中使用的包含上下文的名称和类型。
是 container-name 和 container-type 的组合，用于指定查询容器的名称和类型。
```css
.container{
    container: my-layout / size;
}
```

### @container
匹配容器，如果不指定容器名称，则匹配所有容器。
凡是写在@container规则中的CSS语句，都会寻找最近的容器元素，并进行匹配。
```css
/* 是my-layout容器，且宽度小于500px */
@container my-layout (max-width: 500px) {
    
}
```