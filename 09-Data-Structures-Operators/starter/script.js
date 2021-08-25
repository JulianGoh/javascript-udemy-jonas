'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  
  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}){
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },

  orderPizza: function(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*
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
*/



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