////////////// Global Variables //////////////////
//////////////////////////////////////////////////

var random_result;
var loses = 0;
var wins = 0;
var totalScore = 0;
var heart = $("#heart");
var club = $("#club");
var spade = $("#spade");
var diamond = $("#diamond");

var cards = [spade, heart, club, diamond];

//////////// StartGame Function //////////////////
//////////////////////////////////////////////////
function startGame() {
  totalScore = 0;
  $("#loses-score").html(loses);
  $("#wins-score").html(wins);

  $(".card").empty();
  random_result = Math.floor(Math.random() * 102) + 19;
  $("#random-number").text(random_result);
  console.log("random number = " + random_result);
  $("#your-number").text(totalScore);

  // asigning a random number to each card
  for (var i = 0; i < 4; i++) {
    var random = Math.floor(Math.random() * 12) + 1;
    console.log(random);
    cards[i].attr({
      "data-random": random
    });
  }
}

//////////// On Click Function //////////////////
//////////////////////////////////////////////////
$(".card").on("click", function() {
  var num = parseInt($(this).attr("data-random"));
  totalScore += num;

  $("#your-number").text(totalScore);
  console.log(totalScore);

  if (totalScore > random_result) {
    loses++;
    alert("Hah! Loser");
    $("#loses-score").html(loses);
    startGame();
  } else if (totalScore === random_result) {
    wins++;
    alert("Winner-winner, chicken-dinner!");
    $("#wins-score").html(wins);
    startGame();
  }
});

//////////// Calling the StartGame Function //////////////////
/////////////////////////////////////////////////////////////
startGame();
