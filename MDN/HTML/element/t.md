### table
表格

### tbody
表格的主体

> 如果表格包含 <thead> 块（语义上标识表头行），那么 <tbody> 块必须紧随它。

### td
表格的数据单元格
- colspan : 表格单元格的列跨度
- rowspan : 表格单元格的行跨度
- headers : 建立表格单元格（td）与其对应表头（th）之间的关联关系

### th
表格内的表头单元格
- abbr 表头单元格内容的替代标签，
- colspan : 表格单元格的列跨度
- rowspan : 表格单元格的行跨度
- headers : 建立表格单元格（td）与其对应表头（th）之间的关联关系
- scope : 表格单元格的作用域，提高表格的语义化
    - row 表头关联所属行
    - col 表头关联所属列
    - rowgroup 表头属于一个行组，并与其中所有单元格关联
    - colgroup 表头属于一个列组，并与其中所有单元格关联


### thead
定义一组表格列头


### tr
表格的行


### tfoot
表格各个列的汇总行

```html

<table>
  <caption>
    Front-end web developer course 2021
  </caption>
  <thead>
    <tr>
      <th scope="col">Person</th>
      <th scope="col">Most interest in</th>
      <th scope="col">Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Sarah</th>
      <td>JavaScript frameworks</td>
      <td>29</td>
    </tr>
    <tr>
      <th scope="row">Karen</th>
      <td>Web performance</td>
      <td>36</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="2">Average age</th>
      <td>33</td>
    </tr>
  </tfoot>
</table>
```


### template
内容在加载页面时不会呈现，但随后可以在运行时使用 JavaScript 实例化。


### textarea
文本域
- cols 控件宽度
- rows 控件高度
- dirname 文本方向
- maxlength 最大长度
- minlength 允许用户输入的最小长度
- spellcheck 拼写检查
    - true 检查
    - false 不进行拼写检查
    - default 遵循默认行为
- wrap 指示控件应如何对表单提交时的值进行换行、
    - hard 在提交表单时，会在视觉换行处自动插入实际的换行符，必须指定cols属性
    - soft 在提交表单时，不会在换行处插入实际的换行符 所有文本会作为一个连续的字符串提交
    - off 文本不会自动换行 textarea 会显示水平滚动条 只有用户手动按下 Enter 键时才会换行

### time
时间

- datetime 该属性表示此元素的时间和/或日期
```html
<time datetime="2018-07-07">July 7</time>
```

### title
标题浏览器的标题栏或标签页上
<title>元素始终在页面的 <head> 块内使用。

### track
文本轨元素
作为媒体元素 <audio> 和 <video> 的子元素使用。例如在视频上叠加字幕或隐藏式字幕，或与音频轨一起显示。
轨道格式为 WebVTT 格式（.vtt 文件）
```html
<video controls src="/media/cc0-videos/friday.mp4">
  <track default kind="captions" srclang="en" src="/media/examples/friday.vtt" />
  Download the
  <a href="/media/cc0-videos/friday.mp4">MP4</a>
  video, and
  <a href="/media/examples/friday.vtt">subtitles</a>.
</video>

```

- default 应启用该轨道
- kind 文本轨的使用方式默认的类型是 subtitles
    - subtitles 字幕提供观众无法理解的内容的翻译。字幕可能包含额外的内容，通常是额外的背景信息
    - captions 隐藏式字幕提供音频的文字记录，并可能包含翻译 它可能包含重要的非语言信息，例如音乐提示或音效
    - chapters 章节标题用于用户浏览媒体资源时使用。
    - metadata 由脚本元素使用的轨道。对用户不可见
- label 用户可读的文本轨标题，浏览器在列出可用文本轨时使用。
- src url
- srclang 语言标识

### tt
电报文本元素 已弃用
