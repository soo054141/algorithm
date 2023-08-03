function solution(survey, choices) {
    const scores = {R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0};
    let result = "";
    
    for(let i = 0; i < survey.length; i++){
        if(choices[i] !== 4){
            if(choices[i] <= 3){
                scores[survey[i][0]] += 3 - choices[i] + 1;
            } else {
                scores[survey[i][1]] += choices[i] - 4
            }
        }
    }
    
    scores.R >= scores.T ? result += "R" : result += "T";
    scores.C >= scores.F ? result += "C" : result += "F";
    scores.J >= scores.M ? result += "J" : result += "M";
    scores.A >= scores.N ? result += "A" : result += "N";
    
    
    return result;
}
