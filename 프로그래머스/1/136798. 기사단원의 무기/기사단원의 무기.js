function solution(number, limit, power) {
    let result = 0;
    for (let i = 1; i <= number; i++) {
        let temp = 0;
        for (let j = 1; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                temp += j === i / j ? 1 : 2;
            }
            
        }
        
        result += temp > limit ? power : temp;
    }
    
    return result;
}