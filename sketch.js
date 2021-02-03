
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
hammer1= new hammer()
plane1= new plane()
stone1= new stone()
sand1= new sand(200,650)
sand2= new sand(220,650)
sand3= new sand(240,650)
sand4= new sand(260,650)
rubber1=new rubber()
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  hammer1.display();
 plane1.display()
 stone1.display()
 sand1.display()
 sand2.display()
 sand3.display()
 sand4.display()
 rubber1.display()
  drawSprites();
 
}



