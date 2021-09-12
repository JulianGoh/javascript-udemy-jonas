'use strict';
/*
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
  //ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 800);
createBooking('LH123', undefined, 800);


const flight = 'LH234'; //primitive type (string)
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 2312842141,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 2312842141) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, jonas);
console.log(flight); //LH234
console.log(jonas);

const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 1000000000);
}

newPassport(jonas);
checkIn(flight, jonas);
console.log(jonas);


const greet = () => console.log('Hey Jonas');


// document.querySelector('.buy', )

const btnClose = document.querySelector('.buy');

btnClose.addEventListener('click', greet);


const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// console.log(upperFirstWord('Apache Helicopter'));
// const str = 'Apache Helicopter';

// const[first, ...others] = str.split(' ');
// console.log(first, ...others);

//Higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`)
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function(){
    console.log('👋');
}

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);


const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
greeterHey('Jonas');

greet('Hello')('Jonas');

//Challenge - re-write the above into Arrow functions

const greet = greeting => name => console.log(`${greeting} ${name}`);


const greeterHey = greet('Hey');
greeterHey('Jonas');



const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book: function (flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// book(23, 'Sarah Williams');

book.call(eurowings, 23, 'Sarah Williams');
book.call(lufthansa, 239, 'Mary Cooper');

console.log(lufthansa);

const swiss = {
  airline: 'Swiss Airlines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

//Apply method

const flightData = [583, 'George Cooper'];

book.apply(swiss, flightData);

//Call & spread - best practice
book.call(swiss, ...flightData);

//Bind method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jack Brown');

// The problem with Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

const buyPlane = lufthansa.buyPlane.bind(lufthansa);

document.querySelector('.buy').addEventListener('click', buyPlane);
console.log(lufthansa);

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));

//Alternative - callback
const addTax1 = function(rate){
    return function(value){
        console.log(`${value + value * rate}`)
    }
}

const totalTax = addTax1(0.23);
totalTax(100);



const poll = {
  question:
    'What is your favourite programming language?\n 0: JavaScript \n 1: Python \n 2: Rust \n 3: C++ \n (Write option number)',
  answers: [0, 0, 0, 0],
  registerNewAnswer: function () {
    const option = Number(prompt(`${this.question}`));
    // this.array.push(option);
    console.log(`Your answer is ${option}`);
    if (option === 0 && option < this.answers.length) {
      this.answers[0] += 1;
    } else if (option === 1) {
      this.answers[1] += 1;
    } else if (option === 2) {
      this.answers[2] += 1;
    } else if (option === 3) {
      this.answers[3] += 1;
    } else {
      console.log('Invalid input');
    }
    // console.log(this.answers);
    this.displayResults('string');
  },
  displayResults: function (type) {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

const bonus = {
  // answers: [5, 2, 3],
  answers: [1, 5, 3, 9, 6, 1],
};

const bonusDisplay = poll.displayResults.bind(bonus);

bonusDisplay('string');


const runOnce = function(){
  console.log('This will never run again');
}

// runOnce();

(function(){
  console.log('This will never run again');
});

(() => console.log('This will never run again'))();



const secureBooking = function () {
  let passengerCount = 0;

  return function(){
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);


//Example 1

let f;

const g = function(){
  const a = 23;
  f = function(){
    console.log(a * 2);
  }
}

const h = function(){
  const b = 777;
  f = function(){
    console.log(b * 2);
  }
}

g();
f();
h();
f();

// Example 2

const boardPassengers = function(n, wait){
  const perGroup = n / 3;
  setTimeout(function(){
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
}

// setTimeout(function(){
//   console.log('Timer');
// }, 1000);

const perGroup = 1000;
boardPassengers(180,3);


*/

// Coding challenge

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  

  header.addEventListener('click', function(){
    header.style.color = 'blue';
  });
})();