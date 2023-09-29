document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector(".menu-button");
    const dropdownContent = document.querySelector(".dropdown-content");

    menuButton.addEventListener("click", function() {
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    });
});

function welcomeUser() {
    const name = document.getElementById("nameInput").value;
    const gender = document.getElementById("genderInput").value.toLowerCase();
    const drinkType = document.getElementById("drinkTypeInput").value;
    const drinkName = document.getElementById("drinkNameInput").value;

    let message = "Welcome, ";

    if (name.trim() === "") {
        alert("Please enter your name.");
        return;
    }

    if (gender === "male" || gender === "female") {
        message += gender === "male" ? "Mr. " : "Ms. ";
    } else {
        console.log("Gender input is not correct. Welcoming without title.");
    }

    message += name + "!";

    if (drinkType && drinkName) {
        message += " You have ordered a " + drinkType + " " + drinkName + ".";
    }

    alert(message);

    if (drinkName) {
        console.log("Customer ordered: " +"  "+name+"  " + drinkName);
    }
}
