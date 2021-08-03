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


function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
    return juice;
}


function age(birthYear){
    const age = 2037 - birthYear;
    return age;
}

const yearsUntilRetirement = function(birthYear, firstName) {
    const retirement = 65 - age(birthYear);
    if (retirement >0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else{
        console.log(`${firstName} has already retired!`)
        return -1;
    }
}

console.log(yearsUntilRetirement(1940, 'John'));


//Coding challenge #1

const teamAverage = (score1, score2, score3) => (score1 + score2 + score3)/3;


const dolphinAverage = teamAverage(85, 54, 41);
const koalasAverage = teamAverage(23, 34, 27);

console.log(dolphinAverage);
console.log(koalasAverage);

const checkWinner = function(dolphinAverage, koalasAverage){

    if(dolphinAverage >= (koalasAverage * 2)){
        console.log(`Koalas win (${koalasAverage} vs ${dolphinAverage})`);
    }else if(koalasAverage >= (dolphinAverage * 2)){
        console.log(`Dolphins win (${dolphinsAverage} vs ${koalasAverage})`);
        }
    else{
        console.log(`No team wins!`);
    }
    
}

checkWinner(dolphinAverage, koalasAverage);


const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[(friends.length-1)]);

//Mutating arrays

friends[2] = 'Jake';
console.log(friends);

// friends = ['Bob', 'Alice', 'Jay']; - illegal override of const declarations

const jonas = ['Jonas', 'Schmedtmann', 2037-1991, 'teacher', friends];
console.log (jonas);

//Exercise

const calcAge = birthYear => 2037 - birthYear;

//Using array values into something that can feed into the function

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

const ages = [age1, age2, age3];
console.log(ages);


//Arrays - methods

const friends = ['Michael', 'Steven', 'Peter'];

const newLength = friends.push('Jay');
console.log(newLength);
console.log(friends);

friends.unshift('John');
console.log(friends);

friends.pop('Jacob');
console.log(friends);

friends.shift();
console.log(friends);

friends.push(23);
console.log(friends.indexOf('Steven'));
console.log(friends.includes('23'));

if (friends.includes('Zak')){
    console.log('Peter is in!');
}


//Arrays - coding challenge #2

function calcTip(bill){
    let tip;
    if(bill >= 50 && bill <=300){
        tip = 0.15 * bill;
    } else {
        tip = 0.2 * bill;
    }

    return tip;
}

console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips);

const total = [bills[0]+tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(total);
*/

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends.');


// if(jonas[interestedIn]){
//     console.log(jonas[interestedIn]);
// } else{
//     console.log('Input error');
// }

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

//challenge

//Jonas has 3 friends and his best friend is called Michael

console.log(`${jonas['firstName']} has ${jonas['friends'].length} friends and his best friend is called ${jonas.friends[0]}.`);