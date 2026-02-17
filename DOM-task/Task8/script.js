var box = document.querySelector('#box');

box.addEventListener('mouseenter', function(){
    box.style.backgroundColor = 'lightseagreen';
})

box.addEventListener('mouseleave', function(){
    box.style.backgroundColor = 'crimson';
})