var box = document.querySelector('#box');
var leftBtn = document.querySelector('#left');
var rightBtn = document.querySelector('#right');

var angel = 0;

rightBtn.addEventListener('click', function () {
    angel = angel + 45;
    box.style.transform = `rotate(${angel}deg)`;
})

leftBtn.addEventListener('click', function () {
    angel = angel - 45;
    box.style.transform = `rotate(${angel}deg)`;
})


