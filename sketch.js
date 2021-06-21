var bg, issimg, scimg1, scimg2, scimg3, scimg4;
var iss, sc;
var hasDocked=false;

function preload(){
  bg=loadImage("spacebg.jpg");
  issimg= loadImage("iss.png");
  scimg1= loadImage("spacecraft1.png");
  scimg2= loadImage("spacecraft2.png");
  scimg3= loadImage("spacecraft3.png");
  scimg4= loadImage("spacecraft4.png");
}
function setup() {
  createCanvas(600,400);
  
  iss=createSprite(300, 150, 50, 50);
  iss.addImage(issimg) 
  iss.scale=0.5;

  sc=createSprite(300, 250, 50, 50);
  sc.addImage(scimg1) 
  sc.scale=0.15;
}

function draw() {
  background(bg);  

  if(!hasDocked){
    if(keyDown("up")){
      sc.y=sc.y-2;
    }
    if(keyDown("down")){
      sc.addImage(scimg2)
    }
    if(keyDown("left")){
      sc.x=sc.x-2;
      sc.addImage(scimg3)

    }
    if(keyDown("right")){
      sc.x=sc.x+2;
      sc.addImage(scimg4)

    }
  }
  console.log(sc.y);
  if(sc.y<=200 && sc.x<=265){
    hasDocked=true;
    textSize(30);
    fill(255);
    text("Docking Succesfull",250, 300);
  }
  
  drawSprites();
}