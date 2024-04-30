function solution(s) {
    let middleValue = parseInt(s.length / 2);
    return s.length % 2 === 1 ? s[middleValue] : s[middleValue - 1] + s[middleValue];
}