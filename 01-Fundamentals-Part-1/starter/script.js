/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);
console.log('Jonas');

let firstName = 'Bob';
console.log(firstName);
let three_years = 3;


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);
year = 1991;
console.log(typeof year);
 */
//Start of Homework
/*
const country = 'Australia';
const continent = 'Oceania';
let population = 20;

console.log(country);
console.log(continent);
console.log(population);

let isIsland = true;
let language;

console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);

language = 'English';
console.log(population);
population += 1;
console.log(population);

const finlandPopulation = 6;
console.log(finlandPopulation > population);
const averageCountryPopulation = 33;
console.log(population > averageCountryPopulation);

const description = `Portugal is in Europe, and its 11 million people speak Portuguese`;
console.log(description);

const differenceToAveragePopulation = averageCountryPopulation - population;

if (population > 33){
    console.log(`${country}'s population is above ${averageCountryPopulation}`);
} else {
    console.log(`${country} is ${differenceToAveragePopulation} years below the average`);
}


const numNeighbours = prompt('How many neighbour countries does your country have?');

if(Number(numNeighbours) === 1){
    console.log('Only 1 border!');
} else if(numNeighbours >  1){
    console.log('More than 1 border');
}
else{
    console.log('No borders');
}
*/
// End of homework
/*
let age = 30;
age = 31;
console.log(age);

const birthYear = 1991;

var job = 'programmer';
job = 'teacher';
console.log(job);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas,ageSarah);

console.log(ageJonas * 2, ageJonas / 2, 2**3);

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

let x = 10 + 5;
x += 5; // x = x + 5
console.log(x); 

console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

console.log (now - 1991 >  now - 2018);

console.log(25 - 10 - 5);

let x,y;

x = y = 25 - 10 - 5;

console.log(x, y);

// Coding Challenge #1

const johnMass = 78;
const johnHeight = 1.69;
const markMass = 92;
const markHeight = 1.95;

const johnBMI = johnMass / johnHeight ** 2;
const markBMI = markMass / markHeight ** 2;
console.log(johnBMI, markBMI);

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);



const firstName = 'Jonas';
const job = 'teacher';
const birthYear = '1991';
const year = 2037;

const jonas = "I'm " + firstName + ' ,a ' +  (year - birthYear) + ' years old ' + job + '!';

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);


const age = 15;

if (age >= 18){
    console.log(`Sarah can start driving license`);
} else{
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}

const birthYear = 1991;
let century;

if (birthYear <= 2000){
    century = 20;
} else{
    century = 21;
}

console.log(century);


//Coding challenge #2

const johnMass = 78;
const johnHeight = 1.69;
const markMass = 92;
const markHeight = 1.95;

const johnBMI = johnMass / johnHeight ** 2;
const markBMI = markMass / markHeight ** 2;
console.log(johnBMI, markBMI);

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

if (johnBMI > markBMI){
    console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI ${markBMI}`);
} else {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI ${johnBMI}`);
}


// Type conversion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(String(23));

// Type coercion
console.log('I am ' + 23 + ' years old');
console.log ('23' - '10' - 3);
console.log('23' * '2');
console.log('23' > '18');

let n = '1' + 1;
n = n - 1;
console.log(n);
//my guess is 10

console.log(Boolean(0));

const money = 0;
if(money) {
    console.log("Don't spend it all.");
} else{
    console.log("You should get a job");
}

let height;
if(height){
    console.log('I exist!');
} else{
    console.log("I don't exist and am undefined.");
}


const age = 18;

if(age===18)console.log(age);
const favourite = prompt("What is your favourite number?");


const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if(shouldDrive){
    console.log('Sarah is able to drive')
} else{
    console.log('Someone else should drive');
}

const isTired = false;

console.log(hasDriversLicense && hasGoodVision && !isTired);


// Coding Challenge #3

const dolphinsAve = (97 + 112 + 101)/3;
const koalasAve = (109 + 95 + 106)/3;

console.log(dolphinsAve,koalasAve);

if((dolphinsAve > koalasAve) && (dolphinsAve > 100)){
    console.log('Dolphins win!');
} else if((dolphinsAve < koalasAve) && (koalasAve > 100)){
    console.log('Koalas win!');
}
else if((koalasAve === dolphinsAve) && (dolphinsAve >= 100) && (koalasAve >= 100)){
    console.log("It's a tie!");
}
else{
    console.log('No trophies for anyone');
}



let day = 'Friday';

switch(day){
    case 'Monday':
        console.log('Plan my course structure');
        console.log('Go to coding meetup');
        break;
    case 'Tuesday':
        console.log('Prepare theory videos');
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log('Write code examples.');
        break;
    case 'Friday':
        console.log('Record videos');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day!');
        break;
}

day = 'Sunday';

if (day === 'Monday'){
    console.log('Plan my course structure');
    console.log('Go to coding meetup');
} else if(day === 'Tuesday'){
    console.log('Prepare theory videos');
} else if((day === 'Wednesday') || (day ==='Thursday')){
    console.log('Write code examples.');
} else if(day === 'Friday'){
    console.log('Record videos');
} else if((day ==='Saturday') || (day ==='Sunday')){
    console.log('Enjoy the weekend');
} else{
    console.log('Not a valid day!');
}

//Ternary operators

const age = 19;
// age >= 18 ? console.log('I like to drink wine 🍷.'):
// console.log('I like to drink water.');

const drink = age >= 18 ? 'wine 🍷' : 'I like to drink water';
console.log(drink);


let drink2;

if(age>=18){
    drink2 = 'wine';
} else{
    drink2 = 'I like to drink water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'I like to drink water'}`);


*/

//Coding challenge #4

const bill = 430;
const tip = (bill >= 50 && bill <=300) ? (0.15 * bill) : (0.2 * bill);
const total = bill + tip;
console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${total}`);
