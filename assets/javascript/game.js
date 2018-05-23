
$(document).ready(function () {

    var soundChime = new Audio();
    soundChime.src = "assets/music/chime.mp3";

    $("#instructions-container").on('click', function(){
        $("#instructions-container").hide();
    });

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
        $("#blue").fadeTo(500, 0.4)
        $("#blue").fadeTo(500, 1)
        soundChime.play();
    });

    $("#green").click(function () {
        crystalValue.push(greenRandom);
        $("#green").fadeTo(500, 0.4)
        $("#green").fadeTo(500, 1)
        soundChime.play();
    });

    $("#pink").click(function () {
        crystalValue.push(pinkRandom);
        $("#pink").fadeTo(500, 0.4)
        $("#pink").fadeTo(500, 1)
        soundChime.play();
    });

    $("#purple").click(function () {
        crystalValue.push(purpleRandom);
        $("#purple").fadeTo(500, 0.4)
        $("#purple").fadeTo(500, 1)
        soundChime.play();
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
