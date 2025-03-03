## css函数

### abs()
不支持
绝对值

### acos()
反cos，返回角度

### annchor-size()
火狐、safari不支持


### anchor()
火狐、safari不支持

### asin()
反正弦值。此函数含有单个计算式，此式返回表示介于 -90deg 和 90deg 之间的 <angle> 的弧度数。

### atan()
反正切值,返回表示介于 -90deg 和 90deg 之间的 <angle> 的弧度数。

### atan2()
返回表示介于 -180deg 和 180deg 之间的 <angle> 的弧度数。

```css
/* atan() 接收一个参数，表示正切值 */
atan(1)  /* 返回 π/4 弧度（45度） */

/* atan2() 接收两个参数(y,x)，表示点的坐标 */
atan2(1, 1)  /* 返回 π/4 弧度（45度） */
```
atan()：返回值范围在 -π/2 到 π/2 之间（-90度到90度）
atan2()：返回值范围在 -π 到 π 之间（-180度到180度）
atan()：无法判断角度的象限，因为只有一个参数
atan2()：可以准确判断角度所在的象限，因为有x和y两个参数


### attr
现在只能使用在伪元素的content上
获取元素的属性


### blur()
模糊半径

### brigtness()
亮度，调整亮度效果，1 为正常，0 为黑色，对于1为更亮

### calc-size()
火狐 safari不支持
计算容器查询中的尺寸。

### calc()
计算

### circle()
```css
clip-path: circle(50px);
clip-path: circle(6rem at right center);
clip-path: circle(closest-side at 5rem 6rem);
```
### clamp()
限制范围，返回介于 min 和 max 之间的值
```css
font-size: clamp(1rem, 10vw, 2rem); 
```
clamp() 函数接收三个用逗号分隔的表达式作为参数，按最小值、首选值、最大值的顺序排列。

当首选值比最小值要小时，则使用最小值。

当首选值介于最小值和最大值之间时，用首选值。

当首选值比最大值要大时，则使用最大值。

### color-mix()
接收两个 <color> 值，并返回在指定颜色空间、指定数量混合后的颜色。

### color()
在不同的颜色空间中定义颜色，并可以对颜色进行调整。
color(<color-space> <values> [ / <alpha-value> ]?)

### conic-gradient()
锥形渐变，渐变的颜色围绕一个中心点旋转（而不是从中心辐射）进行过渡。
1. 改变渐变位置
```css
.conic-gradient {
  background: conic-gradient(at 0% 30%, red 10%, yellow 30%, #1e90ff 50%);
}

```

2. 改变角度
```css
.conic-gradient {
  background: conic-gradient(from 45deg, red, orange 50%, yellow 85%, green);
}

```
```css
/* 棋盘格，一个黑格子一个白格子、 */
div {
  background: conic-gradient(
     /* 定义右上角为白色 */
      #fff 0.25turn,
      /* 定义右下角为黑色 */
      #000 0.25turn 0.5turn,
      /* 定义左下角为白色 */
      #fff 0.5turn 0.75turn,
      /* 定义左上角黑色 */
      #000 0.75turn
    )
    /* 定义背景图片原点在左上角，把背景缩小到原来的25%，重复 */
    top left / 25% 25% repeat;
  border: 1px solid;
}

```

### contrast
对比度

### cos()
余弦值


### counter()
返回当前计数器的自付出
/* 改变计数器的显示 */
counter(countername, upper-roman)

### counters()
嵌套计数器，返回指定了间隔符的嵌套计数器的显示字符串
可以改变计数器的显示方式
 counters(listCounter, ".", upper-roman) 
 counters(listCounter, ".")


 ### cross-fade()
谷歌、火狐、edg不支持
将两张或多张图片以指定的透明度进行融合。

 ### cubic-bezier()
使用三次Bézier曲线创建一个平滑的过渡。
接受以下4个参数，分别表示两个控制点的坐标。