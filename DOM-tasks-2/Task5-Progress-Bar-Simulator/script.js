var btn = document.querySelector('button');
var progressBar = document.querySelector('.progress-bar');
var resetBtn = document.querySelector('#resetBtn');
var percentage = document.querySelector('#percentage');

var progress = 0;

btn.addEventListener('click', function(){

    if(progress >= 100) return;

    var randomIncrease = Math.floor(Math.random() * 21) + 10;
    progress  = progress + randomIncrease;

    if(progress > 100){
        progress = 100;
    }

    progressBar.style.width = progress + "%";
    percentage.innerText = progress + "%";

})

resetBtn.addEventListener('click', function(){
    progress = 0
    progressBar.style.width = "0%";
    percentage.innerText = "0%";
})