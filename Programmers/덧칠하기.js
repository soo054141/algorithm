function solution(n, m, section) {
    let result = 0;
    let wall = Array(n).fill(1);
    section.forEach((i) =>{
        wall[i-1] = 0;
    })

    for(let i = 0; i < section.length; i++){
        let startIdx = wall.indexOf(0);
        let lastIdx = wall.lastIndexOf(0);
        wall = wall.slice(startIdx, lastIdx+1);
        
        for(let j = 0; j < m; j++){
            if(wall[j] === 0) wall[j] = 1;
        }
        
        if(wall.length > 0) result++;
    }
    return result;
}
