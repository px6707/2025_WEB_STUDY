## gradient 渐变
在使用角度的时候，0deg 代表渐变方向为从下到上，90deg 代表渐变方向为从左到右，诸如此类正角度都属于顺时针方向。而负角度意味着逆时针方向。


三种渐变类型
### linear-gradient 线性渐变
默认从上到下，可以传入指定方向或者角度

```css
linear-gradient(to right, red, blue);
linear-gradient(90deg, red, blue); 
```
### radial-gradient 径向渐变
1. 一个中心点向外辐射，可以指定中心点位置
```css
.radial-gradient {
    /* 指定中心点位置 0% 30%，以及色标位置 */
    background: radial-gradient(at 0% 30%, red 10px, yellow 30%, #1e90ff 50%);
}

```
2. 指定大小
能的值包括 closest-corner、closest-side、farthest-corner 和 farthest-side，其中 farthest-corner 是默认值。圆的大小为长度，椭圆则是长度和百分比。
```css
.radial-ellipse-far {
  background: radial-gradient(
    /* 椭圆，大小是距离最远的角，中心点在 90% 90% */
    ellipse farthest-corner at 90% 90%,
    red,
    yellow 10%,
    #1e90ff 50%,
    beige
  );
}

.radial-ellipse-size {
  background: radial-gradient(
    /* 椭圆 水平半径 50% 垂直半径 50px, */
    ellipse 50% 50px,
    red,
    yellow 10%,
    #1e90ff 50%,
    beige
  );
}

.radial-circle-size {
    /* 圆形 半径 */
  background: radial-gradient(circle 50px, red, yellow 10%, #1e90ff 50%, beige);
}

```
### conic-gradient 圆锥渐变
创建包含颜色围绕中心点旋转（而不是从中心点辐射）产生的渐变的图像。
由于是旋转，所有色标必须是百分比或度数，绝对长度无效
默认情况下，渐变的中心位于 50% 50% 的位置，渐变的开始点是朝上的。

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


## 重复渐变
### repeating-linear-gradient 重复线性渐变
### repeating-radial-gradient 重复径向渐变
### repeating-conic-gradient 重复圆锥渐变
```css
.repeating-linear {
    /* 向左上的红蓝条纹 */
  background: repeating-linear-gradient(
    -45deg,
    red,
    red 5px,
    blue 5px,
    blue 10px
  );
}

.repeating-radial {
  background: repeating-radial-gradient(
    black,
    black 5px,
    white 5px,
    white 10px
  );
}

```


## 渐变的使用
### 多种颜色
默认情况下，所设置颜色会均匀分布在渐变路径中。
```css
.auto-spaced-linear-gradient {
  background: linear-gradient(red, yellow, blue, orange);
}

```

### 色标位置
```css
/* lime颜色在28px的位置，red在77px的位置， cyan在100%的位置 */
.multicolor-linear {
  background: linear-gradient(to left, lime 28px, red 77%, cyan);
}
```
### 创建硬线
```css
/* 两个颜色的位置在相同的地方，则会泾渭分明 */
.striped {
  background: linear-gradient(to bottom left, cyan 50%, palegoldenrod 50%);
}

```

### 渐变中心
默认情况下，渐变会平滑地从一种颜色过渡到另一种颜色。你可以通过设置一个值来将渐变的中心点移动到指定位置。在如下示例中，我们将渐变的中心点由 50% 设为 10%。
```css
.color-hint {
  background: linear-gradient(blue, 10%, pink);
}
/* 注意上面和这个色标位置完全不同，色标标识pink从10%才开始有
    渐变中心是指在10%的位置一半blue一半pink
*/
.simple-linear {
  background: linear-gradient(blue, pink 10%);
}
.simple-linear {
  background: linear-gradient(blue, pink);
}

```

### 色带和条纹
和创建硬线一样,前一个颜色的位置和后一个颜色位置一样即可。
颜色可以直接指定两个位置的值。
```css
div{
  background: linear-gradient(
    to left,
    lime 25%,
    red 25% 50%,
    cyan 50% 75%,
    yellow 75%
  );
}
 
 /* 颜色没有分明，会有模糊地带 */
 div{
      background: linear-gradient(
    to left,
    lime 20%,
    red 30% 45%,
    cyan 55% 70%,
    yellow 80%
  );
 }
```
### 堆叠渐变
多个渐变可以堆叠在一起，通过逗号分隔。道理等同于设置多个背景色，如果渐变带有透明，则可以把后面的颜色也显示出来。
```css
.stacked-linear {
  background:
   /* 注意都是透明的 */
    linear-gradient(217deg, rgba(255, 0, 0, 0.8), rgba(255, 0, 0, 0) 70.71%),
    linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);
}

```