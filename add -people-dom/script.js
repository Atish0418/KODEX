var btn = document.querySelector('button');
var box = document.querySelector('#box');


var peopleImages = [
    "https://i.pinimg.com/736x/fc/6c/bf/fc6cbf94b4022638f49a3eb04d5c5b0f.jpg",
    "https://i.pinimg.com/474x/4e/30/ca/4e30ca01a6a5d74899b0216e2ee0dc13.jpg",
    "https://i.pinimg.com/736x/64/aa/17/64aa17d64b3784e5317f040b673220c0.jpg",
    "https://i.pinimg.com/236x/7d/cf/97/7dcf9769dfd3aa9007e2ce27887615b5.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Z6k2bl02MHD3ajoogSLRWiBA5SSa1eghHw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7KCp11Ym_HJgRr0LmNQX6UfRDvnq7rKNuw&s",
    "https://i.pinimg.com/736x/2f/71/ac/2f71ac6517a2e51bf52126660d2e9e55.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx5nXewS-J_433KubaMJ078uWRasexVvj3lA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHVFeuXbEAtZzNOtqK0EwGHFE1sowInKylpA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFnvr8J9hiubEUrf2-WCiw7ItX8dnVeol5-Q&s",
    "https://i.pinimg.com/736x/bd/1a/a7/bd1aa7dfee7b6735fd924c35df248685.jpg",
    "https://i.pinimg.com/736x/1c/ee/d1/1ceed173d4e5b1bbe2cf2ffd3216dd44.jpg",
]

btn.addEventListener('click', function(){

    // pick random image from array
    var randomIndex = Math.floor(Math.random() * peopleImages.length);
    var randomImage = peopleImages[randomIndex];

    // create img element
    var img = document.createElement('img');
    img.src = randomImage;

    // style it
    img.style.width = "60px";
    img.style.height = "60px";
    // img.style.borderRadius = "50%";
    img.style.position = "absolute";

    // make box relative (important)
    box.style.position = "relative";

    // random position inside box
    var x = Math.random() * (box.clientWidth - 60);
    var y = Math.random() * (box.clientHeight - 60);

    img.style.left = x + "px";
    img.style.top = y + "px";

    // add to box
    box.appendChild(img);
});
