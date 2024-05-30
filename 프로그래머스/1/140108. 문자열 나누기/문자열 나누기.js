function solution(s) {
    let firstNum = s[0];
    let firstNumCheck = 0;
    let anotherNumCheck = 0;
    let result = 1;
    for (let i = 0; i < s.length; i++) {
        if (firstNum === s[i]) {
            firstNumCheck++;
        } else {
            anotherNumCheck++;
        }
        
        
        if (firstNumCheck === anotherNumCheck) {
            if (i + 1 >= s.length) { //다음 체크
                break;
            }
            
            result++;
            firstNumCheck = 0;
            anotherNumCheck = 0;
            firstNum = s[i + 1];
        }
    }
    
    return result;
}