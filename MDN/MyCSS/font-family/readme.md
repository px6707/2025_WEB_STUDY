## Web 字体

通过@font-face 声明字体
```css
@font-face {
    font-family: 'MyFont';  指定引用字体的名称
    src: url('font.eot'); 兼容IE9，必须单独写一个src
    /* IE6-IE8 需要使用?#iefix 后缀 而不支持embedded-opentype 的浏览器会跳过eof源*/
    src: url('font.eot?#iefix') format('embedded-opentype'),
        url('font.woff2') format('woff2'),
        url('font.woff') format('woff'),
        url('font.ttf') format('truetype'),
        url('font.svg#font') format('svg');
}
```
解释：
1. 当有多个src时，后面的会覆盖前面的，但IE9会优先使用不带format的src
2. IE9-IE8 需要使用?#iefix 后缀 而使用url('font.eot?#iefix') format('embedded-opentype')
3. 其他浏览器通过format使用自己可用的格式，例如woff2


大多数现代浏览器支持WOFF或者WOFF2 web open font format version1、2 开放字体格式版本1、2
低版本IE只支持 EOF embedded open font 嵌入式开放类型