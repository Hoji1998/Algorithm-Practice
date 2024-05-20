function solution(k, m, score) {
    score.sort((a, b) => b - a);
    let sum = 0;
    for (let i = 0; i < score.length - score.length % m; i = i + m) {
        sum += score[i + m - 1] * m;
    }
    
    return sum;
}