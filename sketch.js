var player,ground,playerimage,groundimage,bg,ground2;
function preload(){
  playerimage=loadAnimation("IMAGES/player.gif");
  groundimage=loadImage("IMAGES/ground.png")
  bg=loadImage("IMAGES/bg.jpg")
}

function setup() {

  createCanvas(displayWidth-90,displayHeight);
  
  //ground.addAnimation("groundAnimation",groundimage);
  //ground.scale=0.2;
 bg1=createSprite(displayWidth/2,displayHeight/3,2*displayWidth,displayHeight);
 bg1.addAnimation("background",bg);
 bg1.scale=1.4;
 bg1.velocityX=-2;
 player=new Player();
 ground=createSprite(displayWidth/2,displayHeight-150,displayWidth-50,70);
 ground2=createSprite(displayWidth/2,displayHeight-130,displayWidth-50,70);
 ground2.visible=false;

}

function draw() {
  background(255,255,255);  
  
  player.move();
  player.body.addAnimation("playerAnimation",playerimage);
  player.body.scale=0.5;
  player.body.collide(ground2);
  if(bg1.x<0){
    bg1.x=bg1.width/2;
  }
  console.log(bg1.x);


  //player.body.debug=true;
  //player.body.setCollider("rectangle",0,0,100,100)

  drawSprites();
  
}