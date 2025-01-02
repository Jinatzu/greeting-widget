function getGreeting() {
    const now = new Date();
    const hours = now.getHours();
    let greeting = "";

    if (hours >= 5 && hours < 12) {
        greeting = "Good morning";
    } else if (hours >= 12 && hours < 18) {
        greeting = "Good afternoon";
    } else if (hours >= 18 && hours < 22) {
        greeting = "Good evening";
    } else {
        greeting = "Good night";
    }

    return greeting;
}
