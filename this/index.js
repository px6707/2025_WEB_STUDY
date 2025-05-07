var o1={
    text:'o1',
    fn:function(){
        console.log('1111', this)
    }
}
var o3 = {
    text:'o3',
    fn:function(){
        let fn = o1.fn
        fn()
    }
}
o3.fn()// window


// 手写apply
Function.prototype.myApply = function (context, args) {
    var  context = context || window
    context.fn = this
    const result = context.fn(...args)
    delete context.fn
    return result
}

// 手写bind
Function.prototype.myBind = function (context, ...args) {
    const self = this;
  return function(...args2){
    return self.myApply(context, [...args, ...args2])
  }
}