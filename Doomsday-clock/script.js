let tickSound = new Audio("tick.mp3")

function selector(id){
    return document.getElementById(id);
}

// clock hands
let secondHand = selector("secHand")
let minuteHand = selector("minHand")
let hourHand = selector("hourHand")


// clock digits
let hourTxt = selector("hours")
let minuteTxt = selector("minutes")
let secondTxt = selector("seconds")


// UI time updation
function updateTime(){
    let time = new Date();

    let currentHour = time.getHours()%12;
    let currentMin = time.getMinutes();
    let currentSec = time.getSeconds();


    hourTxt.textContent = `${currentHour}`.padStart(2, "0")
    minuteTxt.textContent = `${currentMin}`.padStart(2, "0")
    secondTxt.textContent = `${currentSec}`.padStart(2, "0");

    let hdeg = (360 / 12) * currentHour -90;
    let sdeg = (360 / 60) * currentSec -90;
    let mdeg = (360 / 60) * currentMin -90;
    

    secondHand.style.transform = `translateY(-50%) rotate(${sdeg}deg)`;
    minuteHand.style.transform = `translateY(-50%) rotate(${mdeg}deg)`;
    hourHand.style.transform = `translateY(-50%) rotate(${hdeg}deg)`;
}

updateTime();

setInterval(()=>{    
    updateTime();
    // tickSound.currentTime = 5;
    // tickSound.play();
}, 1000)
