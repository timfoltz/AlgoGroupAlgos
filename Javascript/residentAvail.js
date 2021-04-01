
range = ([num1], [num2]) => {
    console.log("num1",num1,"num2",num2)
    if((num2[0]>= num1[0] && num2[0]<= num1[1])&& (num2[1]>= num1[0] && num2[1]<= num1[1])){
        return true
    }else{return false}
}


intersectAvailableHours = (first, second) => {

    const outcome = [];
    var temp;
    first.forEach(num1 => {
        second.forEach(num2 => {
            if((num2[0]>= num1[0] && num2[0]<= num1[1])&& (num2[1]>= num1[0] && num2[1]<= num1[1])){
                outcome.push(num2)
            }
        })
    });
    // for(let i=0; i<first.length; i++){
    //     for(let j=0; j<second.length; j++){
    //         console.log("first",first[i],"second",second[j])
    //     }
    // }
}
const resident = [[9,11],[12,13],[15,20]];
const darwinPro = [[10,11],[13, 16],[17,19]];
const first = resident;
const second = darwinPro;
intersectAvailableHours(first, second);