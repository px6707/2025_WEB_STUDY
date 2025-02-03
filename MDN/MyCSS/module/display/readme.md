## display

### display 的多值语法
display 属性允许在其上设置两个值——外部值和内部值。原始的单值语法也是有效的。
```css
.flex1 {
/* 等同于单值语法 display: flex; */
  display: block flex;
  /* 等同于单值语法 inline-flex */
  display: inline flex;
}
```

|单值|多值
|---|---|
|block|block flow|
|flow-root| block flow-root|
|inline|inline flow|
|inline-block|inline flow-root|
|flex|block flex|
|inline-flex|inline flex|
|grid|block grid|
|inline-grid|inline grid|