var container = document.createElement('div');
container.classList.add('container');

var h1 = document.createElement('h1');
h1.textContent = 'Dice Game';

var img1 = document.createElement('img');
var img2 = document.createElement('img');

img1.classList.add('dice');
img2.classList.add('dice');

var result = document.createElement('div');
result.classList.add('result');

var btn = document.createElement('button');
btn.textContent = 'ROLL DICE';

function rollDice(){
    var dice1 = Math.floor(Math.random()*6) + 1;
    var dice2 = Math.floor(Math.random()*6) + 1;

    img1.src = `images/dice${dice1}.png`;
    img2.src = `images/dice${dice2}.png`;

    if(dice1 > dice2){
        result.textContent = `Dice 1 Wins! (${dice1} vs ${dice2})`;
    }
    else if(dice2 > dice1){
        result.textContent = `Dice 2 Wins! (${dice1} vs ${dice2})`;
    }
    else{
        result.textContent = `Draw! (${dice1} vs ${dice2})`;
    }
}

btn.addEventListener('click', rollDice);

rollDice();


container.append(h1, img1, img2, result, btn);
document.body.append(container);    

