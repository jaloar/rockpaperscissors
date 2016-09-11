var user = prompt("Do you choose rock, paper or scissors?");
var comp = Math.random();
if (comp < 0.34) {
	comp = "rock";
} else if(comp <= 0.67) {
	comp = "paper";
} else {
	comp = "scissors";
}

var game = function(comp, user) {
    if(comp === user) {
        alert("The result is a tie!");
    } else if (comp === "rock") {
        if (user === "scissors") {
            alert("rock wins");
        } else {
            alert("paper wins");
            }
        } else if (comp === "paper") {
            if (user === "rock") {
                alert("paper wins");
            } else {
                alert("scissors wins");
            }
        } else if (comp === "scissors") {
            if (user === "rock") {
                alert("rock wins");
            } else {
                alert("scissors wins");
            }
        }
};

game(userChoice, computerChoice);