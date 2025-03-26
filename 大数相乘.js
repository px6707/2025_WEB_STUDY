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

// 1. 大数加法
function addLargeNumbers(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let result = '';
    
    while (i >= 0 || j >= 0 || carry > 0) {
        const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
        const digit2 = j >= 0 ? parseInt(num2[j]) : 0;
        const sum = digit1 + digit2 + carry;
        
        carry = Math.floor(sum / 10);
        // 拼接字符串
        result = (sum % 10) + result;
        
        i--;
        j--;
    }
    
    return result;
}