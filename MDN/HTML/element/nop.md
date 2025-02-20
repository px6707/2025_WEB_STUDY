### nav
导航

### noscript
定义了在页面上脚本类型不支持或浏览器关闭脚本时插入的HTML部分
```html
<noscript>
    <p>您的浏览器已禁用 JavaScript，某些功能可能无法正常工作。</p>
    <p>请启用 JavaScript 以获得最佳体验。</p>
</noscript>
```

### object
表示一个引入的外部资源，<object> 主要用于嵌入特殊的插件内容，比如 Flash（现已过时）或其他专有格式的内容。在现代 Web 开发中，<object> 的使用场景已经很少了。
- data 合法的url作为资源地址
- form 关联的form
- height 高度
- width 宽度
- name 名称
- type MIME 类型
- usemap 关联的图像映射


### ol
有序列表
- start 列表编号起始值
- reversed 逆序
- type 编号类型 a A i I 1



### optgroup
为<select> 元素中的选项创建分组。
- label 分组标签
- disabled 禁用整个分组



### option
select 的选项，可以作为optgroup、datalist的子元素
- disabled 禁用该选项
- value 选项值
- label 选项标签
- selected 默认选中

### output
表示计算或用户操作的结果
- for 其他影响计算结果的标签的ID，可以多个
- form 关联的form，如果未指明，则output必须是form的后代
- name

```html
<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
    <input type="range" name="b" value="50" /> +
    <input type="number" name="a" value="10" /> =
    <output name="result"></output>
 </form>

<!-- 可以使用js控制 -->
<form>
    <label>选择颜色：
        <input type="color" id="colorPicker">
    </label>
    <output name="colorValue" for="colorPicker"></output>
    
    <script>
        const picker = document.getElementById('colorPicker');
        const output = document.querySelector('output[name="colorValue"]');
        
        picker.addEventListener('input', () => {
            output.value = picker.value;
            output.style.backgroundColor = picker.value;
        });
    </script>
</form>
```


### p
段落

### params
弃用


### picture
通过包含零或多个 <source> 元素和一个 <img> 元素来为不同的显示/设备场景提供图像版本。浏览器会选择最匹配的子 <source> 元素，如果没有匹配的，就选择 <img> 元素的 src 属性中的 URL。然后，所选图像呈现在<img>元素占据的空间中。

```html
<picture>
    <source srcset="b.png" media="(min-width: 400px)">
    <source srcset="c.png" media="(min-width: 800px)">
    <!-- 可以处理不同格式 -->
    <source type="image/webp" srcset="image.webp">
    <img src="a.png" />
</picture>

<!-- 结合img的srcset和sizes属性，可以实现更灵活的响应式设计 -->
<picture>
    <!-- WebP 格式源 -->
    <source type="image/webp" 
            srcset="small.webp 300w,   <!-- WebP格式，实际宽度300px -->
                   medium.webp 600w,   <!-- WebP格式，实际宽度600px -->
                   large.webp 900w">   <!-- WebP格式，实际宽度900px -->
    
    <!-- JPG 格式源（后备） -->
    <img srcset="small.jpg 300w,      <!-- JPG格式，实际宽度300px -->
                 medium.jpg 600w,      <!-- JPG格式，实际宽度600px -->
                 large.jpg 900w"       <!-- JPG格式，实际宽度900px -->
         sizes="(max-width: 600px) 300px,  <!-- 视口<=600px时，图片显示宽度为300px -->
                600px"                      <!-- 其他情况，图片显示宽度为600px -->
         src="fallback.jpg"           <!-- 最后的后备方案 -->
         alt="图片">
</picture>
```
浏览器的选择过程：

1. 首先判断格式支持：
    - 如果浏览器支持 WebP，使用 WebP 源（第一个 source）
    - 如果不支持 WebP，使用 JPG 源（img 标签）
2. 然后根据视口和 sizes 选择合适尺寸：
    - 当视口宽度 ≤ 600px 时：图片将显示为 300px 宽浏览器会选择最适合 300px 显示的图片版本
    - 当视口宽度 > 600px 时： 图片将显示为 600px 宽 浏览器会选择最适合 600px 显示的图片版本
3. 具体场景示例： 
    A. 支持 WebP 的现代浏览器：
        - 视口 400px：选择 small.webp (300w)
        - 视口 800px：选择 medium.webp (600w)
    B. 不支持 WebP 的浏览器：
        - 视口 400px：选择 small.jpg (300w)
        - 视口 800px：选择 medium.jpg (600w)
    C. 完全不支持响应式图片的旧浏览器：
        使用 fallback.jpg

### pre
文本按照原文件中的编排显示，空白封等丢回显示出来



### progress
进度条
- max 最大值
- value 当前值