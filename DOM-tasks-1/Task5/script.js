var body = document.body;
var btn = document.querySelector('button');
var h1 = document.querySelector('h1');

var flag = false;

btn.addEventListener('click', function () {
    if (flag == false) {
        h1.style.color = '#111';
        body.style.backgroundColor = '#ffff'
        btn.style.backgroundColor = '#111';
        btn.style.color = '#ffff'
        flag = true
    }
    else {
        h1.style.color = '#ffff';
        body.style.backgroundColor = '#111'
        btn.style.backgroundColor = '#ffff';
        btn.style.color = '#111'
        flag = false;
    }
})