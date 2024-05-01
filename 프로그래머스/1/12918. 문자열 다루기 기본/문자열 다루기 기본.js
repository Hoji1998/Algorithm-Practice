function solution(s) {
    if (s.length !== 4 && s.length !== 6) {return false;}
    for (let i = 0; i < s.length; i++) {
        let isNumber = false;
        for (let j = 0; j < 10; j++) {
            if (parseInt(s[i]) === j) {
                isNumber = true;
            }
        }
        
        if (!isNumber) {return false;}
    }
    
    return true;
}