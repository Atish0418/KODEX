var btn = document.createElement('button');
btn.textContent = "GENETATE CARD";
btn.classList.add("generator-btn");

var container = document.createElement('div');
container.classList.add("card-container");

var idCounter = 0;

btn.addEventListener('click', function(){

    idCounter++;

    var card = document.createElement('div');
    card.classList.add('card');

    // Random RGB
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    card.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    // Random size

    var maxSize = window.innerWidth < 500 ? 120 : 300;
    var minSize = window.innerWidth < 500 ? 80 : 150;

    var height = Math.floor(Math.random() * (maxSize - minSize)) + minSize;
    var width = Math.floor(Math.random() * (maxSize - minSize)) + minSize;

    card.style.height = height + "px";
    card.style.width = width + "px";

    card.setAttribute("data-id", idCounter);

    card.textContent = `ID : ${idCounter}`;

    container.appendChild(card);
})

document.body.append(btn, container);