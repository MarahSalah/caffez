function welcomeUser() {
    const name = document.getElementById("nameInput").value;
    const age = document.getElementById("ageInput").value;
    const drinkTypeInputs = document.querySelectorAll('input[name="drinkType"]:checked');
    const drinkName = document.getElementById("drinkNameInput").value;

    let message = "Welcome, ";

    if (name.trim() === "") {
        alert("Please enter your name.");
        return;
    }

    if (!age || isNaN(age)) {
        alert("Please enter a valid age.");
        return;
    }

    if (drinkTypeInputs.length === 0) {
        alert("Please select at least one drink type (hot or cold).");
        return;
    }

    const selectedDrinkTypes = [];
    for (const drinkTypeInput of drinkTypeInputs) {
        selectedDrinkTypes.push(drinkTypeInput.value);
    }

    if (!drinkName) {
        alert("Please enter the name of the drink you want.");
        return;
    }

    message += `${name}! You are ${age} years old. You have ordered ${selectedDrinkTypes.join(" and ")} ${drinkName}.`;

    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = message;
    outputDiv.style.display = "block";
    console.log(`Customer ordered: ${name} ${drinkName}`);
}
