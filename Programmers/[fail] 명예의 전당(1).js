function solution(k, score){
    const topRank = Array(k).fill(0).map((_,i)=>score[i]).sort((a,b)=>a-b);
    const result = Array(k).fill().map(v => Math.min(...topRank))
    
    console.log(topRank, result)
    for(let i = k; i < score.length; i++){
        if(topRank[0] < score[i]){
            topRank.push(score[i]);
            topRank.sort((a,b)=>a-b);
            topRank.shift();
        }
        result.push(topRank[0]);
    }
    return result;
};
