const dices = ["./images/dice1.png","./images/dice2.png",
        "./images/dice3.png","./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];

function getRandomInt( max ) {
    return Math.floor( Math.random() * max );
}

var dice1 = document.querySelector( ".img1" );
var dice2 = document.querySelector( ".img2" );
var h1 = document.querySelector( "h1" );

var randomNumber1 = getRandomInt( 6 );
var randomNumber2 = getRandomInt( 6 );

var randomDice1 = dices[randomNumber1];
var randomDice2 = dices[randomNumber2];

function whoWins() {
    if (randomNumber1 > randomNumber2)
        return 1;
    else if (randomNumber2 > randomNumber1)
        return 2;
    else 
        return 0;
}

dice1.setAttribute( "src",randomDice1 );
dice2.setAttribute( "src",randomDice2 );

var textForWinner1 = "🔥 Player 1 Wins ";
var textForWinner2 = "Player 2 Wins 🔥 ";
var textForDraw = "It's a draw";

const results = [];
results.push(textForDraw);
results.push(textForWinner1);
results.push(textForWinner2);


function getTextForWinner() {
  let winner = whoWins();
  return results[winner];
}

h1.innerText = getTextForWinner();


