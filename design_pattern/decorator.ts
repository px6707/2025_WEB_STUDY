// 装饰器
const obj = {
    foo(){
        console.log('foo')
    }
}

function barDecorator(){
    obj.bar = function(){
        console.log('bar')
    }
    return obj
}

const decoratedBar = barDecorator()
// 给bar额外添加函数
decoratedBar.bar()



function sayHiDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;
    descriptor.value = function(...args:any[]){
        console.log('before say hi')
        const result = originalMethod.apply(this, args)
        console.log('after say hi')
        return result
    }
    return descriptor
}
function classDecorator(extral:string){
    return function(constructor: typeof Person) {
        console.log(extral)
        console.log('classDecorator')
        return constructor
    }
}
// 属性装饰器
function propertyDecorator(target: any, propertyKey: string) {
    // target: 对于实例属性，是类的原型对象；对于静态属性，是类的构造函数
    // propertyKey: 属性的名称
}
// 参数装饰器
function parameterDecorator(target: any, propertyKey: string, parameterIndex: number) {
    // target: 对于实例方法，是类的原型对象；对于静态方法，是类的构造函数
    // propertyKey: 方法的名称
    // parameterIndex: 参数在函数参数列表中的索引
}

@classDecorator('hello')
class Person {
    @propertyDecorator
    name: string = "example";
    constructor(name: string) {
        this.name = name
    }
    @sayHiDecorator
    sayHi(name: string): string {  // 明确指定返回类型
        console.log('hi', name);
        return `Hi, ${name}!`;     // 返回一个字符串
    }

    greet(@parameterDecorator name: string) {
        return `Hello, ${name}!`;
    }
}
