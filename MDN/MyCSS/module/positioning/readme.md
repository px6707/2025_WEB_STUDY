## 定位

### display



### position
用于指定一个元素在文档中的定位方式。top，right，bottom 和 left 属性则决定了该元素的最终位置。

- 相对定位 relative ，元素先放置在未添加定位时的位置，再在不改变页面布局的前提下调整元素位置
- 绝对定位 absolute 元素会被移出正常文档流，并不为元素预留空间，通过指定元素相对于最近的非 static 定位祖先元素的偏移，来确定元素位置。绝对定位的元素可以设置外边距（margins），且不会与其他边距合并。
- fixed 元素会被移出正常文档流，并不为元素预留空间，而是通过指定元素相对于屏幕视口（viewport）的位置来指定元素位置。
- 粘性定位 sticky 元素根据正常文档流进行定位，然后相对它的最近滚动祖先包括 table-related 元素，基于 top、right、bottom 和 left 的值进行偏移。



### top
定义了定位元素的上外边距边界与其包含块上边界之间的偏移，非定位元素设置此属性无效。
top的效果取决于元素的position属性：
- 当position设置为absolute或fixed时，top属性指定了定位元素上外边距边界与其包含块上边界之间的偏移。
- 当position设置为relative时，top属性指定了元素的上边界离开其正常位置的偏移。
- 当position设置为sticky时，如果元素在 viewport 里面，top属性的效果和 position 为relative等同；如果元素在 viewport 外面，top属性的效果和 position 为fixed等同。
- 当position设置为static时，top属性无效。

> 当top和bottom同时指定时，并且 height没有被指定或者指定为auto的时候，top和bottom 都会生效，在其他情况下，如果 height被限制，则top属性会优先设置，bottom属性则会被忽略。 就是说，height未指定且同时指定了top和bottom，height会自动占据剩余空间

### bottom
### left
定义了定位元素的左外边距边界与其包含块左边界之间的偏移，非定位元素设置此属性无效。
> 当left和right 同时指定时，元素的位置会被重复指定。当容器是从左到右时，left的值会被优先设定；当容器是从右到左时，right的值会被优先设定。

### right


### float
指定一个元素应沿其容器的左侧或右侧放置，允许文本和内联元素环绕它。该元素从网页的正常流动（文档流）中移除，但是仍然保持部分的流动性（与绝对定位相反）。

- left
- right
- inline-start
关键字，表明元素必须浮动在其所在块容器的开始一侧，在 ltr 脚本中是左侧，在 rtl 脚本中是右侧。

- inline-end
关键字，表明元素必须浮动在其所在块容器的结束一侧，在 ltr 脚本中是右侧，在 rtl 脚本中是左侧。


### clear
清除浮动

```css
#container::after {
  content: "";
  display: block;
  clear: both;
}

```
### z-index
设置定位元素及其后代元素或 flex 项目的 Z 轴顺序。z-index 较大的重叠元素会覆盖较小的元素。
- auto 盒子不会创建一个新的局部层叠上下文。盒子在当前层叠上下文的层叠等级是 0。
- 盒子在当前层叠上下文的层叠等级就是 <integer> 的值。盒子还会创建一个局部层叠上下文。这意味着该元素的后代元素不会和该元素的外部元素比较 z-index。
- 只对定位元素有效


#### 不使用z-index时
元素的堆叠顺序如下
1. 根元素的背景和边框
2. 后代非定位元素，按在HTML中出现的顺序排列
3. 后代定位元素，按在HTML中出现的顺序排列
，当 order 属性在 flex 容器内改变渲染顺序（基于 HTML 中的出现顺序）时，它也会影响层叠上下文的顺序。


#### 层叠与浮动
对于浮动的块元素来说，层叠顺序变得有些不同。浮动块元素被放置于非定位块元素与定位块元素之间：
1. 根元素的背景和边框
2. 位于普通流中的后代块元素按照他们在HTML中出现的顺序排列
3. 浮动块元素
4. 后代中的定位元素，按照他们在HTML中出现的顺序排列

> 给非定位元素添加了opcity0.7后非定位元素到了定位元素的上面，这是因为opacity 属性会创建一个新的层叠上下文。新的层叠上下文会独立于原来的层叠上下文进行层叠排列，它会作为一个整体与其他元素进行层叠排列。新创建的层叠上下文可能会在渲染时被放置在更上层

对于带有 opacity < 1 的元素，会进行以下处理:

1. 硬件加速
    - opacity < 1 的元素会触发硬件加速
    - 浏览器会将该元素提升到独立的图层（GPU层）进行渲染
    - 硬件加速的层通常会被放置在普通文档流渲染层的上方
2. 渲染层的合成顺序
    - 普通元素在默认渲染层中绘制
    - 需要硬件加速的元素（如设置了opacity）会被提升到新的渲染层
    - 在最终的图层合成阶段，新的渲染层会被放置在默认渲染层之上
#### 添加z-index
- 当没有指定 z-index 的时候，所有元素都在会被渲染在默认层 (0 层)
- 当多个元素的 z-index 属性相同的时候 (在同一个层里面),那么将按照不使用z-index中描述的规则进行布局。


#### 层叠上下文
层叠上下文的形成
- 文档根元素html
- position absolute、relative 且z-index不为auto的元素
- position fixed、sticky
- flex 容器的子元素，且z-index不为auto
- grid 容器的子元素，且z-index不为auto
- opacity 小于1 的元素
- mix-blend-mode 不为normal 的元素
- 以下任意属性不为none的元素
    - transfrom
    - filter
    - backdrop-filter
    - perspective
    - clip-path
    - mask、mask-image、mask-border
- isolation 值为isolate的元素
- will-change设定了任意属性而该属性在non-initial值时会创建层叠上下文
- contain 为layout、paint或 strict、content的元素

在层叠上下文中，子元素同样也按照上面解释的规则进行层叠。重要的是，其子级层叠上下文的 z-index 值只在父级中才有意义。子级层叠上下文被自动视为父级层叠上下文的一个独立单元。