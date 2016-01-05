
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

function displayNumber(number) {
  calculatorDisplay.textContent = number; //'number'; //+ myName;
}

bA.onclick = function() {
  displayNumber('+');
}
bS.onclick = function() {
  displayNumber('-');
}
bM.onclick = function() {
  displayNumber('X');
}
bD.onclick = function() {
  displayNumber('/');
}
b0.onclick = function() {
  displayNumber(0);
}
b1.onclick = function() {
  displayNumber(1);
}
b2.onclick = function() {
  displayNumber(2);
}
b3.onclick = function() {
  displayNumber(3);
}
b4.onclick = function() {
  displayNumber(4);
}
b5.onclick = function() {
  displayNumber(5);
}
b6
.onclick = function() {
  displayNumber(6);
}
b7.onclick = function() {
  displayNumber(7);
}
b8.onclick = function() {
  displayNumber(8);
}
b9.onclick = function() {
  displayNumber(9);
}
