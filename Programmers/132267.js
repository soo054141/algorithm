function solution(a, b, n) {
    let bottle = n;
    let changed = 0;
    
    while(bottle >= a){
        const getCoke = Math.floor(bottle/a) * b;
        const restCoke = bottle % a;
        changed += getCoke;
        bottle = (restCoke + getCoke); 
    }
    return changed;   
}
