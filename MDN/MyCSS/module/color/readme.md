## 颜色调整

允许用户代理根据用户偏好（例如“暗黑模式”、对比度调整和其他配色方案）自动进行颜色调整。

### color-schema
允许元素指示它可以舒适地呈现哪些颜色方案。
```css
div{
    color-scheme: light dark;
}
```

### forced-color-adjust
允许用户将某些元素从强制颜色模式中移除，这些值的控制权将交还给 CSS。
```css
div{
    forced-color-adjust: none;
}
```

### print-color-adjust
设置用户代理在输出设备上优化元素外观时可以采取的措施。默认情况下，浏览器可根据输出设备的类型和功能，对元素的外观进行必要和谨慎的调整。
#### economy
用户代理可以根据其认为适当和审慎的方式对元素进行调整，以优化针对其渲染设备的输出效果。例如，在打印时，浏览器可能会选择省略所有背景图像，并调整文本颜色，以确保对比度达到最佳，便于在白纸上阅读。这是默认值。
#### exact
该元素的内容是经过特别精心设计的，在使用颜色、图像和样式时考虑周到和/或非常重要，因此浏览器对其进行修改可能会使情况更糟而不是更好。除非用户要求，否则不应改变内容的外观。例如，一个页面可能包含一个信息列表，其中各行的背景颜色在白色和浅灰色之间交替。去掉背景色会降低内容的可读性。
```css
div{
    print-color-adjust: auto;
}
```


### media 和颜色相关的条件
#### prefers-contrast
```css
.contrast {
  width: 100px;
  height: 100px;
  outline: 2px dashed black;
}
/* 更高对比度时 */
@media (prefers-contrast: more) {
  .contrast {
    outline: 2px solid black;
  }
}
```
#### prefers-color-scheme
 CSS 媒体特性用于检测用户是否有将系统的主题色设置为亮色或者暗色。
```css
/* 系统他们选择使用浅色主题的界面时 */
@media (prefers-color-scheme: light) {
  body {
    background-color: white;
    color: black;
  }
}
```
#### forced-colors
CSS 媒体查询特性，用于检测系统是否启用了强制颜色模式（如 Windows 的高对比度模式）。
在强制颜色模式下，可以使用以下系统颜色关键字：
* 可用值
CanvasText - 默认文本颜色
Canvas - 背景颜色
LinkText - 链接文本颜色
ActiveText - 激活元素的文本颜色
ButtonFace - 按钮背景色
ButtonText - 按钮文本颜色
Field - 输入框背景色
FieldText - 输入框文本颜色
GrayText - 禁用文本颜色
Highlight - 选中项背景色
HighlightText - 选中项文本颜色
* 注意事项
    1. 颜色限制
        在强制颜色模式下，可用的颜色是有限的
        使用系统颜色关键字而不是具体的颜色值
    2. 图标和图像
        考虑使用 forced-color-adjust: none 保持重要图标的可见性
        为图标提供高对比度的替代方案
    3. 边框和轮廓
        确保交互元素有清晰的边框
        使用系统颜色保持一致性
    4. 兼容性
        主要支持现代浏览器
        需要提供后备样式
```css
/* 检测是否启用了强制颜色模式 */
@media (forced-colors: active) {
  body {
    background-color: ButtonFace;
    color: ButtonText;
  }
}
```