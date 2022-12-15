const startButton = document.getElementById('start');
const nextButton = document.getElementById('next');
//const answer = document.getElementById('answer-box');
//const submit = document.getElementById('submit');
const score = document.getElementById('score-count')
const sbox = document.getElementById('sbox')
let currentFlag;



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

/* Hides start button and reveals the other elements of the game.
Generates a random flag from the flags variable and displays it. */
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

    const randomFlag = () => {
        const keys = Object.keys(flags);
        if (keys.length > 0) {
            const index = Math.floor(keys.length * Math.random());
              const key = keys[index];
            const value = flags[key];
            return {index, key, value}
        }
        return null;
    };
    const property = randomFlag(flags);
    currentFlag = property.key
    document.getElementById('flag').innerHTML = `${property.value}`;
    console.log(currentFlag)
    return(currentFlag)
}

let submit = document.getElementById('submit')
submit.addEventListener('click', submitAnswer)

function submitAnswer() {
    let currentAnswer = document.getElementById('answer-box').value;
    let modAnswer = currentAnswer.toLowerCase();
    console.log(modAnswer)
    //string.toLowerCase(currentAnswer)
    if (currentFlag === modAnswer) {
        console.log('Correct!')
    } else {
        console.log('Incorrect')
    }
}



function nextQuestion() {

}