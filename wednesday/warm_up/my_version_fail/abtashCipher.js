// Plain:  abcdefghijklmnopqrstuvwxyz
// Cipher: zyxwvutsrqponmlkjihgfedcba


var plain = "abcdefghijklmnopqrstuvwxyz".split("");
var reverse = plain;
reverse.reverse();

var input = document.getElementById("button").innerHTML;

function reverseText(string) {
  var splitInput = string.split("");
  // var splitInput = splitInput.trim();

  console.log(splitInput);
}



// indexes = $.map(list, function(obj, index) {
//     if(obj.prop2 == "yutu") {
//         return index;
//     }
// })
//
// firstIndex = indexes[0]



reverseText(input);



// function reverseText(input) {
//   var
// }
