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
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3NndDR5ZG41MDN5dHBsY21zb2t5ZXlia2t4aXR5Z3pxcDR6amtsdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/v4a3SbvTAcSp7NTpAL/giphy.gif", // Q1: Shy heart
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHJndW93ZXQ1M3B4ZXA1ODN5Nm1paWZ6dDF5aDJ5Z3RxbzB1cWZ1eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/3oz8xAFtqoOUUrsh7W/giphy.gif", // Q2: Throwing hearts
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnd4N2RndG11MnV5amRtNXhyeGhzb3lhbDJ1cjBwOHR4dWQ1OHpxNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/RGoq6xjGrLjOewtDGb/giphy.gif", // Q3: Pleading eyes
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHlna2N4dnVjN3k5d3RyeG01ZnMxdmR5dXZ5M3pydzBpeWsyYjhpMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/l4pTdcifPzcibgnHW/giphy.gif"  // Final Proposal Question
];

// The grand finale sticker
const successGif = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbW14azR4N3I4amtxM3Z4eGt5NXZ4cHpxNjJleG84b3BtMmt5NnV4diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/KztT2c4u8mYYUiBtOh/giphy.gif"; 

let currentQuestion = 0;
const questionText = document.getElementById('question');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const gifSticker = document.getElementById('gif-sticker');
const interactionContent = document.getElementById('interaction-content');
const finalMessage = document.getElementById('final-message');

function nextQuestion() {
    if (currentQuestion < questions.length) {
        questionText.innerText = Array.isArray(questions) ? questions[currentQuestion] : questions;
        
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
        // Transition perfectly into Reshmi's letter setup
        interactionContent.style.display = "none";
        finalMessage.style.display = "block";
        gifSticker.src = successGif;
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
