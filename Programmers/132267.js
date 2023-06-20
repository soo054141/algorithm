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

//다른 사람의 풀이
solution = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b
