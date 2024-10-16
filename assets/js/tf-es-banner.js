const banner = document.querySelector('.banner h2');
// Select the element
let wave = document.querySelector('#wave');


// Set a delay after the animation completes (in milliseconds)
// Add an event listener for when the animation ends
const delayAfterAnimation = 8000; // Example: 3 seconds
banner.addEventListener('animationend', () => {
    // Set a timeout to remove the animation after the delay
    setTimeout(() => {
        banner.style.animation = 'none';
        wave.style.opacity = "1";
        wave.style.margin = "-13px"; // This will end the animation
    }, delayAfterAnimation);
});

// Set a delay after the animation completes (in milliseconds)

// Add an event listener for when the animation ends
banner.addEventListener('animationend', () => {
    // Set a timeout to remove the animation after the delay
    setTimeout(() => {
        banner.style.animation = 'none'; // This will end the animation
    }, delayAfterAnimation);
});

// Get the video and unmute button elements
const video = document.getElementById('video');
const unmuteButton = document.getElementById('unmuteButton');

// Add event listener to unmute the video on button click
unmuteButton.addEventListener('click', () => {
    if (video.muted) {
        video.muted = false; // Unmute the video
        unmuteButton.textContent = 'Mute'; // Change button text to "Mute"
    } else {
        video.muted = true; // Mute the video again if clicked
        unmuteButton.textContent = 'Unmute'; // Change button text to "Unmute"
    }
});
