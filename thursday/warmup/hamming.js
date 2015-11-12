// var initialString = "GAGCCTACTAACGGGAT";
// var checkingString = "CATCGTAATGACGGCCT";
//
// var firstString = prompt("Enter first DNA string");
// var secondString = prompt("Enter second DNA string");
// while (secondString.length !== firstString.length) {
//   alert("Try again. The second string needs to be the same length as the first one.")
//   var secondString = prompt("Enter second DNA string");
// }

var getInput = function() {
  var firstString = prompt("Enter first DNA string");
  var secondString = prompt("Enter second DNA string");
  while (secondString.length !== firstString.length) {
    alert("Try again. The second string needs to be the same length as the first one.")
    var secondString = prompt("Enter second DNA string");


  }
  console.log([firstString, secondString]);

  return [firstString, secondString];

};


var hammingFunction = function(stringArray) {
  var first = stringArray[0];
  var second = stringArray[1];
  var mutations = 0;
  for (var i = 0; i < first.length; i++) {
    if (first.charAt(i) !== second.charAt(i)) {
      mutations++;
    }
  }
  console.log(mutations);
};
hammingFunction(getInput());


// console.log(initialString);
// console.log(checkingString);
