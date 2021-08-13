var garden,rabbit;
var AgardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
LeafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);

  rabbit.x = World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
  var select_Sprites = Math.round(random(1,2));

  if(frameCount % 80 == 0){
    if(select_Sprites == 1){
createApples();

    }
    else{
      createLeaf();

    }
  }
  drawSprites();
}
function createApples(){
apple = createSprite(random(50,350),40,10,10);
apple.addImage(appleImg);
apple.scale = 0.07;
apple.velocityY = 3;
apple.lifetime = 150;

}
function createLeaf(){
  leaf = createSprite(random(50,350),40,10,10);
  leaf.addImage(LeafImg);
  leaf.scale = 0.07;
  leaf.velocityY = 3;
  leaf.lifetime = 150;
}