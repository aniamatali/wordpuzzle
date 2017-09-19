$(document).ready(function(){
  var sentence = prompt("Enter a Sentence");

  var replace = "";
  var char = ["a","e","i","o","u","A","U","I","O","E"]

  for (var index = 0; index <sentence.length; index += 1) {
    if (sentence.charAt(index) === "a" ||
        sentence.charAt(index) === "e" ||
        sentence.charAt(index) === "i" ||
        sentence.charAt(index) === "o" ||
        sentence.charAt(index) === "u" ||
        sentence.charAt(index) === "A" ||
        sentence.charAt(index) === "E" ||
        sentence.charAt(index) === "I" ||
        sentence.charAt(index) === "O" ||
        sentence.charAt(index) === "U" ) {
          replace += "-"
        } else {
          replace += sentence.charAt(index);
        };
  };



  alert(replace);

});
