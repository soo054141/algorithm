function solution(t, p) {
    const result = [];
    let tempString = "";
    let count = 0;
    
    for(let i = count; i <= t.length - p.length; i++){
        tempString = t.substr(count, p.length);
        if(tempString.length === p.length){
            result.push(tempString);
        }
        tempString = "";
        count++;
    }
    return result.filter((i) => i <= p).length;
}
