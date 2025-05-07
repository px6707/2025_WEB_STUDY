## css 条件规则模块

CSS条件规则模块定义CSS媒体并支持查询，使您能够定义仅在满足特定条件时应用的样式。此模块中定义的条件规则基于设备、用户代理和视口功能。使用条件规则，你可以基于查询值或浏览器和设备特性来定位CSS样式，而不依赖于正在渲染的文档。

```css
@media
@supports
@when
@else
```

### @charset
指定样式使用的字符编码
@charset "UTF-8";
必须是样式表中的第一个元素，而前面不得有任何字符。如果有多个 @charset @ 规则被声明，只有第一个会被使用


### @color-profile
定义并命名了一个颜色配置文件，稍后可以在 color() 函数中用于指定颜色。
没有实现这个功能的浏览器。
@color-profile "sRGB";



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

### @supports 
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

### @container
匹配容器，如果不指定容器名称，则匹配所有容器。
凡是写在@container规则中的CSS语句，都会寻找最近的容器元素，并进行匹配。
```css
/* 是my-layout容器，且宽度小于500px */
@container my-layout (max-width: 500px) {
    
}
```

#### container-name
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

#### container-type
用于定义一个容器的类型，以便于在使用 CSS Container Queries 时进行响应式设计。这个属性的主要作用是指示一个元素是否是一个容器，以及它的行为如何影响其子元素的样式。
- size  监控宽度和高度变化
- inline-size 只监控宽度变化
- normal 默认值，不作为容器

#### container
将元素建立为查询容器，并指定容器查询中使用的包含上下文的名称和类型。
是 container-name 和 container-type 的组合，用于指定查询容器的名称和类型。
```css
.container{
    container: my-layout / size;
}
```

### @property 
注册自定义属性，可以通过css也可以通过js注册
```css
@property --property-name {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}

```
```javascript
window.CSS.registerProperty({
  name: '--my-var',
  syntax: '<length>',
  inherits: false,
  initialValue: '0px'
})
```
>**注意** 注册属性的一个好处是，浏览器现在知道如何通过过渡等方式处理你的自定义属性！当属性没有注册时，浏览器不知道如何处理它，因此它假定可以使用任何值，因此无法对其进行动画处理。不过，当属性有注册的语法时，浏览器可以围绕该语法进行优化，包括为其添加动画！
已经注册的属性不能被更新，重新注册会报错，表示已经被定义


### @counter-style
自定义计数器样式
@counter-style <counter-style-name> {
    system: <counter system>
    symbols: <counter symbols>
    additive-symbols: <additive-symbols>
    negative: <negative symbol>
    prefix: <prefix>
    suffix: <suffix>
    range: <range>
    pad: <padding>
    speak-as: <speak-as>
    fallback: <counter-style-name>
}

### @font-face
指定字体
```css
@font-face {
    font-family: 'MyFont';  指定引用字体的名称
    src: url('font.eot'); 兼容IE9，必须单独写一个src
    /* IE6-IE8 需要使用?#iefix 后缀 而不支持embedded-opentype 的浏览器会跳过eof源*/
    src: url('font.eot?#iefix') format('embedded-opentype'),
        url('font.woff2') format('woff2'),
        url('font.woff') format('woff'),
        url('font.ttf') format('truetype'),
        url('font.svg#font') format('svg');
}
```
解释：
1. 当有多个src时，后面的会覆盖前面的，但IE9会优先使用不带format的src
2. IE9-IE8 需要使用?#iefix 后缀 而使用url('font.eot?#iefix') format('embedded-opentype')
3. 其他浏览器通过format使用自己可用的格式，例如woff2


大多数现代浏览器支持WOFF或者WOFF2 web open font format version1、2 开放字体格式版本1、2
低版本IE只支持 EOF embedded open font 嵌入式开放类型


### @font-feature-values
设置OpenType字体的特性值，允许我们为不同的字体定义通用名称的特性。这使得在使用不同字体时能够保持一致的字体特性设置。


### @font-palette-values


### @import
用于从其他样式表导入样式规则。
@import url("fineprint.css") print;


### @keyframes
动画序列中定义关键帧
```css
@keyframes slidein {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
}
```


### @layer
用于声明级联层，帮助我们更好地控制样式的优先级和组织样式代码。它允许我们将CSS规则分组到不同的层中，并明确控制这些层之间的优先级。
```css
/* 1. 声明层 */
 /* 优先级从低到高 */
@layer base, components, utilities; 

/* 2. 在层中定义样式 */
@layer base {
  p { color: black; }
}

@layer components {
  .button { color: blue; }
}

@layer utilities {
  .text-red { color: red; }
}

/* 嵌套 */
@layer framework {
  @layer layout {
  }
}
/* 向嵌套规则中添加样式 */
@layer framework.layout {
  p {
    margin-block: 1rem;
  }
}
/* 匿名层 */
@layer{

}

/* 通过@import 导入@layer中的样式 */
@import "layer.css" layer(theme);
```
1. 优先级 后声明的优先级高
2. 可嵌套 使用点号向嵌套规则中添加样式
3. 匿名层
4. 层样式可以通过@import 导入


### @namespace
定义XML命名空间。它主要用于处理包含多个命名空间的XML文档的样式，比如在处理HTML和SVG混合内容时。
区分不同技术规范中的同名元素
在XML应用中提供样式隔离
@namespace的使用相对较少，主要在处理XML或SVG内容时才会用到。
```css
/* 定义命名空间 */
@namespace url(http://www.w3.org/1999/xhtml); /* HTML命名空间 */
@namespace svg url(http://www.w3.org/2000/svg); /* SVG命名空间 */

/* 应用样式 */
/* HTML中的圆 */
circle {
    background-color: blue;
}

/* SVG中的圆 */
svg|circle {
    fill: red;
}
```


### @page
修改打印页面的不同方面,修改页面的尺寸、方向和页边距。

### @position-try
尝试不同的定位策略。它主要用于处理元素的定位问题，特别是在复杂布局中。
与position-anchor配合，尝试把弹窗放在不同位置
火狐 safri不支持


### @scope
火狐不支持
用于限制样式的作用范围，让样式只在特定的DOM树范围内生效。这对于组件化开发和样式隔离特别有用。
```css
/* 基本用法 */
@scope (.component) {
  /* 样式只在.component内生效 */
  .button { color: blue; }
}

/* 指定范围边界 */
@scope (.component) to (.sub-component) {
  /* 样式在.component内生效，但不会影响.sub-component内的元素 */
  .text { color: red; }
}
```

### @starting-style
火狐不支持
定义元素的初始样式状态，特别适用于处理元素出现时的动画效果。它允许我们设置元素在进入页面时的起始样式，而不影响其最终状态。，
```css
@starting-style {
  /* 定义元素的初始样式 */
}

.slide-in {
  transform: translateX(0);
  opacity: 1;
  transition: all 0.5s ease-out;
}

@starting-style {
  .slide-in {
    transform: translateX(-100%);
    opacity: 0;
  }
}
```

### @view-transition
火狐不支持
跨文档导航的情况下， @view-transition  CSS at规则用于选择在当前文档和目标文档中进行视图转换。