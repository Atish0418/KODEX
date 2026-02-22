var btn = document.querySelector('button');
var gallery = document.querySelector('.gallery');

var images = [
    "https://i.pinimg.com/1200x/b9/4a/f8/b94af859ceadeccabb911286693e50b5.jpg",
    "https://i.pinimg.com/736x/42/b1/68/42b1683fe714171bcb545b53e42f9b17.jpg",
    "https://i.pinimg.com/736x/a0/38/e3/a038e30a8c19b42c2e92f94765c5640b.jpg",
    "https://i.pinimg.com/736x/6b/c2/44/6bc244ef261f113da7bfcc3bea8bedc1.jpg",
    "https://i.pinimg.com/736x/6b/c2/44/6bc244ef261f113da7bfcc3bea8bedc1.jpg",
    "https://i.pinimg.com/736x/fb/8e/cd/fb8ecd5a95f83e03607fd8c94c2748cf.jpg",
    "https://i.pinimg.com/736x/d9/57/66/d95766800ed1539d0046607083656d9e.jpg",
    "https://i.pinimg.com/736x/ae/d8/d5/aed8d52e70b0330d1c4ef621aa84bcb3.jpg"
]

btn.addEventListener('click', function(){
    var randomIndex = Math.floor(Math.random()*images.length);

    var img = document.createElement('img');

    img.src = images[randomIndex];
    
    gallery.innerHTML = "";

    gallery.appendChild(img);

    console.log(img.getAttribute('src'));   
})