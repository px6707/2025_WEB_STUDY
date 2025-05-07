## 上下文

### BFC
块级格式化上下文
1. 创建BFC
    - HTML根元素
    - float元素
    - 绝对定位 position: absolute或者fixed
    - 行内块级元素 display: inline-block
    - 表格单元格 display: table-cell
    - 表格标题 display: table-caption
    - 匿名表格单元格元素 display： table、table-row table-row-group table-header-group table-fotter-group inline-table
    - overflow 不为visible或clip的块级元素
    - display：flow-root
    - contain为layout、paint、content的元素
    - display：flex inline-flex
    - display：grid inline-grid
    - 多列容器，column-count或者column-width不为auto的元素
    - column-span:all 的元素 
2. BFC特性
    - 计算BFC的高度时，浮动元素也会参与计算，即解决塌陷问题
    - 阻止外边距重叠。
    - 排除外部浮动。


### 层叠上下文
HTML 元素沿着其相对于用户的一条虚构的 z 轴排开，层叠上下文就是对这些 HTML 元素的一个三维构想。 HTML 元素基于其元素属性按照优先级顺序占据这个空间。

1. 创建层叠上下文
    - 文档根元素html
    - position absolut、relative且z-index不为auto的元素
    - position fixed
    - flex 的子元素且z-index不为auto
    - grid 的子元素且z-index不为auto
    - opacity 小于1 的元素
    - mix-blend-mode 不为normal 的元素
    - transform 不为none 的元素
    - filter 不为none的元素
    - backdrop-filter 不为none的元素
    - clip-path 不为none的元素
    - mask、mask-image、mask-border 不为none的元素
    - perspective 不为none的元素（指定观察者的距离）
    - isolation 值为isolate的元素(是否创建层叠上下文)
    - contain 为layout、paint或 strict、content的元素
2. 层叠顺序
    - 负z-index的元素
    - 背景和边框
    - 块级和子
    - 浮动盒子
    - 内联盒子
    - z-index = 0
    - z-index > 0


### 内联格式化上下文
- 处理文本和内联元素的排版
- 受text-align影响
- 可以使用vertical-align对齐

