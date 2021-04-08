isLucky= (num) => {
    let myFunc = num => Number(num);
    let n = Array.from(String(num), myFunc)
    let first = n.slice(0,n.length/2).reduce((a,b)=>a+b,0)
    let second = n.slice(n.length/2).reduce((a,b)=>a+b,0)
    return first == second ? true : false;
}
console.log(isLucky(1230))