'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess'));

*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;

console.log(secretNumber);
// Good practice to store necessary data in the code and not just rely on the DOM
let score = 20; 
let highscore = 0;


const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function (){
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess, typeof(guess));

    if(!guess){
        // document.querySelector('.message').textContent = 'No number!';
        displayMessage('No number!');
    } else if(guess === secretNumber){
        // document.querySelector('.message').textContent = '👏 Correct!';
        displayMessage('👏 Correct!');
        document.querySelector('body').style.backgroundColor = '#60b307';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        
        if(score > highscore){
            highscore = score;
            console.log(highscore);    
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    // When the guess is wrong
    else if(guess !== secretNumber){
        if (score > 1){
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score --;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = 'Game over';
            displayMessage('Game over');
            document.querySelector('.score').textContent = 0;
        }   
    }
  });


    // } else if(guess > secretNumber){
    //     if (score > 1){
    //         document.querySelector('.message').textContent = '📈 Too high!';
    //         score --;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'Game over';
    //         document.querySelector('.score').textContent = 0;
    //     }   
    // } 
    //  else if(guess < secretNumber){
    //     if (score > 1){
    //     document.querySelector('.message').textContent = '📉 Too low!';
    //     score --;
    //     document.querySelector('.score').textContent = score;
    //     } else{
    //         document.querySelector('.message').textContent = 'Game over';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // };

    // if(document.querySelector('.guess').value === '22'){
    // document.querySelector('.message').textContent = 'Correct number!';
    // } else{
    //     document.querySelector('.message').textContent = 'Start guessing...';
    // }


document.querySelector('.again').addEventListener('click', function(){

    score = 20;
    document.querySelector('.score').textContent = '20';

    const secretNumber = Math.trunc(Math.random() * 20) + 1;

    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');

    document.querySelector('.guess').value = '';

    document.querySelector('.number').textContent = '?';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';    

});