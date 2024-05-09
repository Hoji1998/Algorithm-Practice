function solution(sizes) {
    let result = 0;
    let w = 0;
    let h = 0;
    
    for (let i = 0; i < sizes.length; i++) {
        let temp = sizes[i][0];
        if (temp < sizes[i][1]) {
            sizes[i][0] = sizes[i][1];
            sizes[i][1] = temp;
        }
        
        w = sizes[i][0] > w ? sizes[i][0] : w;
        h = sizes[i][1] > h ? sizes[i][1] : h;
    }
    result = w * h;
    
    return result;
}