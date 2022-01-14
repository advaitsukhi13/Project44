var bg,bgImg;
var player,playerImg;

function preload() {
  bgImg=loadImage("assets/bg.jpg");
  playerImg=loadImage("assets/ironman.png");

}


function setup() {
  createCanvas(windowWidth,windowHeight);
  bg=createSprite(displayWidth/2 , displayHeight/2 , 100, 100);
  bg.addImage(bgImg);
  bg.scale=1;
  player=createSprite(displayWidth-1000 , displayHeight-500 , 40, 40);
  player.addImage(playerImg);
  player.scale=0.35;
}

function draw() {
  background(0);  
  drawSprites();
}