var box = document.querySelector('#box');
var btn = document.querySelector('button');

var cnt = 0;

btn.addEventListener('click', function(){

    box.style.border = 'none';

    cnt++;

    if(cnt%3 === 0){
        box.style.backgroundColor = 'blue';
    }
    else if(cnt%3 === 1){
        box.style.backgroundColor = 'red';
    }
    else{
        box.style.backgroundColor = 'green';
    }

})
