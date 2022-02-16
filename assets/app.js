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
    console.log(answers)
}

randomWord();