var LETTERS = "abcdefghijklmnopqrstuvwxyz";
var REVERSED_LETTERS = LETTERS.split('').reverse().join('');

console.log("letters: \n" + LETTERS);
console.log("reversted letters: \n" + REVERSED_LETTERS);


var encode = function(text) {
  text = text.toLowerCase();
  var transformedText = "";

  for (var i = 0; i < text.length; i++) {
    var indexOfLetter = LETTERS.indexOf(text[i]);
    // console.log(indexOfLetter);
    var reversedLetter = REVERSED_LETTERS.charAt(indexOfLetter);
    console.log(reversedLetter);
    transformedText += reversedLetter;
  }
  console.log(transformedText);
  return transformedText;
}

encode("blob");

var test = encode("blob");
var testReverse = encode(test);

console.log(test);
console.log(testReverse);
