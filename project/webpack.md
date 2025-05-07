## 工程化webpack

### gulp vs webpack
相同点
满足打包编译需求，第三方依赖引入，自定义模块介入，自动化可监听运行
不同点
gulp 只会按照开发者预定的模块任务流进行工作
webpack深入到代码中，处理资源关系

### webpack的配置
```js
// 初始化
npm init

npm i webpack webpack-cli --save-dev

// 默认打包
npx webpack

// 配位文件
webpack.config.js

pitch loader
// loader的收集顺序和执行顺序

```
基础配置
```js
module.exports={
    entry:'./src/main.js',
    output:{
        filename:'bundle.js',
        path:path.join(__dirname,'dist')
    },
    // production 默认启用内容优化插件，打包速度慢
    //  development 自动优化打包速度，添加调试辅助插件
    mode:'development',
    plugins:[
        new HTMLWebpackplugin({
            template:path.join(__diranme, 'index.html')
        }),
        new CleanWebpackPlugin()
    ],
    // loader 核心能力的扩充，能够识别非js的文件或者代码
    module:{
        rules:[
            {
                test:/\.js$/,
                loader: path.join(__dirname,'loaderA.js'),
            },
             {
                test:/\.js$/,
                loader: path.join(__dirname,'loaderB.js'),
            },
             {
                test:/\.js$/,
                loader: path.join(__dirname,'loaderC.js'),
                options:{
                    name:'loader c name '
                }
            },
            {
                test:/\.js$/,
                loader: path.join(__dirname,'custom_loader.js'),
                options:{
                    presets:[
                        '@babel/preset-env'
                    ]
                }
            }
        ]
    },
    optimization:{
        splitChunks:{
            chunks:'all',
            cacheGroups:{
                // node_modules 分成一个chunk
                vendor:{
                    name:'vendor',
                    test:/[\\/]node_modules[\\/]/,
                    priority:-10
                },
                commons:{
                    name:'commons',
                    // 最小分包
                    minChunks:2,
                    // 优先级
                    priority:5
                }
            }
        }
    }

}
```
### loader
在loader中，使用
```js
// 获取配置选项
const { getOptions } = require('loader-utils')
// 使用 验证参数的有效性
const {validate}=require('schema-utils')
// 参数1 schema 参数2 是传入的参数 参数3 是错误信息，能够影响错误的打印
validate(schema, _options, {
    name:'loaderA'
})

// 当loader中有异步操作时， 获取回调函数
const callback = this.async()
// 如果只是同步简单处理，可以直接返回content
return content
```

loader 有四个执行阶段，使用enforce控制当前loader的执行顺序
1. pre
在所有loader之前执行，用于预处理文件，例如eslint-loader
2. normal
默认类型
3. inline
在导入语句中显示指定loader
使用 ！ 将资源中的loader分开
4. post
在所有loader之后执行，用于最后处理

这四个阶段按照优先级，pre < normal < inline < post 先后执行loader

### pitch
Pitch Loader 是 Webpack loader 的一个特殊执行阶段，每个 loader 都可以有一个 pitch 方法
// 假设有三个 loader：
module: {
    rules: [
        {
            test: /\.js$/,
            use: ['loaderA', 'loaderB', 'loaderC']
        }
    ]
}

// 执行顺序是：
pitch A -> pitch B -> pitch C -> loaderC -> loaderB -> loaderA

如果某个 loader 的 pitch 方法返回了值，则会跳过剩余 loader 的执行
直接进入上一个 loader 的普通执行阶段
这种机制称为"熔断"
```js
// loaderA.js
module.exports = function(content) {
    console.log('normal A');
    return content;
};

module.exports.pitch = function(remainingRequest, precedingRequest, data) {
    console.log('pitch A');
};

// loaderB.js
module.exports = function(content) {
    console.log('normal B');
    return content;
};

module.exports.pitch = function(remainingRequest, precedingRequest, data) {
    console.log('pitch B');
    // 如果这里返回了值
    return "some value";
};

// loaderC.js
module.exports = function(content) {
    console.log('normal C');
    return content;
};

module.exports.pitch = function(remainingRequest, precedingRequest, data) {
    console.log('pitch C');
};
```
正常情况下的执行顺序:
pitch A -> pitch B -> pitch C -> normal C -> normal B -> normal A
如果 loaderB 的 pitch 返回值：
pitch A -> pitch B (返回值) -> normal A
loaderC 的 pitch 和 normal 都不会执行
loaderB 的 normal 也不会执行
直接跳到 loaderA 的 normal


如果loader指定了enforce，则按照优先级倒序执行 post->inline->normal->pre



### webpack 打包流程
1. 初始化阶段 合并配置参数、加载插件
2. 编译阶段 
     - 根据entry找到入口文件
     - 调用buildmodule 开始构建
        1. 使用loader-runner 调用配置的loader对模块进行转译
        2. parse生成ast
        3. 遍历ast，收集依赖
    - 模块递归处理
3. 生成 根据入口和模块依赖关系生成 chunk
4. 输出 chunk生成文件，输出到文件系统


### plugin
1. **初始化阶段**
- `environment`: 环境准备好
- `afterEnvironment`: 环境准备完成
- `initialize`: 初始化完成

2. **编译阶段（compilation）**
- `beforeRun`: 开始正式编译之前
- `run`: 开始编译
- `watchRun`: 监听模式下，开始编译
- `beforeCompile`: 编译开始之前
- `compile`: 创建 compilation 对象之前
- `thisCompilation`: 创建 compilation 对象
- `compilation`: compilation 对象创建完成
- `make`: 从 entry 开始递归分析依赖，准备对每个模块进行构建
- `afterCompile`: 完成编译

3. **模块处理阶段**
- `buildModule`: 模块构建开始
- `normalModuleFactory`: 创建模块工厂
- `contextModuleFactory`: 创建上下文模块工厂
- `beforeResolve`: 解析模块之前
- `afterResolve`: 解析模块之后
- `succeedModule`: 模块构建成功

4. **优化阶段**
- `shouldEmit`: 输出之前判断是否需要输出
- `optimize`: 优化开始
- `optimizeModules`: 模块优化
- `optimizeChunks`: chunk 优化
- `optimizeChunkAssets`: chunk 资源优化
- `optimizeAssets`: 资源优化

5. **输出阶段**
- `emit`: 输出 asset 到 output 目录之前
- `afterEmit`: 输出 asset 到 output 目录之后
- `done`: 编译完成
- `failed`: 编译失败

示例插件：
```javascript
class MyPlugin {
    apply(compiler) {
        // 编译开始
        compiler.hooks.compile.tap('MyPlugin', (compilationParams) => {
            console.log('webpack 编译开始！');
        });

        // 在输出 asset 到 output 目录之前
        compiler.hooks.emit.tap('MyPlugin', (compilation) => {
            console.log('webpack 输出文件之前');
        });

        // 在 compilation 完成时执行
        compiler.hooks.done.tap('MyPlugin', (stats) => {
            console.log('webpack 编译完成！');
        });
    }
}
```

不同的钩子类型：
- tap: 同步钩子
- tapAsync: 异步钩子（callback 方式）
- tapPromise: 异步钩子（Promise 方式）

### webpack 的异步加载
webpack 支持两种异步加载方式
```js
// 使用import 加载
import('./index,js').then(data=>{
    console.log(data)
})

async function getData(){
    const data = await import('./index.js')
    console.log(data)
}
getData()
// 旧语法
require,ensure(['./index.js'], (require)=>{
    const data = require('./index.js')
    console.log(data)
})
```
使用optimization.splitChunks 进行分包
```js

module.exports = {
    optimization:{
        splitChunks:{
            chunks:'all', // 对所有chunk进行分割
            minSize:20000, // 生成的最小体积
            cachaeGroups:{
                vendor:{
                    test:/[\\/]node_modules[\\/]/,
                    priority:-10
                }
                common:{
                    name:'common',
                    minChunks:2, // 最小引用次数，当一个模块被引用2次及以上时，将其分割到common chunk中
                    priority: 5 ， //决定模块打包时多个缓存组之间的优先顺序 当一个模块同时满足多个缓存组的条件时，会优先被打包到优先级高的组中
                }
            }
        }
    }
}
```

### webpack 打包产物
1. 主入口以defalut 形式进行挂载
2. __webpack_module_cacahe__ 模块缓存主存储，模块缓存对象，每个模块都包含在了函数中，提供独立作用域，防止变量污染
3. __webpack_require__ 函数，用于模块加载
4. 异步引入的模块 使用promise 独立的Promise没有放在同步的webpack_module_cache中 ，等待异步模块加载完成