function solution(n, m, section) {
    let current = section[0];
    let result = 1;
    for (let i = 1; i < section.length; i++) {
        if (current + m - 1 < section[i]) {
            current = section[i];
            result++;
        }
    }
    
    return result;
}