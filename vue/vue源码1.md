## vue源码1

vue2 的源码入口(带编译器版本)在 src/platforms/web/entry-runtime-with-compiler.ts 
之所以是这个入口，是因为可以看到package.josn中的打包
```json
"build": "node scripts/build.js",
```
运行了build.js,通过查看build.js文件，可以看到
```javascript
let builds = require('./config').getAllBuilds()
build(builds)
```
打包文件是通过getAllBuilds返回的，因此再查看getAllBuilds函数，可以看到它返回了一个builds配置的对象，其中含有不同类型的打包入口和输出
```javascript
const builds = {
    'full-prod': {
        entry: resolve('web/entry-runtime-with-compiler.ts'),
        dest: resolve('dist/vue.min.js'),
        format: 'umd',
        env: 'production',
        alias: { he: './entity-decoder' },
        banner
    },
}
```
因此web/entry-runtime-with-compiler.ts就是带编译器的入口
