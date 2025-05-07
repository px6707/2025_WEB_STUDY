### const
不允许重复声明
```javascript
 //在es5中实现常亮
 Object.defineProperty(window, 'PI', {
    value: 3.14,
    writable: false,
    enumerable: false,
    configurable: false
  });
```
### 块级作用域
let\const 取消了变量提升

暂时性死区

let 和 const
对象引用类型，使用const时，我们一般修改对象的属性，不会改变对象的引用，所以使用const
```javascript
// 禁止修改object的值
const obj = {
    name: 'zhangsan'
    info: {
        age: 18
    }
}
Object.freeze(obj)
obj.name = 'lisi'
console.log(obj.name) // zhangsan
obj.info.age = 20
console.log(obj.info.age) // 20

// 递归冻结引用类型
function deepFreeze(obj){
    if(obj && typeof obj === 'object' && !Object.isFrozen(obj)){
        Object.freeze(obj)
        Object.keys(obj).forEach(key => {
            deepFreeze(obj[key])
        })
    }
    return obj
}

```

### 箭头函数
箭头函数没有独立作用域，箭头函数无法构造类
没有自己的this，继承外部的this
```javascript

### class

```javascript
class Person {
    constructor(name, age, address) {
        this.name = name
        this.age = age
        let _address = address

        // 私有属性
        this.getAddress = () => {
            return _address
        }
    }
    say() {
        console.log(`my name is ${this.name}, my age is ${this.age}`)
    }
    get name() {
        return this._name
    }
    set name(value) {
        this._name = value
    }
}
const p = new Person('zhangsan', 18)
p.say() // my name is zhangsan, my age is 18

// class 的类型
typeof Person // 'function'

// class 的 prototype
// say 实际上是 Person.prototype.say
// 属性是挂载在实例上的，方法是挂载在 prototype 上的

// es10 中的私有属性
class Person {
    #address
    constructor(name, age, address) {
        this.name = name
        this.age = age
        this.#address = address
    }
}

// 静态方法
class Person {
    static say() {
        console.log('hello')
    }
}
// es5 中的静态方法
function Persion(){}
Person.say = function () {
    console.log('hello')
}

// 继承
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age)
        this.grade = grade
    }
}


// 继承不写constructor的默认行为

class Person{
    constructor(name){
        this.name = name
    }
}
class Student extends Person{
    say(){
        console.log(this.name)
    }
}
var aa = new Student("aaaa")
aa.say()// 打印aaaa
// 如果子类没有显式定义 constructor，JavaScript 引擎会自动为子类添加一个默认的 constructor，并在其中调用 super()。这个过程是自动的。

```

### 解构

### proxy
```javascript
const obj = {
    name: 'zhangsan'
}
const proxy = new Proxy(obj, {
    get(target, key) { 
        console.log(`get ${key}`)
        return target[key]
    },
    set(target, key, value) {
        console.log(`set ${key} to ${value}`)
        target[key] = value
    }
})
proxy.name = 'lisi'
console.log(proxy.name) // lisi
```

### reflect
```javascript
const obj = {
    name: 'zhangsan'
}
const proxy = new Proxy(obj, {
    get(target, key) {
        console.log(`get ${key}`)
        return target[key]
    },
    set(target, key, value) {
        console.log(`set ${key} to ${value}`)
        target[key] = value
    }
})
proxy.name = 'lisi'
console.log(proxy.name) // lisi
```