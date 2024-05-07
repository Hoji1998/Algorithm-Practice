function solution(number) {
  let answer = 0;
  const n = number.length;

  // 모든 가능한 세 학생의 조합 생성
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        // 세 학생의 번호 합이 0인지 확인
        if (number[i] + number[j] + number[k] === 0) {
          answer++;
        }
      }
    }
  }

  return answer;
}

