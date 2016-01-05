
var bA = document.querySelector('#ba');
var bS = document.querySelector('#bs');
var bM = document.querySelector('#bm');
var bD = document.querySelector('#bd');
var b0 = document.querySelector('#b0');
var b1 = document.querySelector('#b1');
var b2 = document.querySelector('#b2');
var b3 = document.querySelector('#b3');
var b4 = document.querySelector('#b4');
var b5 = document.querySelector('#b5');
var b6 = document.querySelector('#b6');
var b7 = document.querySelector('#b7');
var b8 = document.querySelector('#b8');
var b9 = document.querySelector('#b9');
var calculatorDisplay = document.querySelector('#display');
var operand = [0,0];

function processButton(button) {
  if (button >= 0 && button < 10) {
    operand[0] = operand[0] * 10 + button;
    calculatorDisplay.textContent = operand[0];
  }
else {
  calculatorDisplay.textContent = button; //'number'; //+ myName;
 }
}

bA.onclick = function() {
  processButton('+');
}
bS.onclick = function() {
  processButton('-');
}
bM.onclick = function() {
  processButton('X');
}
bD.onclick = function() {
  processButton('/');
}
b0.onclick = function() {
  processButton(0);
}
b1.onclick = function() {
  processButton(1);
}
b2.onclick = function() {
  processButton(2);
}
b3.onclick = function() {
  processButton(3);
}
b4.onclick = function() {
  processButton(4);
}
b5.onclick = function() {
  processButton(5);
}
b6
.onclick = function() {
  processButton(6);
}
b7.onclick = function() {
  processButton(7);
}
b8.onclick = function() {
  processButton(8);
}
b9.onclick = function() {
  processButton(9);
}
