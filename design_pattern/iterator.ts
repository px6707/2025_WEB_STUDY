// 迭代器

const obj = {
    key1: "value1",
    key2: 1,
    key3: 2,
    [Symbol.iterator]: function* () {
        yield this.key1
        yield this.key2
        yield this.key3
    }
}

for (let v of obj){
    console.log(v);
}