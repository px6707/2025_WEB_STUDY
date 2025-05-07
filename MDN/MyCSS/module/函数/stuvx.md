### saturate
滤镜函数，饱和度

### scale()
改变元素大小
scale(x, y)
scale(size)


### scale3d()
调整3D空间中元素大小
scale3d(x, y, z)

### scaleX()
横向缩放

### scaleY()
纵向缩放

### scaleZ()
3D空间z轴缩放

### scroll()
火狐 safari 不支持
```css
animation-timeline: scroll(); /* 默认使用根元素(document)的滚动 */
animation-timeline: scroll(nearest); /* 使用最近的可滚动祖先元素 */
animation-timeline: scroll(root); /* 使用根元素的滚动 */
animation-timeline: scroll(self); /* 使用元素自身的滚动 */
```


### speia()
图像棕色化


### shape()
用于clip-path 和 offset-path，定义形状
shape(fill-rule from(position) shape-command)
大部分浏览器不支持

### sign
chrome edge不支持
参数为负数返回-1，参数为正数返回+1，参数为0+返回0+，参数为0-返回0-

### sin()
余弦函数值

### skew()
二维平面上的倾斜转换，用于transform
skew(ax) xy轴应用同一个角度
skew(x, y)

### skewX()
横向倾斜转换
skewX(x)

### skewY()
纵向倾斜转换
skewY(y)

### sqrt()
平方根
sqrt(9) 为 3

### steps()
定义一个过渡，将输入的时间划分为指定数量、长度相等的段.
应用于animation-timing-function
```css
steps(2, end)
```
setp(interger, position)
- interger 表示间隔数量，必须是大于0的正整数
- position 指定变化发生的位置
    - jump-start
    - start 在开始时变化
    - jump-end
    - end 在结束时变化
    - jump-none 即不在开始也不在结束时变化
    - jump-both 再开始和结束都变化

### symbols()
用于计数器，只有火狐支持

### tan()
正切函数值

### translate()
平移变换, 定义元素在每个放心上移动了多少
translate(x, y)

### translateed()
在 3D 空间内移动一个元素的位置。这个移动由一个三维向量来表达，分别表示他在三个方向上移动的距离。
translate3d(tx, ty, tz)

### translateX()
在二维平面上水平方向移动元素。

### translateY()
在页面垂直移动元素


### translateZ()
 CSS函数在3D空间中沿着z轴重新定位元素


 ### url（）
 用于创建一个 URL

 ### var()
 插入自定义属性

```css
:root {
  --main-bg-color: pink;
}

body {
  background-color: var(--main-bg-color);
}
```

### view()
火狐 safari不支持

和animation-timeline 一起用的函数，用于创建一个基于滚动位置的时间线
```css
animation-timeline: view(); /* 默认使用元素自身的视图时间线 */
animation-timeline: view(block); /* 使用块方向的视图时间线 */
animation-timeline: view(inline); /* 使用内联方向的视图时间线 */
animation-timeline: view(vertical); /* 垂直方向 */
animation-timeline: view(horizontal); /* 水平方向 */
```
>scroll()：基于滚动位置创建动画;view()：基于元素在视口中的可见性创建动画


### xywh（）
创建一个矩形
xywh(x y width height [round radius-x radius-y]?)
- x 左上角x坐标
- y 左上角y坐标
- width 宽度
- height 高度
- round 可选，圆角半径
- radius-x 水平圆角半径
- radius-y 垂直圆角半径
```css
offset-path: xywh(0 1% 2px 3% round 0 1px 2% 3px);
clip-path: xywh(1px 2% 3px 4em round 0 1% 2px 3em);
```
