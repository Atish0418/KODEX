var box = document.querySelector('#box');
var btn = document.querySelector('button');

var flag = false;

btn.addEventListener('click', function(){
    if(flag == false){
        box.style.border = 'none';
        flag = true;
    }
    else{
        box.style.border = '2px solid #ffff';
        flag = false;
    }
})
