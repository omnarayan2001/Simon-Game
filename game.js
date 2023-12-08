var buttonColors = ["red","blue","green","yellow"];

var userClickedPattern = [];

var gamePattern = [];

var randomChosenColor;

var started = false;

var level = 0;

function nextSequence() {

    userClickedPattern = [];

    level = level+1;

    $("#level-title").text("Level " + level);
   

    var randomNumber = Math.floor((Math.random()*4));
    

    randomChosenColor = buttonColors[randomNumber];
    

    gamePattern.push(randomChosenColor);


    
  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
    
    
}


function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }



function animatePress(currentColor) {
$("#" + currentColor).addClass("pressed");
setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
}, 100);
}




function checkAnswer(currentLevel) {


if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
    if(userClickedPattern.length === gamePattern.length) {  
        setTimeout(function(){
            nextSequence();
        },1000);

    }
    
}

else {
    var wrong = new Audio("./sounds/wrong.mp3");
    wrong.play();

    $("body").addClass("game-over");

    setInterval(function(){
        $("body").removeClass("game-over");
    },200);

    $("#level-title").text("Game Over, Press any key to restart !");

    startOver();
    
}
    

}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
    
    
   
}



// GAME START   


var started = false;
var level = 0;

$(document).keypress(function() {
    if(!started) {

        $("#level-title").text("Level " + level);
        nextSequence();
        started = true ;

    }

});



// Button Presses

$(".btn").click(function(){

    var  userChosenColor = $(this).attr("id");
  
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);

    animatePress(userChosenColor);

    checkAnswer((userClickedPattern.length)-1);  
    
});


  











