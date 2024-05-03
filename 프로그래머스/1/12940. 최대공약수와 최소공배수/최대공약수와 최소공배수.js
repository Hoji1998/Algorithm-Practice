function solution(n, m) {
    return [gcd(n, m), (n * m) / gcd(n, m)];
}

function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}