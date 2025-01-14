// 常规方式：每次调用都要判断
function addEvent(element, type, handler) {
    if (element.addEventListener) {
        return element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
        return element.attachEvent('on' + type, handler);
    } else {
        element['on' + type] = handler;
    }
}

// 惰性函数方式  addEvent已经被内部重写，之后addEvent就不会再判断了
function addEvent(element, type, handler) {
    if (element.addEventListener) {
        addEvent = function(element, type, handler) {
            element.addEventListener(type, handler, false);
        };
    } else if (element.attachEvent) {
        addEvent = function(element, type, handler) {
            element.attachEvent('on' + type, handler);
        };
    } else {
        addEvent = function(element, type, handler) {
            element['on' + type] = handler;
        };
    }
    return addEvent(element, type, handler);
}

// 柯里化  fn.length 返回函数的参数个数
const curry = (fn) => {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }
        return (...args2) => curried.apply(this, args.concat(args2));
    };
};

const add = curry((a, b) => a + b);
const add5 = add(5);  // 返回一个新函数

//管道模式
 function pipe(...funs){
    return x=>funs.reduce((pre, next)=>next(pre), x)
 }

 // point-free风格
 // 传统风格
const getNames = people => people.map(person => person.name);

// Point-Free 风格
const getName = person => person.name;
const getNames = map(getName);


// box he 函子
// 假设我们要处理一个可能不存在的用户名

// 传统方式
function getUsername(user) {
    if (user == null) return "Guest";
    return user.name;
}

// 使用函子（Maybe 函子专门处理可能为空的值）
class Maybe {
    constructor(value) {
        this.value = value;
    }

    map(fn) {
        // 如果值为空，直接返回空盒子
        // 如果有值，则执行转换
        return this.value == null 
            ? new Maybe(null) 
            : new Maybe(fn(this.value));
    }

    // 如果盒子为空，返回默认值
    getOrElse(defaultValue) {
        return this.value == null ? defaultValue : this.value;
    }
}

// 使用示例
const user = null;
const username = new Maybe(user)
    .map(u => u.name)
    .getOrElse("Guest");  // 得到 "Guest"

const user2 = { name: "John" };
const username2 = new Maybe(user2)
    .map(u => u.name)
    .getOrElse("Guest");  // 得到 "John"