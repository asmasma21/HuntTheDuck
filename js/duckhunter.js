


var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var imageObj = new Image();
imageObj.onload = function() {
context.drawImage(imageObj,0,0);
};
imageObj.src = '../img/Background.jpg';
      

