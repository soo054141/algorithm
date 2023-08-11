function solution(babbling) {
    let count = 0;
    babbling.forEach((str) => {
        if(str.replace(/aya|ye|woo|ma/g , '') === "") count++
    })
    return count;
}
