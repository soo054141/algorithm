/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let str = x.toString();
  let answer = "";

  for(let i = str.length-1; i > 0; i--){
    if(answer.length === 0 && str[i] === "0"){
      continue;
    } 
    answer += str[i];
  }

  const minus = x < 0 ? true : false;
  if(!minus){
    answer += str[0];
  } else {
    answer = `-${answer}`
  }

  answer = BigInt(answer)
  if(-(2 ** 31) <= answer && answer <= (2 ** 31 -1)){
      return answer;
  } else {
      return 0;
  }
};
