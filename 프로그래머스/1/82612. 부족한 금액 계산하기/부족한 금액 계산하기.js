function solution(price, money, count) {
    let result = 0;
    for (let i = 1; i <= count; i++) {
        result += i * price;
    }
    result -= money
    return result < 0 ? 0 : result;
}