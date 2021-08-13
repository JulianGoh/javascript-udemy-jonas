'use strict';


//Initial setup
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0EL = document.querySelector('#current--0');
const current1EL = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');


const scoreReset = function(score){
    return score.textContent = 0;
}

const playerActiveAdd = function(player){
    return player.classList.add('player--active');
}

const playerActiveRemove = function(player){
    return player.classList.remove('player--active');
}

const playerContains = function(player){
    return player.classList.contains('player--active');
}


scoreReset(score0EL);
scoreReset(score1EL);
diceEL.classList.add('hidden');

//Rolling the dice - functionality


let currentScore0 = 0;
let currentScore1 = 0;
let playing = true;

btnRoll.addEventListener('click', function(){
    if(playing){
    let diceRoll = Math.trunc(Math.random() * 6 + 1);
    console.log(diceRoll);  
    diceEL.src = `dice-${diceRoll}.png`;
    diceEL.classList.remove('hidden');

    if(diceRoll !== 1 && playerContains(player0)){
        currentScore0 += diceRoll;
        current0EL.textContent = currentScore0;
    } else if(diceRoll === 1 && playerContains(player0)){
        currentScore0 = 0;
        current0EL.textContent = 0;
        // player0.classList.remove('player--active');
        playerActiveRemove(player0);
        // player1.classList.add('player--active');
        playerActiveAdd(player1);
        diceEL.classList.add('hidden');
    }
     else if(diceRoll !== 1 && playerContains(player1)){
        currentScore1 += diceRoll;
        current1EL.textContent = currentScore1;
    } else if(diceRoll === 1 && playerContains(player1)){
        currentScore1 = 0;
        current1EL.textContent = 0;
        // player0.classList.add('player--active');
        // player1.classList.remove('player--active');
        playerActiveAdd(player0);
        playerActiveRemove(player1);
        diceEL.classList.add('hidden');
    };
}});

let scorePlayer0 = 0;
let scorePlayer1 = 0;

btnHold.addEventListener('click', function(){
    if(playerContains(player0)){
        scorePlayer0 += currentScore0;
        score0EL.textContent = scorePlayer0;
        currentScore0 = 0;
        current0EL.textContent = 0;
        if(scorePlayer0 < 20){
        // player0.classList.remove('player--active');
        // player1.classList.add('player--active');
            playerActiveAdd(player1);
            playerActiveRemove(player0);
            diceEL.classList.add('hidden');
        } else{
            playing = false;
            player0.classList.add('player--winner');
        };

    } else {
        scorePlayer1 += currentScore1;
        score1EL.textContent = scorePlayer1;
        currentScore1 = 0;
        current1EL.textContent = 0;
        // player1.classList.remove('player--active');
        // player0.classList.add('player--active');
        if(scorePlayer1 < 20){
            // player0.classList.remove('player--active');
            // player1.classList.add('player--active');
            playerActiveAdd(player0);
            playerActiveRemove(player1);
            diceEL.classList.add('hidden');
        } else{
            playing = false;
            player1.classList.add('player--winner');
        };
    };
});


btnNew.addEventListener('click', function(){
    scorePlayer0 = 0;
    currentScore0 = 0;
    scoreReset(score0EL);
    scoreReset(current0EL);

    scorePlayer1 = 0;
    currentScore1 = 0;
    scoreReset(score1EL);
    scoreReset(current1EL);

    // player1.classList.remove('player--active');
    // player0.classList.add('player--active');
    playerActiveAdd(player0);
    playerActiveRemove(player1);
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    playing = true;
    diceEL.classList.add('hidden');
});