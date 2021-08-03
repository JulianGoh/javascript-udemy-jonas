'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

// const private = 'audio';
// const interface = 'audio';


//Functions

function logger() {
    console.log('My name is Jonas');
}

logger();

function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);



//function declaration
const age1 = calcAge1(1995);

function calcAge1(birthYear){
    return 2037 - birthYear;
}



//function expression
const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);


*/

//Arrow functions

const calcAge3 = birthYear => 2037 - birthYear;

console.log(calcAge3(1995));

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement}`;
}

console.log(yearsUntilRetirement(1995, 'John'));