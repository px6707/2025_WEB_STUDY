## 背景和边框


### backgroune-attachment
 * fied 元素的背景固定在视口上，当页面和元素滚动时，它不会滚动，保持在屏幕的相同位置
 * scroll 元素的背景在《页面》滚动时滚动，滚动《元素》背景不会移动 (默认)
 * local 背景固定在所设置的元素上，滚动该元素，背景随之滚动

### background-clip
 * border-box  背景延伸至边框外沿（但是在边框下层）。
 * content-box 背景被裁剪至内容区（content box）外沿。
 * padding-box 背景延伸至内边距（padding）外沿。不会绘制到边框处。
 * text 背景被裁剪成文字的前景色。(实验属性)

### background-origin
指定背景图片background-image 属性的原点位置的背景相对区域。 
注意：当使用 background-attachment 为 fixed 时，该属性将被忽略不起作用。
 * padding-box 背景图片的摆放以 padding 区域为参考
 * border-box 背景图片的摆放以 border 区域为参考
 * content-box 背景图片的摆放以 content 区域为参考

 ### background-position
 CSS 属性为每一个背景图片设置初始位置
 注意： 百分比 的意思是 图片的百分比位置与 container 百分比的位置对齐。
 因此 50% 的值表示水平或垂直居中背景图像，因为图像的 50% 将位于容器的 50% 标记处。

### background-repeat
1. No-repeat 阻止背景重复平铺
2. Repeat-x 仅水平方向平铺
3. Repeat-y 仅垂直方向重复平铺
4. Repeat 默认值，两个方向重复平铺， 最后的图片剪裁
5. space 图像重复，图像不会剪裁。就是图片显示在周围，图片四周会出现空白区域
6. round 随着允许的空间在尺寸上的增长，被重复的图像将会伸展 (没有空隙), 直到有足够的空间来添加一个图像。round 会自动调整图片大小，以确保图片能完整显示，不会被裁剪
图片会被缩放，直到能够完整填充容器空间

## border
### border-bottom-left-radius
通过指定定义元素左下角曲率的椭圆的半径（或半长轴和半短轴的半径），对元素的左下角进行圆角处理。
```css
border-bottom-left-radius: 250px 100px;
```

### border-image-outset
定义边框图像可超出边框盒的大小。
* 值 四个方向上能够超出的大小
* horizontal vertical
* top right bottom left 

### border-image-repeat
定义图片如何填充边框。或为单个值，设置所有的边框；或为两个值，分别设置水平与垂直的边框。
* streth 、 repeat 、round、 space

### border-image-slice
* 定义 使用 border-image-source 引用的图像划分为多个区域。这些区域组成了一个元素的边框图像。
* 说明 切分过程会将图像分割为 9 个区域：四个角、四个边（edge）以及中心区域。四条切片线，从它们各自的侧面设置给定距离，控制区域的大小。
![alt text](border-image-slice.png)

* 区域 1-4 为角区域（corner region）。每一个都被用于组成最终边框图像的四个角。
* 区域 5-8 边区域（edge region）。在最终的边框图像中重复、缩放或修改它们以匹配元素） 的大小。
* 区域 9 为中心区域（middle region）。它在默认情况下会被丢弃，但如果设置了关键字 fill，则会将其用作元素的背景图像。
#### 语法
border-image-slice 属性可以用四个指定的 <number-percentage> 值来表示每一个图像切片的位置。负数是无效的，而大于其相应的最大尺寸的值则会被限制为 100%。
* 仅指定了一个位置（1 个值）时，创建的（上下左右）四个切片将具有相同的宽度/高度。
* 当指定了两个位置（2 个值）时，第一个值表示垂直方向的两个切片的高度（即 top 与 bottom），第二个值表示水平方向两侧切片的宽度（即 left 和 right）。
* 当指定了三个位置（3 个值）时，第一个值表示顶部切片的高度（即 top），第二个值表示水平方向两侧切片的宽度（即 left 和 right），第三个值则表示底部切片的高度（即 bottom）。
* 当指定了四个位置（4 个值）时，这四个值则分别对应 top、right、bottom、left（上、右、下、左）四个切片的宽度/高度。
* 可选值 fill 可放在上面声明的值的末尾。


### border-image-width
指定了 边界图像 (border image) 的宽度
上右下左，分别指定四条边上 border image 的宽度，如果是数字，则是border-width 的倍数。
百分比指的是对应widht或者height的百分比，上下边值的是宽度百分比，左右边值的是高度百分比

### border-image
给定元素的周围绘制图像，取代元素的常规边框。
是border-image-outset
border-image-repeat
border-image-slice
border-image-source
border-image-width
属性的简写
border-image: url('/media/examples/border-diamonds.png') 30 fill / 30px / 30px space;
url(...) 对应 border-image-source
30 fill 对应 border-image-slice
30px （第一个斜杠后）对应 border-image-width
30px （第二个斜杠后） 对应 border-image-outset 设置边框图片向外偏移 30px
space （最后的值） 对应 border-image-repeat


### box-shadow
元素的框架上添加阴影效果。
模糊半径：值越大，阴影越淡
扩散半径：值越大，阴影越宽
```css
/* x 偏移量 | y 偏移量 | 阴影颜色 */
box-shadow: 60px -16px teal;

/* x 偏移量 | y 偏移量 | 阴影模糊半径 | 阴影颜色 */
box-shadow: 10px 5px 5px black;

/* x 偏移量 | y 偏移量 | 阴影模糊半径 | 阴影扩散半径 | 阴影颜色 */
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

/* 插页 (阴影向内) | x 偏移量 | y 偏移量 | 阴影颜色 */
box-shadow: inset 5em 1em gold;

/* 任意数量的阴影，以逗号分隔 */
box-shadow:
  3px 3px red,
  -1em 0 0.4em olive;

/* 全局关键字 */
box-shadow: inherit;
box-shadow: initial;
box-shadow: unset;

```