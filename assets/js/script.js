const startButton = document.getElementById('start');
const nextButton = document.getElementById('next');
const flags = document.getElementById('flag');
const answer = document.getElementById('answer-box');
const submit = document.getElementById('submit');
const score = document.getElementById('score-count')
const sbox = document.getElementById('sbox')

document.addEventListener("DOMContentLoaded", function () {
    nextButton.style.visibility = 'hidden';
    nextButton.style.display = 'none';
    answer.style.visibility = 'hidden';
    answer.style.display = 'none';
    submit.style.visibility = 'hidden';
    submit.style.display = 'none';
    sbox.style.visibility = 'hidden';
    sbox.style.display = 'none';
});

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.style.visibility = 'hidden';
    startButton.style.display = 'none';
    nextButton.style.visibility = 'visible';
    nextButton.style.display = 'inline';
    answer.style.visibility = 'visible';
    answer.style.display = 'inline';
    submit.style.visibility = 'visible';
    submit.style.display = 'inline';
    sbox.style.visibility = 'visible';
    sbox.style.display = 'inline';
}

function submitAnswer() {

}

function nextQuestion() {

}