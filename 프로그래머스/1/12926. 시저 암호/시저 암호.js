function solution(s, n) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        let nextChar = '';
        if (s[i] === ' ') {
            nextChar = ' ';
        }
        else if (s[i] === s[i].toUpperCase()) {
            let temp = s[i].charCodeAt() + n - 'Z'.charCodeAt();
            nextChar = temp <= 0 
                ? String.fromCharCode(s[i].charCodeAt() + n) 
                : String.fromCharCode('A'.charCodeAt() + temp - 1);
        } else {
            let temp = s[i].charCodeAt() + n - 'z'.charCodeAt();
            nextChar = temp <= 0 
                ? String.fromCharCode(s[i].charCodeAt() + n) 
                : String.fromCharCode('a'.charCodeAt() + temp - 1);
        }
        
        result += nextChar;
    }
    
    return result;
}