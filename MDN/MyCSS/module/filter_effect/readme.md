## 滤镜效果

### filter
<!-- svg节点的滤镜注意兼容问题 -->
filter 属性将模糊或颜色偏移等图形效果应用于元素。滤镜通常用于调整图像、背景和边框的渲染。
- filter: <filter-function> [<filter-function>]* | none;

可以使用滤镜函数和url来应用滤镜效果。

#### blur()
模糊半径

#### brightness()
亮度，调整亮度效果，1 为正常，0 为黑色，对于1为更亮

#### constrast()
对比度，调整对比度效果，1 为正常，0 为全灰，大于1 为更强对比度

### drop-shadow()
使用shadow 参数延图像轮廓生成阴影效果。
x y blur color

#### grayscale()
将图像转换为灰度图。 100%全部转为灰度图，0%无变化

#### hue-rotate()
色相旋转，色相是指图像的主色调，Hue 是指色相，可以是任何数字，从 0 到 360 之间，0 表示红色，120 表示绿色，等等。
应用色相旋转。<angle> 值设定图像会被调整的色环角度值。值为 0deg，则图像无变化。
#### invert
反转图像，100%完全反转，0%无变化


#### opacity()
透明，值为 0% 则使图像完全透明，值为 100% 则图像无变化。

#### saturate()
图像饱和度。值为 0% 则是完全不饱和，值为 100% 则图像无变化。超过 100% 则增加饱和度。

#### sepia()
将图像转换为褐色。100%全部转为褐色图，0%无变化


### 组合函数
应用多个滤镜
```css
filter: contrast(175%) brightness(103%);
```
```css
#MDN-logo {
  border: 1px solid blue;
  filter: drop-shadow(5px 5px 0 red) hue-rotate(180deg)
    drop-shadow(5px 5px 0 red);
}

```


### backdrop-filter
为一个元素后面区域添加图形效果（如模糊或颜色偏移）。因为它适用于元素背后的所有元素，为了看到效果，必须使元素或其背景至少部分透明。
- filter: <filter-function> [<filter-function>]* | none;

可以使用滤镜函数和url来应用滤镜效果。