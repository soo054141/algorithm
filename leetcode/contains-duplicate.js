/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const numSet = new Set(nums);
    return numSet.size !== nums.length
};

// 처음 푼 풀이
// var containsDuplicate = function(nums) {
//     const numMap = new Set();

//     for(let i = 0; i < nums.length; i++){
//         if(numMap.has(nums[i])){
//             return true;
//         } else {
//             numMap.add(nums[i])
//         }
//     }
//     return false;
// };
