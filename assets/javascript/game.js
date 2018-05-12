
$(document).ready(function () {

    var losses = 0;
    var wins = 0;
    var crystalValue = [0];
    var blueRandom = 1;
    var greenRandom;
    var pinkRandom;
    var purpleRandom;
    var randomNumber;
    reset();
   
    $("#random-number").html("<h2>Match this number:<h2> " + randomNumber);
  
    function reset() {
        randomNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        greenRandom = Math.floor(Math.random() * 12) + 1;
        pinkRandom = Math.floor(Math.random() * 12) + 1;
        purpleRandom = Math.floor(Math.random() * 12) + 1;
        randomNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    }



    $("#blue").click(function () {
        crystalValue.push(blueRandom);
    });

    $("#green").click(function () {
        crystalValue.push(greenRandom);
    });

    $("#pink").click(function () {
        crystalValue.push(pinkRandom);
    });

    $("#purple").click(function () {
        crystalValue.push(purpleRandom);
    });



    $(".crystals").click(function () {
        totalGuess = crystalValue.reduce((total, amount) => total + amount);
        $("#score").text(totalGuess);
        endGame();
    });

    function endGame() {
        if (totalGuess === randomNumber) {
            wins++;
            $("#wins").text("Wins: " + wins);
            crystalValue = [0];
            reset();
            $("#random-number").html("<h2>Match this number:<h2> " + randomNumber);
        }

        else if (totalGuess > randomNumber) {
            losses++;
            $("#losses").text("Losses: " + losses);
            crystalValue = [0];
            reset();
            $("#random-number").html("<h2>Match this number:<h2> " + randomNumber);
        }
    }


});
