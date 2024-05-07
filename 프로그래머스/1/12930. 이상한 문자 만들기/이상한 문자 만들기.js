function solution(s) {
    let strings = s.split(' ');
    let results = '';
    for (let i = 0; i < strings.length; i++) {
        for (let j = 0; j < strings[i].length; j++) {
            results += j === 0 || j % 2 === 0 ? strings[i][j].toUpperCase() : strings[i][j].toLowerCase();
        }
        results += i + 1 !== strings.length ? ' ' : '';
    }
    return results;
}