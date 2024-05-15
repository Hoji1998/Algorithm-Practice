function solution(a, b, n) {
    let filledBottle = 0;
    let emptyBottle = n;
    let result = 0;
    
    do {
        filledBottle = parseInt(emptyBottle / a) * b;
        result += filledBottle;
        emptyBottle = emptyBottle % a + filledBottle;
    } while (emptyBottle >= a);
    
    return result;
}