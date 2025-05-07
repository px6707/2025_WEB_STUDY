## 滚动吸附 
通过定义吸附位置控制滑屏和滚动行为。当用户在滚动容器中滚动溢出的内容时，内容可吸附至特定位置，由此提供分页和滚动定位效果。


### scroll-snap-type
设置了在有滚动容器的情形下吸附至吸附点的严格程度。
- none 忽略吸附点
- x 仅在横轴吸附至吸附位置
- y 仅在纵轴吸附至吸附位置
- block 滚动容器仅在其块向轴上吸附至吸附位置。
- inline 滚动容器仅在其行向轴上吸附至吸附位置。
- both 滚动容器在其两轴上独立地吸附至吸附位置（可能在各轴上吸附至不同的元素）。
- mandatory 若滚动容器当前未在滚动，则其可见视口必须吸附至吸附位置。这个参数就是说一定会强制吸附，不能有中间位置，要么吸附到上一个位置，要么吸附到下一个位置
- proximity 若滚动容器当前未在滚动，则其可见视口可以吸附至吸附位置。是否吸附由用户代理根据滚动参数决定。若指定了吸附轴，则此为默认的吸附程度。可以停留在两个吸附位置中间，至于滚动到哪个位置会被吸附，则由用户浏览器决定

```html
<div class="holster">
  <div class="container x mandatory-scroll-snapping" dir="ltr">
    <div>x 轴强制、从左往右</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
  <div class="container x proximity-scroll-snapping" dir="ltr">
    <div>x 轴靠近、从左往右</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
  <div class="container y mandatory-scroll-snapping" dir="ltr">
    <div>y 轴强制、从左往右</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
  <div class="container y proximity-scroll-snapping" dir="ltr">
    <div>y 轴靠近、从左往右</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
  <div class="container x mandatory-scroll-snapping" dir="rtl">
    <div>x 轴强制、从右往左</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
  <div class="container x proximity-scroll-snapping" dir="rtl">
    <div>x 轴靠近、从右往左</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
  <div class="container y mandatory-scroll-snapping" dir="rtl">
    <div>y 轴强制、从右往左</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
  <div class="container y proximity-scroll-snapping" dir="rtl">
    <div>y 轴靠近、从右往左</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
</div>
```
```css
/* 滚动吸附 */
.x.mandatory-scroll-snapping {
  scroll-snap-type: x mandatory;
}
.y.mandatory-scroll-snapping {
  scroll-snap-type: y mandatory;
}
.x.proximity-scroll-snapping {
  scroll-snap-type: x proximity;
}
.y.proximity-scroll-snapping {
  scroll-snap-type: y proximity;
}

.container > div {
  text-align: center;
  scroll-snap-align: center;
  flex: none;
}

```


### scroll-padding
同时设置元素的所有滚动内边距，其赋值方式较为类似 padding 属性为元素内边距赋值的方式。这个内边距会影响滚动捕捉的位置。它特别有用在以下场景：
1. 网页有固定的头部导航栏
2. 需要在滚动捕捉时预留额外空间
3. 防止重要内容被固定元素遮挡
是这个容器设置一个滚动内边距
```css
scroll-padding: 0;
```

### scroll-padding-top
### scroll-padding-left
### scroll-padding-bottom
### scroll-padding-right
### scroll-padding-block
### scroll-padding-inline
### scroll-padding-block-start
### scroll-padding-block-end
### scroll-padding-inline-start
### scroll-padding-inline-end


## 子元素属性

### scroll-snap-align
将盒子的吸附位置指定为其吸附区域
- none 此盒在此轴上未定义吸附位置。
- start 此盒的滚动吸附区域在滚动容器的吸附口中的首对齐为此轴上的吸附位置。
- end 此盒的滚动吸附区域在滚动容器的吸附口中的末对齐为此轴上的吸附位置。
- center 此盒的滚动吸附区域在滚动容器的吸附口中的居中对齐为此轴上的吸附位置。
```css
scroll-snap-align: none;
scroll-snap-align: start end; /* 当设置两值时，第一值为块向，第二值为行向 */
```
### scroll-snap-margin
设置元素的所有滚动外边距。需要设置在子元素上。
### scroll-snap-margin-top
### scroll-snap-margin-left
### scroll-snap-margin-bottom
### scroll-snap-margin-right
### scroll-snap-margin-block
### scroll-snap-margin-inline
### scroll-snap-margin-block-start
### scroll-snap-margin-block-end
### scroll-snap-margin-inline-start
### scroll-snap-margin-inline-end


### scroll-snap-stop
定义了滚动容器是否可“越过”吸附位置。
- normal 在滚动此元素的滚动容器的可见视口时，滚动容器可“越过”吸附位置。
- always 滚动容器不得“越过”吸附位置，必须吸附至此元素的第一个吸附位置。