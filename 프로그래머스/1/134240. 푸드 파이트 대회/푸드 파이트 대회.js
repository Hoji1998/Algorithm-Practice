function solution(food) {
    let calculateFood = food.map(element => {
        return element % 2 !== 0 ? element - 1 : element;
    });
    
    let result = '';

    for (let i = 0; i < calculateFood.length; i++) {
        if (calculateFood[i] === 0) {
            continue;
        }
        
        for (let j = 0; j < calculateFood[i] / 2; j++) {
            result += i;
        }
    }
    
    result += '0' + result.split('').reverse().join('');
    return result;
}