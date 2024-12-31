const output = document.querySelector("#output");
const input = document.querySelector("#input");
const form = document.querySelector('form');

var str = input.innerHTML;

// Main function
form.addEventListener('submit', (event) => {
   event.preventDefault();
    if(input.value != ''){
        toMorse(input.value) ;
    }
})

// Function to convert into morse code
const toMorse = (str) => {
   output.value = str.toUpperCase().split('').map(char => morseCode[char] || '').join(' '); // The map function contains an arrow function which returns morse code.
   input.value = '';
   console.log(output.value);
};

// Letter Dictionary or HashMap
const morseCode = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "0": "-----",
    " ": "/",
    ",": "--..--",
    "?": "..--..",
    ";": "-.-.-.",
    ":": "---...",
    "-": "-....-",
    "/": "-..-.",
    "'": ".----.",
    "!": "-.-.--"
 }
