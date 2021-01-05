
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var dustbin1, dustbin2, dustbin3;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;
	paper = new Paper(100,360);
	ground = new Ground(800,690,1600,30);
	dustbin1 = new Dustbin(1100,665,170,20);
	dustbin2 = new Dustbin(1005,615,20,120);
	dustbin3 = new Dustbin(1195,615,20,120);
	/*box1 = createSprite(width/2,670,90,20);
	box1.shapeColor = "red";

	box2 = createSprite(450,615,20,100);
	box2.shapeColor = "red";

	box3 = createSprite(350,615,20,100);
	box3.shapeColor = "red";*/
	//Create the Bodies Here.


	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  drawSprites();
 
}
function keyPressed(){

if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paper.body, paper.body.position ,{x : 100, y : -100})
}

}


