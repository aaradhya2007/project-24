
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;



	//Create the Bodies Here.
piece1=createSprite(600,470,150,20)
piece2=createSprite(520,430,20,100)
piece3=createSprite(670,430,20,100)

paper=new Paper(300,400,20,20)
ground=new Ground(600,height,1200,20)

Engine.run(engine)
}


function draw() {
	Engine.update(engine)
  

  
  background(0);
 ground.display();
 paper.display();
  drawSprites();

}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-100})
	}
}

 


