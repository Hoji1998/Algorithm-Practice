
function solution(n) {
    let result = '';
    while (n !== 0) {
        let remainder = n % 3; // 나머지 계산
        result = remainder + result; // 나머지를 결과의 앞에 추가
        n = Math.floor(n / 3); // 다음 연산을 위해 몫을 구함
    }
    
    let reverseNum = String(result).split('').reverse().join('');
    result = 0;
    
    let decimal = 0;
    let power = 0;

    // 문자열을 뒤에서부터 순회하면서 계산
    for (let i = reverseNum.length - 1; i >= 0; i--) {
        let digit = parseInt(reverseNum[i]); // 각 자리의 숫자를 정수로 변환
        decimal += digit * Math.pow(3, power); // 각 자리의 값에 해당하는 십진법 수를 더함
        power++; // 자리 수 증가
    }
    
    return decimal
}