$('.btn').hover(function() {
  $(this).css('font-size', "80px");
}, function() {
	$(this).css('font-size', "30px");
  });

var user;
var comp;

$(".rock").click(function() {
	user = "rock";
	comp = Math.random();
	game(comp, user);
});

$(".paper").click(function() {
	user = "paper";
	comp = Math.random();
	game(comp, user);
});

$(".scissors").click(function() {
	user = "scissors";
	game(comp, user);
	comp = Math.random();
});

var game = function(comp, user) {
    	if (comp < 0.34) {
				comp = "rock";
			} else if(comp <= 0.67) {
				comp = "paper";
			} else {
				comp = "scissors";
		}
	if(comp === user) {
        alert("The result is a tie!");
    } else if (comp === "rock") {
        if (user === "scissors") {
            alert("Computer wins!");
        } else {
            alert("You Win!");
            }
        } else if (comp === "paper") {
            if (user === "rock") {
                alert("Computer Wins!");
            } else {
                alert("You Win!");
            }
        } else if (comp === "scissors") {
            if (user === "rock") {
                alert("You Win!");
            } else {
                alert("Computer Wins!");
            }
        }
};