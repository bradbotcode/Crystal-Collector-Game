//Generates random number between 19 & 120.
var randNum = Math.floor(Math.random() * 119 + 2);
//Print randNum to showRN card.
$(".showRN").html(randNum);

//Generates a random number between 1 & 12 for each button.
var fruitNum1 = Math.floor(Math.random() * 11 + 1);
var fruitNum2 = Math.floor(Math.random() * 11 + 1);
var fruitNum3 = Math.floor(Math.random() * 11 + 1);
var fruitNum4 = Math.floor(Math.random() * 11 + 1);

//Global score variables.
var wins = 0;
var losses = 0;
var points = 0;
//Prints wins and losses variable in showScore card.
$(".showScore").html(
  "<div>Wins: " + wins + "</div>" + "<div>Losses: " + losses + "</div>"
);
//Prints player's points to showPoints card.
$(".showPoints").html(points);

//Function to reset the game after each round.
function reset() {
  randNum = Math.floor(Math.random() * (120 - 19 + 1) + 19);
  Math.floor(Math.random() * 119 + 2);
  $(".showRN").html(randNum);

  fruitNum1 = Math.floor(Math.random() * 11 + 1);
  fruitNum2 = Math.floor(Math.random() * 11 + 1);
  fruitNum3 = Math.floor(Math.random() * 11 + 1);
  fruitNum4 = Math.floor(Math.random() * 11 + 1);

  points = 0;
  $(".showPoints").html(points);
}

//Function that dictates if the player has won or lost.
//This function also calls the reset function to restart the game after a win or a loss.
function winLose() {
  if (points === randNum) {
    wins++;
    $(".showScore").html(
      "<div>Wins: " + wins + "</div>" + "<div>Losses: " + losses + "</div>"
    );
    reset();
  } else if (points > randNum) {
    losses++;
    $(".showScore").html(
      "<div>Wins: " + wins + "</div>" + "<div>Losses: " + losses + "</div>"
    );
    reset();
  }
}

//Click events for each button.
//Depending on which button is clicked, that button's assigned fruitNum will add to the total points.
//Each click checks to see if the game has been won or lost.
$(".btn1").click(function() {
  points = fruitNum1 + points;
  $(".showPoints").html(points);
  winLose();
});
$(".btn2").click(function() {
  points = fruitNum2 + points;
  $(".showPoints").html(points);
  winLose();
});
$(".btn3").click(function() {
  points = fruitNum3 + points;
  $(".showPoints").html(points);
  winLose();
});
$(".btn4").click(function() {
  points = fruitNum4 + points;
  $(".showPoints").html(points);
  winLose();
});
