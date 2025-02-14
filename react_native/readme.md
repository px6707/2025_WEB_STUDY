## react navive

react 语法书写app

### webview

android/ios/swift/cotlin ---> webview 嵌入式的浏览器js engine + js render（使用jsbridge和外层沟通）----> HTML、js、css(可以使用不同的框架vue、reacnt)



### react native
android/ios/swift/cotlin ---> js core（v8） shadow tree、native module、js bridge  ---> react native

由于没有渲染引擎，没有DOM对象，所以写的react代码生成的UI需要映射成IOS、Android的UI。还是需要jsbridge进行链接。

基于react的体制，diff、reconciler都不需要重新开发一遍了
RN部分，相当于把react-dom改写
基于react-dom定义好节点的CRUD是什么API

RN的缺点：
js core执行时只是js代码，和原生通信还是要走JSON异步序列化。排队，对连续的手势处理就有问题。耗时，阻塞通信


### React 和React Native之间的差异
1. RN标签 View Text 所有的文本必须用Text包裹
2. RN没有class style 可以使用style属性或者StyleSheet.create({context:{}})
3. RN中默认布局flex direction column
4. 获取表单控件值的方式 event.nativeEvent.text
5. view默认没有滚动，滚动使用scrollview

### 屏幕像素比

- RN中使用的是无单位的数字（Unitless Numbers）
- 这些数字代表的是设备独立像素（DIPs）
- 不使用px、em、rem等Web单位

```javascript
const styles = StyleSheet.create({
  container: {
    width: 100,    // 100个逻辑像素
    height: 200,   // 200个逻辑像素
    margin: 10,    // 10个逻辑像素
  }
});
```

DPR = 物理像素 / CSS像素（逻辑像素）

- 物理像素：设备实际的像素点数
- CSS像素：开发中使用的逻辑像素

```javascript
// JavaScript中获取
const dpr = window.devicePixelRatio;
```