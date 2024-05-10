function solution(s) {
    let mixNumber = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5,
                    six: 6, sevent: 7, eight: 8, nine: 9 };
    let resultNum = '';
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) {
            resultNum += s[i];
        } else {
            let tempNum = '';
            let increaseLoopValue = 0;
            switch (s[i]) {
                case 'z':
                    tempNum = '0';
                    increaseLoopValue = 3;
                    break;
                case 'o':
                    tempNum = '1';
                    increaseLoopValue = 2;
                    break;
                case 't':
                    if (s[i + 1] === 'w') {
                        tempNum = '2';
                        increaseLoopValue = 2;
                    } else {
                        tempNum = '3';
                        increaseLoopValue = 4;
                    }
                    break;
                case 'f':
                    tempNum = s[i + 1] === 'o' ? '4' : '5';
                    increaseLoopValue = 3;
                    break;
                case 's':
                    if (s[i + 1] === 'i') {
                        tempNum = '6';
                        increaseLoopValue = 2;
                    } else {
                        tempNum = '7';
                        increaseLoopValue = 4;
                    }
                    break;
                case 'e':
                    tempNum = '8';
                    increaseLoopValue = 4;
                    break;
                case 'n':
                    tempNum = '9';
                    increaseLoopValue = 3;
                    break;
            }
            resultNum += tempNum;
            i += increaseLoopValue;
        } 
    }
    return parseInt(resultNum);
}