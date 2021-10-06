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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov}€</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// displayMovements(account1.movements);

//Computing usernames

// const user = 'Steven Thomas Williams';

const createUsernames = function (accs) {
  accs.forEach(function (account) {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

const updateUI = function (acc) {
  //Display movements
  displayMovements(acc.movements);
  //Display balance
  calcDisplayBalance(acc);
  //Display summary
  calcDisplaySummary(acc);
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};
// calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes}€`;
  // console.log(incomes);

  const outgoing = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, curr) => acc + curr, 0);

  labelSumOut.textContent = `${outgoing}€`;
  // console.log(outgoing);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * (acc.interestRate / 100))
    .filter(interest => interest >= 1)
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}€`;
  // console.log(interest);

  // return incomes;
  // return outgoing;
  // return interest;
};

// calcDisplaySummary(account1.movements);

//Event handler

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  //Prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // console.log('LOGIN');
    containerApp.style.opacity = 100;

    //Display UI and message:
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    //Clear login fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc.username !== currentAccount.username
  ) {
    //Transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Update movement / account balance
    updateUI(currentAccount);
  }

  inputTransferTo.value = inputTransferAmount.value = '';
  inputTransferAmount.blur();
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= 0.1 * amount)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
  inputLoanAmount.blur();
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    // console.log('Delete');
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);
  }

  inputCloseUsername.value = inputClosePin.value = '';
  inputClosePin.blur();

  containerApp.style.opacity = 0;
  labelWelcome.textContent = 'Login to get started';
});

/*


// Find method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find(mov => mov < 0);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);


//Chaining methods
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUSD = 1.1;

const totalDepositsUSD = movements
  // .filter(mov => mov > 0)
  // .map(mov => mov * eurToUSD)
  // .reduce((acc, mov) => acc + mov, 0);
  .filter((mov, i, arr) => {
    console.log(arr);
    return mov > 0;
  })
  .map((mov, i, arr1) => {
    console.log(arr1);
    return mov * eurToUSD;
  })
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//Maximum value through reduce method
const max = movements.reduce((acc, mov) => 
{
  if(acc > mov){
    return acc;
  } else{
    return mov;
  }

}, movements[0]);

console.log(max);



//Filter method



const deposits = movements.filter(function(mov){
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for(const mov of movements){
  if (mov > 0) depositsFor.push(mov);
};
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);

console.log(withdrawals); 

//Reduce

const balance = movements.reduce(function(acc, cur, i, arr){
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);

console.log(balance);


let balance2 = 0;
for(const mov of movements) balance2 += mov;
console.log(balance2);

// const withdrawals = movements.filter(function(mov){
//   return mov < 0;
// });

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



//Coding challenge #2 / Coding challenge 3

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  const convertAge = ages.map(function (dogAge) {
    if (dogAge <= 2) {
      return 2 * dogAge;
    } else {
      return 16 + dogAge * 4;
    }
  });
  console.log(convertAge);

  const convertAgeFiltered = convertAge.filter(function (age) {
    return age > 18;
  });

  console.log(convertAgeFiltered);

  // const convertAgeAve = convertAgeFiltered.reduce(function(acc, curr){
  //   return acc + curr;
  // }, 0) / convertAgeFiltered.length;

  const convertAgeAve = convertAgeFiltered.reduce(function (acc, curr, i, arr) {
    return acc + curr / arr.length;
  }, 0);

  console.log(convertAgeAve);
};

const calcAverageHumanAge1 = ages => {
  const convertAge = ages
    .map(function (dogAge) {
      if (dogAge <= 2) {
        return 2 * dogAge;
      } else {
        return 16 + dogAge * 4;
      }
    })
    .filter(function (age) {
      return age > 18;
    })
    .reduce(function (acc, curr, i, arr) {
      return acc + curr / arr.length;
    }, 0);

    console.log(convertAge);
};

calcAverageHumanAge(data1);
calcAverageHumanAge(data2);

calcAverageHumanAge1(data1);
calcAverageHumanAge1(data2);



// Some and every methods

// Equality
console.log(account1.movements);
console.log(account1.movements.includes(-130));

//Condition - some
const anyDeposits = account1.movements.some(mov => mov > 150);

// Every method

console.log(account1.movements.every(mov => mov > 0));


// Separate callback
const deposit = mov => mov > 0;
console.log(account1.movements.some(deposit));



const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr);
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);

const allMovements = accountMovements.flat();
console.log(allMovements);

//JG method lol
let bankTotal = 0;

for (const mov of accountMovements.flat()) {
  bankTotal = bankTotal + mov;
}

console.log(bankTotal);

//JS method
// const overallBalance = allMovements.reduce((acc,mov) => acc + mov, 0)
// console.log(overallBalance);

const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

//Flat map

const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);



const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];

console.log(owners.sort());

//Numbers

console.log(account1.movements.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
}));

console.log(owners.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
}));


console.log(account1.movements.sort((a,b) => a - b));




const x = new Array(7);
x.fill(1, 3, 5)
console.log(x);

const y = Array.from({length: 7}, () => 1);
console.log(y);

const z = Array.from({length: 7}, (cur, i) => i + 1); //Not that cur is a throwaway value, no utility. Necessary bc index is the second element. Best practice is to replace with _
console.log(z);

//Dice roll

const randomDice = Array.from({length: 100}, (dice) => Math.trunc(Math.random() * 6));
console.log(randomDice);


//Grabbing movements

labelBalance.addEventListener('click', function(){
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'), el => el.textContent.replace('€', ''));
  console.log(movementsUI);

});


//More practice exercises on array methods

const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);

//Count deposits at least >1000

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000);
console.log(numDeposits1000);

const numDeposits1000v2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);

console.log(numDeposits1000v2);

//

const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, curr) => {
      // curr > 0 ? (sums.deposits += curr) : (sums.withdrawals += curr);
      sums[curr > 0 ? 'deposits' : 'withdrawals'] += curr;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);

// 4. this is a nice title > This Is a Nice Title

const convertTitleCase = function (title) {
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)).join(' ')
    ;
  return titleCase;
};

console.log(convertTitleCase('this is a nice title'));



*/

// Coding challenge #4

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

console.log(dogs);

//1 - Calculate recommended food

for (const dog of dogs) {
  const diet = Math.trunc(dog.weight ** 0.75 * 28);
  dog.recommendedFood = diet;
  console.log(dog);
}

//2 - Find Sarah's dog and log whether overeating or undereating

for (const dog of dogs) {
  if (dog.owners.find(owner => owner === 'Sarah')) {
    // const foodCheck =
    //   ((dog.curFood - dog.recommendedFood) * 100) / dog.recommendedFood;
    // if (foodCheck > 10) {
    //   console.log('Dog is overeating');
    // } else if (foodCheck < -10) {
    //   console.log('Dog is undereating');
    // } else {
    //   console.log('Dog is eating fine');
    // }
    const dogSarah =
      dog.curFood > dog.recommendedFood
        ? 'Dog is overeating'
        : 'Dog is undereating';
    console.log(dogSarah);
  }
}

//3- New array of ownersEatTooMuch or ownersEatTooLittle

let ownersEatTooMuch = [];
let ownersEatTooLittle = [];

for (const dog of dogs) {
  const foodCheck = dog.curFood > dog.recommendedFood;
  // ((dog.curFood - dog.recommendedFood) * 100) / dog.recommendedFood;
  console.log(foodCheck);

  if (foodCheck === true) {
    ownersEatTooMuch.push(dog.owners);
  } else if (foodCheck === false) {
    ownersEatTooLittle.push(dog.owners);
  }
}

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// 4-  Logging array to string

const ownersEatTooMuchFlat = ownersEatTooMuch.flat();
// console.log(`${ownersEatTooMuchFlat[0]} and ${ownersEatTooMuchFlat[1]} and ${ownersEatTooMuchFlat[2]} dogs eat too much!`)
const ownersEatTooLittleFlat = ownersEatTooLittle.flat();
// console.log(`${ownersEatTooLittleFlat[0]} and ${ownersEatTooLittleFlat[1]} and ${ownersEatTooLittleFlat[2]} dogs eat too little!`)

console.log(`${ownersEatTooMuchFlat.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittleFlat.join(' and ')}'s dogs eat too little!`);

// 5 - Okay criteria

// for(const [i, dog] of dogs.entries()){
//   const foodCheck = ((dog.curFood - dog.recommendedFood) * 100) / dog.recommendedFood;
//   console.log(foodCheck);

//   if (foodCheck === 0){
//     console.log("Exactly: true");
//   } else if(foodCheck > -10 && foodCheck < 10){
//     console.log("Okay: true");
//   } else{
//     console.log('False');
//     }
// }

const foodCheck = dogs.map(
  dog => ((dog.curFood - dog.recommendedFood) * 100) / dog.recommendedFood
);
console.log(foodCheck);

const foodExactly = foodCheck.some(dog => dog === 0);
const foodOkay = foodCheck.some(dog => dog > -10 && dog < 10);
console.log(foodExactly);
console.log(foodOkay);

// const foodExactly = foodCheck.filter(dog => dog === 0);
// const foodOkay = foodCheck.filter(dog => dog > -10 && dog < 10);

const dogsFoodOkay = foodCheck.filter(dog => dog > -10 && dog < 10);
console.log(dogsFoodOkay);

// if (foodCheck === 0) {
//   console.log('Exactly: true');
// } else if (foodCheck > -10 && foodCheck < 10) {
//   console.log('Okay: true');
// } else {
//   console.log('False');
// }

// const okayCheck = dogs.filter(dog =>
//   ((dog.curFood - dog.recommendedFood) * 100) / dog.recommendedFood;)

//Sorting

const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted);
