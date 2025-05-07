## ruby 汉语的拼音读音注释

### ruby-align
拼音读音的水平位置
- start
- center
- space-between
- space-around


```html
<!-- 如果浏览器不支持ruby注解就会显示rp内的括号 -->
<ruby>
    <rb>一段汉字</rb>
    <rp>（</rp><rt>yi duan han zi</rt><rp>）</rp>
</ruby>
```
```css
ruby {
  ruby-align: space-around;
}
```
### ruby-position
拼音读音的垂直位置
- over 在上方
- under 在下方
- alternate 表示当有多个级别的注释时，ruby在上面和下面交替使用。`只有火狐支持`
- inter-character 当指定时，它在垂直书写模式中表现为 over 。否则，它表示ruby必须放在不同字符之间，以水平文本出现在基的右侧，并迫使ruby注释容器的子元素具有 vertical-rl 书写模式。`有限支持

`