oddNumbers = (l,r) => {
    let output = []
    for(let i = l; i <= r; i++) {
        if(i % 2 != 0) {
            output.push(i)
        }
    }
    return output
}

console.log(oddNumbers(1,15))