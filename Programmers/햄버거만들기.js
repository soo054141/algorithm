function solution(ingredient) {
    const temp = []
    let startIndex = -1;
    let str = ingredient.join('');
    let maxResult = Math.floor(ingredient.filter((s) => s === 1).length / 2)
    if(maxResult === 0) return 0;
    let result = 0;
    
    for(const el of ingredient) {
        temp.push(el)
        while(true) {
            if(temp.length < 4 || temp[temp.length-1] !== 1) break;
            if(temp.slice(temp.length-4,temp.length).join('') === '1231'){
                result++;
                maxResult--;
                if(maxResult <= 0) return result
                temp.pop()
                temp.pop()
                temp.pop()
                temp.pop()
            } else {
                break;
            }
        }
    }
}
