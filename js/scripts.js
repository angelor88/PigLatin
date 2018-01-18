function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1
}

var eWord = function (englishWord) {
  if (englishWord === '') {
    alert ("Please enter a phrase to be translated");
  } else if (isNaN(englishWord)){
      if (isVowel(englishWord.charAt(0))) {
        return englishWord + 'way';
      } else {
        for (var nconsonants = 1; nconsonants <=6; nconsonants +=1) {
          if (isVowel(englishWord.charAt(nconsonants))) {
            break;
          }
        }
        return englishWord.slice(nconsonants) + englishWord.slice(0,nconsonants) + 'ay';
      };
  } else {
    alert ("A number cannot be used");
  }
};

var phrase = function (englishPhrase) {
  var finalPhrase = ''
  var arrayOfWords = englishPhrase.split(' ');
    for (var index = 0; index <arrayOfWords.length; index +=1){

    finalPhrase = finalPhrase + eWord(arrayOfWords[index]) + ' ';
  }
  alert (finalPhrase);
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
