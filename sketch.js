
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbin2,dustbin3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;



	//Create the Bodies Here.

dustbin3=new Dustbin(650,490,100,10)

dustbin2=new Dustbin(700,450,10,100)
dustbin1=new Dustbin(600,450,10,100)

paper=new Paper(100,480,40)
ground=new Ground(600,height,1200,20)

Engine.run(engine)
}


function draw() {
	Engine.update(engine)
  

  
  background(255);
 ground.display();

 paper.display();
 
 dustbin1.display(); 
 dustbin2.display();
 
 dustbin3.display();
  drawSprites();

}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-85})
	}
}

 


