'use strict';
/* 
1. when color-changer class 
is clicked, change to red

2.user form submission of number
*/

function colorSwap(){
    const switchTheColor = document.querySelectorAll('.color-change');
     for (const swap of switchTheColor){
        swap.classList.add('blue');
    }
}

function numberValidate(evt){
    evt.preventDefault();

    const inputNum = document.querySelector('#number-input');
    const userNum = Number(inputNum.value);
    
    const formReturn = document.querySelector('#formFeedback')
if (isNaN(userNum) || userNum >= 10){
    formReturn.innerText = 'Please enter a smaller digit'
    }
else if ( userNum === typeof userNum === undefined){
    formReturn.innerText = 'Please enter a number!';
    }
else {
    formReturn.innerText = 'This is a great number!';

    }
}
// event handlers
document.querySelector('.color-changer').addEventListener('click',colorSwap);
document.querySelector('.number-form').addEventListener('click',numberValidate);