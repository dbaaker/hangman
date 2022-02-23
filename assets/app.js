let streamingServices = 
[
    'netflix',
    'hulu',
    'paramount',
    'amc',
    'shudder',
    'acorn tv',
    'sundance now',
    'youtube',
    'amazon prime video',
    'allblk tv'
]

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord() {
    answer = streamingServices[Math.floor(Math.random() * streamingServices.length)]
}

function generateButtons() {
    let buttonsHtml = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter => 
        `
        <button
        class="btn btn-lg btn-primary m-2"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
        >
        ` + letter + `
        </button>
        `).join('');

        document.getElementById('keyboard').innerHTML = buttonsHtml;
}

function handleGuess(chosenLetter) {
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled', true);
   
    
    
    if (answer.indexOf(chosenLetter) >= 0) {
        guessedWord();
        checkIfGameWon();
    } else if ( answer.indexOf(chosenLetter) === -1) {
        mistakes++;
        updateMistakes();
        checkIfGameLost();
    };
};


function checkIfGameWon() {
    if (wordStatus === answer) {
        document.getElementById('keyboard').innerHTML = 'You Won!';
    }
}

function checkIfGameLost() {
    if (mistakes === maxWrong) {
        document.getElementById('keyboard').innerHTML = 'You lost!';
    }
}


function guessedWord() {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : ' _ ')).join('');
    
    document.getElementById('wordSpotlight').innerHTML = wordStatus;
}

function updateMistakes() {
    document.getElementById('mistakes').innerHTML = mistakes;
}

document.getElementById('maxWrong').innerHTML = maxWrong;



randomWord();
generateButtons();
guessedWord();