function solution(numbers) {
    numbers.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            let temp = numbers[i] + numbers[j];
            result.push(temp);
        }
    }
    result.sort((a, b) => a - b);
    let filteredResult = result.filter((element, index, array) => {
        let nextElement = array[index + 1];
        return element !== nextElement;
    });
    return filteredResult;
}