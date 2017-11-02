$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    var input = $("#inPut").val()
    var splitInput = input.split(" ");

    var newSentence = [];
    splitInput.forEach(function(word) {
      if (word.length >= 3) {
        newSentence.push(word)
      }
    });
    newSentence.reverse();
    var newNewSentence = newSentence.join(" ");
    $(".result").text(newNewSentence);
  });
});
