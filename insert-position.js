/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * https://leetcode.com/problems/search-insert-position/submissions/
 */
 var searchInsert = function(nums, target) {
    return bsRec(nums,0,nums.length-1,target);
};



var bsRec=function(nums,l,r,target){
    
    if(l<=r){
        const mid = Math.floor((r+l)/2);
        
        if(nums[mid]==target) return mid;
        console.log(r,l)
        if(r==l) return nums[r]>target ? r : r+1;
                
        if(nums[mid]<target) return bsRec(nums,mid+1,r,target);
        
        else return bsRec(nums,l,mid-1,target);
        
        return mid;
    }else{
        return l;
    }
    
     

}