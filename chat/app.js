const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');
const skipBtn = document.getElementById('skipBtn');

// Access the user's camera and microphone
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(stream => {
        localVideo.srcObject = stream;  // Display local video in the first half
    })
    .catch(error => {
        console.error('Error accessing media devices.', error);
    });

// Dummy users array (simulating multiple users)
const remoteUsers = [
    "assets/placeholder1.mp4",  // These are placeholder video files
    "assets/placeholder2.mp4",
    "assets/placeholder3.mp4"
];

// Functionality for skipping between users
let currentUserIndex = 0;

// Display the first user (placeholder video)
remoteVideo.src = remoteUsers[currentUserIndex];

// Skip functionality to move to the next user
skipBtn.addEventListener('click', () => {
    currentUserIndex = (currentUserIndex + 1) % remoteUsers.length;
    remoteVideo.src = remoteUsers[currentUserIndex];
    console.log('Skipping to next user');
});