var randomNumber1 = Math.floor(Math.random() *6 )+1;

var randomDiceImage = randomNumber1+".jpg";
 var randomImageSource = "images/"+randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);


var randomNumber2 = Math.floor(Math.random() *6 )+1;

var randomDiceImage2 = randomNumber2+".jpg";
var randomImageSource2 = "images/"+randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource2);

if(randomNumber1 > randomNumber2) {
    document.querySelector('H1').innerHTML = "Player 1 Won!!"
}
else if(randomNumber2 > randomNumber1) {
    document.querySelector('H1').innerHTML = "Player 2 Won!!"
}
else {
    document.querySelector('H1').innerHTML = "Game Tie!!"
}