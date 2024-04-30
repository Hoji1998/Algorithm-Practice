function solution(num) {
    if (num === 1)
        return 0;
    
    let taskNum = 1;
    let resultNum = num;
    while (taskNum <= 500) {
        resultNum = resultNum % 2 === 0 ? resultNum / 2 : resultNum * 3 + 1;
        
        if (resultNum === 1)
            return taskNum;
        
        taskNum++;
    }
    
    return -1;
}