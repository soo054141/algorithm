/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numMap = new Map();

    for(let i = 0; i < nums.length; i++){
      const com = target - nums[i];

      if(numMap.has(com)){
        return [numMap.get(com), i]
      } else {
        numMap.set(nums[i], i);
      }
    }

    return numMap;
};
