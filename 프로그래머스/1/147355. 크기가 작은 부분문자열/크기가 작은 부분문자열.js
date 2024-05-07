function solution(t, p) {
    let result = 0;
    for (let i = 0; i < t.length - p.length + 1; i++) {
        let temp = parseInt(t.slice(i, i + p.length));
        result += temp <= p ? 1 : 0;
    }
    return result;
}