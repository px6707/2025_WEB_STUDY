var a = 1;
console.log(a);
var a = 2;
console.log(a);
// 等价
var a;
a = 1;
console.log(a);// 1
a = 2;
console.log(a);// 2


console.log(b);
var b=1
// 等价
var b;
console.log(b);// undefined
b=1


d()
var d = function () {
    console.log('d');
}
// 等价
var d;
d()// 报错
d = function () {
    console.log('d');
}


console.log(foo);
foo()
var foo=10
// foo()// 报错
console.log(foo)
function foo(){
    console.log('this is foo')
}
console.log(foo)

// 等价
function foo () { //函数声明比var更早提升，函数声明优先
    console.log('foo');
}
var foo;
console.log(foo)
foo()
foo = 10
// foo()// 报错
console.log(foo)
console.log(foo)




// 作用域嵌套
var color = 'blue'
function changeColor() {
    var color = 'red'
    console.log(color) 
    function changeColorAgain(){
        var color = 'yellow'
        console.log(color)
    }
    changeColorAgain()
}
changeColor()
console.log(color)



var arr = []
for( var i = 0; i < 5; i++ ){
    arr[i] = function () {
        console.log(i)
    }
}
arr.forEach(i=>i())

// es5的方法打印0-4
var arr = []
for( var i = 0; i < 5; i++ ){
    // arr[i] = (function (i) { 
    //     return function () {
    //         console.log(i)
    //     }
    // })(i)
    (function (i) {
        arr[i] = function () {
            console.log(i)
        }
    })(i)
}
arr.forEach(i=>i())