function updateClock() {
    const now = new Date(); // Get the current date and time
    const hours = String(now.getHours()).padStart(2, '0'); // Get hours and pad with zero if needed
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Get minutes and pad
    const seconds = String(now.getSeconds()).padStart(2, '0'); // Get seconds and pad
    
    // Format the time as HH:MM:SS
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    // Display the time in the 'time' div
    document.getElementById('time').textContent = timeString;
    
    // Get the current date
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString(undefined, options);
    
    // Display the date in the 'date' div
    document.getElementById('date').textContent = dateString;
}

// Update the clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);


// Existing code...

// Add animation on load
window.addEventListener('load', function() {
    const clockElement = document.querySelector('.clock');
    clockElement.classList.add('animate-on-load');
});
