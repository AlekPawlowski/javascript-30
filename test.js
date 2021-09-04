const checkSalaries = (obj) => {
    let sumValue = 0;
    for (keys in obj) {
        if (typeof obj[keys] === "number") {
            sumValue += obj[keys];
        }
    }
    console.log(sumValue);
    return sumValue;
};
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let salariesTwo = {
    John: 150,
    Ann: 1600,
    Pete: "1asd"
}
checkSalaries(salaries);
checkSalaries(salariesTwo);

