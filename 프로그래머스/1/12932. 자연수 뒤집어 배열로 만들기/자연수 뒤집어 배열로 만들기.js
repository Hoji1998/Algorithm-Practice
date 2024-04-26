function solution(n) {
    var answer = [];
    let strings = String(n);
    let j = 0;
    
    for (let i = strings.length - 1; i >= 0; i--, j++) {
        answer[j] = parseInt(strings[i]);
    }
    return answer;
}