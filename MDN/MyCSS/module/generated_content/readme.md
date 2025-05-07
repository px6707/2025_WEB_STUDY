## 生成内容

CSS 生成内容（Generated Content）是 CSS 其中一个模块，定义了如何给一个元素添加内容。

### content
属性用于在元素的 ::before 和 ::after 伪元素中插入内容。使用 content 属性插入的内容都是匿名的可替换元素。

value:
- none 不产生伪类元素
- normal 视为none
- string 文本内容
- url() 外部资源显示
- counter() 计数器counter或者counters
- attr(x) 将元素的x属性以字符串形式返回
- open-quote|close-quote 这些值被quotes中定义的字符串替换
- no-open-quote|no-close-quote 不会产生任何内容，但是会改变（增加或降低）引号层级

### quotes
quotes CSS 属性用于设置引号的样式。

value:
- none content属性的open-quote和close-quote不会展示引号
- auto 用适当的引号，基于在所选元素上设置的任何语言值
- [<string> <string>]+ 一组或多组string的值，对应open-quote和close-quote。第一对表示引号的外层，第二对表示第一个嵌套层，下一对表示第三层，依此类推。
```css
q {
  quotes: '"' '"' "'" "'";
}
q::before {
  content: open-quote;
}
q:after {
  content: close-quote;
}
```