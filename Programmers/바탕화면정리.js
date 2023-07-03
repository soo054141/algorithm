function solution(wallpaper) {
    const a = wallpaper.findIndex(f => f.includes("#"));
    const b = wallpaper.length - ([...wallpaper].reverse().findIndex(f => f.includes("#")));
    let tmpL = wallpaper[0].length;
    let tmpR = 0;
    
    for(let i = 0; i < wallpaper.length; i++){
        const leftSide = wallpaper[i].indexOf("#");
        const rightSide = wallpaper[i].lastIndexOf("#");
        
        if(leftSide >= 0 && tmpL > leftSide) tmpL = leftSide;
        if(tmpR < rightSide) tmpR = rightSide;
    }
    return [a, tmpL, b, tmpR+1];
}
