
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree, treeImg, stone, stoneImg, ground, boy, boyImg;
var tree2,tree3,tree4,tree5,tree6,tree7,tree8;
var secretg;


function setup() {
	createCanvas(3000, 700);

  secretg = createSprite(1500,770,3000,70)
secretg.shapecolor="green"
	engine = Engine.create();
	world = engine.world;

	stone = new Stone(160,500,20);
  mango29 = new Mango(1700,300,30);
  mango28 = new Mango(1200,300,30);
  mango27 = new Mango(2400,300,30);
  mango26 = new Mango(2500,300,30);
  mango25 = new Mango(1280,300,30);
  mango24 = new Mango(2500,300,30);
  mango23 = new Mango(1300,300,30);
  mango22 = new Mango(2350,300,30);
  mango21 = new Mango(1300,300,30);
  mango20 = new Mango(1900,300,30);
  mango19 = new Mango(2780,300,30);
  mango18 = new Mango(2700,300,30);
  mango17 = new Mango(2500,300,30);
  mango16 = new Mango(1910,300,30);
  mango15 = new Mango(1680,300,30);
  mango14 = new Mango(1650,300,30);
  mango13 = new Mango(1700,300,30);
  mango12 = new Mango(1300,300,30);
  mango11 = new Mango(1900,300,30);
  mango10 = new Mango(1560,300,30);
  mango8 = new Mango(1700,300,30);
  mango1 = new Mango(1300,300,30);
	mango2 = new Mango(1400,250,30);
	mango3 = new Mango(1300,200,30);
	mango4 = new Mango(1390,300,30);
	mango5 = new Mango(1300,300,30);
	mango6 = new Mango(1200,300,30);
  mango7 = new Mango(1500,280,30);

  tree = new Tree(1300,680);
  tree2 = new Tree(1500,680);
  tree3 = new Tree(1700,680);
  tree4 = new Tree(1900,680);
  tree5 = new Tree(2100,680);
  tree6 = new Tree(2300,680);
  tree7 = new Tree(2500,680);
  tree8 = new Tree(2700,680);

  ground = new Ground(1500,680,4000,20);
	boy = new Boy(250,600);
	chain = new Chain(stone.body,{x:160, y:500});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(500);

  background("lightblue")
  fill('red');
  textSize(24);
  text("PRESS SPACE TO GET A SECOND CHANCE TO PLAY", 100,200);
  text("if u have knocked all of mangoes good job u won and to reset the game click on the reset button",100,240)
  ground.display();

  tree.display();
  tree2.display();
  tree3.display();
  tree4.display();
  tree5.display();
  tree6.display();
  tree7.display();
  tree8.display();

  boy.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango29.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  mango15.display();
  mango16.display();
  mango17.display();
  mango18.display();
  mango19.display();
  mango20.display();
  mango21.display();
  mango22.display();
  mango23.display();
  mango24.display();
  mango25.display();
  mango26.display();
  mango27.display();
  mango28.display();
  chain.display();

  detectCollision(stone, mango29);
  detectCollision(stone, mango28);
  detectCollision(stone, mango27);
  detectCollision(stone, mango26);
  detectCollision(stone, mango25);
  detectCollision(stone, mango24);
  detectCollision(stone, mango23);
  detectCollision(stone, mango22);
  detectCollision(stone, mango21);
  detectCollision(stone, mango20);
  detectCollision(stone, mango19);
  detectCollision(stone, mango18);
  detectCollision(stone, mango17);
  detectCollision(stone, mango16);
  detectCollision(stone, mango15);
  detectCollision(stone, mango14);
  detectCollision(stone, mango13);
  detectCollision(stone, mango12);
  detectCollision(stone, mango11);
  detectCollision(stone, mango10);
  detectCollision(stone, mango8);
  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    chain.fly();
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:160, y:500});
    chain.attach(stone.body);
  }
}
function detectCollision(lstone,lmango){
  stoneBodyPosition = lstone.body.position;
  mangoBodyPosition = lmango.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance <= lmango.r + lstone.r){
    Matter.Body.setStatic(lmango.body, false);
  }

}
