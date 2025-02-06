## css逻辑属性和逻辑值
逻辑属性和逻辑值用抽象术语块向和行向描述其流向。
1.  块向尺度
    - 与行内文本流向垂直的方向上的尺度，如横排书写模式中的竖直尺度，以及竖排书写模式中的水平尺度。对于标准的英文文本，此尺度指竖直尺度。
2.  行内向尺度
    - 与行内文本流向平行的方向上的尺度，如横排书写模式中的水平尺度，以及横排书写模式中的竖直尺度。对于标准的英文文本，此尺度指水平尺度。



### block-size
根据元素的书写模式定义了元素块的横向或纵向尺寸.根据 writing-mode 的值，此属性对应于 width 或 height 属性。
若为纵向书写模式，则 block-size 的值对应于元素的宽度；否则对应于元素的高度。与此相关的属性为 inline-size，此属性定义了元素另一方向的尺度。
取值与widht、height的取值相同

主要用于多语言网站

### inline-size
CSS 属性 inline-size 根据元素的书写模式定义了元素区块的横向或纵向尺寸。

### max-block-size
### max-block-size
CSS 属性 max-inline-size 根据元素的书写模式定义了元素区块的横向或纵向最大尺寸。

max-inline-size 属性的取值与 max-width 和 max-height 属性相同。


### min-block-size
### min-inline-size
根据元素的书写模式定义了元素区块的横向或纵向最小尺寸
属性的取值与 min-width 和 min-height 属性相同。


### border-block
### border-inline
为简写属性，用于在样式表中的某处同时设置逻辑块向/行向边框的各属性值。
此属性为下列 CSS 属性的简写属性：

border-block-color
border-block-style
border-block-width

```css
border-block: solid;
writing-mode: horizontal-tb;
```


### border-block-color
### border-inline-color
### border-block-style
### border-inline-style
### border-block-width
### border-inline-width
元素的逻辑向的边框验证、样式、宽度



### border-block-end
简写属性，用于在样式表中的某处同时设置逻辑块末边框的各属性值。
此属性为下列 CSS 属性的简写属性：

border-block-end-color
border-block-end-style
border-block-end-width

应用到那一条border和lr、rl、tb相关
```css
border-block-end: thick double #32a1ce;
/* 应用在右边 */
writing-mode: vertical-lr;  
```

### border-block-start
### border-inline-start
### border-inline-end

### border-start-start-radius
元素块首与行首之间的拐角
### border-start-end-radius
元素块首与行末之间的拐角
### border-end-start-radius
素块末与行首之间的拐角
### border-end-end-radius
素块末与行末之间的拐角

定义了元素的逻辑边框半径，并根据元素的书写模式、行内方向和文本朝向对应至实体边框半径。

### border-color
### border-width
### border-style
于设置元素四个边框的快捷属性


### margin-block
### margin-inline
定义了元素的逻辑首和末外边距

### margin-block-start
### margin-block-end
元素的逻辑块首和块末外边距

### margin-inline-start
### margin-inline-end
定义了元素的逻辑行首和行末外边距


### padding-block
### padding-inline
定义了元素的逻辑首和末内边距，并根据元素的书写模式、行内方向和文本朝向对应至实体内边距。


### padding-block-start
### padding-block-end
定义了元素的逻辑块首和块末内边距

### padding-inline-start
### padding-inline-end
定义了元素的逻辑行首和行末内边距


### clear
- inline-start 元素被向下移动以清除其包含块的起始侧浮动，即 ltr 时清除左浮动，rtl 时清除右浮动。
- inline-end 元素被向下移动以清除其包含块的结束侧浮动，即 ltr 时清除右浮动，rtl 时清除左浮动。

### float
- inline-start 关键字，表明元素必须浮动在其所在块容器的开始一侧，在 ltr 脚本中是左侧，在 rtl 脚本中是右侧。
- inline-end 关键字，表明元素必须浮动在其所在块容器的结束一侧，在 ltr 脚本中是右侧，在 rtl 脚本中是左侧

### inset
inset 为简写属性，对应于 top、right、bottom 和 left 属性。其与 margin 简写属性具有相同的多值语法。
此属性虽然为 CSS 逻辑属性规范的一部分，但是无论元素的书写模式、行内方向和文本朝向如何，其所定义的都不是逻辑偏移而是实体偏移。

### inset-block
inset-block 定义了元素的逻辑块首和块末偏移
### inset-inline
inset-inline 定义了元素的逻辑行首和行末偏移


### inset-block-start
### inset-block-end
inset-block 定义了元素的逻辑块首和块末偏移
### inset-inline-start
### inset-inline-end
inset-inline 定义了元素的逻辑行首和行末偏移


### contain-intrinsic-inline-size
定义了元素受尺寸局限时浏览器用于布局的元素行向尺寸。

行向尺寸为元素在平行于行内文本流的方向上的尺寸
### contain-intrinsic-block-size
定义了元素受尺寸局限时浏览器用于布局的元素块向尺寸。

### overflow-block
设置了当内容溢出盒的块首和块末侧时所显示的内容
### overflow-inline
设置了当内容溢出盒的行首和行末侧时所显示的内容

### overscroll-behavior
overscroll-behavior-x 和 overscroll-behavior-y 属性的合并写法，让你可以控制浏览器过度滚动时的表现——也就是滚动到边界。
- auto 默认效果 
- contain 设置这个值后，默认的滚动边界行为不变（“触底”效果或者刷新），但是临近的滚动区域不会被滚动链影响到，比如对话框后方的页面不会滚动。
- none 临近滚动区域不受到滚动链影响，而且默认的滚动到边界的表现也被阻止。
希望移除标准的滚动至顶部或底部的滚动特效（例如 Android 上的 Chrome 当滚动超过顶部边界时会刷新页面），可以通过在 <body> 元素设置 overscroll-behavior: none 来阻止这个行为：
```css
body {
  margin: 0;
  overscroll-behavior: none;
}

```
### overscroll-behavior-block
设置浏览器在到达滚动区域的块方向边界时的行为。
### overscroll-behavior-inline
设置浏览器在到达滚动区域的行内方向边界时的行为。


### resize
不兼容 safari IOS 和 webview IOS
- block  元素显示可让用户沿块向
- inline 元素显示可让用户沿行向


### text-align
设置块元素或者单元格框的行内内容的水平对齐。
- start 如果内容方向是左至右，则等于 left，反之则为 right。
- end 如果内容方向是左至右，则等于 right，反之则为 left。


### write-mode和direction
```css
/* write-mode */
.element {
  /* 水平方向，从上到下 */
  writing-mode: horizontal-tb;  /* 默认值 */
  
  /* 垂直方向，从右到左 */
  writing-mode: vertical-rl;
  
  /* 垂直方向，从左到右 */
  writing-mode: vertical-lr;
}
```
定义文本行的排布方向（主要方向）
影响块级元素的堆叠方向
决定内容的主要书写方向（垂直或水平）
影响整体布局方向
```css
.element {
  /* 从左到右 */
  direction: ltr;  /* 默认值 */
  
  /* 从右到左 */
  direction: rtl;
}
```
定义文本、表格列和水平溢出的方向
主要用于处理不同语言的书写方向（如阿拉伯语、希伯来语等）
通常与 unicode-bidi 属性配合使用
只影响文本和行内元素的排列


对于英文或中文这样的非RTL语言，单独使用 direction: rtl 确实主要表现为对齐方向的改变，而不会改变文字的阅读顺序。这是因为还需要配合 unicode-bidi 属性才能完全控制文本方向。
```css
/* 1. 只使用 direction */
.only-direction {
  direction: rtl;
}
/* 结果：文字靠右对齐，但阅读顺序不变 */

/* 2. direction + unicode-bidi */
.full-rtl {
  direction: rtl;
  unicode-bidi: bidi-override;
}
/* 结果：文字靠右对齐，且阅读顺序反转 */

/* 3. 嵌入式RTL */
.embedded-rtl {
  direction: rtl;
  unicode-bidi: embed;
}
/* 结果：创建新的嵌入层级，内容按RTL显示 */
```