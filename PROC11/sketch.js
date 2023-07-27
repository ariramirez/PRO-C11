
function preload(){

}

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("blue");
 
}

var trex ,trex_running;
var ground;
function preload(){
 trex_running=loadAnimation("trex1.png","trex3.png","trex4.png"); 

}

  
  //crear sprite de Trex
 trex=createSprite(50,160,20,50);
 trex.addAnimation("running",trex_running);
 trex.scale=0.5;
 ground=createSprite(200,190,400,20);


function draw(){
  background("white")
 
 if(keyDown("space")||keyDown("enter")){  
  trex.velocityY=-10
  
}
 trex.velocityY=trex.velocityY+1;
 trex.collide(ground);
drawSprites();
}
