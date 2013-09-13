function drawBackground(){
var ctx = document.getElementById("myCanvas").getContext("2d");
var imageObj = new Image();
var score=0;
ctx.width = window.innerWidth;
ctx.height = window.innerHeight;
imageObj.src ='duck-hunt.jpg';
ctx.drawImage(imageObj,0,0);

ctx.rect(5,440,70,35);
ctx.fillStyle = '#000000';
ctx.fill();
ctx.lineWidth =2;
ctx.strokeStyle = '#00ff00';
ctx.stroke();

ctx.font="Bold 14px Calibri";
ctx.fillStyle = '#00ff00';
ctx.fillText("SHOT",15,470);

ctx.font="Bold 14px Calibri";
ctx.fillStyle = '#ffffff';
ctx.fillText("Score : "+ score,230,20);



var dog = new Image();
}

window.addEventListener('load', function readerOnLoad(evt) {
  window.removeEventListener('load', readerOnLoad);
  drawBackground();
  
});
