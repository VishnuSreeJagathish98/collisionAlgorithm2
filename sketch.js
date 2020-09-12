var rectangle1, rectangle2;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  rectangle1 = createSprite(600, 400, 50, 80);
  rectangle1.shapeColor = "green";
 
  rectangle2 = createSprite(800, 400,80,30);
  rectangle2.shapeColor = "green";

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  rectangle2.x = World.mouseX;
  rectangle2.y = World.mouseY;

  if(isTouching(rectangle2, gameObject1)){
    rectangle2.shapeColor = "blue";
    gameObject1.shapeColor = "blue";
  }
  else {
    rectangle2.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}
