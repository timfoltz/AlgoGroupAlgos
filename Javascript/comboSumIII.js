// https://leetcode.com/problems/combination-sum-iii/

// 216. Combination Sum III
// Medium
// Find all valid combinations of k numbers that sum up to n such that the following conditions are true:

// Only numbers 1 through 9 are used.
// Each number is used at most once.
// Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.

// Input: k = 3, n = 7
// Output: [[1,2,4]]
// Explanation:
// 1 + 2 + 4 = 7
// There are no other valid combinations.

// Example 2:
// Input: k = 3, n = 9
// Output: [[1,2,6],[1,3,5],[2,3,4]]
// Explanation:
// 1 + 2 + 6 = 9
// 1 + 3 + 5 = 9
// 2 + 3 + 4 = 9
// There are no other valid combinations.

// Example 3:
// Input: k = 4, n = 1
// Output: []
// Explanation: There are no valid combinations. [1,2,1] is not valid because 1 is used twice.

// Example 4:
// Input: k = 3, n = 2
// Output: []
// Explanation: There are no valid combinations.

// Example 5:
// Input: k = 9, n = 45
// Output: [[1,2,3,4,5,6,7,8,9]]
// Explanation:
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45 
// ​​​​​​​There are no other valid combinations.

// Have a good day everyone!


/* (1,2,3,4,5,6,7,8,9); n = 10; 
k = 4; n =10
i = 0 => start with number 1, check with next i with number 2, get next i with number 3..., 
until we get the base case : difference between n and (k-1) numbers */




let combinationSums=(k,n)=>{
    var result = [];
    const goThrough = (idx, arr, sum) => {
        if(sum>n){
            return;
        }
            if(arr.length === k){
                if(sum === n){
                    result.push([...arr])
                }
                return;
            }
            for(let i = idx; i<10; i++){
                // idx is a utility function that traverse thro properties on objects and arrays
                arr.push(i);
                sum +=i;
                goThrough(i+1, arr, sum);
                arr.pop(i);
                sum -=i;
            }
        }
        goThrough(1,[],0);
        return result;

    }
    console.log(combinationSums(3,10));