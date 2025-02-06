## 部分或完全隐藏视觉元素部分的方法，包括遮罩和剪裁

### clip-path
裁剪方式创建元素的可显示区域。区域内的部分显示，区域外的隐藏。
- clip-source url引用svg的clipPath元素
- basic-shape 一种形状，其大小和位置由 <geometry-box> 的值定义。如果没有指定 <geometry-box>，则将使用 border-box 用为参考框。取值可为以下值中的任意一个：
    - inset inset矩形
    - circle 圆
    - ellipse 椭圆
    - polygon 多边形
    - path 定义一个任意形状（使用一个可选的 SVG 填充规则和一个 SVG 路径定义）。
- geometry-box 如果同 <basic-shape> 一起声明，它将为基本形状提供相应的参考框盒。通过自定义，它将利用确定的盒子边缘包括任何形状边角（比如说，被 border-radius 定义的剪切路径）
    - marging-box使用 margin box 作为引用框 
    - border-box 使用 border box 作为引用框。
    - padding-box 使用 padding box 作为引用框。 
    - content-box 使用 content box 作为引用框。
    - fill-box  利用对象边界框（object bounding box）作为引用框。
    - stroke-box 使用笔触边界框（stroke bounding box）作为引用框。
    - view-box 使用最近的 SVG 视口（viewport）作为引用框。
- none 不创建剪切路径

```css
clip-path: circle(40%);
clip-path: ellipse(130px 140px at 10% 20%);
clip-path: path('M 0 200 L 0,75 A 5,5 0,0,1 150,75 L 200 200 z');
clip-path: rect(5px 5px 160px 145px round 20%);

```

### circle
- closest-side 使用从形状中心到参照盒子的最近边缘的长度
- farthest-side 使用从形状中心到参照盒子的最远边缘的长度。
```css
/* 半径 */
shape-outside: circle(50%);
/* 半径和圆心 */
clip-path: circle(6rem at 12rem 8rem);

```

### inset
矩形
- 当提供了四个参数时，它们分别表示从参考框的上侧、右侧、下侧和左侧向内的偏移量，这些偏移量定义了内嵌矩形边缘的位置。这些参数遵循边距简写的语法，它允许你定义具有一个、两个或四个值的 inset。

```css
/* 表示上下向内裁剪4rem，左右向内裁剪20%，从左上的角开始，圆角为1rem、2rem、3rem和4rem */
clip-path: inset(4rem 20% round 1rem 2rem 3rem 4rem);

```

### ellipse
椭圆
```css
/* 定义两个半径和一个圆心 */
clip-path: ellipse(130px 140px at 10% 20%);
```

### polygon
多边形
提供一个或多个坐标对（每一个坐标代表形状的一个顶点）来绘制多边形。
```css
clip-path: polygon(10% 10%, 20% 20%, 30% 30%);
```

### path
路径
 CSS 函数接受 SVG 路径字符串作为参数，用于 CSS 形状和运动路径模块中绘制形状。
```css
clip-path: path(
'M  20  240 \
 L  20  80 L 160  80 \
 L 160  20 L 280 100 \
 L 160 180 L 160 120 \
 L  60 120 L  60 240 Z')
 ```


 ### clip-rule
是一个 SVG 属性，用于确定如何确定一个形状的内部。
 - nonezero  想象从任意点发出一条射线，当路径从左到右穿过射线时 +1，当路径从右到左穿过射线时 -1， 最后计数不为0的区域会被填充，为0的区域会被挖空。关注绘制方向，相反方向才能挖空
    - 外圆和内圆必须用相反的方向画
    - 通常外圆顺时针，内圆逆时针
    - 这样内圆才会被挖空
    所谓左和右，关键是看画的方向，向上画线时，左是左，右是右。向下画线时，左是右，右是左。想象人按照这个路径行走。。。
 - even-odd 同样想象发出一条射线，只数穿过路径的次数， 穿过奇数次的区域会被填充，穿过偶数次的区域会被挖空。只关注穿过次数，偶数次就挖空
    - 不关心画的方向
    - 射线穿过路径次数为奇数的区域会显示
    - 射线穿过路径次数为偶数的区域会被挖空
 
 ### mask
 允许使用者通过遮罩或者裁切特定区域的图片的方式来隐藏一个元素的部分或者全部可见区域。
 该简写所对应的每个属性：
- mask-image: none
- mask-mode: match-source
- mask-repeat: repeat
- mask-position: 0% 0%
- mask-clip: border-box
- mask-origin: border-box
- mask-size: auto
- mask-composite: add


### mask-image
设置了用作元素蒙版层的图像。默认情况下，这意味着蒙版图像的 alpha 通道将与元素的 alpha 通道相乘。可以使用 mask-mode 属性对此进行控制。
- none 默认值，透明的黑色图像层，也就是没有遮罩层。
- <mask-source> 一个引用了 <mask> 或 CSS 图像的 <url>。
- <image>

```css
.masked {
  width: 100px;
  height: 100px;
  background-color: #8cffa0;
  -webkit-mask-image: url(star.svg);
  mask-image: url(star.svg);
}
```

### mask-mode
指示由mask-image 指向的遮罩被视为亮度或阿尔法遮罩。
- alpha  此关键字指示应使用掩码层图像的透明度（阿尔法通道）值作为掩码值。
- luminance 此关键字指示掩膜层图像的亮度值应用作掩码值。
- match-source 如果mask-image属性是<mask-source>类型，掩模层图像的亮度值会被作为掩模值。如果它是类型<image>，掩码层图像的 alpha 值应用作掩码值。


### mask-repeat
定义了遮罩图片是否重复显示多个副本，以及如何重复。一个遮罩图片可以水平重复、垂直重复或双向重复，也可以不重复。
单值语法可将两个值简写为一个：
- repeat-x  === repeat no-repeat
- repeat-y  === no-repeat repeat
- repeat    === repeat repeat
- space     === space space
- round     === round round
- no-repeat === no-repeat no-repeat
双值语法 第一个值代表了水平方向的行为，第二个值代表了垂直方向的行为。


### mask-position
设置了相对于 mask-origin 初始位置
- top
- left
- right
- bottom
```css
mask-position: top right;
mask-position: 10% 8em;
```

### mask-clip
决定了蒙版影响的区域。元素的绘制内容必须限制在该区域内。firefox 无效
- content-box 绘制的内容被剪切到内容框中。
- padding-box
- border-box
- fill-box 绘制的内容被裁剪到对象的边界框。
- stroke-box 绘制的内容被剪切到笔画边界框。
- view-box 使用最近的SVG视口作为参考框。
- no-clip 绘制的内容没有被裁剪。
- border 这个关键字与 border-box 相同
- padding 这个关键字与 padding-box 相同
- content 这个关键字与 content-box 相同。
- text 这个关键字将掩码图像裁剪为元素的文本。
### mask-origin
设置原点，如果mask-repeat可以重复，则图像原点必定在以下位置，然后再向外重复
- content-box
- padding-box
- border-box
- fill-box 绘制的内容被裁剪到对象的边界框。
- stroke-box 绘制的内容被剪切到笔画边界框。
- view-box 使用最近的SVG视口作为参考框。
- content 与 content-box 相同。
- padding
- border

### mask-size
定了图像的大小。为了保持图像的固有比例，可以对图像的大小进行完全或部分约束。
- length 指定图片长度
- percentage 指定图片百分比
- auto 在相应方向上缩放图像以保持其固有比例的关键字。
- contain 
- cover 
```css
/* the width of the image (height set to 'auto') */
mask-size: 50%;
/* first value: width of the image, second value: height */
mask-size: 50% auto;
/* Keywords syntax */
mask-size: cover;
```
### mask-composite
合成操作
- add  两个遮罩区域都会显示。
- subtract 从第一个遮罩中减去第二个遮罩, 只显示第一个遮罩中不与第二个遮罩重叠的部分
- intersect 只显示两个遮罩重叠的部分
- exclude 显示两个遮罩不重叠的部分


### mask-border
浏览器支持很差

创建一个紧贴元素边框边缘的 mask
该属性为以下属性的简写: mask-border-source, mask-border-slice, mask-border-width, mask-border-outset, mask-border-repeat, and mask-border-mode. 与其他简写的属性一样，任何一个漏写的子属性，将会被设置为他们的初始值.
```css
/* source | slice | width | outset | repeat | mode */
mask-border: url("border-mask.png") 25 / 35px / 12px space alpha;
```
### mask-border-mode
无浏览器支持
- luminance
- alpha
### mask-border-outset
指定了元素的蒙版边框与边框框的距离。
### mask-border-repeat
设置如何调整源图像的边缘区域以适应元素遮罩边框的尺寸。
### mask-border-slice
性将 mask-border-source 设置的图像划分为多个区域。这些区域用于构成元素的遮罩边框部分。
### mask-border-source
firefox 不支持，chrome也不支持，但有一个过时的-webkit-mask-box-image
- image 边框蒙版的图像
### mask-border-width
设置元素的 mask border的宽度
### mask-type
设置 SVG元素是否用作亮度或alpha蒙版。它适用于元素本身。mask-type <mask><mask>

此属性可被 属性覆盖mask-mode，该属性具有相同的效果，但适用于使用蒙版的元素。Alpha 蒙版通常渲染速度更快。
- luminance  看颜色的亮度
- alpha  只看透明度值