var boxContainer = document.querySelector("#box-container");

for(let i = 1; i<=5; i++){
    var box = document.createElement("div")

    box.classList.add("box");

    box.setAttribute("data-id", i);

    box.innerText = i;

    boxContainer.appendChild(box);
}

boxContainer.addEventListener('click', function(elem){
    if(elem.target.classList.contains("box")){
        var id = elem.target.getAttribute("data-id");
        console.log("Clicked box ID: ", id);
        elem.target.remove();
    }
})