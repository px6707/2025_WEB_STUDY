const multiplied = (a, b) => {
    if(a === '0' || b === '0') return '0';
    let m = a.length, n = b.length;
    let res = Array(m + n).fill(0);
    for(let i = m - 1; i >= 0; i--) {
        for(let j = n - 1; j >= 0; j--) {
            let mul = (a[i] - '0') * (b[j] - '0');
            let p1 = i + j, p2 = i + j + 1;
            let sum = mul + res[p2];
            res[p2] = sum % 10;
            res[p1] += Math.floor(sum / 10);
            console.log(res)
        }
    }
    while(res[0] === 0) {
        res.shift();
    }
    return res.join('')
}
console.log(multiplied('6', '12345'))