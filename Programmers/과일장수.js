function solution(k, m, score) {
    let result = 0;
    score.sort((a,b)=>b-a);

    let tmp = [];
    for(let i = 0; i < score.length; i++){
        if(tmp.length < m){
            tmp.push(score[i])
        } else {
            result += Math.min(...tmp) * m;
            tmp = [score[i]];
        }
    }
    if(tmp.length === m){
        result += Math.min(...tmp) * m;
    }
    return result;
}
