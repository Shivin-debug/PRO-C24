const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var paper, binrightside, binmiddle, binleftside, bin_image;

function preload(){
  bin_image = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

  ground = new Ground(500, 670, 2000, 20);
  
  paper = new Paper(50, 665, 70);

  binrightside = new Bin(880, 610, 20, 80);
  binmiddle = new Bin(750, 650, 250, 20);
  binleftside = new Bin(620, 610, 20, 80);
}

function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("white");
  
  ground.display();
  binrightside.display();
  binmiddle.display();
  binleftside.display();
  paper.display();

  image(bin_image, 625, 390, 250, 250);
}

function keyPressed(){
  if (keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper.pa, paper.pa.position, {x:300, y:-300});
  }
}