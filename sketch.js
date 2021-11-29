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
  console.log(aranha.x);
  //controla o scaner
  finder.x = World.mouseX;
  finder.y = World.mouseY;
  //fechar o objetivo
  if(keyDown("x")){
    obj.visible = false;
  }
  if (finder.x - aranha.x < aranha.width/2 + finder.width/2
    && aranha.x - finder.x < aranha.width/2 + finder.width/2
    && finder.y - aranha.y < aranha.height/2 + finder.height/2
    && aranha.y - finder.y < aranha.height/2 + finder.height/2) {
  finder.shapeColor = "red";
  aranha.shapeColor = "red";
}
else {
  finder.shapeColor = "green";
  aranha.shapeColor = "green";
}
  drawSprites();
}
