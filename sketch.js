const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var bug1,bug2,bug3,bug4,bug5,bug6;
var chain1,chain2,chain3,chain4,chain5;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,5);
bug1=new bug(50,170,50,50);
bug2=new bug(150,170,50,50);
bug3=new bug(250,170,50,50);
bug4=new bug(350,170,50,50);
bug5=new bug(450,170,50,50);
bug6=new bug(550,170,50,50);
chain1=new Chain(bug1.body,bug2.body);
chain2=new Chain(bug2.body,bug3.body);
chain3=new Chain(bug3.body,bug4.body);
chain4=new Chain(bug4.body,bug5.body);
chain5=new Chain(bug5.body,bug6.body);
rock1=new rock(1100,200,100,100)
}

function draw() {
  background(bg);  
  Engine.update(myEngine);
ground.show();
bug1.show();
bug2.show();
bug3.show();
bug4.show();
bug5.show();
bug6.show();
chain1.show();
chain2.show();
chain3.show();
chain4.show();
chain5.show();
rock1.show();
  
  var collision = Matter.SAT.collides(bug6.body,rock1.body);
  if(collision.collided)
  {
    flag=1;
    
    
  }
  if(flag ===1){
    textSize(30);
    stroke(3);
    fill('blue');
    text("CRASH",500,200);
    crashSound.play();
  }
}
  function keyPressed()
  {
    if(keyCode === RIGHT_ARROW){
      Matter.Body.applyForce(bug6.body,{x:bug6.body.position.x,y:bug6.body.position.y},
        {x:0.5,y:0});
        trainSound.play();
    }


  }



