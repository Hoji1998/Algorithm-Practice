function solution(cards1, cards2, goal) {
    let newCards1 = [];
    let newCards2 = [];
    let card1Index = 0;
    let card2Index = 0;
    
    for (let i = 0; i < goal.length; i++) {
        
        if (cards1[card1Index] === goal[i]) {
            card1Index++;
            continue;
        }
        
        if (cards2[card2Index] === goal[i]) {
            card2Index++;
        }
        else {
            return "No";
        }
    }
    return "Yes";
}