 对象查找属性延原型链上查找__proto__查找


 # JavaScript 原型链详解

## 什么是原型链？

原型链是 JavaScript 实现继承的主要方式。每个对象都有一个私有属性 `[[Prototype]]`（在浏览器中通常用 `__proto__` 访问），指向它的原型对象。原型对象也有自己的原型对象，这样就形成了一个原型链，直到某个对象的原型为 `null`。

## 原型链的基本概念

1. **构造函数**：用来创建对象的函数
2. **prototype**：构造函数的属性，指向原型对象
3. **__proto__**：对象的属性，指向该对象的原型
4. **constructor**：原型对象的属性，指向构造函数

## 原型链工作原理

```javascript
// 示例代码
function Animal(name) {
    this.name = name;
}

Animal.prototype.eat = function() {
    console.log(this.name + ' is eating');
};

function Dog(name) {
    Animal.call(this, name);
}

// 建立继承关系
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog = new Dog('Buddy');

访问属性或方法的查找过程：

首先在对象自身属性中查找
如果没找到，就在对象的原型中查找
如果还没找到，就在原型的原型中查找
以此类推，直到找到属性或到达原型链末端（null）

注意事项
避免直接修改 __proto__，使用 Object.create() 或 Object.setPrototypeOf()
合理使用原型链，避免过深的继承层次
注意属性遮蔽（shadowing）现象
理解 this 的绑定与原型链的关系