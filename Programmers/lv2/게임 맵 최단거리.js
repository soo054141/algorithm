function solution(maps) {
    const maxX = maps.length;
    const maxY = maps[0].length;
    const goalX = maxX - 1;
    const goalY = maxY - 1;
    const dx = [-1,1,0,0];
    const dy = [0,0,-1,1];

    const isVaild = (x, y) => {
        return x >= 0 && y >= 0 && x < maxX && y < maxY;
    }
    
    const queue = [];
    queue.push([0,0,1]);
    
    while(queue.length > 0){
        const [x,y,pos] = queue.shift();
        
        if(x === goalX && y === goalY){
            return pos;
        }
        
        for(let i = 0; i < 4; i++){
            const nx = x + dx[i];
            const ny = y + dy[i];
            if(isVaild(nx,ny) && maps[nx][ny] === 1){
                queue.push([nx,ny,pos+1]);
                maps[nx][ny] = 0;
            }
        }
    }
    return -1;
}
