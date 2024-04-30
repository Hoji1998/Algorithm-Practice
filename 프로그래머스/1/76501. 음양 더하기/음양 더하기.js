function solution(absolutes, signs) {
    let result = 0;
    
    for (let i = 0; i < absolutes.length; i++) {
        result += absolutes[i] * (signs[i] ? 1 : -1);
    }
    
    return result;
}