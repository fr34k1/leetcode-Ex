/**
 * Definition for singly-linked list.
 */
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  
}

/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
https://leetcode.com/problems/add-two-numbers/submissions/
*/
var addTwoNumbers = function(l1, l2) {
  
  const results =new ListNode(0,null);
  
 // console.log(results)
  sum(results,l1,l2,0);
  
  return results
  
};


function sum(results,node1,node2,ad){
  
  if(node1!==null || node2!==null){
      
      if(node1==null) node1=new ListNode(0,null);
      if(node2==null) node2=new ListNode(0,null);
  
      const r=node1.val+node2.val+ad;
      let d = 0;
      if(r>=10){
          results.val=r%10;
           d=1;
          if(node1.next==null) results.next=new ListNode(d,null)
      }else{
          
          results.val=r;
      }
      
      if(node1.next !==null || node2.next!==null) results.next =new ListNode(0,null)
      
      sum(results.next,node1.next,node2.next,d)
  }
  
}