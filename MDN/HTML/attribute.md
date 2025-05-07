### accept
允许的文件类型

### autocomplete
自动完成，自动提示，用于输入框元素、select

- off
- on

### capture
只能在移动设备使用，指定了使用摄像头或麦克风上传文件时，使用的是哪一个摄像头或麦克风

- user 使用面向用户的摄像头或麦克风
- enviorment 使用朝外的摄像头或麦克风

### crossorigin
在audio、img、link、video、script元素中，定义如何处理跨域请求
- anonymous 不携带安全认证，如果资源服务器没有设置跨域则被限制使用
- use-credentials 发送跨域请求时携带认证信息，如果服务器不给予信任，则被限制使用

### dirname
文本方向，用于input和textarea
- ltr
- rtl

### disabled


### elementtiming
表示元素已被标记，便于PerformanceObserver进行跟踪。用来进行性能监控和测量

可渲染的元素类型： 图片 img、 svg元素、 文本元素、 背景图片元素

```html
<!-- 监控多个关键元素 -->
<header elementtiming="site-header">...</header>
<main>
  <img elementtiming="hero" src="hero.jpg">
  <article elementtiming="main-content">
    <!-- 内容 -->
  </article>
</main>

<script>
// 性能监控代码
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    // entry.identifier: elementtiming 属性值
    // entry.renderTime: 渲染时间
    // entry.loadTime: 加载时间
    // entry.element: 对应的 DOM 元素
    console.log(`${entry.identifier} rendered at ${entry.renderTime}ms`);
  });
});

observer.observe({ entryTypes: ['element'] });
</script>
```

### for
label、 output元素使用的属性
label 使用时，表示标签所描述的表单元素
output使用时，表示输出的结果和创建输出的元素的关系

### max
最大值，如果元素的value大于此值，则元素不能通过校验。适用与数值类型的输入包括date、month、week、timne、datetime、number、range类型

### maxlength
最大程度，input、textarea中字符串长度的最大值

### min
value的最小值

### minlength
最小程度，input、textarea中字符串长度的最小值

### multiple
多选，适用于email、file、select元素

### pattern
规定一个表单空间值应该匹配的正则表达式。

### placeholder
没有值时在控件中显示的文本

### readonly
只读，无法编编辑。只读可以聚焦也可以随表单提交。disable禁用控件不能聚焦，也不能提交表单

### rel
定义所连接的资源与当前文档的关系，在a、area、link元素有效
- alternate 当前文档的替代描述
- author 当前文档的作者
- bookmark 当前文档的书签
- help 当前文档的帮助
- license 当前文档的许可证
- next 当前文档的下一个页面
- nofollow 当前文档的不跟随链接
- noreferrer 当前文档的不引用链接
- prev 当前文档的上一个页面
- search 当前文档的搜索
- stylesheet 当前文档的样式表


### required
必填

### size
定义了input元素的宽度和select元素的高度。
如果input type是text、password 那么它代码可输入的字符数的宽度

### step
对于数值输入类型有效，date、month、week、time、number、range
代表它们的步进粒度