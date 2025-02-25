const {getOptions} = require('loader-utils')
const {validate} = require('schema-utils')  
const util = require('util')
const babel = require('@babel/core')

const schema = require('loader-schema')

const _transform = util.promisify(babel.transform)

module.exports = function loader(content, map, meta) {
    // 获取webpack中此loader的参数
    const _options = getOptions(this)||{}
    validate(schema, _options, {
        name:'custom_loader'
    })

    const callback = this.async()

    _transform(content, _options)
        .then(({code, map})=>{
            callback(null, code, map, meta)
        })
        .catch((err)=>{
            callback(err)
        })
}