document.getElementById("hoola").addEventListener("mousedown", function() {hello(0)});

document.getElementById("moola").addEventListener("mousedown", function() {clickSubmitButton()});

document.getElementById("coola").addEventListener("mousedown", function() {hello(0)});


function clickSubmitButton() {
  $("div.container").append("this has been appended by a jquery thingy");
  $("div.heading").replaceWith("<h1>This is a new heading<h1>");
}
function clickSubmitButton() {
  // $("div.container").append("this has been appended by a jquery thingy");
  $("div.heading").replaceWith("<h1>This is a new heading<h1>");
}




function changeHeading() {
  document.getElementsByTagName("h1")
}

function message() {
  return "hello";
}

function number() {
  return 0;
}

function hello(number) {
  console.log(number);
  var myNumber = number;
  console.log("Hello");
  myNumber++;
  console.log(myNumber);
}


function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}
