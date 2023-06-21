//https://school.programmers.co.kr/learn/courses/30/lessons/176963

function solution(name, yearning, photo) {
    const result = Array.from({length:photo.length}).fill(0)
    
    for(let i = 0; i < photo.length; i++){
        let count = 0;
        photo[i].map((el, i) => {
            const idx = name.indexOf(el)  
            if(idx !== -1){
                count += yearning[idx];
            }
        })
        result[i] = count;
    }
    return result;
}

//다른 사람의 풀이
//map+reduce로 바로 리턴, yearing[name.indexOf(b)]값이 undefined이면 0점을 던져줌
function solution2(name, yearning, photo) {
    return photo.map((v) => v.reduce((a,b) => a += yearning[name.indexOf(b)] ?? 0 ,0));
}
