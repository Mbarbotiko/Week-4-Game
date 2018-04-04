
$(document).ready(function () {

    var losses = 0;
    var wins = 0;
    var crystalValue = [];
    
        




        var blueRandom = 1;
        var greenRandom = Math.floor(Math.random() * 12) + 1;
        var pinkRandom = Math.floor(Math.random() * 12) + 1;
        var purpleRandom = Math.floor(Math.random() * 12) + 1;
        //math function chooses a number between 1-12
        var randomNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        //math function chooses a number between 19 and 120


        $("#random-number").text("Match this number: "+randomNumber);
        //adds the random number generated to the HTML

        $("#blue").click(function () {
            crystalValue.push(blueRandom);
            //pushes the random number generated to the array crystalvalue upon a click


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
            if (totalGuess === randomNumber) {
                wins++;
                $("#wins").text("Wins: " + wins);
                document;
                

            }

            else if (totalGuess > randomNumber) {
                losses++;
                $("#losses").text("Losses: " + losses);
                document;
                
            }
            //adds all the numbers in array together and stores the sum into a new variable called totalguess, doesnt execute the function until one of the crystals is clicked otherwise errors out the game immediately.

        });

    

});
