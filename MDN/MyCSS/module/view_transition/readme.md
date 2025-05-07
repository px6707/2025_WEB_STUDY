## view transition 视图过度
允许开发人员在文档内或跨文档的不同状态之间创建动画转换。
View Transitions API 提供了一种机制，可以在更新 DOM 内容的同时，轻松地创建不同 DOM 状态之间的动画过渡。同时还可以在单个步骤中更新 DOM 内容。

### 视图的过度过程
1. 当调用 document.startViewTransition() 时，API 会截取当前页面的屏幕截图。
2. 接下来，调用传递给 startViewTransition() 的回调函数，即 displayNewImage，这会导致 DOM 发生更改。当回调函数成功运行时，ViewTransition.updateCallbackDone Promise 兑现，允许你响应 DOM 更新。
3. API 会捕获页面的新状态并实时展示。
4. API 构造了一个具有以下结构的伪元素树：
`
::view-transition
└─ ::view-transition-group(root)
   └─ ::view-transition-image-pair(root)
      ├─ ::view-transition-old(root)
      └─ ::view-transition-new(root)
`
5. 旧页面视图的 opacity 从 1 过渡到 0，而新视图从 0 过渡到 1，这就是默认的交叉淡入淡出效果。
6. 当过渡动画结束时，ViewTransition.finished Promise 兑现，你可以响应它进行一些操作。

### view-transition-name
火狐不支持
为选中元素提供一个独特的标识名称，，并使其参与与根视图过渡分开的视图过渡——或者如果指定了 none 值，则不参与任何视图过渡。
```css
view-transition-name: header;
```


### @view-transtion
选择在当前文档和目标文档中进行视图转换。
```css
@view-transition {
  navigation: auto;
}
```

### navigation
- auto 参与导航时，文档会经历一个视图转换，前提是导航是同源的，没有跨域重定向，其 navigationType 为 traverse 、 push 或 replace 。在 push 或 replace 的情况下，导航必须由与页面内容交互的用户发起，而不是由浏览器UI特性发起。
- none 文档不会进行视图转换。

### ::view-transition
火狐不支持
表示视图过渡叠加层的根元素，它包含所有视图过渡且位于所有其他页面内容的顶部。
在视图过渡期间，::view-transition 包含在相关的伪元素树中，如视图过渡过程中所述。它是该树的顶级节点，并且有一个或多个 ::view-transition-group 子节点。

### ::view-transition-image-pair
表示一个视图过渡的旧视图状态和新视图状态的容器——即过渡前和过渡后的状态。
在视图过渡期间，::view-transition-image-pair 包含在相关的伪元素树上，。它只能是 ::view-transition-group 的子节点。并且可以有一个 ::view-transition-new 或一个 ::view-transition-old 子节点，亦或是两者都有。
```css
::view-transition-image-pair(<pt-name-selector>) {
  /* ... */
}

```
- * 使伪元素选择器匹配所有视图过渡组。
- root 使伪元素选择器匹配由 UA 创建的默认 root 视图过渡组，该组用于包含整个页面的视图过渡，这意味着任何未通过 view-transition-name 属性分配给特定视图过渡组的元素。
- <custom-ident>使伪元素选择器匹配（通过 view-transition-name 属性将 <custom-ident> 分配给元素而创建的）特定视图转换组。


### view-transition-group
表示单个视图过渡组。它只能是 ::view-transition 的子节点，并且有一个 ::view-transition-image-pair 子节点。
```css
::view-transition-group(<pt-name-selector>) {
  /* ... */
}

```
### view-transition-new
表示视图过渡的新视图状态——即过渡后新视图的实时表示。它只能是 ::view-transition-image-pair 的子节点，并且它不会有任何子节点。
```css
::view-transition-new(<pt-name-selector>) {
  /* ... */
}

```

### view-transition-old
表示视图过渡的旧视图状态——即过渡前旧视图的静态屏幕截图。
前提是有一个旧视图状态需要表示。它只能是 ::view-transition-image-pair 的子节点，并且它不会有任何子节点。

它是一个可替换元素，因此可以使用 object-fit 和 object-position 等属性进行操作。它的自然尺寸等于内容的大小。

```css
::view-transition-old(<pt-name-selector>) {
  /* ... */
}

```



