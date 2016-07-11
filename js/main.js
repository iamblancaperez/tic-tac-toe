var players = ["X", "O"];
var currentPlayer = 0;
var counter = 0;
var winner =  false;
var a1, a2, a3, b1, b2, b3, c1, c2, c3;
a1 = $("#a1"); a2 = $("#a2"); a3 = $("#a3");
b1 = $("#b1"); b2 = $("#b2"); b3 = $("#b3");
c1 = $("#c1"); c2 = $("#c2"); c3 = $("#c3");

$(document).ready(function(){
	console.log("The main.js is loaded");
	playGame();	
});

function playGame(){
	$(".tic").click(function(){
		$(this).val(players[currentPlayer]);
		$(this).off("click");
		counter++;
		if(counter >= 5){
			checkWinner();
		}
		if(counter > 8){
			swal(
			  'Oops...',
			  'A tie!',
			  'error'
			);
			stopGame();
		}
		if(currentPlayer == 1){
			currentPlayer = 0;
		}else{
			currentPlayer = 1;
		}
	});	
}

function checkWinner(){
	if((a1.val() == a2.val() && a2.val() == a3.val() && a3.val() != "+") ||
		 (b1.val() == b2.val() && b2.val() == b3.val() && b3.val() != "+") ||
		 (c1.val() == c2.val() && c2.val() == c3.val() && c3.val() != "+") ||
		 (a1.val() == b1.val() && b1.val() == c1.val() && c1.val() != "+") ||
		 (a2.val() == b2.val() && b2.val() == c2.val() && c2.val() != "+") ||
		 (a3.val() == b3.val() && b3.val() == c3.val() && c3.val() != "+") ||
		 (a1.val() == b2.val() && b2.val() == c3.val() && c3.val() != "+") ||
		 (c1.val() == b2.val() && b2.val() == a3.val() && a3.val() != "+") 
		 )
	{
		console.log("Gano" + players[currentPlayer]);
		swal(
		  'Good job!',
		  players[currentPlayer] + " wins!!",
		  'success'
		);
		stopGame();
	}
}

function stopGame(){
	var tics = $(".tic");
	for (var i = 0; i <= tics.length; i++) {
		$(tics[i]).val("+");
	}
	currentPlayer = 0;
	counter = 0;
	playGame();
}