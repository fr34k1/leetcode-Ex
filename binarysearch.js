/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    /*
    let l=0;
    let r=nums.length;
    
    
    while(l<=r){
        const mid = Math.floor((l+r)/2);
        if(nums[mid]==target) return mid;
        
        if(nums[mid]>target){
            r=mid-1;
        }else{
            l=mid+1;
        }
    }
    
    return -1;*/
    return bsRec(nums,0,nums.length,target);
};


var bsRec=function(nums,l,r,target){
    
    if(l<=r){
        const mid = Math.floor((r+l)/2);
        
        if(nums[mid]==target) return mid
        
        
        if(nums[mid]<target) return bsRec(nums,mid+1,r,target);
        
        else return bsRec(nums,l,mid-1,target);
        
    
    }
    
     return -1;

}