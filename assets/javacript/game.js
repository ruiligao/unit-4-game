// User to do : click the crystals and get the score adding togeter, 
//if the score === the randomNum, user will win, 
//if the number > randomNum, the user will lose
$(document).ready(function() {
// set the variables 
var targetNum;
var wins = 0;
var loses = 0;
var totalCollect = 0
var crystalNum
$("#loses").text(loses);
$("#wins").text(wins);
$("#message").text("New Game!")
$("#totalCollected").text(totalCollect);

targetNum = Math.floor(Math.random() * 60 + 30);
$("button").val(() => Math.floor(Math.random() * 20 + 1));
console.log(targetNum)
$("#targetCrystals").text(targetNum);

function reset() {
    totalCollect = 0;
    $("#totalCollected").text(totalCollect);
    $("#message").text("New Game!");
    targetNum = Math.floor(Math.random() * 60 + 30);
    $("button").val(() => Math.floor(Math.random() * 20 + 1));
    $("#targetCrystals").text(targetNum);

}


//before start computer to random pick the Num (50-100) and show 


//each crystal random pick the num from (1 to 20)




// click the crystal and shore the num in total collection and second add them replase the num in total
$("button").click(function (event) {
    if (totalCollect >= targetNum) {
        reset();
        return;
    }

    totalCollect = Number(totalCollect) + Number($(this).val());
    console.log(totalCollect);
    $("#totalCollected").text(totalCollect);

    if (totalCollect === targetNum) {
        wins++;
        $("#message").text("You Win!");
        $("#wins").text(wins);
    };


    if (totalCollect > targetNum) {
        loses++;
        console.log(loses);
        $("#loses").text(loses);
        $("#wins").text(wins);
        $("#message").text("You Lose!");
    };
});
});

