//importing module
/*
// import {
//   addToCart,
//   totalPrice as price,
//   totalQuantity,
// } from './shoppingCart.js';
// addToCart('bread', 5);

import * as ShoppingCart from './shoppingCart.js';

ShoppingCart.addToCart('bread', 5);

console.log('Importing module');

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('pizza', 2);
add('pizza', 2);

console.log(cart);

// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};


// const lastPost = getLastPost(); //Returned as a Promise (data yet to be loaded)
// lastPost.then(last => console.log(last));

//Cleaner solution
const lastPost2 = await getLastPost();
console.log(lastPost2);



const shoppingCart2 = (function(){
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function(product, quantity){
        cart.push({product, quantity});
        console.log(`${quantity} ${product} added to cart`);
    };

    const orderStock = function(product, quantity){
        console.log(`${quantity} ${product} ordered from supplier`);
    };

    return{
        addToCart,
        cart,
        totalPrice,
        totalQuantity,
        shippingCost
    }
})();

shoppingCart2.addToCart('apple', 4)

console.log(shoppingCart2);
console.log(shoppingCart2.shippingCost);


//nodeJS environment
//Export
export.addToCart = function(product, quantity){
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart`);
};

//Import 
const { addToCart } = require('./shoppingCart.js');

*/

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
    cart: [
        {product: 'bread', quantity: 5},
        {product: 'pizza', quantity: 5},
    ],
    user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn  = false;

console.log(stateClone);
console.log(stateDeepClone);
