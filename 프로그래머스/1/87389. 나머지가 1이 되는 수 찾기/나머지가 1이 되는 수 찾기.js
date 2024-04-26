function solution(n) {
    let result = 0;
    for (let i = n - 1; i >= 2; i--) {
        if (n % i === 1) {
            result = i;
        }
    }
    
    return result;
}