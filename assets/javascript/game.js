document.addEventListener("DOMContentLoaded", function () {
    var wins = 0;
    var losses = 0;
    var counter = 0;
    var targetNumber;
    var score = 0;
    function newGame() {



        // ... we generate a random number
        targetNumber = Math.floor(Math.random() * 101) + 19;

        // ... and then dump the random number into our #number-to-guess div.
        $("#number-to-guess").text(targetNumber);

        //We generate a value for each crystal and assign it to the data attribute
        var numberOptions = Math.floor(Math.random() * 11) + 1;
        $("#ruby").attr("data-crystalvalue", numberOptions);
        var numberOptions = Math.floor(Math.random() * 11) + 1;
        $("#whiteDiamond").attr("data-crystalvalue", numberOptions);
        var numberOptions = Math.floor(Math.random() * 11) + 1;
        $("#blueDiamond").attr("data-crystalvalue", numberOptions);
        var numberOptions = Math.floor(Math.random() * 11) + 1;
        $("#emerald").attr("data-crystalvalue", numberOptions);
        $("#score").text(score);
        counter = 0;
    }

    $(".crystal-image").on("click", function () {
        // Determining the crystal's value requires us to extract the value from the data attribute.
        // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
        // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
        // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        // We then add the crystalValue to the user's "counter" which is a global variable.
        // Every click, from every crystal adds to the global counter.
        counter += crystalValue;
        $("#score").text(counter);
        if (counter === targetNumber) {

            // If the numbers match we'll celebrate the user's win.
            alert("You win!");
            wins++;
            $("#wins").text("Wins: " + wins);
            newGame();
        }
        else if (counter >= targetNumber) {

            // Then they are alerted with a loss.
            alert("You lose!!");
            losses++;
            $("#losses").text("Losses: " + losses);
            newGame();

        }

    });
    newGame();
















});