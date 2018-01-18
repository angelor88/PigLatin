var phrase = function (englishPhrase) {
  if (englishPhrase === '') {
    alert ("Please enter a phrase to be translated");
  }
};
// user interface logic
$(document).ready(function() {
  $("form#pigLatin").submit(function(event) {
    event.preventDefault();
    var inputPhrase = $("input#startPhrase").val();
    var result = phrase(inputPhrase);

    $(".result").text(year);

    $("#result").show();
  });
});
