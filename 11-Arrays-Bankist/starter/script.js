'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov}</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

//Computing usernames

// const user = 'Steven Thomas Williams';

const createUsernames = function(accs){

  accs.forEach(function(account){
    account.username = account.owner.toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
  });

}

createUsernames(accounts);
console.log(accounts);


// const createUsernames = function(accounts){
//   for(const names of accounts){
//     return names.owner.toLowerCase()
//     .split(' ')
//     .map(name => name[0])
//     .join('');

//   };
  
  // const name = accounts.owner.toLowerCase()
  // .split(' ')
  // .map(name => name[0])
  // .join('');
  // return name;
// };

// console.log(createUsernames(accounts));

/*
//Coding Challenge #1

const dogsJulia1 = [3, 5, 2, 12, 7];
const dogsKate1 = [4, 1, 15, 8, 3];

const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];

const checkDogs = function (dogs1, dogs2) {
  const corrDogs1 = dogs1.slice(1, -2);
  const allDogs = [...corrDogs1, ...dogs2];

  allDogs.forEach(function (age, index, arr) {
    const checkAge = age >= 3 ? 'adult' : 'puppy';
    console.log(
      `Dog number ${index + 1} is an ${checkAge} and is ${age} years old`
    );
  });
};

checkDogs(dogsJulia1, dogsKate1);
checkDogs(dogsJulia2, dogsKate2);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


//Applying .forEach for Maps and Sets
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map){
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function(value, _ , set){
  console.log(`${value}: ${value}`);
});

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for(const movement of movements){
//   if(movement > 0){
//     console.log(`You deposited ${movement}`);
//     } else {
//       console.log(`You withdrew ${Math.abs(movement)}`);
//     }
// }



for(const [i, movement] of movements.entries()){
  if(movement > 0){
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
    } else {
      console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
    }
}

//Equivalent process - through forEach (higher order) function
movements.forEach(function(movement, index, array){
  if(movement > 0){
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
    } else {
      console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
    }
  });




/////////////////////////////////////////////////

//Slice
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -1));

//Creating shallow copies
console.log(arr.slice());
console.log([...arr]);


//Splice
console.log(arr.splice(2));
console.log(arr);

//Reverse

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse(2));
console.log(arr2);

//Concat

const letters = arr.concat(arr2);
console.log(letters);

console.log([...arr, ...arr2]);

//Join

console.log(letters.join(' - '));


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUSD = 1.1;
const movementsUSD = movements.map(function (mov) {
  return mov * eurToUSD;
});

//Conversion to arrow
const movementsUSD1 = movements.map(mov => mov * eurToUSD);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];

for (const mov of movements) movementsUSDfor.push(mov * eurToUSD);
console.log(movementsUSDfor);

// const show = movements.map(function(movement, i, arr){
//   if(movement > 0){
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//     } else {
//       console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//     }
// });

const movementDescriptions = movements.map(
  (movement, i) => 
    `Movement ${i + 1}: You ${movement > 0 ? 'deposited': 'withdrew'} ${Math.abs(movement)}`
  );


  // if(movement > 0){
  //   return (`Movement ${i + 1}: You deposited ${movement}`);
  //   } else {
  //     return(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  //  

console.log(movementDescriptions);

*/
