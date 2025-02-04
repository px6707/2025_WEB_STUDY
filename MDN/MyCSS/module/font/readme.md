## 字体

### font
字体相关属性的简写形式，包括 font-family font-size font-stretch font-style font-variant font-weight line-height

如果 font 指定为字体相关的属性的简写：

- 必须包含以下值：
    - <font-size>
    - <font-family>
- 可以选择性包含以下值：
    - <font-style>
    - <font-variant>
    - <font-weight>
    - <font-stretch>
    - <line-height>
- font-style、font-variant 和 font-weight 必须在 font-size 之前

- font-variant 只可以使用 CSS 2.1 定义的值，即 normal 和 small-caps

- font-stretch 必须是单个关键字值

- line-height 必须跟在 font-size 后面，由“/”分隔，例如“16px/3”

- font-family 必须最后指定


### font-feature-settings
控制OpenType字体中的高级印刷工鞥呢
- normal 文本使用默认设置布局
- <feature-tag-value>

```css
/* 基本语法 */
font-feature-settings: "feat" <integer>;

/* 例如 */
font-feature-settings: "smcp" 1;    /* 开启小型大写字母 */
font-feature-settings: "liga" 0;    /* 关闭连字 */
font-feature-settings: "swsh" 2;    /* 使用第二种花体变体 */
/* "liga" - 标准连字
"smcp" - 小型大写字母
"onum" - 老式数字
"tnum" - 等宽数字
"frac" - 分数 */
```

> 备注： Web 开发者应该尽可能的使用类似 font-variant 这样的短标记属性或者相关的速记标识属性等，类似 font-variant-ligatures, font-variant-caps, font-variant-east-asian, font-variant-alternates, font-variant-numeric or font-variant-position.

该属性是一个比较偏底层的功能接口，用于解决由于没有其他方法去访问和设置 OpenType 字体某些特性而无法解决一些特殊功能需求。

特别需要注意的是，该 CSS 属性不应该用来开启大写字母转换。



### font-kerning
设置是否使用字体中存储的字据信息
- normal 必须应用字距信息
- none 禁用字距信息
- auto 浏览器决定是否使用字体字距


### font-language-override
控制在指定的语言中使用特定的字形，绝大部分浏览器不支持
- normal 指示浏览器使用适合 lang 属性指定的语言的字体字形。这是默认值。
- string 指示浏览器使用适合该字符串指定的语言的字体字形。该字符串必须与 OpenType 语言系统中的语言标签相匹配。例如，"ENG "是英语，"KOR "是韩语。

### font-optical-sizing
设置文本渲染是否针对不同的尺寸进行了优化。
- none 不会修改字形形状获得最佳浏览效果
- auto 会修改字形获得最佳浏览效果


### font-size-adjust
定义字体大小应取决于小写字母，而不是大写字母。在字体较小时，字体的可读性主要由小写字母的大小决定，通过此选项即可进行调整。
```css
/* 作用是定义小写字母的大小应该为 7px 高（0.5 × 14px）。 */
font-size: 14px;
font-size-adjust: 0.5;

```
font-size-adjust 的工作原理是这样的：
调整后的字体大小 = 原始字体大小 * (指定的 adjust 值 / 实际字体的 aspect 值)
关键点：
- font-size-adjust 实际上是通过调整整体的 font-size 来实现的
- 当你设置一个很大的值（如10）时，为了达到让小写字母高度与字体大小的比例为10，整个字体都会被放大
- 这会导致所有字符（包括大写字母）都变大

### font-stretch
可从字体中选择正常、压缩或扩展的字体外观。
- normal 正常
- semi-condensed、condensed、extra-condensed 和 ultra-condensed 指定比普通字体更紧凑的字体，其中 ultra-condensed 为最紧凑的字体。
- semi-expanded、expanded、extra-expanded 和 ultra-expanded 指定比普通字体更扩展的字体，其中 ultra-expanded 为扩展程度最大的字体。
- <percentage>

### font-synthesis
控制浏览器可以合成（synthesize）哪些缺失的字体，粗体或斜体。
大多数标准西方字体包含斜体和粗体变体，但许多新颖（novelty）的字体不包括这些。用于中文、日文、韩文和其他语标文字（logographic script）的字体往往不含这些变体，同时，从默认字体中生成、合成这些变体可能会妨碍文本的易读性。在这些情况下，可能最好关闭浏览器默认的 font-synthesis 字体合成特性。
- none 不合成粗体字型（typeface）或斜体字型。
- weight 如果需要的话，可以合成粗体字型。
- style 如果需要的话，可以合成斜体字型。

### font-style
- italic 斜体
- oblique 倾斜 可以添加倾斜角度 oblique 40deg

>区别： 设计方式不同：
italic（斜体）是经过专门设计的字体变体
oblique（倾斜体）是对原字体进行机械倾斜变形
字形特点：
italic 可能包含特殊的字符设计，比如：
字母 'a' 可能变成单层结构
某些字母可能有特殊的衬线或装饰
oblique 仅仅是将原字体倾斜，字形结构不变
使用场景：
italic 通常用于衬线字体（如 Times New Roman）
oblique 通常用于无衬线字体（如 Arial）

### font-variant
font-variant 属性是font-variant-caps, font-variant-numeric, font-variant-alternates, font-variant-ligatures, font-variant-east-asian等属性的简写。你也可以使用简写 font 设定font-variant在 CSS Level 2 (Revision 1) 中的值（即normal 或 small-caps）。

文字变体相关

### font-variant-numeric
 属性控制数字、分数和序号标记的替代字形的使用。
 1. normal 特性均不开启
 2. ordianal 启用序数形式显示。对序号标记强制启用特殊字形，如英文中的 1st，2nd，3rd，4th，意大利文中的 1a。
 3. slashed-zero 启用区分零显示。强制使用带有斜杠的 0；常用于区分 O 和 0。
 4. diagonal-fractions 启用斜角分数显示。使分子和分母变成像下标字，并用变长的斜线分隔。等同于 OpenType 特性 frac。
 5. stacked-fractions 启用标准分数显示。使分子在上，分母在下，并用水平线分隔。等同于 OpenType 特性 afrc。1/2。
 。。。

 