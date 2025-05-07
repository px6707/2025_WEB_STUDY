### matrix()
指定了一个由指定的 6 个值组成的 2D 变换矩阵
可以通过一个3x3的矩阵来实现所有的2D变换效果。
```css
transform: matrix(a, b, c, d, tx, ty)
```
┌        ┐
│ a c tx │
│ b d ty │
│ 0 0 1  │
└        ┘

参数含义：

a: 水平缩放（横向拉伸）
b: 垂直倾斜（垂直错切）
c: 水平倾斜（水平错切）
d: 垂直缩放（纵向拉伸）
tx: 水平平移
ty: 垂直平移

### matrix3d()
4x4 齐次矩阵的形式定义一个 3D 变换。
16个值定义一个4x4的齐次矩阵，可以实现任何3D变换效果。
```css
transform: matrix3d(
    a1, b1, c1, d1,
    a2, b2, c2, d2,
    a3, b3, c3, d3,
    a4, b4, c4, d4
)
```
┌                ┐
│ a1 b1 c1 d1    │
│ a2 b2 c2 d2    │
│ a3 b3 c3 d3    │
│ a4 b4 c4 d4    │
└                ┘
参数的具体作用：

 1. 前3x3部分（a1-c3）：控制3D空间中的旋转、缩放和倾斜
 2. 第4列（d1-d3）：控制透视效果
 3. 第4行（a4-c4）：控制平移
 4. d4：通常设为1，影响整体缩放

### max()
从一个逗号分隔的表达式列表中选择最大（正方向）的值作为属性的值 .

### min()
从一个逗号分隔的表达式列表中选择最小（正方向）的值作为属性的值 .

### minmax()
定义了一个长宽范围的闭区间，它与CSS 网格布局一起使用。
minmax(200px, 1fr)

### mode()
取模运算
当符号不同时，会寻找大于被除数的最小倍数，然后计算差值
mod(9, -4) 为-3

被除数 = 9
除数 = -4

步骤1：找出-4的倍数中，大于9的最小值
-4 × -3 = 12  (这是大于9的最小倍数)

步骤2：用这个倍数减去被除数
12 - 9 = 3

步骤3：因为除数是负数，所以结果要是负数
最终结果 = -3


### oklab()
OKLAB色彩空间

###  oklch()
OKLCH色彩空间

### opacity()
透明度

### paint()
火狐、safari不支持
通过JavaScript以编程方式创建自定义的CSS图像。
```css
background-image: paint(workletName, param1, param2...);
```
```js
// 注册Paint Wokrlet
CSS.paintWorklet.addModule('my-paint-worklet.js');
```
```js
// 创建Paint Worklet my-paint-worklet.js
class MyPainter {
    // 定义需要的CSS属性
    static get inputProperties() {
        return ['--my-color'];
    }
    
    // 实现绘制逻辑
    paint(ctx, size, properties) {
        // ctx: 类似Canvas的2D上下文
        // size: 绘制区域的尺寸
        // properties: CSS自定义属性
        ctx.fillStyle = properties.get('--my-color');
        ctx.fillRect(0, 0, size.width, size.height);
    }
}

registerPaint('myPainter', MyPainter);
```
```css
/* 在css中使用 */
.element {
    --my-color: blue;
    background-image: paint(myPainter);
}
```


### palette-mix()
火狐safari不支持
在指定的颜色空间中精确混合两种颜色。

### path()
接受 SVG 路径字符串作为参数，用于 CSS 形状和运动路径模块中绘制形状。


### perspective()
指定了观察者与 z=0 平面的距离，使具有三维位置变换的元素产生透视效果。z>0 的三维元素比正常大，而 z<0 时则比正常小，大小程度由该属性的值决定。

### polygon()
通过提供一个或多个坐标对（每一个坐标代表形状的一个顶点）来绘制多边形。

### pow()
底数的指数运算
pow(5,2) 5 的平方

### radial-gradient()
从原点辐射的两种或多种颜色之间的渐进过渡
```css
/* radial-gradient(circle at center, red 0, blue, green 100%) */
/* 可以是圆形或者椭圆形，颜色后可以跟范围 */
background: radial-gradient(ellipse at top, #e66465, transparent),
            radial-gradient(ellipse at bottom, #4d9f0c, transparent);
```


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

### rect()
以创建一个矩形，该矩形位于包含块的顶部和左侧边缘的指定距离处。
```css
offset-path: rect(0 1% auto 3% round 0 1px);
clip-path: rect(50px 70px 80% 20%);
```
参数说明：
- 四个偏移值，从顶部开始顺时针指定
- 可以使用长度值、百分比或auto关键字
- 可选的round关键字用于添加圆角
- auto值在top和left时等于0，在right和bottom时等于100%
rect()：
- 可用于offset-path（创建运动路径）
- 可用于clip-path（定义裁剪区域）
inset()：
- 主要用于shape-outside（定义文本环绕形状）
- 也可用于clip-path
### rem()
返回第一个参数除以第二个参数的余数


### repeat()
重复片段， 允许以更紧凑的形式写入大量显示重复模式的列或行。
```css
#container {
  display: grid;
  grid-template-columns: repeat(2, 50px 1fr) 100px;
  grid-gap: 5px;
  box-sizing: border-box;
  height: 200px;
  width: 100%;
  background-color: #8cffa0;
  padding: 10px;
}
```