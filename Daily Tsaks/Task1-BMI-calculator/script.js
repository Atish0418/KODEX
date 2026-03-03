var startBtn = document.querySelector("#startBtn")
var backBtn = document.querySelector("#backBtn");
var home = document.querySelector(".home");
var fromPage = document.querySelector(".from-page");

startBtn.addEventListener('click', function(){
    home.style.display = 'none';
    fromPage.style.display = 'flex';
})

backBtn.addEventListener('click', function(){
    fromPage.style.display = 'none';
    home.style.display = 'flex'
})

// swip back functionality

var startX = 0;
var endX = 0;

fromPage.addEventListener("touchstart", function(elem){
    startX = elem.touches[0].clientX;
})

fromPage.addEventListener("touchend", function(elem){
    endX = elem.changedTouches[0].clientX;

    if(endX - startX > 80){
        fromPage.style.display = 'none';
        home.style.display = 'flex';
    }

    if(startX - endX > 80){
        fromPage.style.display = 'none';
        home.style.display = 'flex';
    }
})