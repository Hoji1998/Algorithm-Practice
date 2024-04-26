function solution(n)
{
    let sum = 0;
    let strings = String(n);
    for (let i = 0; i < strings.length; i++) {
        sum += parseInt(strings[i]);
    }
    return sum;
}