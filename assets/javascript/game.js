// Generate a random number that we need to reach
// -----------------------------------------------
var targetNumber;
targetNumber = Math.floor(Math.random() * 120) + 19;
$("#random-number").text(targetNumber);
// console.log(targetNumber)


// Generate a number that we need to assign to our cards
// -----------------------------------------------
var counter = 0;
var numberOptions = Math.floor(Math.random() * 12) +1;
// console.log(numberOptions);
 

// Assign the random number to our card values
// -----------------------------------------------
$(".card").attr("data-cardvalue", numberOptions);


// assign an on click function that adds your scores together and displays it on 'your score'
// -----------------------------------------------=
$(".card").on("click", function() {
  var cardValue = ($(this).attr("data-cardvalue"));
  cardValue = parseInt(cardValue);
  counter += cardValue;
  alert("New score: " + counter);

  if (counter === targetNumber) {
    alert("You win!");
  }

  else if (counter >= targetNumber) {
    alert("You lose!!");
  }
});