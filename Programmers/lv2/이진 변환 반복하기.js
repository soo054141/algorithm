function solution(s) {
    let changed = s === "1" ? 0 : 1;
    let count = 0;
    
    while(s !== "1"){
        const idx = s.indexOf("0");
        if(idx !== -1){
            s = s.replace(0,"");
            count++;
        } else {
            s = (s.length).toString(2);
            changed++;
        }
    }
    return [changed, count]
}
