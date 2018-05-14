document.addEventListener("DOMContentLoaded", function () {
    // Here we generate and write the "targetNumber" to the DOM.
    var wins = 0;
    var losses = 0;
   
    $(document).ready(function () {
        var gameRunning = true;
        // ... we generate a random number
        var targetNumber = Math.floor(Math.random() * 101) + 19;

        // ... and then dump the random number into our #number-to-guess div.
        $("#number-to-guess").text(targetNumber);


        var counter = 0;
        var numberOptions = [10, 5, 3, 7];
        for (var i = 0; i < numberOptions.length; i++) {
            $(".crystal-image").attr("data-crystalvalue", numberOptions[i]);
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
                wins ++;
                $("#wins").text("Wins: " + wins);
                gameRunning = false;

                
            }
            else if (counter >= targetNumber) {

                // Then they are alerted with a loss.
                alert("You lose!!");
                losses ++;
                $("#losses").text("Losses: " + losses);
                gameRunning = false;

            }
        });
    });














});