const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
   
	Engine.run(engine); 
	bobDiameter = 40;

    roofObject = new Roof(430,9,1500,20);
	
	bobObject1 = new Bob(250,500,50);
	bobObject2 = new Bob(400,350,50);
	bobObject3 = new Bob(450,400,50);
	bobObject4 = new Bob(550,450,50);
	bobObject5 = new Bob(600,500,50);

  
  rope1=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0) 
  rope2=new Rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0) 
  rope3=new Rope(bobObject3.body,roofObject.body,0, 0) 
  rope4=new Rope(bobObject4.body,roofObject.body,bobDiameter*1, 0) 
  rope5=new Rope(bobObject5.body,roofObject.body,bobDiameter*2, 0)
}


function draw() {
  rectMode(CENTER);
  background(0);

  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();


  drawSprites();
 
}

function drawLine(constraint) 
{ 
  bobBodyPosition=constraint.bodyA.position
   roofBodyPosition=constraint.bodyB.position
    roofBodyOffset=constraint.pointB; 
    roofBodyX=roofBodyPosition.x+roofBodyOffset.x 
    roofBodyY=roofBodyPosition.y+roofBodyOffset.y 
    line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY); }

