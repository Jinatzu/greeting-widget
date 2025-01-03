const hours = new Date().getHours();
const body = document.body;
const greetingElement = document.createElement("h1");
let greetingText = "";
let textColorClass = ""; // New variable to hold the class name for text color

if (hours >= 3 && hours < 12) {
    greetingText = "Good morning";
    body.className = "morning";
    textColorClass = "morning-text";
} else if (hours >= 12 && hours < 16) {
    greetingText = "Good afternoon";
    body.className = "afternoon";
    textColorClass = "afternoon-text";
} else if (hours >= 16 && hours < 20) {
    greetingText = "Good evening";
    body.className = "evening";
    textColorClass = "evening-text";
} else {
    greetingText = "Good night";
    body.className = "night";
    const stars = document.createElement("div");
    stars.className = "stars";
    document.body.appendChild(stars);
    textColorClass = "night-text";
}

// Apply the text color class
greetingElement.textContent = greetingText;
greetingElement.className = textColorClass; // Add the specific text color class
document.body.appendChild(greetingElement);

function generateStars(count) {
    for (let i = 0; i < count; i++) {
        const star = document.createElement("div");
        star.className = "star";

        // Randomize position, size, and opacity
        const randomTop = Math.random() * 100; // 0% to 100% vertically
        const randomLeft = Math.random() * 100; // 0% to 100% horizontally
        const randomSize = Math.random() * 3 + 1; // 1px to 4px size
        const randomOpacity = Math.random() * 0.5 + 0.5; // 50% to 100% opacity

        // Apply styles
        star.style.top = `${randomTop}%`;
        star.style.left = `${randomLeft}%`;
        star.style.width = `${randomSize}px`;
        star.style.height = `${randomSize}px`;
        star.style.opacity = randomOpacity;

        // Append to the body or a container
        document.body.appendChild(star);
    }
}

// Call the function to generate 50 stars
if (document.body.className === "night") {
    generateStars(50);
}

