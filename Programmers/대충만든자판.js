function solution(keymap, targets) {
    const keys = {};
    keymap.forEach((str) => {
        str.split("").forEach((el, idx) =>{
            if(!keys[el]){
                keys[el] = idx+1;
            } else {
                if(keys[el] > idx) keys[el] = idx+1;
            }
        })
    });
    
    const result = targets.map((str) => {
        let count = 0;
        const isAvailable = str.split("").every((el) => {
            if(keys[el]){
                count += keys[el];
                return true;
            }
            return false;
        });
        return isAvailable ? count : -1;
    });
    
    return result;
}
