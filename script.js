// Questions sequence
const questions = [
    "Do you know you have the absolute best smile?",
    "And that talking to you makes my whole day better?",
    "Are you ready for the most important question?",
    "Will you be mine? ❤️"
];

// Interactive high-quality Giphy love stickers mapped out for each stage
const gifs = [
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWoxZXl2YXh5dG90M3Rxbmd5NTh1M3B0ZzJpNTF6cmx1b212ZXdlayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif", // Intro: Cute wave
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmRyYzMzYmlxbjI5anA5bnBwM3Z5ZWh4MWY2anlseDZianp3ZGZ0aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aCSURh6OnUyXdOuYcq/giphy.gif", // Q1: Shy heart
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExODNubjVscHVmdWh0MXF1dWhiNnFzbXVzM3VqcHh0OHZmbDhuNXhlaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IcJ6n6VJNjRNS/giphy.gif", // Q2: Throwing hearts
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTE1a3lnd2tjOHVjdThwNHdoYzA0M2NpOWRsb2R4b2p3bm4xd3F4eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L3zUGGx1DgLo54951b/giphy.gif", // Q3: Pleading eyes
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2x1cmh4MmRtN2JicGZ2MXVwcDVybmRsZmQ3cmV2bTFwcjVkM21pZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/abZ5exGrse0W4/giphy.gif"  // Final Proposal Question
];

let currentQuestion = 0;
const questionText = document.getElementById('question');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const gifSticker = document.getElementById('gif-sticker');
const gifContainer = document.getElementById('gifContainer');
const interactionContent = document.getElementById('interaction-content');
const finalMessage = document.getElementById('final-message');

function nextQuestion() {
    if (currentQuestion < questions.length) {
        questionText.innerText = questions[currentQuestion];
        
        // Dynamically shift stickers based on the current step
        gifSticker.src = gifs[currentQuestion + 1];
        
        if (currentQuestion === questions.length - 1) {
            yesBtn.innerText = "YES!";
            noBtn.style.display = "inline-block";
        } else {
            yesBtn.innerText = "Next ❤️";
        }
        currentQuestion++;
    } else {
        // Hide both the question area AND the GIF container completely
        interactionContent.style.display = "none";
        gifContainer.style.display = "none";
        
        // Show the heartfelt letter
        finalMessage.style.display = "block";
    }
}

// Prank logic for the escaping 'No' button
function moveNoButton() {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('touchstart', function(e) {
    e.preventDefault();
    moveNoButton();
});
