// Set the date and time for the final exam (e.g., December 23, 2024, 2:00 PM UTC)
const examDate = new Date("2024-12-23T14:00:00Z");

// Helper function to update a counter and apply the pulse animation
function updateCounter(id, newValue) {
    const element = document.getElementById(id);

    if (element.textContent !== newValue.toString()) {
        element.textContent = newValue;

        // Trigger the pulse animation
        element.classList.remove("pulse"); // Remove the class to reset the animation
        void element.offsetWidth; // Trigger reflow to restart the animation
        element.classList.add("pulse"); // Re-add the class
    }
}

function updateCountdown() {
    const now = new Date();
    const timeLeft = examDate - now;

    if (timeLeft <= 0) {
        document.querySelector(".timerContainer").innerHTML = "<h2>It's Exam Time!</h2>";
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update each counter with the pulsing animation
    updateCounter("dayCounter", days);
    updateCounter("hourCounter", hours);
    updateCounter("minuteCounter", minutes);
    updateCounter("secondCounter", seconds);
}

// Update every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial call to display values right away
updateCountdown();
