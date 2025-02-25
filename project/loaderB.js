module.exports.pitch=function(){
    console.log('ptich A')
}
module.exports=function(content, map, meta){
    console.log('loaderB')
    const callback = this.async()
    // 复杂或异步转换使用callback
    setTimeout(() => {
        callback(null, content, map, meta)
    }, 1000);
}