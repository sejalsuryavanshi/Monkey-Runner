var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var survivalTime=0;
var back,backImage;
var ground,groundImage;
var invisibleGround;


function preload(){
  
  groundImage=loadImage("a.jpg");
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  MonkeyImage = loadImage("banana.png");  
  
  foodGroup=new Group();
  obstacleGroup=new Group();
  
}



function setup() {
createCanvas(windowWidth,windowHeight);

  ground=createSprite(300, 330,600,10);
ground.velocityX=-12;
 ground.x=ground.width/2;
  ground.addImage(groundImage);
  ground.scale=1.1;
  
monkey=createSprite(50,23,20,20);
monkey.addAnimation("running",monkey_running);
monkey.scale=0.2;
  
 invisibleGround=createSprite(width-200, 530,600,10);
invisibleGround.velocityX=-4;
invisibleGround.x=ground.width/2;
invisibleGround.visible=false;
  
bananaGroup=new Group;
obstaclesGroup=new Group;

}


function draw() {

background("white");                    
 
  if(ground.x>0){
      ground.x = ground  .width /2; 
  
  }
  
   if(invisibleGround.x>0){
      invisibleGround.x = invisibleGround  .width /2; 
  
  }
  if(touches.length>0||keyDown("space")||monkey.y>=height-100){
     monkey.velocityY=-12;
     touches=[];
  }
  
  monkey.velocityY=monkey.velocityY+0.4 ;
 
  monkey.collide(invisibleGround);
  monkey.collide(obstaclesGroup);  
  
  spawnBanana();
  spawnobstacles();
  
 
  
 if(foodGroup.isTouching(monkey)){
  foodGroup.destroyEach();
  score=score+2;
  foodGroup.setVelocityYEach(0);
   
         switch(score){
     case 10:monkey.scale=0.3;
             break;
     case 20:monkey.scale=0.4;
             break;  
     case 30:monkey.scale=0.5;
             break;  
      case 40:monkey.scale=0.6;
             break;  
             default:break;
         }
 }
  
gameOver();
  
  drawSprites();
  
   stroke("black");
  textSize(20);
  fill("black");
  text("score:"+score,400,50);
  
  
  

}


function gameOver(){
 
    if(obstacleGroup.isTouching(monkey)){
  monkey.scale=0.2 
  //monkey.destroy(); 
//  obstacle.destroy(); 
// banana.destroy(); 
  foodGroup.setVelocityXEach(0);
 obstacleGroup.setVelocityXEach(0);
    fill("255");
    textSize("60");
  //  text("Game Over",250,300)
  //    score=0;
      
}
  
}
function spawnBanana(){
 
 if(World.frameCount%100===0){
   banana=createSprite(600,230,20,20);
   banana.addAnimation("moving",bananaImage);
   banana.scale=0.2
   banana.velocityX=-7;
   banana.y=Math.round(random(100,300));
   banana.lifetime=90;
   
   foodGroup.add(banana);
   
 
 }
}

function spawnobstacles(){
 
 if(World.frameCount%300===0){
   obstacle=createSprite(600,490,20,20);
   obstacle.addAnimation("moving",obstacleImage);
   obstacle.scale=0.2;
   obstacle.velocityX=-7;
  
    obstacle.lifetime=90;
   
   obstacleGroup.add(obstacle);
 }
}





