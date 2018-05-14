document.addEventListener("DOMContentLoaded", function () {
    // Here we establish the "targetNumber" (set to 50 in this example).
    var targetNumber = 55;

    // Here we set the "number-to-guess" header to match the "targetNumber".
    // Eventually this will allow us to change the HTML to match the value in the JavaScript.
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
        alert("Your new score is: " + counter);
        if (counter === targetNumber) {

            // If the numbers match we'll celebrate the user's win.
            alert("You win!");
        }
        else if (counter >= targetNumber) {

            // Then they are alerted with a loss.
            alert("You lose!!");
        }
    });














});