function drawBackground(){
var ctx = document.getElementById("myCanvas").getContext("2d");
var imageObj = new Image();
ctx.width = window.innerWidth;
ctx.height = window.innerHeight;
imageObj.src = './img/Background.jpg';
ctx.drawImage(imageObj,0,0);

}

window.addEventListener('load', function readerOnLoad(evt) {
  window.removeEventListener('load', readerOnLoad);
  drawBackground();
  
});