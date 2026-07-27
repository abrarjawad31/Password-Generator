let passwordDisplay = document.querySelector("#password");
let copyBtn = document.querySelector("#copy");
let lengthSlider = document.querySelector("#length");
let lengthValue = document.querySelector("#lengthValue");
let uppercase = document.querySelector("#uppercase");
let lowercase = document.querySelector("#lowercase");
let numbers = document.querySelector("#numbers");
let symbols = document.querySelector("#symbols");
let generateBtn = document.querySelector("#generate");


// Character sets
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let numberChars = "0123456789";
let symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";


// Show password length while sliding
lengthSlider.addEventListener("input", () => {
    lengthValue.innerText = lengthSlider.value;
});

// Generate Password
generateBtn.addEventListener("click", () => {

    // Check if at least one option is selected
    if (!uppercase.checked && !lowercase.checked && !numbers.checked && !symbols.checked) 
    {
        alert("Please select at least one option!");
        return;
    }

    // Create empty character pool
    let characters = "";

    // Add selected character types
    if (uppercase.checked) {
        characters += upperChars;
    }

    if (lowercase.checked) {
        characters += lowerChars;
    }

    if (numbers.checked) {
        characters += numberChars;
    }

    if (symbols.checked) {
        characters += symbolChars;
    }


    // Generate password
    let generatedPassword = "";

    for (let i = 0; i < lengthSlider.value; i++) {

        let randomIndex = Math.floor(
            Math.random() * characters.length
        );

        generatedPassword += characters[randomIndex];
    }
    
    // Display password
    passwordDisplay.value = generatedPassword;
});


// Copy Password
copyBtn.addEventListener("click", async () => {

    // Check if password exists
    if (passwordDisplay.value === "") {
        alert("Please generate a password first!");
        return;
    }

    await navigator.clipboard.writeText(passwordDisplay.value);

    alert("Password copied to clipboard!");
});