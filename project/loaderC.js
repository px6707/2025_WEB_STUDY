
const {validate}=require('schema-utils')
const schema=require('./cSchema')
const {getOptions} = require('loader-utils')

module.exports.pitch=function(){
    console.log('ptich A')
}
module.exports=function(content, map, meta){
    const _options = getOptions(this)||{}
    
    validate(schema, _options, {
        name:'loaderC'
    })
    console.log(`loaderC${_options.name}`)
    // 简单同步转换使用 return
    return content
}