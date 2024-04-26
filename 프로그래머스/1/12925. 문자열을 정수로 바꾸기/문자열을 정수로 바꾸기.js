function solution(s) {
    let checkSign = false;
    let sign = 0;
    switch (s[0]) {
        case "-":
            checkSign = true;
            sign = -1;
            break;
        case "+":
            checkSign = true;
            sign = 1;
            break;
        default:
            checkSign = false;
            sign = 1;
            break;
    }
    
    let answer = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (i === 0 && checkSign) {
            continue;
        }
        
        answer += sign * parseInt(s[i]) * (10 ** (s.length - i - 1));
    }
    return answer;
}