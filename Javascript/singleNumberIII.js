/* Input: nums = [1,2,1,3,2,5]
Output: [3,5]
Explanation:  [5, 3] is also a valid answer. */

let singleNumberIII=(arr)=>{
    result = [];
    arr.sort();
    console.log(arr);
    //[1,1,2,2,3,5]
    compare(arr);
    function compare(arr){
        if(arr[0] ===arr[1]){            
            arr.splice(0,2);
            // we're deleting two elements starting at 0 index          
        }
        else{
            result.push(arr[0]);
            arr.shift();
            // we are deleting the first element at index 0
        }
        return result;
    }    
}

x = singleNumberIII([1,2,1,3,2,5]);


function singleNumberIII(arr){
    result = [];
    arr.sort();
    if(arr[0]!=arr[1]){
        result.push(arr[0]);
    }
    if(arr[arr.length-1]!=arr[arr.length-2]){
        result.push(arr[arr.length-1]);
    }
    for(i=1;i<arr.length-1;i++)
        {if(arr[i-1]!=arr[i] && arr[i]!=arr[i+1]){
            result.push(arr[i]);
        }  
        }
    
    return result;
}

console.log(singleNumberIII([1,2,1,3,2,5]));