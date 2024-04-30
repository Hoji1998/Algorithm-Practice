function solution(s) {
    let upperCases = "";
    let result = "";
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        if (char === char.toUpperCase()) {
            upperCases += char;
        }
    }
    
    upperCases.split("").sort().join("");
    
    return s.split("").sort().reverse().join("");
}