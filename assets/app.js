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

function randomWord() {
    answers = streamingServices[Math.floor(Math.random() * streamingServices.length)]
}

function generateButtons() {
    let buttonsHtml = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter => 
        `
        <button
        class="btn btn-lg btn-primary m-2"
        id='` + letter + `
        onClick="handleGuess('` + letter + `')"
        >
        ` + letter + `
        </button>
        `).join('');

        document.getElementById('keyboard').innerHTML = buttonsHtml;
}



randomWord();
generateButtons()