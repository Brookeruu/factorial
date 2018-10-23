// Business logic
function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n*factorial(n-1);
}

// UI logic
$(document).ready(function() {
  $("#get-number").submit(function(event) {
    event.preventDefault();

    var inputNumber = parseInt($("#number").val());

    // var total =1;
    // for (var i = inputNumber; i > 0; i--) {
    //   total *= i;
    // }

    var total = factorial(inputNumber);

    $("#get-number").hide();
    $(".results").show();
    $("#inputNumber").text(inputNumber);
    $("#calculation").text(total);
  });


  $("#phraseInput").submit(function(event){
    event.preventDefault();

    $(".notAPalindrome").hide();

    var originalPhrase = ($("#input").val()).split("");
    var clonePhrase = originalPhrase.slice();
    var reverseClonePhrase = clonePhrase.reverse();

    $("#inputPhrase").text(originalPhrase.join(""));
    console.log(reverseClonePhrase, originalPhrase);

    if (originalPhrase.toString() === reverseClonePhrase.toString()) {
      $(".palindromeResult").show();
    } else {
      $(".palindromeResult").show();
      $(".notAPalindrome").show();
    }


  });
































  // $("#phraseInput").submit(function(event){
  //   event.preventDefault();
  //
  //   $(".palindromeResult").show();
  //   $(".notAPalindrome").hide();
  //
  //
  //   var phrase = ($("input#input").val()).split("");
  //   var reversePhrase = (phrase.slice()).reverse();
  //
  //   if (phrase.toString() === reversePhrase.toString()){
  //     $("#inputPhrase").text(phrase.join(""));
  //   } else {
  //     $(".notAPalindrome").show();
  //     $("#inputPhrase").text(phrase.join(""));
  //   }
  // });
});
