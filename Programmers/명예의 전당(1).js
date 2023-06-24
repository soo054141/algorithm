//다시 푼 풀이
function solution(k, score){
    const topRank = [];
    const result = [];
    
    for(let i = 0; i < score.length; i++){
        if(i < k){
            topRank.push(score[i]);
            topRank.sort((a,b) => a-b);
        } else {
            if(topRank[0] < score[i]){
                topRank.push(score[i]);
                topRank.sort((a,b) => a-b)
                topRank.shift();
            }
        }
        result.push(topRank[0]);
    }
    return result;
}

//오답 : k일까지 출연한 가수의 점수인 score가 최저점이 아닐 수 있다는 점을 간과하여 틀린 풀이
// function solution(k, score){
//     const topRank = Array(k).fill(0).map((_,i)=>score[i]).sort((a,b)=>a-b);
//     const result = Array(k).fill().map(v => Math.min(...topRank))

//     for(let i = k; i < score.length; i++){
//         if(topRank[0] < score[i]){
//             topRank.push(score[i]);
//             topRank.sort((a,b)=>a-b);
//             topRank.shift();
//         }
//         result.push(topRank[0]);
//     }
//     return result;
// };
