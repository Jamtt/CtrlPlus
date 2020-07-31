let img = [];


let Letters = ["A","B","C","D","E","F","G","H","I","J","K","J","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8"];
//
// let loading = true;
// function loaded(image) {
// loading = false;



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
    text('Press any key (from A - Z & 1 - 8) to start :))', windowWidth / 2, windowHeight / 2.3);
  } else if (windowWidth < 600) {
    text('Tap for random letters!', windowWidth / 2, windowHeight / 2.3);
  }
  pop();
  }

// function draw() {
// background(255);
//
// if(loading) {
//   pop();
//   translate (width/2, height/2)
//   stroke(5);
//   line(0,0,100,0);
//    push();
//  }
// }



let imageHeight = (4083 / 6);
let imageWidth = (4500 / 6);

function keyPressed() {
  background(255);
  let which=key.toUpperCase();
  let whichImage=Letters.indexOf(which);
  // let plus = random("data/letters/1.png","data/letters/2.png","data/letters/3.png");
  // let whichplus = subset(Letters,27,30);

 //
 // print(Letters.);
  // if (keyPressed == "=") {
  // image(img[whichplus], windowWidth / 2, windowHeight / 2.3, imageHeight, imageWidth);
  // }


  fill(0);
  image(img[whichImage], windowWidth / 2, windowHeight / 2.3, imageHeight, imageWidth);
}


   function  mousePressed() {
   if (windowWidth < 900) {
  	background(255);
    let rand = round(random(Letters.length -1));
    let order = Letters[rand];
    let me ='img'+ [order];

    image(img[rand], windowWidth / 2, windowHeight / 2.3, 4500 / 9.5, 4083 / 8);
  }
}
