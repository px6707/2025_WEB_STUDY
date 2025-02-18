// 计算属性模式

const rect = {
    length: 10,
    width: 5,
    get area() {
        return this.length * this.width
    }
}


// 面积通过长宽计算
const area = rect.area