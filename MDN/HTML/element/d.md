
### data
为内容提供机器可读的值，同时保持人类可读的显示形式。它通过 value 属性来实现这一点。
```html
<!-- 产品编号 -->
<data value="398">Nike Air Max</data>
```

<data> 标签的主要应用场景：

1. 电子商务网站的产品信息
2. 数据可视化
3. 需要在显示值和实际值之间建立映射的场景
4. 便于JavaScript处理和数据提取
5. 有助于SEO和机器学习的数据抓取

### datalist
包含一组 option 元素，表示其他表单控件的可选值
```html
<label for="ice-cream-choice">Choose a flavor:</label>
<!-- list指定可选的列表 -->
<input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />

<!-- 列表的id -->
<datalist id="ice-cream-flavors">
  <option value="Chocolate"></option>
  <option value="Coconut"></option>
  <option value="Mint"></option>
  <option value="Strawberry"></option>
  <option value="Vanilla"></option>
</datalist>

```
### dfn
术语的一个定义

### dl
包含术语定义以及描述的列表

### dd
一个dl中术语的描述

### dt
一个dl中术语的定义
```html

<dl>
  <dt>Beast of Bodmin</dt>
  <dd>A large feline inhabiting Bodmin Moor.</dd>

  <dt>Morgawr</dt>
  <dd>A sea serpent.</dd>

  <dt>Owlman</dt>
  <dd>A giant owl-like creature.</dd>
</dl>
```


### del
表示一些被从文档中删除的文字内容,<ins>表示插入的内容。
默认情况下会有删除线



### details
详细信息。可以配合summary使用，summary指定详细信息的标题
```html
<details>
    <summary>点击展示详情</summary>
    这是详情内容，默认是隐藏的
</details>
```
属性：
- open 默认情况下是展开还是关闭，默认为false
事件：
- toggle 用于切换开关状态

### dialog
对话框
- open 用于切换对话框状态，但最好使用showModal方法和close方法。dialog.returnValue可以设置弹窗返回值

>dialog中有表单，表单含有属性 method="dialog",可以通过点击form中的按钮关闭dialog。其中按钮的value会作为dialog的returnValue
```html
<dialog id="myDialog">
    <form method="dialog">
        <h2>确认操作</h2>
        <p>您确定要执行此操作吗？</p>
        <button value="cancel">取消</button>
        <button value="confirm">确认</button>
    </form>
</dialog>

<script>
const dialog = document.getElementById('myDialog');

// 打开对话框
dialog.showModal();

// 监听关闭事件
dialog.addEventListener('close', () => {
    if (dialog.returnValue === 'confirm') {
        console.log('用户点击了确认');
    } else {
        console.log('用户点击了取消');
    }
});
</script>
```

### div
容器，作为一个“纯粹的”容器，<div> 元素本身并不表示任何内容。相反，它用于组织内容