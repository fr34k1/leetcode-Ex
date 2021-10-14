/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 *@link https://leetcode.com/problems/word-search2/
 */


 var exist =function(board, word) {
    for (const row in board) {
        for(const col in board[row]){
            //itearate until we find the first character concidence in the grid
            if(board[row][col]==q[0]){
                if(checkRecursive(board,q,Number(row),Number(col),new Set())) return true; 
            } 
        }
    }
    return false;
};

function checkRecursive(board,word,row,col,list){
    
    //if there are not more nodes that means the sequence is in the matrix
    if(word.length==0) return true;
    
    //validate col and row  
    if(row>board.length-1 || col>board[0].length-1 || row <0 || col <0) return false;
    
    //if is already en the list return false
    if(list.has(row+""+col)) return false;   
    
    const [h,...rest]=word;
    //if the head is in the board
    if(h!= board[row][col]) return false;
    
    //adding to the list 
    list.add(row+""+col)

    //checking right node
    if(checkRecursive(board,rest,row,col+1,list))return true
    //checking down node
    if(checkRecursive(board,rest,row+1,col,list))return true
    //checking left node
    if(checkRecursive(board,rest,row,col-1,list))return true
    //checking up node
    if(checkRecursive(board,rest,row-1,col,list))return true

    //if no more posibilities to check out that means you have to backtrack to check anothers neigbors
    //then delete from the list
    list.delete(row+""+col);
    
    //return false if theres no more posibles ways to check out
    return false;    
}