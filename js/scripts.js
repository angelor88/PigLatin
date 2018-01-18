function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1
}
var phrase = function (englishPhrase) {
  if (englishPhrase === '') {
    alert ("Please enter a phrase to be translated");
  } else if (isNaN(englishPhrase)){
     if (isVowel(englishPhrase.charAt(0))) {
       alert ('Yes, it is a vowel!')
     };
  } else {
    alert ("A number cannot be used");
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
