var statuss = document.querySelector('.status');
var full = document.querySelector('.full');
var growthDiv = document.querySelector('#growth');

var grow = 0;

statuss.addEventListener('click', function(){
    full.style.display  = 'block';

    var int = setInterval(function(){
        grow++;
        growthDiv.style.width = grow + "%";
    },30)

    setTimeout(function(){
        full.style.display = 'none';
        clearInterval(int);
        grow = 0;
    }, 3000)
})

