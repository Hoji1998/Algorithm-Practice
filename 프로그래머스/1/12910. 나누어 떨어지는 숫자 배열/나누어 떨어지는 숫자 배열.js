function solution(arr, divisor) {
    let result = [];
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor === 0) {
            result[j] = arr[i];
            j++;
        }
    }
    
    if (j === 0) { 
        result[0] = -1;
        return result;
    }
    
    return result.sort((a, b) => a - b);
}