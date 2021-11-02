const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playTo');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

p1Button.addEventListener('click', function(){
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score >= winningScore && p1Score > p2Score + 1) {
            isGameOver = true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
            p1Button.disabled = true;
            p2Button.disabled = true;

    }
    p1Display.textContent = p1Score;
    }
})

p2Button.addEventListener('click', function(){
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score >= winningScore && p2Score > p1Score + 1) {
            isGameOver = true;
            p1Display.classList.add('loser');
            p2Display.classList.add('winner');
            p1Button.disabled = true;
            p2Button.disabled = true;
    }
    p2Display.textContent = p2Score;
    }
})

winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    p1Score = 0;
    p2Score = 0;
    isGameOver = false;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('loser', 'winner');
    p2Display.classList.remove('loser', 'winner');
    p1Button.disabled = false;
    p2Button.disabled = false;
}