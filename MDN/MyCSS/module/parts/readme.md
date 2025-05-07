## css 影子节点的part

### ::part()
用来访问自定义节点的part，但只对直接父节点有效，不能选择自定义节点中嵌套的part
```html
<template id="tabbed-custom-element">
  <style type="text/css">
    *,
    ::before,
    ::after {
      box-sizing: border-box;
      padding: 1rem;
    }
    :host {
      display: flex;
    }
  </style>
  <div part="tab active">Tab 1</div>
  <div part="tab">Tab 2</div>
  <div part="tab">Tab 3</div>
</template>

<tabbed-custom-element></tabbed-custom-element>
```
```css
tabbed-custom-element::part(tab) {
  color: #0c0dcc;
  border-bottom: transparent solid 2px;
}

tabbed-custom-element::part(tab):hover {
  background-color: #0c0d19;
  border-color: #0c0d33;
}

tabbed-custom-element::part(tab):hover:active {
  background-color: #0c0d33;
}

tabbed-custom-element::part(tab):focus {
  box-shadow:
    0 0 0 1px #0a84ff inset,
    0 0 0 1px #0a84ff,
    0 0 0 4px rgba(10, 132, 255, 0.3);
}

tabbed-custom-element::part(active) {
  color: #0060df;
  border-color: #0a84ff !important;
}

```

```javascript
let template = document.querySelector("#tabbed-custom-element");
globalThis.customElements.define(
  template.id,
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content);
    }
  },
);

```

### html attr part
以元素中 part 属性名称组成的列表，该列表以空格分隔。通过 Part 的名称，可以使用 CSS 伪元素“::part”来选择 shadow 树中指定元素并设置其样式。

### exportparts
导出影子树中的part名称，用来选择和设置嵌套影子树中的元素。
在css中，shadow dom是一个隔离结构，一般情况下无法访问其中的元素，可以通过part和exportparts来访问。部分对除了直接父节点之外的任何祖先节点都不可见。 exportparts 属性解决了这个限制。

```html
<template id="ancestor-component">
  <nested-component exportparts="part1, part2, part5"></nested-component>
</template>
```
```html
<!-- part导出重命名 -->
<template id="ancestor-component">
  <nested-component
    exportparts="part1:exposed1, part2:exposed2"></nested-component>
</template>

```