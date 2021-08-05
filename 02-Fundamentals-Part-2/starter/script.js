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



const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function(birthYear){
    //     return 2037 - birthYear;
    // }

    // calcAge: function(){
    //     return 2037 - this.birthYear;
    // }

    calcAge: function(){
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function(){
        return (`${this.firstName} is a ${this.calcAge()} year old ${this.job} and ${this.hasDriversLicense ? 'has a drivers license' : 'does not have a drivers license'}` );
    }
};


//Challenge - display 'Jonas is a 46 year old teacher and has a driver's license'

// console.log(`${jonas.firstName} is a ${jonas.age} year old ${jonas.job} and ${jonas.hasDriversLicense = true ? 'has a drivers license' : 'does not have a drivers license'}` );

console.log(jonas.getSummary());



//Coding challenge #3

const mark = {
    fullName: 'Mark Miller',
    height: 1.69,
    weight: 78,

    calcBMI: function(){
        this.BMI = (this.weight / (this.height ** 2));
        return this.BMI;

    }
}

const john = {
    fullName: 'John Smith',
    height: 1.95,
    weight: 92,

    calcBMI: function(){
        this.BMI = (this.weight / (this.height ** 2));
        return this.BMI;

    }
}

mark.calcBMI();
john.calcBMI();

if(mark.BMI > john.BMI){
    console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s BMI (${john.BMI})`);
} else if(john.BMI > mark.BMI){
    console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s BMI (${mark.BMI})`);
} else{
    console.log('They have equal BMIs');
}



for(let rep = 1; rep <= 10; rep ++){
    console.log(`Lifting weights repetition ${rep}`);
}


const jonas = [
'Jonas',
'Schmedtman',
2037 - 1991,
'teacher',
['Michael', 'Peter', 'Steven']
];

const types = [];

for(let i = 0; i < jonas.length; i++){
    console.log(jonas[i], typeof jonas[i])
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

const years = [1991, 2007, 1969, 2020];
const age =[];

for(let i = 0; i < years.length; i++){
    // age [i] = 2037 - years[i];
    age.push(2037 - years[i]);
}

console.log(age);


for(let i = 0; i < jonas.length; i++){
    if(typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i])
}

//Loop - break

const jonas = [
    'Jonas',
    'Schmedtman',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

for(let i = 0; i < jonas.length; i++){
    if(typeof jonas[i] === 'number') break;
    console.log(jonas[i], typeof jonas[i])
}





//Loop reversal

const jonas = [
    'Jonas',
    'Schmedtman',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];


for(let i = jonas.length-1; i >= 0; i--){
    console.log(i, jonas[i]);
}

for(let exercise = 1; exercise <= 3; exercise++){
    console.log(`----Starting exercise ${exercise}`);

    for(let rep = 1; rep < 6; rep ++){
        console.log(`Lifting weights repetition ${rep}`);
    }
}


for(let rep = 1; rep <= 10; rep ++){
    console.log(`Lifting weights repetition ${rep}`);
}


let rep = 1;
while(rep <= 10){
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6 + 1);
console.log(dice);

// while(dice !== 6){
//     console.log(`You rolled a ${dice}`);
// }


*/

//Coding challenge #4

const bills = [22, 295, 176, 440, 37, 205, 10, 1100, 86, 52];

const tips = [];
const totals = [];

function calcTip(bill){
    let tip;
    if(bill >= 50 && bill <=300){
        tip = 0.15 * bill;
    } else {
        tip = 0.2 * bill;
    }

    return tip;
}

for (let i=0; i<=9; i++){
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}

console.log(bills, tips, totals);



function calcAverage(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = arr[i] + sum;
    }
    return sum / arr.length;
    
}

console.log(calcAverage([2, 3, 6]));
console.log(calcAverage(totals));