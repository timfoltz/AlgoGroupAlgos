// https://leetcode.com/problems/calculate-money-in-leetcode-bank/submissions/

totalMoney = (n) => {
    let total = 0
    let count =0
    let cycle = 2
    let prev = 1
    for(let i = 1; i<=n; i++) {
        if(count==7){
            console.log("count is 7")
            prev = cycle
            total= total + prev
            count=1
            console.log("prev ",prev)
            console.log(total)
            cycle ++
            prev++
        }else{
            total=total + prev
            console.log("prev ",prev)
            console.log(total)
            prev++
            count++
        }

    }
    console.log("prev ",prev)
    return total
}
console.log(totalMoney(20))