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