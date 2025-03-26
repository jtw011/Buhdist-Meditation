let wakeLock = null;

// Function to request a wake lock
async function requestWakeLock() {
    if ('wakeLock' in navigator) {
        try {
            wakeLock = await navigator.wakeLock.request('screen');
            console.log('Wake Lock is active');

            // Reapply wake lock if it's released (e.g., due to page visibility changes)
            wakeLock.addEventListener('release', () => {
                console.log('Wake Lock was released');
                wakeLock = null;
            });

        } catch (error) {
            console.error('Wake Lock request failed:', error);
        }
    } else {
        console.log('Wake Lock is not supported in this browser');
    }
}

// Function to release the wake lock
function releaseWakeLock() {
    if (wakeLock !== null) {
        wakeLock.release();
        wakeLock = null;
        console.log('Wake Lock released');
    }
}

// Attach event listeners to all audio elements
document.addEventListener('DOMContentLoaded', () => {
    const audioElements = document.querySelectorAll('audio');

    audioElements.forEach(audio => {
        audio.addEventListener('play', requestWakeLock);
        audio.addEventListener('pause', releaseWakeLock);
        audio.addEventListener('ended', releaseWakeLock);
    });
});
