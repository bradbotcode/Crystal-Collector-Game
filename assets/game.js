//Generates random number between 19 & 120.

var randNum = Math.floor(Math.random() * (120 - 19 + 1) + 19);
Math.floor(Math.random() * 119 + 2);
//Testing
console.log(randNum);
//Print randNum to showRN card.
$(".showRN").html(randNum);

//Generates random number between 1 & 12 for fruits.
var fruitNum1 = Math.floor(Math.random() * 11 + 1);
var fruitNum2 = Math.floor(Math.random() * 11 + 1);
var fruitNum3 = Math.floor(Math.random() * 11 + 1);
var fruitNum4 = Math.floor(Math.random() * 11 + 1);

//Testing
console.log("Fruit num 1 is: " + fruitNum1);
console.log("Fruit num 2 is: " + fruitNum2);
console.log("Fruit num 3 is: " + fruitNum3);
console.log("Fruit num 4 is: " + fruitNum4);

var wins = 0;
var losses = 0;
var points = 0;

//Prints Wins and Losses variable in showScore card.
$(".showScore").html(
  "<div>Wins: " + wins + "</div>" + "<div>Losses: " + losses + "</div>"
);

//Click events for each button.
//For each button, the click add's the respective fruitNumx variable to the total points and makes it that.
$(".btn1").click(function() {
  points = fruitNum1 + points;
  $(".showPoints").html(points);
});

$(".btn2").click(function() {
  points = fruitNum2 + points;
  $(".showPoints").html(points);
});
$(".btn3").click(function() {
  points = fruitNum3 + points;
  $(".showPoints").html(points);
});
$(".btn4").click(function() {
  points = fruitNum4 + points;
  $(".showPoints").html(points);
});

if (points === randNum) {
  wins++;
}
if (points > randNum) {
  losses++;
}
