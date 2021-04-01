intersectAvailableHours = (first, second) => {
    const outcome = [];
    first.forEach(num1 => {
        second.forEach(num2 => {
            if( (num2[0]>= num1[0] && num2[0]<= num1[1])&&
                (num2[1]>= num1[0] && num2[1]<= num1[1]))
                {
                    outcome.push(num2)
            }
        })
    });
    return outcome;
}
const resident = [[9,11],[12,13],[15,20]];
const darwinPro = [[10,11],[13, 16],[17,19]];
const first = resident;
const second = darwinPro;
console.log(intersectAvailableHours(first, second));