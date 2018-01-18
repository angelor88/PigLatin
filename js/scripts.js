function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1
}

var phrase = function (englishPhrase) {
  if (englishPhrase === '') {
    alert ("Please enter a phrase to be translated");
  } else if (isNaN(englishPhrase)){
      if (isVowel(englishPhrase.charAt(0))) {
        alert (englishPhrase + 'way');
      } else {
        for (var nconsonants = 1; nconsonants <=6; nconsonants +=1) {
          if (isVowel(englishPhrase.charAt(nconsonants))) {
            break;
          }
        }
        alert (englishPhrase.slice(nconsonants) + englishPhrase.slice(0,nconsonants) + 'ay');
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

    $("#result").show();
  });
});
