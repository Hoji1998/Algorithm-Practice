function solution(n) {
    for (let i = 1; i <= n; i++) {
        if (i * i === n) {
            return (i + 1) ** 2;
        }
    }
    
    return -1;
}