
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperObject;
var world;
var engine;
var render;

function setup() {
	createCanvas(1200, 500);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	
	render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 500,
		  wireframes: false
		}
	  });

	groundObject=new ground(width/2,470,width,20);
	dustbinObj=new dustbin(1000,450);
	paperObject = new Paper(200,450,17);

	Engine.run(engine);
	//Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background(230);

  groundObject.display();
  dustbinObj.display();
  paperObject.display();

}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Body.applyForce(paperObject.paperBody, paperObject.paperBody.position, {x:50,y:-70});
	}
}