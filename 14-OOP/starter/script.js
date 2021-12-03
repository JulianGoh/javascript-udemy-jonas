'use strict';

/*

//Building constructor functions
const Person = function (firstName, birthYear) {
//Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

// //Never create method within constructor function
//   console.log(this.calcAge(this.birthYear));
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

Person.prototype.calcAge = function(birthYear){
    console.log(2037 - birthYear);
}

jonas.calcAge(1991);

//What does the new operator do?
// 1. New object {} is created
// 2. Function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

console.log(jonas.__proto__);

console.log(Person.prototype.isPrototypeOf(jonas));

console.log(jonas.__proto__.__proto__);

const arr = [3, 5, 2, 3, 6];
console.log(arr.__proto__);

// Creating a custom method to constructor function

Array.prototype.unique = function(){
    return [...new Set(this)]
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);


//Coding challenge #1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

console.log(Car);
console.dir(Car);

Car.prototype.accelerate = function(){
    console.log(this.speed += 10);
}

Car.prototype.brake = function(){
    console.log(this.speed -= 5);
}

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);
console.log(car1);
car1.accelerate();
car1.brake();
car1.brake();
car1.brake();


//class expression

// const PersonCl = class{};

//Class declaration

class PersonCl {
    constructor(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    //Methods added directly to .prototype property
    calcAge(){
        console.log(2037 - this.birthYear);
    }
}


const jessica = new PersonCl('Jessica', 1996);
console.log(jessica.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function(){
    console.log(`Hey ${this.firstName}`);
};

jessica.greet();




const account = {
    owner:'jonas',
    movements: [200, 530, 120, 300],

    get latest(){
        return this.movements.slice(-1).pop();
    },

    set latest(mov){
        this.movements.push(mov);
    },
}

console.log(account.latest);

// Notice how the 'set' method is utilised
account.latest = 50;
console.log(account.movements);



const Person = function (firstName, birthYear) {
    //Instance properties
      this.firstName = firstName;
      this.birthYear = birthYear;
    
};


Person.hey = function(){console.log('Hey there!')};

const jonas = new Person('Jonas', 1991);

Person.hey();

//The below doesn't work bc the method exists attached to the constructor itself
// jonas.hey();


const PersonProto = {
    calcAge(){
        console.log(2037 - this.birthYear);
    },

    initialise(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
}

const steven = Object.create(PersonProto);
console.log(steven);

steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__);

const sarah = Object.create(PersonProto);
sarah.initialise('Sarah', 1979);
console.log(sarah); 


*/

//Coding challenge #2

class CarCl{
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    }

    accelerate(){
        console.log(this.speed += 10);
    }

    brake(){
        console.log(this.speed -= 10);
    }

    get speedUS(){
        return this.speed / 1.6;
    }

    set speedUS(speed){
        this.speed = speed * 1.6;
    }
}

const BMW = new CarCl('BMW', 120);
BMW.accelerate();
BMW.accelerate();
BMW.accelerate();
BMW.accelerate();

console.dir(CarCl);

//Utilising the getter method
console.log(BMW.speedUS);

//Utilising the setter method
BMW.speedUS = 50;