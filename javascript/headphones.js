//variables
var framerate = 60;
var rotation = framerate * 0.1;
//var rotation = 10000;
//framerate
World.frameRate = framerate;
// Create sprites and set animation images
var headphones1= createSprite(200,200);
var headphones2= createSprite(100,100);
var headphones3= createSprite(100,300);
var headphones4= createSprite(300,300);
var headphones5= createSprite(300,100);
headphones1.setAnimation("headphones_1");
headphones2.setAnimation("headphones_1");
headphones3.setAnimation("headphones_1");
headphones4.setAnimation("headphones_1");
headphones5.setAnimation("headphones_1");
function draw(){
  // Draw a background
  background("orange");
  // Update properties using the counter pattern
  headphones1.rotation = headphones1.rotation + rotation;
  headphones2.rotation = headphones2.rotation + rotation;
  headphones3.rotation = headphones3.rotation + rotation;
  headphones4.rotation = headphones4.rotation + rotation;
  headphones5.rotation = headphones5.rotation + rotation;
  // Draw sprites
  drawSprites();
}
