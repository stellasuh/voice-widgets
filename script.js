const colors = ['color2', 'color3', 'color4'];
const audioFiles = [
    { src: '7184037680177482522.mp3', transcription: '“It will be okay, you’ll be okay, I promise./nAnd if stress creeps up on you again, just remember to breathe.”' },
    { src: './motivation2.mp3', transcription: 'Second motivational message.' }
];

let colorIndex = 0;
let currentFileIndex = 0;

const audioElement = document.getElementById('audio');
const voiceWidget = document.getElementById('voiceWidget');
const transcriptionText = document.getElementById('transcription');

function playNextFile() {
    if (audioFiles.length === 0) return;

    const file = audioFiles[currentFileIndex];
    audioElement.src = file.src; // Set the MP3 URL as the source of the audio element
    transcriptionText.textContent = file.transcription; // Update transcription

    // Set background color
    voiceWidget.className = 'voice-widget ' + colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;

    // Play audio
    audioElement.play();
}

// Handle audio end event
audioElement.addEventListener('ended', () => {
    currentFileIndex = (currentFileIndex + 1) % audioFiles.length;
    playNextFile();
});

// Start playing the first file
playNextFile();