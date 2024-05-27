function solution(lottos, win_nums) {
    let result = 7;
    let zerosCount = 0;
    
    for (let i = 0; i < lottos.length; i++) {
        zerosCount += lottos[i] === 0 ? 1 : 0;
        for (let j = 0; j < win_nums.length; j++) {
            result -= lottos[i] === win_nums[j] ? 1 : 0;
        }
        
    }
    
    let maximum = result > 6 ? 6 : result;
    let least = result - zerosCount > 6 ? 6 : result - zerosCount;
    
    let answer = [least, maximum];
    
    
    return answer;
}