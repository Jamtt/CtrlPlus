let img = [];
let Letters = ["A","B","C","D","E","F","G","H","I","J","K","J","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
function preload() {
  for (var i=0; i<Letters.length; i++) {
    img[i] = loadImage("data/letters/"+Letters[i].toLowerCase()+".png"); 
  }
}

function setup() {
  imageMode(CENTER);
  createCanvas(displayWidth, displayHeight);
  background(255);
  
  if( windowWidth < 900 ) {
    textSize(15);
  } else if ( windowWidth > 900 ) {
    textSize(25);
  }

  push();
  textAlign(CENTER);
  fill('#aaaaaa');
  if (windowWidth > 600) {
    text('Press any key (from A - Z) to start :)', windowWidth / 2, windowHeight / 2.3);
  } else if (windowWidth < 600) {
    text('Tap to cycle through the letters', windowWidth / 2, windowHeight / 2.3);
  }
  pop();
}

function draw() {
}

let imageHeight = (4083 / 6);
let imageWidth = (4500 / 6);

function keyPressed() {
  background(255);
  let which=key.toUpperCase();
  let whichImage=Letters.indexOf(which);
  fill(0);
  image(img[whichImage], windowWidth / 2, windowHeight / 2.3, imageHeight, imageWidth);
}

function  mousePressed() {
	background(255);
    let rand = round(random(Letters.length -1));
    let order = Letters[rand];
    text(order, 20,20);
    text(rand,20,40);

    let me ='img'+ [order];
    
    image(img[rand], windowWidth / 2, windowHeight / 2.3, imageWidth/2, imageHeight/2);

  }

