// Add your own custom questions here!
const questions = [
    "Do you know you have the absolute best smile?",
    "And that talking to you makes my whole day better?",
    "Are you ready for the most important question?",
    "Will you be mine? ❤️"
];

let currentQuestion = 0;
const questionText = document.getElementById('question');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

function nextQuestion() {
    // If there are still questions left
    if (currentQuestion < questions.length) {
        questionText.innerText = questions[currentQuestion];
        
        // If it's the final question, show the "No" button
        if (currentQuestion === questions.length - 1) {
            yesBtn.innerText = "YES!";
            noBtn.style.display = "inline-block";
        } else {
            yesBtn.innerText = "Next ❤️";
        }
        currentQuestion++;
    } 
    // When they finally click YES on the last question
    else {
        questionText.innerText = "YAY! You just made me the happiest person ever! 🥰";
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
    }
}

// The logic to make the "No" button run away
function moveNoButton() {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;
    
    // Calculate random positions on the screen
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

// Trigger the move on hover (for computers) and touch (for mobile)
noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('touchstart', function(e) {
    e.preventDefault(); // Prevents them from actually clicking it on mobile
    moveNoButton();
});