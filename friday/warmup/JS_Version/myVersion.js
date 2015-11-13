// # if more than 10 digits it's bad
// # if 10 digits good
// # if it's 11 digits and first is 1, trim the 1 and use the first 10 digits
// # if it's 11 digits and it's not a 1, it's a bad number
// # if it's more than 11 digits it's a bad number
// #
// #
// #
// #


var number =  2222222222;

if (number = /\d{10}/) {
  console.log("boo");
}
