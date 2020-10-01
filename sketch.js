const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;



    groundOption={
        isStatic:true
    }

    ground = Bodies.rectangle(200,380,400,30,groundOption);
    World.add(world,ground);

    ballOption={
        restitution : 0
    }

    ball=Bodies.circle(200,100,50,ballOption);
    World.add(world,ball);

console.log(ball);

    
}

function draw(){
    background(0);
    Engine.update(engine);
    
    ellipseMode(CENTER);
    ellipse(ball.position.x,ball.position.y,50,50);

    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,30);
    
}
