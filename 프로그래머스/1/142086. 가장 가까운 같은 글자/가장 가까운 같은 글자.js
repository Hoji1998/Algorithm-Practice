function solution(s) {
    let result = [];
    for (let i = 0; i < s.length; i++) {
        let temp = -1;
        let count = 1;
        for (let j = i - 1; j >= 0; j--) {
            if (s[i] === s[j]) {
                temp = count;
                break;
            }
            count++;
        }
        
        result.push(temp);
    }
    
    return result;
}