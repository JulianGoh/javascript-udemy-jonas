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



const Person = function (firstName, birthYear) {
    //Instance properties
      this.firstName = firstName;
      this.birthYear = birthYear;
};


Person.prototype.calcAge = function(birthYear){
    console.log(2037 - this.birthYear);
};

const Student = function(firstName, birthYear, course){
    Person.call(this, firstName, birthYear);
    this.course = course;
};

//Linking prototypes
Student.prototype = Object.create(Person.prototype);

console.log(Student.prototype);

Student.prototype.introduce = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}.`);
}

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);

mike.introduce();

mike.calcAge();

console.log(mike instanceof Student);
console.log(mike instanceof Person);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);


const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
  };
  
  Car.prototype.accelerate = function(){
      console.log(this.speed += 10);
  }
  
  Car.prototype.brake = function(){
      console.log(this.speed -= 5);
  }


const EV = function(make, speed, charge){
    Car.call(this, make, speed);
    this.charge = charge;
}

EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery = function(chargeTo){
    this.charge = chargeTo;
}

const car1 = new EV('Tesla', 120, 23);
console.log(car1);

console.dir(car1.__proto__);

EV.prototype.accelerate = function(){
    this.speed += 20;
    this.charge --;
    // this.charge = chargeBattery.call(this, deltaCharge);
}

car1.accelerate();
console.log(car1);
console.dir(car1);


// EV.prototype.chargeBattery(chargeTo){
//     this.charge = chargeTo;
// }





class PersonCl {
    constructor(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    //Methods added directly to .prototype property
    calcAge(){
        console.log(2037 - this.birthYear);
    }

    greet(){
        console.log(`Hey ${this.fullName}`);
    }

    get age(){
        return 2037 - this.birthYear;
    }
    set fullName(name){
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not full name!`);
    }

    get fullName(){
        return this._fullName;
    }

    //Static method

    static hey(){
        console.log('Hey there!');
    }
}

class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course){
        //Link to parent class needs to happen first
        super(fullName, birthYear);
        this.course = course;
    };

    introduce(){
        console.log(`My name is ${this.fullName} and I study ${this.course}.`);
    }

    calcAge(){
        console.log(`I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 10}`);
    }
} 

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
console.log(martha);
martha.introduce();
martha.calcAge();



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

const StudentProto = Object.create(PersonProto);

StudentProto.init = function(firstName, birthYear, course){
    PersonProto.initialise.call(this, firstName, birthYear);
    this.course = course;
}

StudentProto.introduce = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}.`);
}

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer science');
jay.introduce();
jay.calcAge();

class Account {
    //Public fields
    locale = navigator.language;
    
    //Private fields
    #movements = [];
    #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //Protected property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}.`);
  }

  //Public methods
  getMovements(){
      return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

//   Private methods

  _approveLoan(val) {
    return true;
  }

  static helper(){
      console.log();
  }

}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

//Bad practice
// acc1.movements.push(250);
// acc1.movements.push(-140);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1._approveLoan(1000));


Account.helper();

//Chaining methods

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());


*/

//Coding challenge #4


class CarCl{
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    }

    accelerate(){
        console.log(this.speed += 10);
        return this;
    }

    brake(){
        console.log(this.speed -= 10);
        return this;
    }

    get speedUS(){
        return this.speed / 1.6;
    }

    set speedUS(speed){
        this.speed = speed * 1.6;
    }
}

class EVCl extends CarCl{

    #charge;

    constructor(make, speed, charge){
        super(make, speed);
        this.#charge = charge;
    };

    chargeBattery(chargeTo){
        this.#charge = chargeTo;
        return this;
    }
}

const car1 = new EVCl('Rivian', 120, 23);
console.log(car1);

car1.accelerate().chargeBattery(42).brake().brake();
console.log(car1);

console.log(car1.speedUS);

car1.speedUS = 68.75;
console.log(car1);
