## react

行为驱动型，调用函数this.setState、dispatch,enqueueSetState,shceduleUpdateOnFiber 



### othern
#### npm run eject
执行后会将所有配置文件暴露出来，这是一个不可逆的操作，一旦执行就无法回退。
- 暴露项目的所有配置文件（webpack、Babel、ESLint等）
- 将这些配置从 react-scripts 中分离出来
- 将依赖添加到项目的 package.json 中
- 创建配置文件到项目的 config/ 目录
- 生成构建脚本到项目的 scripts/ 目录
1. 何时使用
    - 需要自定义 webpack 配置时
    - 需要添加特殊的 Babel 插件时
    - 需要修改底层构建工具时
    - 需要完全控制项目配置时
