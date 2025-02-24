### accesskey
为元素指定快捷键
激活方式
- windows ALt + accesskey
- mac ALt+ control + accesskey
- linux alt + accesskey
> 可能和浏览器快捷键冲突，不同系统可能不一样，移动端支持有限

### anchor
非标准，chrome 实验性支持

### autocapitalize
safari不支持
自动大写的行为主要用于移动设备的虚拟键盘，物理键盘输入不起作用
- off 不应用自动大写
- on 句子第一个字母默认大写
- words 单词第一个字母默认大写
- characters 所有字母默认大写

### autocorrect
只有火狐支持， 用于控制文本输入的自动更正功能，虚拟键盘更正拼写等，根据设备的词典
- on
- off

### autofocus
bool， 自动聚焦

### class

### contenttediatble
可编辑
- true 可编辑
- false
- plaintext-only 原始文本可编辑，但富文本格式被禁用

### data-*
自定义数据属性

### dir
元素文本方向
- ltr 从左到右，书写
- rtl 从右向左书写
- auto 用户代理绝对

### draggable
可拖拽，不能用于svg元素
- true 可拖拽
- false 不可拖拽


### enterkeyhint
定义虚拟键盘上回车的显示文本和行为提示

- enter  插入新行
- done 没有其他输入内容，输入法关闭
- go 带到文本对应位置
- next 将用户带到下一个可接受文本的输入框
- previous 返回上一个输入框 
- search 搜索结果
- send 发送

### exportparts
应用在shadow DOm中，用于导出内部的part
```html
<!-- 自定义元素定义 -->
<template id="my-element">
  <button part="btn">点击</button>
  <input part="input" type="text">
</template>

<!-- 使用自定义元素 -->
<my-element exportparts="btn:external-btn, input:external-input">
</my-element>

<!-- 外部CSS样式 -->
<style>
  ::part(external-btn) {
    background: blue;
    color: white;
  }
  
  ::part(external-input) {
    border: 2px solid blue;
  }
</style>
```