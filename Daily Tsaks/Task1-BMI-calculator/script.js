var startBtn = document.querySelector("#startBtn");
var backBtn = document.querySelector("#backBtn");
var resultBackBtn = document.querySelector("#resultBackBtn");
var calculateBtn = document.querySelector("#calculateBtn");


var home = document.querySelector(".home");
var fromPage = document.querySelector(".from-page");
var resultPage = document.querySelector(".result-page");


var nameInput = document.querySelector("#name");
var addressInput = document.querySelector("#address");
var dobInput = document.querySelector("#dob");
var heightInput = document.querySelector("#height");
var weightInput = document.querySelector("#weight");


var maleSelect = document.querySelector("#maleSelect");
var femaleSelect = document.querySelector("#femaleSelect");
var resultGenderImage = document.querySelector("#resultGenderImage");

var selectedGender = "";

var resultName = document.querySelector("#resultName");
var resultAddress = document.querySelector("#resultAddress");
var resultBMI = document.querySelector("#resultBMI");
var resultAge = document.querySelector("#resultAge");
var resultHeight = document.querySelector("#resultHeight");
var resultWeight = document.querySelector("#resultWeight");
var resultCategory = document.querySelector("#resultCategory");
var resultRange = document.querySelector("#resultRange");
var resultDescription = document.querySelector("#resultDescription");



window.onload = function () {

    var savedData = JSON.parse(localStorage.getItem("bmiData"));

    if (savedData) {

        resultName.innerText = savedData.name;
        resultAddress.innerText = savedData.address;
        resultBMI.innerText = savedData.bmi;
        resultAge.innerText = savedData.age + " yrs";
        resultHeight.innerText = savedData.height + " cm";
        resultWeight.innerText = savedData.weight + " kg";

        resultCategory.innerText = savedData.category;
        resultRange.innerText = savedData.range;
        resultDescription.innerText = savedData.description;

        if (savedData.gender === "male") {
            resultGenderImage.src = "./assetes/male2.png";
        } else {
            resultGenderImage.src = "./assetes/female-2.png";
        }

        home.style.display = "none";
        resultPage.style.display = "flex";
    }
};


startBtn.onclick = function () {
    home.style.display = "none";
    fromPage.style.display = "flex";
};

backBtn.onclick = function () {
    fromPage.style.display = "none";
    home.style.display = "flex";
};

resultBackBtn.onclick = function () {
    resultPage.style.display = "none";
    fromPage.style.display = "flex";
};



maleSelect.onclick = function () {
    selectedGender = "male";
    maleSelect.classList.add("active");
    femaleSelect.classList.remove("active");
};

femaleSelect.onclick = function () {
    selectedGender = "female";
    femaleSelect.classList.add("active");
    maleSelect.classList.remove("active");
};


calculateBtn.onclick = function () {

    var name = nameInput.value;
    var address = addressInput.value;
    var height = parseFloat(heightInput.value);
    var weight = parseFloat(weightInput.value);
    var dob = dobInput.value;

    if (!name || !height || !weight || !dob || !selectedGender) {
        alert("Please fill all fields");
        return;
    }

    var bmi = (weight / ((height / 100) * (height / 100))).toFixed(1);

    var birth = new Date(dob);
    var today = new Date();

    var age = today.getFullYear() - birth.getFullYear();
    var m = today.getMonth() - birth.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    var category, range, description;

    if (bmi < 18.5) {
        category = "Underweight";
        range = "(BMI less than 18.5)";
        description = "Being underweight may indicate insufficient body fat.";
    }
    else if (bmi < 25) {
        category = "Normal";
        range = "(BMI 18.5 - 24.9)";
        description = "You have a healthy body weight.";
    }
    else if (bmi < 30) {
        category = "Overweight";
        range = "(BMI 25 - 29.9)";
        description = "You may be carrying extra weight.";
    }
    else {
        category = "Obese";
        range = "(BMI 30+)";
        description = "High BMI may increase risk of health issues.";
    }

    resultName.innerText = name;
    resultAddress.innerText = address;
    resultBMI.innerText = bmi;
    resultAge.innerText = age + " yrs";
    resultHeight.innerText = height + " cm";
    resultWeight.innerText = weight + " kg";

    resultCategory.innerText = category;
    resultRange.innerText = range;
    resultDescription.innerText = description;

    if (selectedGender === "male") {
        resultGenderImage.src = "./assetes/male2.png";
    } else {
        resultGenderImage.src = "";
    }


    var bmiData = {
        name: name,
        address: address,
        age: age,
        height: height,
        weight: weight,
        bmi: bmi,
        category: category,
        range: range,
        description: description,
        gender: selectedGender
    };

    localStorage.setItem("bmiData", JSON.stringify(bmiData));

    fromPage.style.display = "none";
    resultPage.style.display = "flex";
};

let startX = 0;
let endX = 0;

function enableSwipe(page, backFunction) {

    page.addEventListener("touchstart", function (e) {
        startX = e.touches[0].clientX;
    });

    page.addEventListener("touchend", function (e) {
        endX = e.changedTouches[0].clientX;

        if (endX - startX > 80) {
            backFunction();
        }
    });
}

enableSwipe(fromPage, function () {
    fromPage.style.display = "none";
    home.style.display = "flex";
});

enableSwipe(resultPage, function () {
    resultPage.style.display = "none";
    fromPage.style.display = "flex";
});