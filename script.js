     
        let userAnswers = [];

      
        function toggleMenu() {
            const menu = document.getElementById("menu");
            menu.classList.toggle("show");
        }

     
        function showGenderInput() {
            const nameInputDiv = document.getElementById("nameInputDiv");
            const genderInputDiv = document.getElementById("genderInputDiv");
            nameInputDiv.style.display = "none";
            genderInputDiv.style.display = "block";
        }


        function validateGender() {
            let genderInput = "";
            while (genderInput !== "male" && genderInput !== "female") {
                genderInput = prompt("Please enter your gender (male/female):");
                genderInput = genderInput ? genderInput.toLowerCase() : "";
            }
            document.getElementById("genderInput").value = genderInput; 
            const genderInputDiv = document.getElementById("genderInputDiv");
            const drinkTypeInputDiv = document.getElementById("drinkTypeInputDiv");
            genderInputDiv.style.display = "none";
            drinkTypeInputDiv.style.display = "block";
        }

   
        function showDrinkNameInput() {
            const drinkTypeInputDiv = document.getElementById("drinkTypeInputDiv");
            const drinkNameInputDiv = document.getElementById("drinkNameInputDiv");
            drinkTypeInputDiv.style.display = "none";
            drinkNameInputDiv.style.display = "block";
        }

       
        function welcomeUser() {
            const nameInput = document.getElementById("nameInput").value;
            const genderInput = document.getElementById("genderInput").value.toLowerCase();
            const drinkTypeInput = document.getElementById("drinkTypeInput").value;
            const drinkNameInput = document.getElementById("drinkNameInput").value;

            const userAnswersArray = [nameInput, genderInput, drinkTypeInput, drinkNameInput];
            console.log("User Answers: " + JSON.stringify(userAnswersArray));

            userAnswers = userAnswersArray;

            const outputDiv = document.getElementById("output");
            outputDiv.innerHTML = `
                <p>Welcome, ${nameInput}!</p>
                <ul>
               <li>Gender: ${genderInput}</li>
                <li>Drink Type: ${drinkTypeInput}</li>
                <li>Drink Name: ${drinkNameInput}</li>
                </ul>

            `; }

            