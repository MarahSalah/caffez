let userAnswers = [];


function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

function getNameInput() {
    const name = prompt("Please enter your name:");
    if (name) {
        userAnswers.push(name);
        getGenderInput();
    }
}


function getGenderInput() {
    let gender = prompt("Please enter your gender (Male/Female):");
    while (true) {
        if (gender.toLowerCase() === "male" || gender.toLowerCase() === "female") {
            userAnswers.push(gender);
            getDrinkTypeInput();
            break;
        } else {
            alert("Please enter 'Male' or 'Female'.");
            gender = prompt("Please enter your gender (Male/Female):");
        }
    }
}


function getDrinkTypeInput() {
    let drinkType = prompt("Would you like a hot or cold drink?");
    while (drinkType.toLowerCase() !== "hot" && drinkType.toLowerCase() !== "cold") {
        alert("Please enter 'Hot' or 'Cold'.");
        drinkType = prompt("Would you like a hot or cold drink?");
    }
    userAnswers.push(drinkType);
    getDrinkNameInput();
}


function getDrinkNameInput() {
    const drinkName = prompt("What is the name of the drink you want?");
    if (drinkName) {
        userAnswers.push(drinkName);
        displayResults();
    }
}


function displayResults() {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
        <p>Welcome, ${userAnswers[0]}!</p>
        <p>Gender: ${userAnswers[1]}</p>
        <p>Drink Type: ${userAnswers[2]}</p>
        <p>Drink Name: ${userAnswers[3]}</p>
    `;
}


getNameInput();