function solution(x, n) {
    let result = [];
    
    for (let i = 1; i <= n; i++) {
        result[i - 1] = x * i;
    }
    
    return result;
}