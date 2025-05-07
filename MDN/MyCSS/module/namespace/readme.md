## 命名空间
可以用来设置SVG、MathML、XML或HTML的样式，每个样式都有不同的名称空间或包含多个名称空间的文档。
在这个模块中定义的 @namespace 规则可以区分不同命名空间中的同名元素。


### @namespace
- 定义使用在 CSS 样式表中的 XML 命名空间的 @规则。定义的命名空间可以把通配、元素和属性选择器限制在指定命名空间里的元素。@namespace规则通常在处理包含多个 namespaces 的文档时才有用，比如 HTML5 里内联的 SVG、MathML 或者混合多个词汇表的 XML。
- 任何 @namespace 规则都必须在所有的 @charset 和 @import 规则之后，并且在样式表中，位于其他任何 style declarations 之前。
- @namespace 可以用来定义默认命名空间。当定义过默认命名空间后，所有的通配选择器和类型选择器（但不包括属性选择器，详情看下面的 note）都只应用在这个命名空间的元素中。
- @namespace 规则也可以用于定义**命名空间前缀。**当一个通配、类型、属性选择器前面有命名空间前缀修饰时，这个选择器将只匹配那些命名空间与 元素名或属性匹配 的元素

```css
/* 命名空间通常是预定义的标准 URI */
/* 默认命名空间 */
@namespace url(http://www.w3.org/1999/xhtml);

/* 带前缀的命名空间 */
@namespace svg url(http://www.w3.org/2000/svg);

/* HTML 命名空间 */
@namespace url(http://www.w3.org/1999/xhtml);

/* SVG 命名空间 */
@namespace svg url(http://www.w3.org/2000/svg);

/* MathML 命名空间 */
@namespace math url(http://www.w3.org/1998/Math/MathML);

/* XLink 命名空间 */
@namespace xlink url(http://www.w3.org/1999/xlink);


/* 默认命名空间中的元素 */
p { color: blue; }

/* SVG 命名空间中的元素 */
svg|circle { fill: red; }

/* 任何命名空间中的元素 */
*|div { margin: 1em; }

/* 无命名空间的元素 */
|span { color: green; }
```

使用场景
```html
    <html xmlns="http://www.w3.org/1999/xhtml">
    <p>HTML 文本</p>
    <svg xmlns="http://www.w3.org/2000/svg">
        <text>SVG 文本</text>
    </svg>
    </html>
```
```css
@namespace url(http://www.w3.org/1999/xhtml);
@namespace svg url(http://www.w3.org/2000/svg);

p { color: blue; }         /* HTML 文本 */
svg|text { fill: red; }    /* SVG 文本 */
```