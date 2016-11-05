var leftBottomXCoord = 0;
var leftBottomYCoord = 500;
var rightBottomXCoord = 600;
var rightBottomYCoord = 500;
var topXCoord = 300;
var topYCoord = 0;
var avgXCoord = 300;
var avgYCoord = 333;

var ctr = document.getElementById("ctr");
var rtval = document.getElementById("rightValue");
var botval = document.getElementById("bottomValue");
var ltval = document.getElementById("leftValue");

function moveCtr(val) {

  var bottomLocX = (document.querySelector('#bottomSlider').value/100)*(rightBottomXCoord-leftBottomXCoord)+leftBottomXCoord;
  var bottomLocY = (document.querySelector('#bottomSlider').value/100)*(rightBottomYCoord-leftBottomYCoord)+leftBottomYCoord;
  
  var rightLocX = (document.querySelector('#rightSlider').value/100)*(rightBottomXCoord-topXCoord)+topXCoord;
  var rightLocY = (document.querySelector('#rightSlider').value/100)*(rightBottomYCoord-topYCoord)+topYCoord;
  
  var leftLocX = (document.querySelector('#leftSlider').value/100)*(topXCoord-leftBottomXCoord)+leftBottomXCoord;
  var leftLocY = ((100-document.querySelector('#leftSlider').value)/100)*(leftBottomYCoord-topYCoord)+topYCoord;

  var avgLocX = (rightLocX+leftLocX+bottomLocX)/3;
  var avgLocY = (rightLocY+leftLocY+bottomLocY)/3;

  ctr.setAttribute('cx', avgLocX);
  ctr.setAttribute('cy', avgLocY);
}