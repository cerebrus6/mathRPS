//Instructions.

var check = 1;
var check2 = 1;
var check3 = 1;
var check4 = -1;
var check5 = 1;
var NumOfCards = 3;
var position;
var scorePlayer = 3;
var scoreAI = 3;

//Play a Card.
function main() {
	$(".player").on("click", function() {
		if($(this).attr("id")!="none1" && check3==1 && check2==1 && check5 == 1) {
			var play = $(this);
			position = play.attr("data-position");
			play.css({"top":"55%","left":"47.5%"});
			play.attr("src", "images/facedown.png");
			play.attr("class", "chosenPlayer");
			playAI();
			reveal();
			check2=0;
			check3=0;
		}
	});
}
checkBoard();
main();

var choice;
//Basic Random AI.
function playAI() {
	choice = Math.ceil(Math.random()*3);
	switch(choice) {
		case 1:
		choice = ".1";
		break;
		case 2:
		choice = ".2";
		break;
		case 3:
		choice = ".3";
		break;
	}
		moveAI(choice);
}

//Play AI Card..
function moveAI(c) {
	$(c).css({"top":"32.5%","left":"47.5%"});
	$(c).attr("class", "chosenAI");
}

//Draw AI Card.
function drawAI() {
	if (check4==1) {
		var drawAI = Math.floor(Math.random()*handArr.length);
		var positiony = "AI' style='top: 43.5%; left: 5%;' data-position='".concat(choice,"' />");	
		var addStringAI = "<img class='AI' src='images/facedown.png'".concat(" id='", handArr[drawAI], positiony);
		$("#main").append(addStringAI);
			$("#deck").on("mouseup", function() {
				if(choice==".1") {
					$(".AI").css({"transition":"all 1.5s ease;", "top":"13%", "left":"22.5%"});
					$(".AI").attr("class", "1");
				} else if(choice==".2") {
					$(".AI").css({"transition":"all 1.5s ease;", "top":"13%", "left":"47.5%"});
					$(".AI").attr("class", "2");
				} else if(choice==".3") {
					$(".AI").css({"transition":"all 1.5s ease;", "top":"13%", "left":"73.5%"});
					$(".AI").attr("class", "3");
				}
			});
		check4*=-1;
		var box = handArr[drawAI];
		handArr[drawAI]=handArr[handArr.length-1];
		handArr[handArr.length-1]=box;
		var remove = handArr.pop();
	}
}

//Reveal Play Button.
function reveal() {
	var playBtn = $("#game");
	playBtn.css({"width":"7.3%", "height":"7.605%", "color":"black", "background-color":"white", "box-shadow":"5px 10px black"});
	playBtn.attr("disabled", false);
}

//Conceal Play Button.
function hide() {
	var playBtn = $("#game");
	playBtn.css({"width":"0px", "height":"0px", "color":"#2e2e1f", "background-color":"#2e2e1f", "box-shadow":"none"});
	playBtn.attr("disabled", true);
	check=0;
	$("#drawText").html("&nbsp;&nbsp;Draw a Card");
}


var rock = 0;
var paper = 0;
var scissors = 0;
var handArr = ["rock", "paper", "scissors", "rock", "paper", "scissors", "rock", "paper", "scissors", "rock", "paper", "scissors"];

//For future implementation of a limited deck.
function count() {
rock = 0;
paper = 0;
scissors = 0;
var i;
	for(i=0;i<handArr.length;i++) {
		if(handArr[i]=="rock") {
			rock++;
		} else if(handArr[i]=="paper") {
			paper++;
		} else if(handArr[i]=="scissors") {
			scissors++;
		}
	}
	var text = "Data:<hr />".concat("Rock: ", rock, "| Paper: ", paper, "| Scissors: ", scissors);
	$("#dataDeck").html(text);
}

$("#dataDeck").hide();

$("#deck").on("mouseover", function() {
	$("#dataDeck").show();
});

$("#deck").on("mouseleave", function() {
	$("#dataDeck").hide();
});

$("#dataDeck").on("mouseover", function() {
	$("#dataDeck").show();
});

$("#dataDeck").on("mouseleave", function() {
	$("#dataDeck").hide();
});

function checkWIn() {
	if(handArr.length==0) {
		if(scoreAI>scorePlayer) {
			console.log("Lose");
		} else if(scoreAI<scorePlayer) {
			console.log("Win");
		} else if(scoreAI==scorePlayer) {
			console.log("Tie");
		}
	}
}

var box;
//Draw player card.
function drawCard() {
	NumOfCards++;
	var draw = Math.floor(Math.random()*handArr.length);
	console.log(draw);
	var arr = handArr.toString()
	console.log(arr);
	box = handArr[handArr.length-1];
	var pick = handArr.pop();
	console.log(pick);
	checkWIn();
	var positionx = " style='top: 43.5%; left: 5%;' data-position='".concat(position,"' />");
	var addString = "<img class='player1' id='".concat(pick,"' src='images/", pick, ".png'", positionx);
	$("#main").prepend(addString);
		$("#deck").on("mouseup", function() {
			if(position=="first") {
				$(".player1").css({"transition":"all 1.5s ease;", "top":"75%", "left":"22.5%"});
				$(".player1").attr("class", "player");
			} else if(position=="second") {
				$(".player1").css({"transition":"all 1.5s ease;", "top":"75%", "left":"47.5%"});
				$(".player1").attr("class", "player");
			} else if(position=="third") {
				$(".player1").css({"transition":"all 1.5s ease;", "top":"75%", "left":"73.5%"});
				$(".player1").attr("class", "player");
			}
			check3=1;
			checkBoard();
			main();
			count();
		});
}

//Count the number of cards in the board.
function checkBoard() {
	var p;
	var rockNum = 0;
	var paperNum = 0;
	var scissorsNum = 0;
	var d1 = $(".1").attr("id");
	var d2 = $(".2").attr("id");
	var d3 = $(".3").attr("id");
	var d4 = $(".player").eq(0).attr("id");
	var d5 = $(".player").eq(1).attr("id");
	var d6 = $(".player").eq(2).attr("id");
	var cardArr = [d1, d2, d3, d4, d5, d6];
		for(p=0;p<6;p++) {
			if(cardArr[p]=="rock"||cardArr[p]=="rockAI") {
				rockNum++;
			}
			if(cardArr[p]=="paper"||cardArr[p]=="paperAI") {
				paperNum++;
			}
			if(cardArr[p]=="scissors"||cardArr[p]=="scissorsAI") {
				scissorsNum++;
			}
			var dataText = "Data:<hr width='50%'/> Rock = ".concat(rockNum, "<br />Paper = ", paperNum, "<br />Scissors = ", scissorsNum);
			$("#data").html(dataText);
		}
}

//Reveal the facedown cards and check who is the winner.
function play() {
	check4*=-1;
	var handPlayer = $(".chosenPlayer");
	var handx = handPlayer.attr("id");
	var handAI = $(".chosenAI");
	var handy = handAI.attr("id");

		if(handx=="rock") {
			handPlayer.attr("src", "images/rock.png");
		} else if(handx=="paper") {
			handPlayer.attr("src", "images/paper.png");
		} else if(handx=="scissors") {
			handPlayer.attr("src", "images/scissors.png");
		}

		if(handy=="rockAI") {
			handAI.attr("src", "images/rockAI.png");
		} else if(handy=="paperAI") {
			handAI.attr("src", "images/paperAI.png");
		} else if(handy=="scissorsAI") {
			handAI.attr("src", "images/scissorsAI.png");
		}

		if(handx=="paper"&&handy=="rockAI") {
			scoreAI--;
			$("#computerPoints").text(scoreAI);		
		} else if(handx=="scissors"&&handy=="rockAI") {
			scorePlayer--;
			$("#playerPoints").text(scorePlayer);
		} else if(handx=="rock"&&handy=="paperAI") {
			scorePlayer--;
			$("#playerPoints").text(scorePlayer);
		} else if(handx=="scissors"&&handy=="paperAI") {
			scoreAI--;
			$("#computerPoints").text(scoreAI);		
		} else if(handx=="rock"&&handy=="scissorsAI") {
			scoreAI--;
			$("#computerPoints").text(scoreAI);		
		} else if(handx=="paper"&&handy=="scissorsAI") {
			scorePlayer--;
			$("#playerPoints").text(scorePlayer);
		} else if(handx=="paper"&&handy=="paperAI") {
			scoreAI++;
			$("#computerPoints").text(scoreAI);
			scorePlayer++;
			$("#playerPoints").text(scorePlayer);
		} else if(handx=="rock"&&handy=="rockAI") {
			scoreAI++;
			$("#computerPoints").text(scoreAI);
			scorePlayer++;
			$("#playerPoints").text(scorePlayer);
		} else if(handx=="scissors"&&handy=="scissorsAI") {
			scoreAI++;
			$("#computerPoints").text(scoreAI);
			scorePlayer++;
			$("#playerPoints").text(scorePlayer);
		}

		if(scorePlayer==0) {
			$("#main").prepend("<div id='announcement'>You Lose<br /><button id='newGame' onclick='newGame()'>New Game</button></div>");
			check5=0;
		}

		if(scoreAI==0) {
			$("#main").prepend("<div id='announcement'>You Win&nbsp;<br /><button id='newGame' onclick='newGame()'>New Game</button></div>");
			check5=0;
		}
	hide();
}

//New Game.
function newGame() {
	location.reload();
}

//Remove the cards on play.
var zIndex=1;
	$("#deck").on("mouseover", function() {
		if(check == 0) {
			drawAI();
			$("#drawText").html(" ");		
			$(".chosenPlayer").css({"top":"43.5%","left":"20%", "z-index":zIndex});
			$(".chosenAI").css({"top":"43.5%","left":"20%", "z-index":zIndex});			
			$(".chosenPlayer").attr("id", "none1");
			$(".chosenAI").attr("id", "none2");
			$(".chosenPlayer").attr("class", "none1");
			$(".chosenAI").attr("class", "none2");
			check2 = 1;
			check = 1;
			drawCard();
		}
	});

	//Rush game mode
var enableRush = false;
	if(enableRush==true) {
		$("#rush").css({"color":"white"});
	} else {
		$("#rush").css({"color":"grey"});
	}
	