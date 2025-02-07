## 运动路径
CSS运动路径模块允许作者沿着自定义的路径为任何图形对象制作动画。

```html
<div id="motion-demo"></div>
```
```css
#motion-demo {
    /* 定义运动路径 */
  offset-path: path("M20,20 C20,100 200,0 200,100");
  animation: move 3000ms infinite alternate ease-in-out;
  width: 40px;
  height: 40px;
  background: cyan;
}

@keyframes move {
  0% {
    /* 定义路径上的位置 */
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
```


### offset
 简写属性设置了沿定义的路径为元素设置动画所需的所有属性
 此属性是以下 CSS 属性的简写：
- offset-anchor
- offset-distance
- offset-path
- offset-position
- offset-rotate

### offset-anchor
指定了一个元素盒子内的点，它沿着 offset-path 沿着路径移动。
```css
offset-anchor: left bottom;
/* 元素上的这个点沿着 offset-path 沿着路径移动。 */
offset-anchor: 20% 80%;
```

### offset-distance
指定了要放置的元素沿着 offset-path 的位置。
```css
/* 在 offset-path 的路径上开始 的位置。 */
offset-distance: 0%;
/* 在 offset-path 的路径上 80% 的位置。 */
offset-distance: 80%;
```

### offset-path
指定了元素要遵循的路径，并确定了元素在该路径的父容器或SVG坐标系统中的位置。路径是一条线、一条曲线或一个几何形状，元素沿着它被放置或移动。
offset-path: path('M-70,-40 C-70,70 70,70 70,-40');
- circle
- inset
- polygon
- ellipse
- path
- url(#svg) 可以根据svg标签定义的路径
- ray() 射线


### ray()

```css
offset-path: ray(angle size? contain?);
```
- angle 必须指定，射线角度，y轴为0度，顺时针增加
- size 可选，射线长度
    - close-side 射线延伸到最近的边
    - farthest-side：射线延伸到最远的边
    - closest-corner：射线延伸到最近的角
    - farthest-corner：射线延伸到最远的角
    - sides：射线延伸到水平或垂直边（取决于角度）
- contain 可选，自动调整射线以适应容器


### xywh()
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

### offset-position
定义了元素在路径上的初始位置。
- auto 左上角
- normal 没有偏移起始位置，50% 50%处，这是默认值
- posiiton 位置
```css
offset-position: left top;
offset-position: 29% 30%;
```


### offset-ratate
定义了元素沿着 offset-path 定位时的方向。
- auto 元素相对于x轴正方向 offset-path 旋转角度。这是默认值。
- angele 元素会按照指定的旋转角度进行固定的顺时针旋转变换。
- auto <angle> 如果 auto 后面是一个 <angle> ，则将角度计算值与 auto 的计算值相加。
- reverse 元素的旋转方式类似于 auto ，只是它的方向相反。相当于指定一个值 auto 180deg 。