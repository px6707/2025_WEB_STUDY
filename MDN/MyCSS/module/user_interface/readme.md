### 用户界面接口

### appearance 控制UI控件基于操作系统的原生外观
* none 移除元素原生样式，主要用于自定义表单控件
* auto 使用元素的默认外观，保持操作系统原生样式

### box-sizing
定义如何计算元素的总宽度和总高度，即标准盒模型和怪异盒模型
* content-box 标准盒模型 默认值。如果你设置一个元素的宽为 100px，那么这个元素的内容区会有 100px 宽，并且任何边框和内边距的宽度都会被增加到最后绘制出来的元素宽度中。
* border-box 怪异盒模型 如果你将一个元素的 width 设为 100px，那么这 100px 会包含它的 border 和 padding，内容区的实际宽度是 width 减去 (border + padding) 的值。大多数情况下，这使得我们更容易地设定一个元素的宽高。

### cursor 控制鼠标光标
* auto 浏览器根据内容决定
* defalut 默认指针
* none 无指针
* context-menu 指针下有可用内容目录
* help 指针下有帮助信息
* pointer 手
* progress 程序后台繁忙的鼠标箭头+漏斗，但用户仍可交互
* wait 程序繁忙漏洞，表示不可交互
* cell 单元格可被选中的 + 号
* crosshair 交叉线、
* text 文本 I
* vertical-text 垂直文本可被选择
* alias 赋值或快捷方式要被创建
* copy 可复制
* move 移动
* no-drop 当前位置不可扔下
* not allowed 不能执行
* grab 可抓取的手
* grabbing 抓取中的手
* all-scroll 任意方向滚动
* col-resize 列宽度可拖动
* row-resize 行高度可拖动
* n-resize 上箭头
* e-resize 右箭头
* s-resize 下箭头
* w-resize 左箭头
* ne-resize ↗
* nw-resize ↖
* se-resize ↘
* sw-resize ↙
* ew-resize 横向可拖动
* ns-resize 纵向可拖动
* nesw-resize 
* nwse-resize 
* zoom-in  放大
* zoom-out 缩小
* url() x y用于指定背景图像的 URL和xy坐标


### outline
一条声明中设置多个轮廓属性的简写属性 元素轮廓是绘制于元素周围的一条线，位于border的外围，使元素突出
是outline-style outline-width outline-color 的简写形式
#### 和border区别
* outline 不占据空间，绘制于元素内容周围。
* 根据规范，outline 通常是矩形，但也可以是非矩形的。

#### 值
* outline-style
* outline-width
* outline-color

### outline-width
置元素轮廓的粗细
* thin 通常为1px
* medium 通常为3px
* thick 通常是5px
* length


### outline-style
元素轮廓是绘制于元素周围的一条线，位于border的外围，使元素突出
设置元素轮廓的样式
* none 无轮廓
* dotted 点
* dashed 短线
* solid 实线
* double 两条有空隙的线
* groove 凹
* ridge 突起
* inset 嵌入
* outset 突出

### outline-color
轮廓颜色

### outline-offset
轮廓偏移量，轮廓与元素边缘的间距
* length


### resize
元素是否可以调整尺寸，不能用于内联元素和overflow属性为visible的块元素
* none 不可调整尺寸
* both 可以调整尺寸
* horizontal 可以调整宽度
* vertical 可以调整高度
* block 延用户块方向，取决于 write-mode 和 direction
* inline 延用户行方向，取决于 write-mode 和 direction


### text-overflow
确定如何提示用户存在隐藏的溢出内容。
* clip 隐藏溢出内容
* ellipsis 在溢出内容的末尾显示一个省略号
* wrap 确保文字不会溢出，但是会换行
* string 大部分浏览器不支持 只有火狐支持
* 双值语法 定义前后溢出的样式，大部分浏览器不支持，只有火狐支持

### user-select
控制用户是否可以选择文本
* none 不允许用户选择文本
* auto 自动选择文本 如果在 ::after ::before中使用，为none； 可编辑元素是container ；父元素是all则是all，父元素是none 则是none；其他情况为text
* text 允许用户选择文本
* all 在一个 HTML 编辑器中，当双击子元素或者上下文时，那么包含该子元素的最顶层元素也会被选中。其实就是点击能够选择该节点上的所有文本
* contain 允许在元素内选择；但是，选区将被限制在该元素的边界之内。仅IE