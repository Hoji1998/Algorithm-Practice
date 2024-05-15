function solution(k, score) {
    let hallOfFameList = [];
    let result = [];
    for (let i = 0; i < score.length; i++) {
        hallOfFameList.push(score[i]);
        hallOfFameList.sort((a, b) => b - a);
        if (i < k) {
            result.push(hallOfFameList[i]);
            continue;
        }
        hallOfFameList = hallOfFameList.splice(0, k);
        
        result.push(hallOfFameList[hallOfFameList.length - 1]);
    }
    return result;
}