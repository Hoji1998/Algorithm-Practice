function solution(phone_number) {
    let answer = "";
    for (let i = 0; i < phone_number.length; i++) {
        answer += phone_number.length - i <= 4 ? phone_number[i] : "*";
    }
    return answer;
}