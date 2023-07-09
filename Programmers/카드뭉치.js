function solution(cards1, cards2, goal) {
    let result = true;
    let idx = 0;
    
    while(goal.length !== idx){
        if(cards1[0] === goal[idx]){
            cards1.shift();
            idx++;
        } else if(cards2[0] === goal[idx]){
            cards2.shift();
            idx++;
        } else {
            result = !result;
            break;
        }
    }
    return result ? "Yes" : "No"
}
