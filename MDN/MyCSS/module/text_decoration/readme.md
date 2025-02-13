## 文本装饰

### letter-spacing
设置字母之间的间距

### text-align
设置文本对齐

### text-decoration
设置文本装饰
是 text-decoration-line text-decoration-color text-decoration-style  text-decoration-thickness 的简写

> 文本装饰会覆盖子元素，子元素无法去除这个装饰。在标记 <p>这段文字中有<em>一些强调词</em>。</p> 中，样式规则 p { text-decoration: underline; } 会导致整个段落包含下划线。样式规则 em { text-decoration: none; } 不会有任何变化；

```css
    .thick {
    text-decoration: solid underline purple 4px;
    }
```
### text-decorationline
- none 无装饰效果
- underline 下划线
- overline 上划线
- line-through 删除线
- blink  属性删除，闪烁，但浏览器都没有实现闪烁效果

### text-decoration-style
- solid 
- double 
- dotted 点线
- dashed 虚线
- wavy 波浪线

### text-decoration-thickness
装饰线厚度
- auto
- from-font 如果字体文件中包含了首选的厚度值，则使用字体文件的厚度值。如果字体文件中没有包含首选的厚度值，则效果和设置为 auto 一样，由浏览器选择合适的厚度值。
- percentage 百分比
- length 


### text-emphasis
强调标记应用到除去空格和控制字符的文本。
text-emphasis-style  text-emphasis-color 的简写
> text-emphasis 是可继承的，这意味着可以为其子元素更改强调标记。

```css
text-emphasis: "点";
text-emphasis: filled sesame #555;
```
### text-emphasis-style
设置强调标记的样式。
- none 无
- filled 填充纯色
- open 空心
- dot 小圆点
- circle 大圆圈
- double-circle 双重圆圈
- triangle 三角
- sesame 芝麻点形状
- string 指定字符串，但不能超过一个字符

### text-emphasis-color
设置强调标记的颜色


### text-emphasis-position
设置强调标记的位置.
强调标记的首选位置取决于语言。例如，在日语中，首选位置是 over right；在中文中，首选位置则是 under right。
- over 在水平书写模式下，在文本上方绘制标记。
- under 在水平书写模式下，在文本下方绘制标记。
- right 在垂直书写模式下，在文本右侧绘制标记。
- left 在垂直书写模式下，在文本左侧绘制标记。



### text-indent
区块元素中文本行前面空格（缩进）的长度。

### text-rendering
定义浏览器渲染引擎如何渲染字体。浏览器会在速度、清晰度、几何精度之间进行权衡。
- auto 自动
- optimizeSpeed 着重考虑渲染速度，而不是易读性和精度。会使字间距和连字无效
- optimizeLegibility  浏览器在绘制文本时将着重考虑易读性，而不是渲染速度和几何精度。它会使字间距和连字有效。该属性值在移动设备上会造成比较明显的性能问题
- geometricPrecision 着重考虑几何精度，而不是渲染速度和易读性。

对于 SVG，当文本缩放时，浏览器会计算文本最终大小（取决于特定的字体大小和相应的缩放比例）并且从操作平台的字体系统中请求一个符合该计算值的字体大小。但如果你请求一个字体大小，比如 9 并且 140% 的缩放，这个最终的字体大小为 12.6，字体系统中明显不存在，所以浏览器会向下取整到 12。这导致文本缩放是阶梯式的。

但这个 geometricPrecision 特性——当被渲染引擎完全支持时——会使文本缩放是流畅的。对于大比例的缩放，你可能看到并不太漂亮的文本渲染，但这个字体大小是你期望的，而不是被 Windows 或 Linux 系统四舍五入或向下取整的字体大小。

提示: WebKit 准确地的实现了这个值，但是 Gecko 把这个值按照 optimizeLegibility 处理。

### text-shadow
设置文本阴影
语法 
```css
/* offset-x | offset-y | blur-radius | color */
text-shadow: 1px 1px 2px red;
/* color | offset-x | offset-y | blur-radius */
text-shadow: #fc0 1px 0 10px;
/* offset-x | offset-y | color */
text-shadow: 5px 5px #558abb;
/* color | offset-x | offset-y */
text-shadow: white 2px 5px;
/* offset-x | offset-y
/* Use defaults for color and blur-radius */
text-shadow: 5px 10px;

```

### text-transform
设置文本转换
- capitalize 每个单词的首字母转换为大写。
- uppercase 将文本全部大写
- lowercase 将文本全部小写
- none 无变化
- full-width  字符写在一个正方形内，使它们能够在通常的东亚文字（如中文或日文）中对齐。
- full-size-kana 通常用于 <ruby> 注释文本，该关键字将所有小假名字符转换为等效的全尺寸假名，以补偿在 ruby 中通常使用的小字体的可读性问题。
- math-auto 在合适的时候自动使用数学斜体渲染文本

### white-space
设置文本空白
- normal 连续的空白符会被合并。
- nowrap和 normal 一样合并空白符，但阻止源码中的文本换行。
- pre 连续的空白符会被保留。仅在遇到换行符或 <br> 元素时才会换行。
- pre-wrap 连续的空白符会被保留。在遇到换行符或 <br> 元素时，或者根据填充行框盒子的需要换行。
- pre-line 连续的空白符会被合并。在遇到换行符或 <br> 元素时，或者根据填充行框盒子的需要换行。
- break-spaces 与 pre-wrap 的行为相同，除了：
    1. 任何保留的空白序列总是占用空间，包括行末的。
    2. 每个保留的空白字符后（包括空白字符之间）都可以被截断。
    3. 这样保留的空间占用空间而不会挂起，从而影响盒子的固有尺寸（min-content 尺寸和 max-content 尺寸）。

### word-spacing
设置单词间距