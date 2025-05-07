
// pitching 阶段
// remainingRequest: 剩余需要处理的 loader 请求字符串 
// precedingRequest: 之前已经处理过的 loader 请求字符串 
// data 用于在 pitch 阶段和 normal 阶段之间传递数据的对象
module.exports.pitch=function(remainingRequest, precedingRequest, data){
    console.log('ptich A')
}
module.exports=function(content, map, meta){
    console.log('loaderA')
    this.callback(null, content, map, meta)
}