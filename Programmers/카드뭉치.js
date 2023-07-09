function solution(cards1, cards2, goal) {
    // 다시 푼 풀이
    for(const i of goal){
        if(cards1[0] === i){
            cards1.shift();
        } else if(cards2[0] === i){
            cards2.shift();
        } else {
            return "No";
        }
    }
    return "Yes";

    // 첫 제출 풀이
    // let result = true;
    // let idx = 0;
    
    // while(goal.length !== idx){
    //     if(cards1[0] === goal[idx]){
    //         cards1.shift();
    //         idx++;
    //     } else if(cards2[0] === goal[idx]){
    //         cards2.shift();
    //         idx++;
    //     } else {
    //         result = !result;
    //         break;
    //     }
    // }
    // return result ? "Yes" : "No"
}
