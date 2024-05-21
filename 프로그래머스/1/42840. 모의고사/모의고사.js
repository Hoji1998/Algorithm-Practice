function solution(answers) {
    const numCase = [[1, 2, 3, 4, 5], 
                     [2, 1, 2, 3, 2, 4, 2, 5], 
                     [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
    
    let correctNums = [0, 0, 0];
    
    for (let i = 0; i < answers.length; i++) {
        for (let j = 0; j < numCase.length; j++) {
            correctNums[j] += answers[i] === numCase[j][i % numCase[j].length] ? 1 : 0;
        }
    }
    
    let bestNum = Math.max(...correctNums);
    let result = [];
    
    
    for (let i = 0; i < numCase.length; i++) {
        if (bestNum === correctNums[i]) {
            result.push(i + 1);
        }
    }
    
    return result;
}