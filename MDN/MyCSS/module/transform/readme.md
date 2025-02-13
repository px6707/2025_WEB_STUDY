## 转换

### transform
允许旋转、缩放、倾斜或平移元素
如果属性不是none，则会创建一个层叠上下文，影响z轴的显示顺序

指定为多个transform-function的值
- none 不应用变换

### matrix() 
定义 6 个值组成的 2D 变换矩阵。
```css
matrix(a, b, c, d, tx, ty)
/* 1. a 水平缩放
2. b 垂直倾斜
3. c 水平倾斜
4. d 垂直缩放
5. tx 水平移动
6. ty 垂直移动 */
```

### matrix3d()
4x4 齐次矩阵的形式定义一个 3D 变换。

### perspective()
透视函数定义了到 z=0 的坐标轴，使用者能够得到 3D 定位元素的透视，每个 3D 元素在 Z 轴的位置大于零意味着离使用者更近，因此会变得更大
- length

### rotate()
元素围绕一个定点，由transform-origin定义，旋转。顺时针为正
```css
transform: rotate(45deg);
```
### rotate3d()
元素围绕固定轴移动而不使其变形
1. x：旋转轴向量的x分量（数字）
2. y：旋转轴向量的y分量（数字）
3. z：旋转轴向量的z分量（数字）
4. angle：旋转角度（角度值，如 45deg）
    - 正值：顺时针旋转
    - 负值：逆时针旋转

### rotateX()
个元素围绕横坐标 (水平轴) 旋转，而不会对其进行变形
### rotateY()
个元素围绕纵坐标 (垂直轴) 旋转，而不会对其进行变形
### rotateZ()
个元素围绕坐标轴 (z 轴) 旋转，而不会对其进行变形


### scale()
修改元素的大小
```css
transform: scale(0.7);
transform: scale(1.3, 0.4);
```

### scale3d()
修改元素的大小
```css
transform: scale3d(1.3, 1.3, 1.3);
```
### scaleX()
scaleX(sx) 是 scale(sx, 1) 或 scale3d(sx, 1, 1) 的一个速记/缩写。
### scaleY()
y轴缩放
### scaleZ()
z轴缩放

### skew()
定义了一个元素在二维平面上的倾斜转换
x方向
正值：元素向左倾斜（左上角向上移动，右上角向下移动）
负值：元素向右倾斜（左上角向下移动，右上角向上移动）

y方向
正值：元素向右倾斜（右上角向右移动，右下角向左移动）
负值：元素向左倾斜（右上角向左移动，右下角向右移动）
```css
/* x方向上的倾斜角度 */
skew(ax)
xy方向
skew(ax, ay)
```


### skewX()
元素倾斜到二维平面上的水平方向。
### skewY()
元素倾斜到二维平面上的垂直方向。


### translate()
在水平和/或垂直方向上重新定位元素。

```css
/* x方向平移 */
transform: translate(50%);
/* xy方向平移 */
transform: translate(100px, 200px)
```

### translateX()
### translateY()
水平、垂直平移
### translateZ()
z轴平移
```css
/* perspective(500px) 表示用户位于z=0处的图像“前面”500像素。translateZ() 函数将元素从屏幕向外移动200像素，朝向用户。 这使得元素在2D显示器上显示时显得更大，在VR上显示时则更近 耳机或其他3D显示设备。 */
transform: perspective(500px) translateZ(200px);
```

### translate3d()
 3D 空间内移动一个元素的位置
 translate3d(tx, ty, tz)

### transform-origin
更改一个元素变形的原点
默认的远点是center，中心点
```css
/* 单值语法 */
transform-origin: center;     /* 居中 */
transform-origin: top;        /* 顶部中心 */
transform-origin: bottom;     /* 底部中心 */
transform-origin: left;       /* 左侧中心 */
transform-origin: right;      /* 右侧中心 */
transform-origin: 50px;       /* 距离左边50px */
transform-origin: 50%;        /* 50%处 */

/* 双值语法：x y */
transform-origin: left top;          /* 左上角 */
transform-origin: right bottom;      /* 右下角 */
transform-origin: 50px 50px;         /* 具体像素点 */
transform-origin: 0 0;               /* 左上角 */
transform-origin: 100% 100%;         /* 右下角 */

/* 三值语法：x y z */
transform-origin: 50% 50% 10px;      /* x y z */
```

### transform-style
置元素的子元素是位于 3D 空间中还是平面中。
如果选择平面，元素的子元素将不会有 3D 的遮挡关系。
- flat 平面
- preserve-3d 3D 空间


### transform-box
定义了与 transform、transform-origin 这两个属性有关联的布局框。这个属性决定了变形的参考系是什么。

- border-box   使用边框框作为参考框
- fill-box  使用对象边界框作为参考框，对于有CSS布局框的元素，其行为类似于 content-box
- view-box 使用最近的SVG视口作为参考框


###  perspective
指定了观察者与 z=0 平面的距离，使具有三维位置变换的元素产生透视效果。z>0 的三维元素比正常大，而 z<0 时则比正常小，大小程度由该属性的值决定。

### perspective-origin
指定了观察者的位置
```css
/* 元素中心观察 */
perspective-origin: center; 
/* 元素顶部观察 */
perspective-origin: top;
/* 元素右下角观察 */
perspective-origin: bottom right;
/* 元素左方-170%的地方观察，y为中心 */
perspective-origin: -170%;
perspective-origin: 500% 200%;
```


### backface-visibility
能否透过正面看到背面，即正面有透明的情况下能否看到背面。

- visible  可见
- hidden   隐藏

