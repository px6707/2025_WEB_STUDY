## vite

利用esm的模块化，以及开发和生产的区分，实现了快速打包

1. 开发环境下基于ESM，进行暴露模块，对于开发环境，简化取消了模块编译
2. 缓存机制，通过强缓存、协商缓存，没有变化的文件在本地读取


在开发模式下， 使用esbuild将commonjs、umd包转换成ESM，合并内部模块，减少请求数量。添加了TS转移，jsx战役，开发实时转译。以及生成模式下代码压缩，css压缩


rollup用在了生产环境下智能分包、动态导入处理，公共模块提取，css代码分割，静态资源处理和优化，资源路径重写，多种输出格式，不同部署目标的构件配置。用于插件系统
### 性能优化
webpack
- v3-》v4升级 优化了配置速度和运行速度
    1. 零配置的概念，不再强制依赖webpack.config.js做配置，添加默认项，简化配置工作
    2. 区分开发和编译mode，两个mode都省略了各自不必要的工作
    3. 配置内置化 一部分由外部插件的功能内置化
- v4 -》 v5升级 优化配置粒度、包大小、编译速度
    1. 持久化缓存 - 构建结果持久化缓存
    2. 资源模块 优化取消了资源文件引入loader的必要性，而是直接与路径关联优化配置
    3. 打包优化， tree-shaking splitchunk 精细化分包策略
- webpack插件
     1. 缓存加速 cache-loader 指向性的针对一些耗时工作进行缓存，terser-webpack-plugin
     2. 使用purifycss-webpack-plugin 去除无用css
     3. optimize-css-assets-webpack-plugn css压缩
     4. clean-webpack-plugin 自动清理无用文件