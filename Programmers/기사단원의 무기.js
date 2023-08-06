//  1<= number <= 100,000이기에 일반적인 O(N) 시간 복잡도를 가지는 알고리즘보다 
// 더 효율적인 O(sqrt(N)) 시간 복잡도를 가지는 알고리즘을 작성한다
const findDivisors = (number) => {
    const divisors = [];
    const sqrtNumber = Math.sqrt(number);

    for (let i = 1; i <= sqrtNumber; i++) {
        if (number % i === 0) {
          divisors.push(i);
          // number를 i로 나눈 몫도 약수에 추가
          if (i !== number / i) {
            divisors.push(number / i);
          }
        }
      }
    return divisors.length;
}


function solution(number, limit, power) {
    let result = 0;
    for(let i = 1; i <= number; i++){
        const divisorsCount = findDivisors(i);
        if(divisorsCount > limit){
            result += power;
        } else {
            result += divisorsCount;
        }
    }
    return result;
}
