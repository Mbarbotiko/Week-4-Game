
$(document).ready(function () {

    var losses = 0;
    var wins = 0;
    var crystalValue = [];
    var blueRandom;
    var greenRandom;
    var pinkRandom;
    var purpleRandom;
    var randomNumber;
    //math function chooses a number between 1-12

    function randomNumber() {
        randomNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        blueRandom = 1;//throwing you a frickin' bone
        greenRandom = Math.floor(Math.random() * 12) + 1;
        pinkRandom = Math.floor(Math.random() * 12) + 1;
        purpleRandom = Math.floor(Math.random() * 12) + 1;
        $("#random-number").html("<h2>Match this number:<h2> " + randomNumber);
        //adds the random number generated to the HTML
    }

    randomNumber();

    //math function chooses a number between 19 and 120


    //$("#random-number").html("<h2>Match this number:<h2> "+randomNumber);
    //adds the random number generated to the HTML

    $("#blue").click(function () {
        crystalValue.push(blueRandom);
        //pushes the random number generated to the array crystalvalue upon a click
        console.log(crystalValue);

    });

    $("#green").click(function () {
        crystalValue.push(greenRandom);
        console.log(crystalValue);
    });

    $("#pink").click(function () {
        crystalValue.push(pinkRandom);
        console.log(crystalValue);

    });

    $("#purple").click(function () {
        crystalValue.push(purpleRandom);
        console.log(crystalValue);


    });



    $(".crystals").click(function () {
        totalGuess = crystalValue.reduce((total, amount) => total + amount);
        $("#score").text(totalGuess);

        if (totalGuess === randomNumber) {
            wins++;
            $("#wins").text("Wins: " + wins);
            crystalValue = [];


        }

        else if (totalGuess > randomNumber) {
            losses++;
            $("#losses").text("Losses: " + losses);
            crystalValue = [];

        }


    });





    //adds all the numbers in array together and stores the sum into a new variable called totalguess, doesnt execute the function until one of the crystals is clicked otherwise errors out the game immediately.





});
