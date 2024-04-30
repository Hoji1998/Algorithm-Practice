function solution(arr) {
    let minNum = Math.min(...arr);
    let minIndex = arr.indexOf(minNum);
    arr.splice(minIndex, 1);
    return arr[0] === undefined ? [-1] : arr;
}