var finder;

function preload(){
  fundo = loadImage("limbo.jpg");
  aranhaImg = loadAnimation("aranha1.png");
  objimg = loadImage("obj.png");
}
function setup() {
  createCanvas(800,400);
  aranha = createSprite(Math.round(random(0,800)), Math.round(random(300,400)), 50, 50);
  aranha.addAnimation("aranha", aranhaImg);
  finder = createSprite(400,200,10,50);
  obj = createSprite(400,200,50,50);
  obj.addImage("obj", objimg);
}

function draw() {
  background(fundo);  
  
  drawSprites();
}
