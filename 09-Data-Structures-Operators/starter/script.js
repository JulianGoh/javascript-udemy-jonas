'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)


// const cutFlights = flights.replaceAll('+', '\n').replaceAll(';', ' ').replaceAll('_', ' ');

for(const flight of flights.split('+')){
  // console.log(flight);

  const individualFlight = flight.split(';');
  // console.log(individualFlight);

  const descrip = individualFlight[0].replace('_', '').replace('_', ' ').replace('Delayed', '🛑 Delayed');
  // console.log(descrip);

  const from = individualFlight[1].slice(0,3).toUpperCase();
  // console.log(from);

  const to = individualFlight[2].slice(0, 3).toUpperCase();
  // console.log(to);

  const time = `(${individualFlight[3]})`;
  // console.log(time);
  
  console.log(`${descrip} from ${from} to ${to} ${time}`.padStart(50));
};






// Data needed for first part of the section

const weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced object literals
  // openingHours: openingHours,
  openingHours,

  // order: function(starterIndex, mainIndex){
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*
//Split and join
console.log('a+very+nice+string'.split('+'));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitaliseName = function (name) {
  const nameArray = name.split(' ');
  console.log(nameArray);
  const namesUpper = [];

  for (const word of nameArray) {
    namesUpper.push(word[0].toUpperCase() + word.slice(1));
    // console.log(word[0]);

    // namesUpper.push(word.replace(word[0], word[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitaliseName('Jessica ann smith davis');
capitaliseName('julian goh');

//Padding

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));

const maskCreditCard = function (number) {
  const str = String(number);
  const strLength = str.length;
  console.log(str.slice(-4).padStart(strLength, 'X'));
};

maskCreditCard(4312312497214819);
maskCreditCard('4312312412312397214819');

//Repeat

const message2 = 'Bad weather... All departures delayed... ';

console.log(message2.repeat(2));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};

planesInLine(5);

// const test = '4312312497214819';
// console.log(test.slice(-4));

const airline = 'TAP Air Portugal';
// const plane = 'A320';

const passenger = 'jOnAS';

const passengerLower = passenger.toLowerCase();

const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Email

const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

// console.log(loginEmail);
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalisedEmail = loginEmail.toLowerCase().trim();
console.log(normalisedEmail);

console.log(email === normalisedEmail);

const priceGB = '$288,97';
const priceUS = priceGB.replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23, boarding door 23!';
// console.log(announcement.replace('door', 'gate'). replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));

const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the new Airbus family');
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase(); //Good practice when accepting strings
  if (baggage.includes('knife') || baggage.includes('gun')) {
  console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');


console.log(plane[1]);

console.log(airline.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function(seat) {
  //B and E are middle seats

  const seatColumn = seat.slice(seat.lastIndexOf(' '));
  // console.log(seatColumn);

  if(seatColumn === 'B' || seatColumn ==='E'){
    console.log(`${seat} is a middle seat!`);
  } else{
    console.log(`${seat} is not a middle seat.`)
  };
};

const test = '11B';
console.log(test.slice(test.lastIndexOf()));

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));




const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 👏'],
  [false, 'Try again!'],
]);

console.log(question);

console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

//Quiz app
console.log(question.get('question'));

for (const [key, value] of question) {
  // console.log(typeof (key));
  if (typeof key === 'number') console.log(`Answer ${key} : ${value}`);
}

const answer = 3;
// const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));

//Convert map to array

console.log([...question]);
console.log(question.entries());
console.log(...question.keys());
console.log(...question.values());

// if (answer === question)

//Maps

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

console.log(rest);

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');
  
  console.log(rest);

  console.log(rest.get('name'));
  console.log(rest.get(true));
  console.log(rest.get(1));

  const time = 21;
  
  console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

  console.log(rest.has('categories'));
  rest.delete(2);
  console.log(rest);
  // rest.clear();
  console.log(rest.size);

  const arr = [1,2];
  rest.set(arr, 'Test');
  rest.set(document.querySelector('h1'), 'Heading');
  console.log(rest);

  console.log(rest.get(arr));



//SETS
console.log(ordersSet);

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

ordersSet.add('Garlic Bread');
console.log(ordersSet);

// ordersSet.clear();
// console.log(ordersSet);

ordersSet.delete('Pizza');
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(staffUnique.length);


const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `

for(const day of properties){
  openStr += `${day}, `;
}

console.log(openStr);


//Property values

const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);

for(const [key, {open, close}] of entries){
  console.log(`On ${key} we are open at ${open} and closed at ${close}`);
};

// restaurant.openingHours.fri && console.log(restaurant.openingHours.fri.open);

if (restaurant.openingHours && restaurant.openingHours.mon){
  console.log(restaurant.openingHours.mon.open);
};

//WITH optional chaining
console.log(restaurant.openingHours?.mon?.open);

const days =['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];

for (const day of days){ 
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`)
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

//Arrays
const users = [{
  name: 'Jonas', email: 'hello@jonas.io'}];

console.log(users[0]?.name ?? ' User array empty');
const menu = [...restaurant.starterMenu,...restaurant.mainMenu];

for (const item of menu) console.log(item);
for (const [i, el] of menu.entries()){
  console.log(`${i+1}: ${el}`);
};
restaurant.numGuests = 0;

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);




console.log('----OR----');

console.log(3 || 'Jonas');
console.log('' || 'Jonas'); //Jonas
console.log(true || 0); //true
console.log(undefined || null); //?

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;

console.log('----AND----');

console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'Jonas'); //should return null, since it is the first falsy

if (restaurant.orderPizza){
  restaurant.orderPizza('mushrooms', 'spinach');
}

//Easy shortcut to if statement

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

//Spread bc of RHS of = operator
// const arr = [1.2, ...[3,4]];

// const [a, b, ...others] = [1, 2, 3, 4, 5];

// console.log(a, b, others);

// // const [pizza, , risotto, ...otherFood] = [...restaurant.mainrMenu, ...restaurant.starterMenu];

// console.log(pizza, risotto, otherFood);


//Objects
const {sat, ...weekdays} = restaurant.openingHours;

console.log(weekdays);

// Functions
const add = function(...numbers){
  let sum = 0;
  for(let i =0; i < numbers.length; i++){
    sum += numbers[i];
  };
  console.log(sum);

}

add(2, 3);
add( 5, 3, 7, 2);

const x = [23, 5, 7];
add (...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

restaurant.orderPizza('mushrooms');


const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);


const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);


const newMenu = [...restaurant.mainMenu, 'Gnocchi']

//Copy array

const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Iterables

// const str = 'Jonas';
// const letters = [...str, '', 'S.'];
// console.log(letters);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"), 
//   prompt("Ingredient2?"), 
//   prompt("Ingredient 3?"),
// ];

// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

//Objects

const newRestaurant={
  foundedIn: 1998,
  ...restaurant,
  founder: 'Guiseppe',
}



restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
}); 

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
}); 



const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const{
  name: restaurantName, 
  openingHours: hours, 
  categories: tags
} = restaurant;
console.log(restaurantName, hours, tags);


//Default values
const{
  menu = [],  //Establish as default value
  starterMenu: starters = [],
} = restaurant;

console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj ={
  a: 23,
  b: 7,
  c: 14, 
};

({a, b} = obj);
console.log(a,b)


//Nested objects
// const {fri:{open,close}} = openingHours;

const{
  fri:{open: fridayOpen},
  fri:{close: fridayClose},
} = openingHours;

/*
const arr = [2, 3, 4];
const a = arr[1];
const b = arr[2];
const c = arr[3];

const [x, y, z] = arr;


let [main, , secondary] = restaurant.categories;

[main, secondary] = [secondary, main];


const [starter, mainCourse] = restaurant.order(2, 0);

console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested;

const [i, , [j, k]] = nested;
console.log(i, j, k);


//Default values
const [p = 1, q = 1, r = 1] = [8, 9];




//Coding Challenge #1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
  [
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
  ],
  [
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze',
  ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
  },
  };


  const players1 = game.players[0];
  console.log(players1);
  const players2 = game.players[1];
  console.log(players2);

  const [gk, ...fieldPlayers] = players1;

  const allplayers = [...players1, ...players2];
  console.log(allplayers);

  const players1Final = [...players1, 'Thiango', 'Coutinho', 'Perisic'];

  const {
    team1: team1,
    x: draw,
    team2: team2,
  } = game.odds;

  const printGoals = function(...numberPlayers){
    const [...totalGoals] = [...numberPlayers];
    console.log(totalGoals);
    console.log(`${numberPlayers} at total goals of ${totalGoals[0].length}`);
  };


  printGoals(players1);
  printGoals(game.scored);

  team1 < team2 && console.log('Team 1 is more likely to win');
  team2 < team1 && console.log('Team 2 is more likely to win');


  //Coding Challenge #2
  const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
    };


    //Not sure why this does not work
    //Looping for objects vs array. The scored variable is an array within the object of 'game'
const scoringPlayers = Object.entries(game.scored);
console.log(scoringPlayers);

const scoringPlayers1 = game.scored.entries();
console.log(scoringPlayers1);

for(const [key, player] of game.scored.entries()){
  console.log(`Goal ${key+1}: ${player}`);
}


const odds = Object.values(game.odds);
let total = 0;

for(const totalOdds of odds){
  total += totalOdds;
};

console.log(total /= odds.length);

for(const [team, odd] of Object.entries(game.odds)){
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  // console.log(teamString);
  console.log(`Odd of ${teamStr} ${odd}`);
}

const scorers = {
  Gnarby: 1,
  Hummels: 1,
  Lewandowski: 2,
};


//Coding challenge 3

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
  ]);

  const events = new Set();

  for (const [key, value] of gameEvents){
    events.add(value);
  };

  console.log([...events]);
  
  gameEvents.delete(64);
  console.log(gameEvents);

  const events1 = [...new Set(gameEvents.values())];


  //Instead of hardcoding a '90 minute'
  const time = [...gameEvents.keys()];
  
  const timeEle = time.length;
  const gameTime = time[timeEle - 1];

  // const average = 90 / gameEvents.size;
  const average = gameTime / gameEvents.size;

  //const time = [...gameEvents.keys()].pop();

  console.log(`An event happened, on average, every ${average} minutes`);

  for (const [min, event] of gameEvents){
    if(min < 45){
      console.log(`[FIRST HALF] ${min}: ${event}`);
    } else{
      console.log(`[SECOND HALF] ${min}: ${event}`)
    };
  };
  

*/

//Coding Challenge #4

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  console.log(text);

  const textArray = text.split('\n');
  console.log(textArray);
  console.log(textArray.entries());

  for (const [i, word] of textArray.entries()) {
    const lowerCase = word.toLowerCase().trim();
    const afterUnderscore = lowerCase.slice(lowerCase.indexOf('_') + 1);
    const beforeUnderscore = lowerCase.slice(0, lowerCase.indexOf('_'));
    const capitalise =
      afterUnderscore[0].toUpperCase() + afterUnderscore.slice(1);
    const output = beforeUnderscore + capitalise;

    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

/*
const test = ['Some_Variable'];
for(const word of test){
  const lowerCase = word.toLowerCase();
  console.log(lowerCase);
  const afterUnderscore = lowerCase.slice(lowerCase.indexOf('_') + 1);
  const beforeUnderscore = lowerCase.slice(0,(lowerCase.indexOf('_')));
  const capitalise = afterUnderscore[0].toUpperCase() + afterUnderscore.slice(1);
  const output = beforeUnderscore + capitalise;
  console.log(output);
  // console.log(capitalise);
}
*/
