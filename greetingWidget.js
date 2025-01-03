const hours = new Date().getHours();
let currentClass = document.body.className; // Preserve existing class
let greetingText = "";

// Determine greeting and class
if (hours >= 5 && hours < 12) {
    greetingText = "Good morning!";
    currentClass = "morning";
} else if (hours >= 12 && hours < 16) {
    greetingText = "Good afternoon!";
    currentClass = "afternoon";
} else if (hours >= 16 && hours < 20) {
    greetingText = "Good evening!";
    currentClass = "evening";
} else {
    greetingText = "Good night!";
    currentClass = "night";
}

// Apply class and greeting
document.body.className = currentClass; // Update the class on the body
const greetingElement = document.createElement("h1");
greetingElement.textContent = greetingText;
document.body.appendChild(greetingElement);
