var car,wall,thickness;
var speed, weight;

function setup() {
  createCanvas(1200,500);
 car =createSprite(50, 200, 50, 50);
 wall=createSprite(1150,200,60,height/2);
 wall.shapeColor="black"; 
speed=random(1,40);
weight=random(400,1200);
thickness=random(22,83)
}
function draw() {
  background("lightblue"); 
  car.velocityX=speed;
  
 drawSprites();
}
function hasCollided(lcar,lwall){
  carleftEdge=lcar.x +lcar.width;
  wallRightEdges=lwall.x;
  if(carLeftEdge>=wallRightEdges){
    return true
  }
  return false;
}
if(hasCollided(car,wall)){
  car.velocityX=0
  var damage=0.5 * weight * speed *speed/(thickness *thickness *thickness);
}
if(damage>10){
  wall.shapeColor=color(255,0,0);

}
if(damage<10){
  wall.shapeColor=color(0,255,0);

}
