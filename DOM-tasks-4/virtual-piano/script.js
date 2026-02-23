var keys = document.querySelectorAll('.key');

function playSound(note){
    var audio = new Audio(`sounds/${note}.mp3`);
    audio.currentTime = 0;
    audio.play();
}

function activateKey(dets){
    dets.classList.add('active');

    setTimeout(function(){
        dets.classList.remove('active');
    }, 100)
}

document.addEventListener('keydown', function(dets){
    var pressedKey = dets.key.toLowerCase();

    keys.forEach(key =>{
        if(key.dataset.key === pressedKey){
            playSound(key.dataset.note);
            activateKey(key);
        }
    })
})

keys.forEach(key => {
    key.addEventListener("click", () => {
        playSound(key.dataset.note);
        activateKey(key);
    });
});