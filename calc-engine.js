var buttons = document.getElementsByClassName("buttons");
var screen = document.getElementById("screen");
var operator = null;
var operand1 = 0;
var operand2 = null;
var error = "DivisionByZeroNotAllowed";

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var value = { v: "0" };
    value.v = this.innerText;
    if (value.v == "+" || value.v == "-" || value.v == "X" || value.v == "/") {
      operator = value.v;
      if (value.v == "X") {
        console.log("changed");
        operator = "*";
      }
      operand1 = screen.value;
      screen.value = "";
    } else if (value.v == "=") {
      operand2 = screen.value;
      operand2 = parseFloat(operand2);
      operand1 = parseFloat(operand1);
      if (operand2 == 0 && operator == "/") screen.value = error;
      else {
        if (operator == null) {
          var expression = operand1;
        } else {
          var expression = eval(operand1 + " " + operator + " " + operand2);
          screen.value = expression;
        }
      }
    } else if (value.v == "C") {
      screen.value = "0";
    } else if (value.v == "+/-") {
      screen.value = "-" + screen.value;
    } else if (value.v == "%") {
      // var num=parseFloat
      screen.value = eval(screen.value + " " + "/ 100");
    } else {
      if (screen.value != "0" && screen.value != error) screen.value += value.v;
      else screen.value = value.v;
    }
  });
}
