var btn = document.querySelector('button');
var p = document.querySelector('p');

btn.addEventListener('click', function(){
    p.textContent = 'Button Clicked';
    console.log('button clicked')
    btn.disabled = true;

})