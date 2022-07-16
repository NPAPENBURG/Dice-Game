var randomNumber1 = Math.floor(Math.random() * 6) + 1
var randomNumber2 = Math.floor(Math.random() * 6) + 1

const player1 = document.getElementsByClassName("img1")[0];
const player2 = document.getElementsByClassName("img2")[0];
const winner = document.getElementsByClassName("Title")[0];

if (randomNumber1 === 1) {
    player1.setAttribute('src', 'images/dice1.png');
} else if (randomNumber1 === 2) {
    player1.setAttribute('src', 'images/dice2.png');
} else if (randomNumber1 === 3) {
    player1.setAttribute('src', 'images/dice3.png');
} else if (randomNumber1 === 4) {
    player1.setAttribute('src', 'images/dice4.png');
} else if (randomNumber1 === 5) {
    player1.setAttribute('src', 'images/dice5.png');
} else {
    player1.setAttribute('src', 'images/dice6.png');
}


if (randomNumber2 === 1) {
    player2.setAttribute('src', 'images/dice1.png');
} else if (randomNumber2 === 2) {
    player2.setAttribute('src', 'images/dice2.png');
} else if (randomNumber2 === 3) {
    player2.setAttribute('src', 'images/dice3.png');
} else if (randomNumber2 === 4) {
    player2.setAttribute('src', 'images/dice4.png');
} else if (randomNumber2 === 5) {
    player2.setAttribute('src', 'images/dice5.png');
} else {
    player2.setAttribute('src', 'images/dice6.png');
}

if (randomNumber1 > randomNumber2){
    document.getElementById("title").innerHTML = "Player 1 Won!";
} else if (randomNumber1 < randomNumber2) {
    document.getElementById("title").innerHTML = "Player 2 Won!";
} else {
    document.getElementById("title").innerHTML = "It is a Tie!";
}