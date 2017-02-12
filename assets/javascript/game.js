//custom javascript code...
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesMade = [];
var atoz = "abcdefghijklmnopqrstuvwxyz";
var charGuessed = '0';


//Guesses a new key at the beginning of the game and for new games
function guessAKey() {
    charGuessed = atoz.charAt(Math.floor(Math.random() * 26));
    console.log(charGuessed);
    //document.getElementById("msg").innerHTML = "Lets begin a new game... Good luck!!!"; 
}

//Checks whether the pressed key matches the guessed key
function verifyKeyPressed(keyPressed) {
    if(keyPressed === charGuessed) {
        document.getElementById("msg").innerHTML = "Congrats, you're right... You won!!!<br><br>Lets play another game..."; //print you won msg
        incrementCount(true); //increment wins counter
        guessAKey(); //guess a new key for next game
    } else {
        if(guessesLeft <= 1) {
            incrementCount(false); //increment losses counter
            guessAKey(); //guess a new key for next game
            document.getElementById("msg").innerHTML = "Sorry, you are out of guesses... You lost!!!<br><br>Lets play another game..."; //print you lost msg
        } else {
            decrementAndUpdateGuesses(keyPressed);
        }
    }
}

//this function increments the counter
function incrementCount(isWon) {
    if(isWon) {
        wins++; //increments win counter by 1
        document.getElementById("numOfWins").innerHTML = wins; //updates win html element
    } else {
        losses++; //increments losses counter by 1
        document.getElementById("numOfLosses").innerHTML = losses; //updates losses html element
    }
    guessesLeft = 9;
    guessesMade = [];
    document.getElementById("guessesLeft").innerHTML = guessesLeft; //updates guessesLeft html element
    document.getElementById("guessesMade").innerHTML = guessesMade; //updates guessesMade html element
}

// decrement guesses
function decrementAndUpdateGuesses(keyPressed) {
    
    // if the letter is not already guessed then do following
    if(guessesMade.indexOf(keyPressed) == -1) {
        guessesLeft--;   
        document.getElementById("guessesLeft").innerHTML = guessesLeft;
        guessesMade.push(keyPressed);
        document.getElementById("guessesMade").innerHTML = guessesMade;
        document.getElementById("msg").innerHTML = "Sorry, you a guessed wrong letter :(";
    } else { //else update the user with following msg
        document.getElementById("msg").innerHTML = "Well, you already guessed '" + keyPressed + "', try something else...";   
    }
}



//guess a letter for first game
guessAKey();
//listen to key presses
document.onkeyup = function(event){
    //convert key press into string and save it into a var
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
    
    //print pressed letter
    //console.log(letter);
    //print guessed letter
    //console.log(charGuessed);
    
    //pass letter to verification function 
    verifyKeyPressed(letter);
};