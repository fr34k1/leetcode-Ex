/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...https://leetcode.com/problems/first-bad-version/
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    
    function re(r,l){
        const m=Math.floor((r+l)/2);
       
        if(isBadVersion(m)){
            
           if(!isBadVersion(m-1)) return m;
            
            return re(r,m-1);
        } 
    
        else{
       
         if(isBadVersion(m+1)) return m+1  
        
            return re(m+1,l);
        }
    }
    
    return function(n) {
       
        return re(0,n);
        
    };
};