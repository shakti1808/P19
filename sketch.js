var Path,Runner,Money,Diamonds,Jwellery,Sword;
var PathImg,RunnerImg,MoneyImg,DiamondsImg,JwelleryImg,SwordImg;
var treasureCollection = 0;
var MoneyG,DiamondsG,JwelleryG,SwordGroup;

var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  PathImg = loadImage("Path.png");
  RunnerImg = loadAnimation("Runner1.png","Runner2.png");
  MoneyImg = loadImage("Money.png");
  DiamondsImg = loadImage("BagOfDiamonds.png");
  JwelleryImg = loadImage("Jwellery.png");
  SwordImg = loadImage("Sword.png");
  endImg =loadAnimation("GameOver.png");
}

function setup(){


Path=createSprite(200,200,200,200);
Path.addImage(PathImg);
Path.velocityY = 4;
Path.scale= 5

Runner = createSprite(20,350,120,120);
Runner.addAnimation("SahilRunning",RunnerImg);
Runner.scale= 0.3;
  
  
MoneyG=new Group();
DiamondsG=new Group();
JwelleryG=new Group();
SwordGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  Runner.x = World.mouseX;
  
  edges= createEdgeSprites();
  Runner.collide(edges);


   if(Path.y > height ){
     Path.y = height/2;
   }
  
    createMoney();
    createDiamonds();
    createJwellery();
    createSword();

    if (MoneyG.isTouching(Runner)) {
      MoneyG.destroyEach();
      treasureCollection=treasureCollection + 50;
    }
    else if (DiamondsG.isTouching(Runner)) {
      DiamondsG.destroyEach();
      treasureCollection=treasureCollection + 100;
      
    }else if(JwelleryG.isTouching(Runner)) {
      JwelleryG.destroyEach();
      treasureCollection= treasureCollection + 150;
      
    }else{
      if(SwordGroup.isTouching(Runner)) {
        gameState=END;
        
        Runner.addAnimation("SahilRunning",endImg);
        Runner.x=width/2;
        Runner.y=height/2;
        Runner.scale=0.6;
        
        MoneyG.destroyEach();
        DiamondsG.destroyEach();
        JwelleryG.destroyEach();
        SwordGroup.destroyEach();
        
        MoneyG.setVelocityYEach(0);
        DiamondsG.setVelocityYEach(0);
        JwelleryG.setVelocityYEach(0);
        SwordGroup.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,width-150,30);
  }

}

function createMoney() {
  if (World.frameCount % 200 == 0) {
  var Money = createSprite(Math.round(random(50, width-50),40, 10, 10));
  Money.addImage(MoneyImg);
  Money.scale=0.12;
  Money.velocityY = 5;
  Money.lifetime = 200;
  MoneyG.add(Money);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var Diamonds = createSprite(Math.round(random(50, width-50),40, 10, 10));
  Diamonds.addImage(DiamondsImg);
  Diamonds.scale=0.3;
  Diamonds.velocityY = 5;
  Diamonds.lifetime = 200;
  DiamondsG.add(Diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 410 == 0) {
  var Jwellery = createSprite(Math.round(random(50, width-50),40, 10, 10));
  Jwellery.addImage(JwelleryImg);
  Jwellery.scale=0.3;
  Jwellery.velocityY = 5;
  Jwellery.lifetime = 200;
  JwelleryG.add(Jwellery);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var Sword = createSprite(Math.round(random(50, width-50),40, 10, 10));
  Sword.addImage(SwordImg);
  Sword.scale=0.5;
  Sword.velocityY = 4;
  Sword.lifetime = 200;
  SwordGroup.add(Sword);
  }
}