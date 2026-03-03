var form = document.querySelector('#itemForm');
var inventoryList = document.querySelector('#inventoryList');
var searchInput = document.querySelector("#search");

var inventory = JSON.parse(localStorage.getItem("inventory")) || [];
var editId = null;

form.addEventListener('submit', function (e) {

    e.preventDefault()

    var name = document.querySelector("#name").value;
    var quantity = parseInt(document.querySelector("#quantity").value);
    var price = parseFloat(document.querySelector("#price").value);
    var category = document.querySelector("#category").value;


    var status;
    if (quantity === 0) {
        status = "OUT";
    }
    else if (quantity <= 5) {
        status = "LOW";
    }
    else {
        status = "IN_STOCK";
    }

    if (editId != null) {
        inventory = inventory.map(function (item) {
            if(item.id === editId){
                return{
                    id: editId,
                    name: name,
                    quantity: quantity,
                    price: price,
                    category: category,
                    status: status
                }
            }
            else{
                return item;
            }
        })
        editId = null;
        form.querySelector("button").textContent = "ADD ITEM";
    }
    else{
        inventory.push({
            id: Date.now(),
            name:name,
            quantity:quantity,
            price:price,
            category:category,
            status:status
        });
    }

    localStorage.setItem("inventory", JSON.stringify(inventory));
    form.reset();
    renderItems()

})

function renderItems(){
    inventoryList.innerHTML = "";

    inventory.forEach(function(item){
        var card = document.createElement("div");
        card.classList.add("card");


        if(item.status === "LOW"){
            card.classList.add("low");
        }

        if(item.status === "OUT"){
            card.classList.add("out");
        }

        card.innerHTML = `
           <div>
               <h3>${item.name}</h3>
               <p>Qty: ${item.quantity}</p>
               <p>₹${item.price}</p>
               <p>${item.category}</p>
           </div>
           <div>
               <button onclick="editItem(${item.id})">EDIT</button>
               <button onclick="deleteItem(${item.id})">DELETE</button>
           </div>
        `;

        inventoryList.appendChild(card);
    })

    updateStats();
}

function editItem(id){
    var item = inventory.find(function(item){
        return item.id === id;
    });

    document.querySelector("#name").value = item.name;
    document.querySelector("#quantity").value = item.quantity;
    document.querySelector("#price").value = item.price;
    document.querySelector("#category").value = item.category;

    editId = id;
    form.querySelector("button").textContent = "UPDATE ITEM";
}

function updateStats(){

    var totalItems = inventory.length;

    var lowCount = inventory.filter(function(item){
        return item.status === "LOW";
    }).length;

    var totalValue = inventory.reduce(function(sum, item){
        return sum + (item.quantity * item.price);
    }, 0);

    document.querySelector("#totalItems").textContent = "ITEMS: " + totalItems;
    document.querySelector("#lowStock").textContent = "LOW: " + lowCount;
    document.querySelector("#totalValue").textContent = "VALUE: ₹" + totalValue;
}

function deleteItem(id){
    inventory = inventory.filter(function(item){
        return item.id !== id;
    });

    localStorage.setItem("inventory", JSON.stringify(inventory));
    renderItems();
}

renderItems();
