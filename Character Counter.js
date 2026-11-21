
// Select the textarea
let textInput = document.getElementById("textInput");

// Input event
textInput.addEventListener("input", countCharacters);

// Function to count characters
function countCharacters() {

    let text = textInput.value;

    // Count characters
    let characters = text.length;

    // Count words
    let words = text.trim() === ""
        ? 0
        : text.trim().split(/\s+/).length;

    // Remaining characters
    let remaining = 200 - characters;

    // Display results
    document.getElementById("charCount").innerHTML =
        characters;

    document.getElementById("wordCount").innerHTML =
        words;

    document.getElementById("remaining").innerHTML =
        remaining;
}

// Function to clear text
function clearText() {

    textInput.value = "";

    countCharacters();
}
