var bg,bgIMG;
var snow, snowIMG;
var snow2, snow2IMG;

function preload(){
  bgIMG = loadImage("snow1.jpg");
  snowIMG = loadImage("snow5.webp");
  snow2IMG = loadImage("snow4.webp");
  //snow2.loadImage=("snow2.png");
  //snow3.loadImage=("snow3.png");
  //snow4.loadImage=("snow4.webp");
  //snow5.loadImage=("snow5.webp");

}
function setup() {
  createCanvas(1000,600);
  bg = createSprite(500,300);
  bg.addImage(bgIMG)
  bg.scale = 1.75

  snow = createSprite(500,100,20,20);
  snow.addImage(snowIMG);
  snow.scale = 0.2;

  snow2 = createSprite(600,100,20,20);
  snow2.addImage(snow2IMG);
  snow2.scale = 0.3;
}


function draw() {
  background(0);  
  drawSprites();
}