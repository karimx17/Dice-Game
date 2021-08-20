const title = document.querySelector("h1");
var randomNumber = Math.floor(Math.random()*6) +1;
var randomNumber2 = Math.floor(Math.random()*6) +1;
var dice1 = document.querySelector(".dice1")
var dice2 = document.querySelector(".dice2")

dice1.setAttribute("src", "images/image" + randomNumber + ".png")
dice2.setAttribute("src", "images/image" + randomNumber2 + ".png")

if(randomNumber>randomNumber2) {
    title.innerHTML = "Player 1 Wins!"
} else if (randomNumber2>randomNumber) {
    title.innerHTML = "Player 2 Wins!"
} else {
    title.innerHTML = "Draw!"
}