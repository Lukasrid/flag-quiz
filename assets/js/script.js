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

let flags = {
    argentina: `<img src="assets/images/Argentina.gif" alt="Flag of Argentina">`,
    australia: `<img src="assets/images/Australia.gif" alt="Flag of Australia">`,
    belgium: `<img src="assets/images/Belgium.gif" alt="Flag of Belgium">`,
    brazil: `<img src="assets/images/Brazil.gif" alt="Flag of Brazil">`,
    cambodia: `<img src="assets/images/Cambodia.gif" alt="Flag of Cambodia">`,
    canada: `<img src="assets/images/Canada.gif" alt="Flag of Canada">`,
    china: `<img src="assets/images/China.gif" alt="Flag of China">`,
    france: `<img src="assets/images/France.gif" alt="Flag of France">`,
    germany: `<img src="assets/images/Germany.gif" alt="Flag of Germany">`,
    india: `<img src="assets/images/India.gif" alt="Flag of India">`,
    jamaica: `<img src="assets/images/Jamaica.gif" alt="Flag of Jamaica">`,
    norway: `<img src="assets/images/Norway.gif" alt="Flag of Norway">`,
    'south korea': `<img src="assets/images/South Korea.gif" alt="Flag of South Korea">`,
    sweden: `<img src="assets/images/Sweden.gif" alt="Flag of Sweden">`,
    vietnam: `<img src="assets/images/Vietnam.gif" alt="Flag of Vietnam">`,
};

let shuffledFlags, currentFlagIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentFlagIndex++
    setNextFlag()
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