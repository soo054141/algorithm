//나의 풀이
function solution(s) {
    const myMap = new Map();
    const result = Array.from({length:s.length}).fill(-1);
    
    s.split("").forEach((v, i)=>{
        if(myMap.has(v)){
            const prevIdx = myMap.get(v);
            const getIdx = i - prevIdx;
            result[i] = getIdx;
        }
        myMap.set(v,i)
    })
    
    return result;
}
