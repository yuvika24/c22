
const Engine=Matter.Engine;
const World =Matter.World;
const Bodies=Matter.Bodies;



var engine,world,ground,ball;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world=engine.world;

  var ground_options = { 
  isStatic: true
  }

  ground=Bodies.rectangle(200,390,200,15,ground_options);
  World.add(world,ground);
  console.log(ground);


  var ball_options = {
    restitution: 1.0
  }
  ball = Bodies.circle(200,10,40,ball_options);
  World.add(world,ball);
  console.log(ball);
}

function draw() {
  background(15,180,252);  
Engine.update(engine);
  rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,15);
ellipseMode(CENTER);
ellipse(ball.position.x,ball.position.y,40,40);
}