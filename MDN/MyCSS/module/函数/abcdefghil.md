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


### device-cmyk()
CSS 颜色函数，用于指定 CMYK（青色、品红色、黄色、黑色）颜色值。这是一个用于印刷的颜色模型。

### drop-shadow()
给元素添加阴影效果
```css
/* drop-shadow(offset-x offset-y blur-radius color) */
filter: drop-shadow(0 0 2px #000);
```

### element
都不支持

### elipse()
椭圆
```css
/* 椭圆 短边半径 长边半径 圆心*/
clip-path: ellipse(50% 50% at 50% 50%);
```
### env()
用于访问环境变量值，特别是在处理移动设备安全区域时很有用。
```css
/* 安全区域内边距 */
env(safe-area-inset-top)
env(safe-area-inset-right)
env(safe-area-inset-bottom)
env(safe-area-inset-left)
```
### exp()
指数型函数，以数值为参数，返回数学常数 e 的指定次方

### fit-content()
将给定大小夹紧为可用大小 根据公式 min(maximum size, max(minimum size, argument)).
元素会：
至少和最小内容宽度一样宽
最大不超过指定的参数值
优先适应实际内容大小

>用于grid布局中控制裂开，自适应内容的容器
### grayscale()
 对图片进行灰度转换
### hsl()
函数标记根据其色相、饱和度和明度来表达 sRGB 颜色。可选的 alpha 成分代表了颜色的透明度。
background: hsl(0.3turn 60% 45% / .7);
### hue-rotate()
 CSS 滤镜函数，用于调整元素的色相角度，实现颜色旋转效果。
### hwb()
 CSS 颜色函数，使用色相(Hue)、白度(Whiteness)、黑度(Blackness)来定义颜色。
 hwb(色相 白度 黑度 [/ 透明度])

### hypot
指数型函数，返回其参数平方和的平方根。
若提供单个参数，则结果为其输入值的绝对值。hypot(2em) 和 hypot(-2em) 均解析为 2em。

### image-set()
用于根据设备特性（如分辨率、像素密度）提供最适合的图片版本。
```css
/* 根据设备像素比提供不同分辨率的图片 */
.image {
    background-image: image-set(
        "logo-1x.png" 1x,    /* 普通屏幕 */
        "logo-2x.png" 2x,    /* 视网膜屏幕 */
        "logo-3x.png" 3x     /* 超高清屏幕 */
    );
    background-image: image-set(
        "pic.avif" type("image/avif"),   /* 如果浏览器支持AVIF，优先使用 */
        "pic.webp" type("image/webp"),   /* 如果不支持AVIF但支持WebP，使用WebP */
        "pic.jpg" type("image/jpeg")     /* 如果都不支持，使用JPEG */
    );
}

```
### image()
无浏览器实现，用于创建图像值，提供比 url() 更多的功能和选项。

### inset()
定义了一个矩形，其位于参考框的每一边内侧的指定的距离处。
```css
/* 矩形距离上下边20%距离，左右边30%距离，圆角为20px */
clip-path: inset(20% 30% round 20px);
```
### invert()
 滤镜函数，用于反转元素的颜色。

### lab()
 在 CIE L*a*b* 颜色空间中表示指定颜色。Lab 表示人可见的全部颜色的范围
 lab(亮度 a轴 b轴 [/ 透明度])

### layer()
使用import 把样式导入到分层中
@import "index.css" layer(layer-name)
### lch()
号 lch() 在 LCH 颜色空间中表示指定颜色。此函数记号与 lab() 有相同的 L 轴，但使用极坐标 C（色度）和 H（色相）。
### lingt-dark()
CSS 颜色函数，用于根据用户的颜色方案偏好（浅色/深色模式）选择不同的值。
```css
 color: light-dark(#000000, #ffffff);  /* 浅色模式黑色文本，深色模式白色文本 */
```
### liner-gradient()
创建一个由两种或多种颜色沿一条直线进行线性过渡的图像
```css
body {
  background: linear-gradient(135deg, orange 60%, cyan);
}
```
### linear()
 CSS 缓动函数，用于创建线性过渡效果，通常用在动画和过渡中。
动画或过渡以恒定速度进行 没有加速或减速效果 整个过程速度保持不变


### log()
数型函数，返回某数的对数。
```css
/* 以2为底，8的对数 = 3 */
width: calc(100px * log(8, 2));
```
