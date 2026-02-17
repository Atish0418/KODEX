var teams = [
    {
        name: "CSK",
        primaryColor: "yellow",
        secondaryColor: "green",
        trophies: [2010, 2011, 2018, 2021, 2023]
    },
    {
        name: "RCB",
        primaryColor: "red",
        secondaryColor: "black",
        trophies: [2025]
    },
    {
        name: "MI",
        primaryColor: "blue",
        secondaryColor: "gold",
        trophies: [2013, 2015, 2017, 2019, 2020]
    },
    {
        name: "KKR",
        primaryColor: "purple",
        secondaryColor: "gold",
        trophies: [2012, 2014, 2024]
    },
    {
        name: "SRH",
        primaryColor: "orange",
        secondaryColor: "black",
        trophies: [2016]
    },
    {
        name: "RR",
        primaryColor: "pink",
        secondaryColor: "blue",
        trophies: [2008]
    },
    {
        name: "GT",
        primaryColor: "navy",
        secondaryColor: "orange",
        trophies: [2022]
    },
    {
        name: "LSG",
        primaryColor: "lightblue",
        secondaryColor: "orange",
        trophies: []
    },
    {
        name: "PBKS",
        primaryColor: "crimson",
        secondaryColor: "white",
        trophies: []
    },
    {
        name: "DC",
        primaryColor: "darkblue",
        secondaryColor: "red",
        trophies: []
    }
];


var btn = document.querySelector('button');
var result = document.querySelector('p');
var resultBox = document.querySelector('.result');
var body = document.body;
var card = document.querySelector('.card');


btn.addEventListener('click', function(){
    var randomIdx = Math.floor(Math.random()*teams.length);
    var winner = teams[randomIdx];

    console.log(winner.name)

    body.style.backgroundColor = winner.primaryColor;

    result.textContent = winner.name;
    resultBox.style.backgroundColor = winner.secondaryColor;
    
    if(winner.name === "RCB"){
        result.style.color = 'red';
    }
    else if(winner.name === "CSK"){
        result.style.color = 'yellow';
    }
    else if(winner.name === "SRH"){
        result.style.color = 'white';
    }
    else{
        result.style.color = 'black'
    }


    var nextTrophy = winner.trophies.length+1;

    var oldDesc = document.querySelector('.desc');
    if(oldDesc){
        oldDesc.remove();
    }


    var desc = document.createElement('h3');
    desc.classList.add("desc");
    desc.style.marginTop = "30px"

    desc.textContent = winner.name + " will win their " + getOrdinal(nextTrophy) + " trophy in 2026!!!"

    card.appendChild(desc);


})


function getOrdinal(n) {
    if (n % 10 === 1 && n % 100 !== 11) return n + "st";
    if (n % 10 === 2 && n % 100 !== 12) return n + "nd";
    if (n % 10 === 3 && n % 100 !== 13) return n + "rd";
    return n + "th";
}
