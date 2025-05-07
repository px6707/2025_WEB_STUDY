function myNew(func, ...params){
    var obj = {}
    obj.__proto__ = func.prototype
    var result = func.apply(obj, params)
    return typeof result === 'object'&&result !== null ? result : obj
}


// es5继承
function Animal(){
    this.age = 1
}
Animal.prototype.eat = function(){
    console.log('animal eat')
}
Animal.prototype.sleep = function(){
    console.log('animal sleep')
}
function Dog(){

}

Dog.prototype.eat = function(){
    console.log('dog eat')
}
Dog.prototype.__proto__ = new Animal()

var dog = new Dog()
console.log(dog.age) // dog.age
dog.eat()
dog.sleep()

// 创建一个新对象，继承指定原型
function myCreate(proto, propertiesObject) {
    if (typeof proto !== 'object' && proto !== null) {
        throw TypeError('Object prototype may only be an Object or null');
    }
    
    // 创建一个临时构造函数
    function F() {}
    // 设置原型
    F.prototype = proto;
    // 创建新实例
    const obj = new F();
    
    // 如果有额外的属性描述对象
    if (propertiesObject !== undefined) {
        Object.defineProperties(obj, propertiesObject);
    }
    
    return obj;
}