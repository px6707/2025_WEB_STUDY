html 加载的过程

async|defer 的作用
默认情况下，HTML解析遇到script标签，会暂停解析HTML，立即下载并执行该脚本。该脚本执行完成后，再继续解析HTML，会阻塞页面渲染
async标签的作用是,HTML解析和脚本下载是并行的。但脚本下载完成后立即执行，执行过程会暂停解析HTML，直到脚本执行完成后继续解析HTML。多个async脚本执行顺序不一定，谁先下载完成谁先执行。适用于独立的脚本，例如广告和统计代码

defer标签的作用是,HTML解析和脚本下载是并行的。脚本会在HTML全部解析完成后DOMContentLoaded事件触发后执行，多个defer脚本会按照在文档中的顺序执行，适用于需要操作DOM或依赖其他脚本的场景

使用建议：

1. 如果脚本需要操作 DOM 或依赖其他脚本，使用 defer
2. 如果脚本完全独立，使用 async
3. 如果脚本很小且需要尽快执行，可以不使用属性
4. 将 <script> 标签放在 </body> 之前也是一种常用的优化方式

注意事项：
1. async 和 defer 仅对外部脚本文件有效（带 src 属性的）
2. 内联脚本（直接写在 HTML 中的脚本）不受这两个属性影响
3. 现代浏览器都支持这两个属性，但在 IE9 以下只支持 defer

模块加载方案
1. CommonJS
Nodejs 采用的模块加载方案，require()导入，module.exports或者exports导出
2. AMD  Async Module Definition
浏览器端的异步模块加载方案，使用Requiresjs实现
define(function(require, exports, module){
    return{

    }
})

// 代码兼容CommonJS和AMD
;(
    function(root, factory){
        if(typeof define === 'function' && define.amd){
            define(['jquery'], factory)
        }else if(typeof require === 'function){
            moduel.exdports = factory(require('jquery'))
        }else{
            // 浏览器全局变量
            root.myModule = factory(root.jQuery)
        }

    }(
        typeof self !== 'undefined'?self:this,
        function($){
            function updateElement(selector, text){
                $(selector).text(text)
            }
            return {
                updateElement:updateElement
            }
        }
    )
)
3. UMD
通用模块定义，兼容AMD和CommonJS，可以在Nodejs和浏览器端使用
4. CMD seajs模块方案
写法
define(function(require, exports, module){
    require('xxx module')
    return{

    }
})
5. ES6
ECMAScript 官服标准模块化方案
使用import 和 export