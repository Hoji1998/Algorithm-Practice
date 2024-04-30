function solution(numbers) {
    let strings = String(numbers);
    let result = 0;
    for (let i = 0; i < 10 ; i++) {
        result += strings.indexOf("" + i) === -1 ? i : 0;
    }
    return result;
}