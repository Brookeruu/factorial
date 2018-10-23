function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n*factorial(n-1);
}

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
});
