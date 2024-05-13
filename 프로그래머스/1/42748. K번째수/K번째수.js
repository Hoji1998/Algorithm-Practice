function solution(array, commands) {
    let result = [];
    for (let i = 0; i < commands.length; i++) {
        //if (commands[i][0] === commands[i][1]) {
        //    result.push(array[commands[i][0] - 1]);
        //    continue;
        //}
        
        let sliceArray = array.slice(commands[i][0] - 1, commands[i][1]);
        sliceArray.sort((a, b) => a - b);
        result.push(sliceArray[commands[i][2] - 1]);
    }
    return result;
}