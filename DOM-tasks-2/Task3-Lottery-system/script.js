var app = document.querySelector('#app');

//create card container
var card = document.createElement("div");
card.classList.add("lottery-card");

// title
var title = document.createElement('h1');
title.textContent = "Lottery System";

// input
var input = document.createElement("input");
input.type = "Number";
input.placeholder = "Enter number (1-50)";
input.min = 1;
input.max = 50;

// button
var button = document.createElement("button");
button.textContent = "CHECK RESULT";

// RESULT
var result = document.createElement('div');
result.classList.add('result');

button.addEventListener('click', function(){
    var userNumber = Number(input.value);

    if(userNumber < 1 || userNumber > 50 || !userNumber){
        result.textContent = "Enter a number between 1 to 50";
        return;
    }

    // random number
    var randomNumber = Math.ceil(Math.random() * 50);

    if(userNumber == randomNumber){
        result.textContent = `You Won! Lucky Number: ${randomNumber}`;
        card.style.background = "#4ade40";
    }
    else{
        result.textContent = `Try Again! Winning Number: ${randomNumber}`;
        card.style.background = "#ff6b6b";
    }
});


card.append(title, input, button, result);
app.append(card);