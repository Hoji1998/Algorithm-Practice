function solution(n) {
    
    let strings = String(n);
    let result = [];
    let temp = 0;
    let resultNum = 0;
    //숫자배열로 만듦
    for (let k = 0; k < strings.length; k++) {
        result[k] = parseInt(strings[k]);
    }
    
    //버블정렬
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result.length - i - 1; j++) {
            if (result[j] < result[j + 1]) {
                temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }

    //하나의 정수로 만듦
    for (let i = 0; i < result.length; i++) {
        resultNum += result[i] * (10 ** (result.length - i - 1));
    }
    return resultNum;
}