## vue3
### vue2的问题
* vue2 单一源码库的方式 vue3 monorepo 的方式
* 性能优化空间 递归遍历对象内部数据劫持
* 大型项目可维护性 不支持ts 需要装饰器 mixmin的使用导致修改成本大



### vue3的优化
1. vue3 monorepo 仓库的方式
2. 移除使用率较低的API 例如filter、不建议使用mixin
3. 打包优化 tree-shaking可以只打包使用的函数
4. 编译优化， 对模版complie的过程中，分析树，对节点打PatchFlag
5. 数据劫持优化 Proxy


### 代码
### 模版编译
1. 词法分析 template==>ast
2. 指令和语法转换  AST 解析区分不同节点 进行不同类型的转化
3. 生成render函数
