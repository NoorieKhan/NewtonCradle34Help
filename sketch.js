const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;

function setup() {
    canvas = createCanvas(windowWidth/2, windowHeight);
	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Matter.Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options = {
		mouse:canvasmouse
	}
	mConstraint = MouseConstraint.create(engine, options);
    World.add(world,mConstraint);
    
    pendulum1 = new Pendulum(300,500, "red");
	pendulum2 = new Pendulum(350,500, "orange");
	pendulum3 = new Pendulum(400,500, "yellow");
	pendulum4 = new Pendulum(450,500, "green");
	pendulum5 = new Pendulum(500,500, "blue");

	
	sling1 = new Sling(pendulum1.body, { x: 350, y: 250 }); 
	sling2 = new Sling(pendulum2.body, { x: 400, y: 250 }); 
	sling3 = new Sling(pendulum3.body, { x: 450, y: 250 }); 
	sling4 = new Sling(pendulum4.body, { x: 500, y: 250 }); 
	sling5 = new Sling(pendulum5.body, { x: 550, y: 250 }); 

	Engine.run(engine);
}

function draw() {
	background(0);
    Engine.update(engine);
    
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

}
  function mouseDragged(){
	  Matter.Body.setPosition(pendulum1.body, {x: mouseX, y:mouseY})
  }

