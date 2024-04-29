function solution(x) {
    let strings = (x + "").split("");
    let total = 0;

    for (let i = 0; i < strings.length; i++) {
        total += parseInt(strings[i]);
    }
    
    return x % total === 0;
}