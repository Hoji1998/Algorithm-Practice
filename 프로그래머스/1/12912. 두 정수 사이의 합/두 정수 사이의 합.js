function solution(a, b) {
    var answer = 0;
    let small, big;
    small = a - b > 0 ? b : a;
    big = small === a ? b : a;
    
    for (let i = small; i <= big; i++) {
        answer += i;
    }
    return answer;
}