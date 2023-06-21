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
