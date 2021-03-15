const numOfIds = (pool) => {
    let myInt = pool;
    let myFunc = num => Number(num);
    let inArr = Array.from(String(myInt), myFunc);
    // var myArr = String(newPoolArr).split("").map((newPoolArr)=>{
    //     return Number(newPoolArr)
    // })

    // for(let i = 0; i<pool.length; i++) {
    //     console.log(pool[i])
    // }
}
console.log(numOfIds(8012345678901234567890))