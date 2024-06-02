function solution(X, Y) {
    let countX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let countY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    // X와 Y의 각 숫자의 빈도수를 셉니다.
    for (let i = 0; i < X.length; i++) {
        countX[X[i]]++;
    }

    for (let i = 0; i < Y.length; i++) {
        countY[Y[i]]++;
    }

    let result = "";

    // 가장 큰 숫자부터 확인하면서 결과 문자열을 만듭니다.
    for (let i = 9; i >= 0; i--) {
        let minCount = Math.min(countX[i], countY[i]);
        if (minCount > 0) {
            result += i.toString().repeat(minCount);
        }
    }

    if (result === "") {
        return "-1";
    }

    if (parseInt(result) === 0) {
        return "0";
    }

    return result;
}
