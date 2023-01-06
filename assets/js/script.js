const startButton = document.getElementById('start');
const nextButton = document.getElementById('next');
const restartButton = document.getElementById('restart')
const answer = document.getElementById('answer-box');
const submit = document.getElementById('submit');
const score = document.getElementById('score-count')
const sbox = document.getElementById('sbox')
const correct = document.getElementById('correct')
const incorrect = document.getElementById('incorrect')
const flagCount = document.getElementById('flag-count')
const flagNumber = document.getElementById('flag-number')
let currentFlag;



document.addEventListener("DOMContentLoaded", function () {
    nextButton.style.visibility = 'hidden';
    nextButton.style.display = 'none';
    restartButton.style.visibility = 'hidden';
    restartButton.style.display = 'none';
    answer.style.visibility = 'hidden';
    answer.style.display = 'none';
    submit.style.visibility = 'hidden';
    submit.style.display = 'none';
    sbox.style.visibility = 'hidden';
    sbox.style.display = 'none';
    correct.style.visibility = 'hidden';
    correct.style.display = 'none';
    incorrect.style.visibility = 'hidden';
    incorrect.style.display = 'none';
    flagCount.style.visibility = 'hidden';
    flagCount.style.display = 'none';
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
    flagCount.style.visibility = 'visible';
    flagCount.style.display = 'inline';

    nextButton.disabled = true;

    let randomFlag = () => {
        let keys = Object.keys(flags);
        if (keys.length > 0) {
            const index = Math.floor(keys.length * Math.random());
            const key = keys[index];
            const value = flags[key];
            return {
                index,
                key,
                value
            }
        }
        return null;
    };
    const property = randomFlag(flags);
    currentFlag = property.key
    document.getElementById('flag').innerHTML = `${property.value}`;
}

submit.addEventListener('click', submitAnswer)

/*
Checks the answer written with the answer associated with the flag.
Tells the user wether they are correct or not and increments the score by 1 if correct.
*/
function submitAnswer() {
    let currentAnswer = document.getElementById('answer-box').value;
    let modAnswer = currentAnswer.toLowerCase();
    
    if (currentFlag === modAnswer) {
        correct.style.visibility = 'visible';
        correct.style.display = 'flex';
        correct.innerHTML = `CORRECT!`;
        submit.disabled = true;
        var number = score.innerHTML;
        number++;
        number++;
        score.innerHTML = number;
    } else {
        incorrect.style.visibility = 'visible';
        incorrect.style.display = 'flex';
        let answerFlag = currentFlag.toUpperCase()
        incorrect.innerHTML = `INCORRECT...<br>It was ${answerFlag}`;
        submit.disabled = true;
    }
    nextButton.disabled = false;
}

answer.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    submit.click();
  }
});

nextButton.addEventListener('click', nextQuestion)

function nextQuestion() {

    correct.style.visibility = 'hidden';
    correct.style.display = 'none';
    incorrect.style.visibility = 'hidden';
    incorrect.style.display = 'none';
    submit.disabled = false;
    document.getElementById('flag').innerHTML = ``
    answer.value = ``;
    delete flags[currentFlag]
    nextButton.disabled = true;
    var number = flagNumber.innerHTML;
        number++;
        flagNumber.innerHTML = number;

    if (Object.keys(flags).length === 8) {
        let endScreen = document.getElementById('main-area');
        endScreen.innerHTML = `<h1>CONGRATULATIONS!</h1><br>
            <h2>You scored ${score.textContent} of 14 points</h2><br>`;

        restartButton.style.visibility = 'visible';
        restartButton.style.display = 'inline'; 
    } else {
        let randomFlag = () => {
            let keys = Object.keys(flags);
            if (keys.length > 0) {
                const index = Math.floor(keys.length * Math.random());
                const key = keys[index];
                const value = flags[key];
                return {
                    index,
                    key,
                    value
                }
            }
            return null;
        };
        const property = randomFlag(flags);
        currentFlag = property.key;
        document.getElementById('flag').innerHTML = `${property.value}`;
    }
}


    html.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    nextButton.click();
  }
});

restartButton.addEventListener('click', restartGame)

function restartGame() {
    window.location.reload()
}

