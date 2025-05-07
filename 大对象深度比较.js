// worker.js
self.onmessage = function(e) {
    const { obj1, obj2 } = e.data;
    const result = deepCompare(obj1, obj2);
    self.postMessage(result);
};

function deepCompare(obj1, obj2, cache = new Map()) {
    // 实现深度比较逻辑
        // 基本类型比较
        if (obj1 === obj2) return true;
        if (obj1 == null || obj2 == null) return false;
        if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return false;
    
        // 检查缓存，避免循环引用
        if (cache.has(obj1)) {
            return cache.get(obj1) === obj2;
        }
    
        // 存入缓存
        cache.set(obj1, obj2);
    
        // 特殊对象处理
        if (Array.isArray(obj1) && Array.isArray(obj2)) {
            if (obj1.length !== obj2.length) return false;
            return obj1.every((item, index) => 
                deepCompare(item, obj2[index], cache)
            );
        }
    
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);
    
        if (keys1.length !== keys2.length) return false;
    
        return keys1.every(key => 
            Object.prototype.hasOwnProperty.call(obj2, key) &&
            deepCompare(obj1[key], obj2[key], cache)
        );
}

// main.js
class WorkerComparer {
    constructor() {
        this.worker = new Worker('worker.js');
    }

    compare(obj1, obj2) {
        return new Promise((resolve) => {
            this.worker.onmessage = (e) => {
                resolve(e.data);
            };

            this.worker.postMessage({ obj1, obj2 });
        });
    }

    terminate() {
        this.worker.terminate();
    }
}