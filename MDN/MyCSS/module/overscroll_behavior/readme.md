## 滚动行为
overscroll behavior模块提供了一些属性，用于控制滚动容器在滚动位置达到滚动边界时的行为。在嵌入式可滚动区域不应触发父容器滚动的情况下，控制这方面特别有用。
### overscroll-behavior
设置浏览器在到达滚动区域的块方向边界时的行为。
overscroll-behavior-x
overscroll-behavior-y的简写形式
### overscroll-behavior-x
### overscroll-behavior-y
控制当滚动到区域的水平、垂直边界时的浏览器行为。
- auto 默认的滚动溢出行为表现的和正常一样。
- contain 默认的滚动溢出行为将被内部的元素观察到，(例如：“bounce”效果或者刷新)，但是相邻的区域不会产生连续滚动效果，例如：在下面的元素不会被滚动。
- none 相邻的滚动区域不会有连续滚动效果，并且默认的滚动溢出行为会被阻止。 
### overscroll-behavior-inline
设置浏览器在到达滚动区域的行内方向边界时的行为。

### overscroll-behavior-block
设置浏览器在到达滚动区域的块方向边界时的行为。