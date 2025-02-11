## scoping 范围
CSS scoping模块定义了CSS的作用域和封装机制
CSS样式要么是全局作用域，要么是投影树的作用域。
全局作用域样式应用于与选择器匹配的节点树中的所有元素，包括树中的自定义元素，但不应用于组成每个自定义元素的影子树。
在影子树的CSS中，选择器不会选择树之外的元素。

### :host
:host CSS 伪类选择内部使用了该 CSS 的影子 DOM（shadow DOM） 的影子宿主（shadow host）——换句话说，这允许你从其影子 DOM 内部选择自定义元素。
> 备注： 这不适用于在影子 DOM 之外使用。
```css
/* 选择影子根宿主 */
:host {
  font-weight: bold;
}

```
### host()
选择包含使用这段 CSS 的 Shadow DOM 的影子宿主,但前提是该函数的参数与选择的阴影宿主相匹配。
> 备注： 在 shadow DOM 之外使用时，这没有任何效果。

也就是说`给不同的属性，可以应用不同的样式`
```css
/* 选择阴影根元素，仅当它与选择器参数匹配 */
:host(.special-custom-element) {
  font-weight: bold;
}

```

### :host-context()
firefox 不支持
也是匹配影子宿主，可以从其影子 DOM 内部选择自定义元素——但前提是作为函数参数的选择器与影子宿主的祖先在 DOM 层次结构中的位置匹配。

> 备注： 在 shadow DOM 之外使用时，这没有任何效果。
也就是说，`影子dom放在不同的位置就有不同的样式`
```css
/* 选择影子根宿主，仅当它是给定的选择器参数的后代 */
:host-context(h1) {
  font-weight: bold;
}

:host-context(main article) {
  font-weight: bold;
}

/* 当 .dark-theme 类应用于文档 body 时，将段落文本颜色从黑色更改为白色 */
p {
  color: #000;
}

:host-context(body.dark-theme) p {
  color: #fff;
}

```

### ::slotted()
伪元素用于选定那些被放在 HTML 模板中的元素
```html
<template id="person-template">
  <div>
    <h2>Personal ID Card</h2>
    <slot name="person-name">NAME MISSING</slot>
    <ul>
      <li><slot name="person-age">AGE MISSING</slot></li>
      <li><slot name="person-occupation">OCCUPATION MISSING</slot></li>
    </ul>
  </div>
</template>

```
```javascript
customElements.define('person-detail', 
    class extends HTMLElement {
        constructor() {
            super();

            const template = document.getElementById('person-template');
            const templateContent = template.content;
            const shadowRoot = this.attachShadow({mode: 'open'});
            
            const sytle = document.createElement('style');
            style.textContent = 
                "div { padding: 10px; border: 1px solid gray; width: 200px; margin: 10px; }" +
                "h2 { margin: 0 0 10px; }" +
                "ul { margin: 0; }" +
                "p { margin: 10px 0; }" +
                "::slotted(*) { color: gray; font-family: sans-serif; } " +
                "::slotted(span) {text-decoration: underline;} ";
           shadowRoot.appendChild(style);
           shadowRoot.appendChild(templateContent.cloneNode(true));
        }
    }
)
```
```html
<!-- person-detial 的使用，插槽放在自定义元素汇总 -->
 <person-details>
  <p slot="person-name">Wonder Woman</p>
  <span slot="person-age">Immortal</span>
  <span slot="person-occupation">Superhero</span>
</person-details>

<person-details>
  <p slot="person-name">Malala Yousafzai</p>
  <span slot="person-age">17</span>
  <span slot="person-occupation">Activist</span>
</person-details>

<person-details>
  <span slot="person-age">44</span>
  <span slot="not-a-slot-name">Time traveller</span>
  <p slot="person-name">Dr. Who</p>
</person-details>

```