// script.js

// Set the date and time for the final exam (e.g., December 15, 2024, 9:00 AM)
const examDate = new Date("2024-12-23T14:00:00Z");

function updateCountdown() {
    const now = new Date();
    const timeLeft = examDate - now;

    if (timeLeft <= 0) {
        document.querySelector(".timer").innerHTML = "<h2>It's Exam Time!</h2>";
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("dayCounter").textContent = days;
    document.getElementById("hourCounter").textContent = hours;
    document.getElementById("minuteCounter").textContent = minutes;
    document.getElementById("secondCounter").textContent = seconds;
}

// Update every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial call to display values right away
updateCountdown();
