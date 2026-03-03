var input = document.querySelector('#textInput');
var p = document.querySelector('p');

input.addEventListener('input', function(){
    p.textContent = input.value;
})