function solution(babbling) {
    let result = 0;
    let strings = ["aya", "ye", "woo", "ma"];
    for (let i = 0; i < babbling.length; i++) {
        let finalJudge = true;
        let temp = -1;
        for (let k = 0; k < babbling[i].length; k++) {
            let judge = false;
            
            
            for (let j = 0; j < strings.length; j++) {
                if (temp === j) {
                    continue;
                }
                
                if (babbling[i].indexOf(strings[j], k) === k) {
                    temp = j;
                    k += strings[j].length - 1;
                    judge = true;
                    break;
                }
            }
            
            if (!judge) {
                finalJudge = false;
                break;
            }
        }
        
        result += finalJudge ? 1 : 0;
    }
    
    return result;
}