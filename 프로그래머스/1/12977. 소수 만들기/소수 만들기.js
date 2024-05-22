function solution(nums) {
    let result = 0;
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let temp = nums[i] + nums[j] + nums[k];
                let count = 0;
                for (let l = 1; l <= temp; l++) {
                    count += temp % l === 0 ? 1 : 0;
                }
                
                result += count === 2 ? 1 : 0;
            }
        }
    }
    
    return result;
}