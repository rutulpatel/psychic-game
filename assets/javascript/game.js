//custom javascript code...
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesMade = [];
var atoz = "abcdefghijklmnopqrstuvwxyz";
var charGuessed = '0';

function guessAKey() {
    charGuessed = atoz.charAt(Math.floor(Math.random() * 26));
    console.log(charGuessed);
    //document.getElementById("msg").innerHTML = "Lets begin a new game... Good luck!!!"; 
}

function verifyKeyPressed(keyPressed) {
    if(keyPressed === charGuessed) {
        document.getElementById("msg").innerHTML = "Congrats, you're right... You won!!!<br><br>Lets play another game...";
        incrementCount(true);
        guessAKey();
    } else {
        if(guessesLeft <= 1) {
            incrementCount(false);
            guessAKey();
            document.getElementById("msg").innerHTML = "Sorry, you are out of guesses... You lost!!!<br><br>Lets play another game...";
        } else {
            decrementAndUpdateGuesses(keyPressed);
        }
    }
}

function incrementCount(isWon) {
    if(isWon) {
        wins++;
        document.getElementById("numOfWins").innerHTML = wins;
    } else {
        losses++;
        document.getElementById("numOfLosses").innerHTML = losses;
    }
    guessesLeft = 9;
    guessesMade = [];
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("guessesMade").innerHTML = guessesMade;      
}

function decrementAndUpdateGuesses(keyPressed) {
    if(guessesMade.indexOf(keyPressed) == -1) {
        guessesLeft--;   
        document.getElementById("guessesLeft").innerHTML = guessesLeft;
        guessesMade.push(keyPressed);
        document.getElementById("guessesMade").innerHTML = guessesMade;
        document.getElementById("msg").innerHTML = "Sorry, you a guessed wrong letter :(";
    } else {
        document.getElementById("msg").innerHTML = "Well, you already guessed '" + keyPressed + "', try something else...";   
    }
}


guessAKey();
document.onkeyup = function(event){
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
    
    //print pressed letter
    console.log(letter);
    //print guessed letter
    console.log(charGuessed);
    
    verifyKeyPressed(letter);
};