var p = document.querySelector('p');
var btn = document.querySelector('button');

var flag = false;

btn.addEventListener('click', function(){
    if(!flag){
        p.innerHTML = 'Welcome';
        flag = true;
    }
    else{
        p.innerHTML = 'Hello';
        flag = false;
    }
})