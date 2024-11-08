// exam date
const examDate = new Date("2024-12-23T14:00:00Z");

/* function for animating the counter
**
** Parameters:  
** fetchId:   id of the element thats being updated   
** newValue   the new value to be displayed in the updated element
*/
function updateCounter(fetchId, newValue) {
    // retrieves the element by its ID
    const elementId = document.getElementById(fetchId);

    // compares the current text value and the new value
    if (elementId.textContent !== newValue.toString()) {
        // updates the current if they are not the same
        elementId.textContent = newValue;

        // pulse animation
        elementId.classList.remove("pulse"); 
        void elementId.offsetWidth; 
        elementId.classList.add("pulse"); 
    }
}

/* Function for animating the counter
*/
function updateCountdown() {
    const currentTime = new Date();
    const timeLeft = examDate - currentTime;

    // calculating values for each counter
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // update each counter
    updateCounter("dayCounter", days);
    updateCounter("hourCounter", hours);
    updateCounter("minuteCounter", minutes);
    updateCounter("secondCounter", seconds);
}

// update every second
const countdownInterval = setInterval(updateCountdown, 1000);

// initial call to display values right away
updateCountdown();
