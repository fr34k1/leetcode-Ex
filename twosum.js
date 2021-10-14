/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * https://leetcode.com/problems/two-sum/
 */
 var twoSum = function(nums, target) {
    
    for(let index=nums.length-1;index>=0 ; index--){ 
        
        for(let j=index-1;j>=0 ; j--){
            if(nums[index]+nums[j]==target) return [j,index];
        }
    } 
}
