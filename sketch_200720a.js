function preload() {

  imgA = loadImage('data/letters/a.png');
  imgB = loadImage('data/letters/b.png');
  imgC = loadImage('data/letters/c.png');
  imgD = loadImage('data/letters/d.png');
  imgE = loadImage('data/letters/e.png');
  imgF = loadImage('data/letters/f.png');
  imgG = loadImage('data/letters/g.png');
  imgH = loadImage('data/letters/h.png');
  imgI = loadImage('data/letters/i.png');
  imgJ = loadImage('data/letters/j.png');
  imgK = loadImage('data/letters/k.png');
  imgL = loadImage('data/letters/l.png');
  imgM = loadImage('data/letters/m.png');
  imgN = loadImage('data/letters/n.png');
  imgO = loadImage('data/letters/o.png');
  imgP = loadImage('data/letters/p.png');
  imgQ = loadImage('data/letters/q.png');
  imgR = loadImage('data/letters/r.png');
  imgS = loadImage('data/letters/s.png');
  imgT = loadImage('data/letters/t.png');
  imgU = loadImage('data/letters/u.png');
  imgV = loadImage('data/letters/v.png');
  imgW = loadImage('data/letters/w.png');
  imgX = loadImage('data/letters/x.png');
  imgY = loadImage('data/letters/y.png');
  imgZ = loadImage('data/letters/z.png');

}


function setup() {
  imageMode(CENTER);
  createCanvas(displayWidth, displayHeight);




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
  // noFill();
  // stroke(random(0, 255), random(0, 255), random(0, 255), 100);
  // translate(width / 2, height / 2);
  // rotate(PI / 3.0);
  // ellipse(mouseX, mouseY, 350 / 3, 240 / 3)
}

let imageHeight = (4083 / 6);
let imageWidth = (4500 / 6);

function keyPressed() {
  background(255);
  text(key.toUpperCase(), windowWidth - 40, 20);
  fill(0);

  if (key == 'a' || key == 'A') {
    image(imgA, windowWidth / 2, windowHeight / 2.3, imageHeight, imageWidth)
  }
  if (key == 'b' || key == 'B') {
    image(imgB, windowWidth / 2, windowHeight / 2.3, imageHeight, imageWidth)
  }
  if (key == 'c' || key == 'C') {
    image(imgC, windowWidth / 2, windowHeight / 2.3, imageHeight, imageWidth)
  }
  if (key == 'd' || key == 'D') {
    image(imgD, windowWidth / 2, windowHeight / 2.3, imageHeight, imageWidth)
  }
  if (key == 'e' || key == 'E') {
    image(imgE, windowWidth / 2, windowHeight / 2.3, imageHeight, imageWidth)
  }
  if (key == 'f' || key == 'F') {
    image(imgF, windowWidth / 2, windowHeight / 2.3, imageHeight, imageWidth)
  }
  if (key == 'g' || key == 'G') {
    image(imgG, windowWidth / 2, windowHeight / 2.3, imageHeight, imageWidth)
  }
  if (key == 'h' || key == 'H') {
    image(imgH, windowWidth / 2, windowHeight / 2.3, imageHeight, imageWidth)
  }
  if (key == 'i' || key == 'I') {
    image(imgI, windowWidth / 2, windowHeight / 2.3, imageHeight, imageWidth)
  }
  if (key == 'j' || key == 'J') {
    image(imgJ, windowWidth / 2, windowHeight / 2.3, imageHeight, imageWidth)
  }
  if (key == 'k' || key == 'K') {
    image(imgK, windowWidth / 2, windowHeight / 2.3, imageHeight, imageWidth)
  }
  if (key == 'l' || key == 'L') {
    image(imgL, windowWidth / 2, windowHeight / 2.3, imageHeight, imageWidth)
  }
  if (key == 'm' || key == 'M') {
    image(imgM, windowWidth / 2, windowHeight / 2.3, imageHeight, imageWidth)
  }
  if (key == 'n' || key == 'N') {
    image(imgN, windowWidth / 2, windowHeight / 2.3, imageHeight, imageWidth)
  }
  if (key == 'o' || key == 'O') {
    image(imgO, windowWidth / 2, windowHeight / 2.3, imageHeight, imageWidth)
  }
  if (key == 'p' || key == 'P') {
    image(imgP, windowWidth / 2, windowHeight / 2.3, imageHeight, imageWidth)
  }
  if (key == 'q' || key == 'Q') {
    image(imgQ, windowWidth / 2, windowHeight / 2.3, imageHeight, imageWidth)
  }
  if (key == 'r' || key == 'R') {
    image(imgR, windowWidth / 2, windowHeight / 2.3, imageHeight, imageWidth)
  }
  if (key == 's' || key == 'S') {
    image(imgS, windowWidth / 2, windowHeight / 2.3, imageHeight, imageWidth)
  }
  if (key == 't' || key == 'T') {
    image(imgT, windowWidth / 2, windowHeight / 2.3, imageHeight, imageWidth)
  }
  if (key == 'u' || key == 'U') {
    image(imgU, windowWidth / 2, windowHeight / 2.3, imageHeight, imageWidth)
  }
  if (key == 'v' || key == 'V') {
    image(imgV, windowWidth / 2, windowHeight / 2.3, imageHeight, imageWidth)
  }
  if (key == 'w' || key == 'W') {
    image(imgW, windowWidth / 2, windowHeight / 2.3, imageHeight, imageWidth)
  }
  if (key == 'x' || key == 'X') {
    image(imgX, windowWidth / 2, windowHeight / 2.3, imageHeight, imageWidth)
  }
  if (key == 'y' || key == 'Y') {
    image(imgY, windowWidth / 2, windowHeight / 2.3, imageHeight, imageWidth)
  }
  if (key == 'z' || key == 'Z') {
    image(imgZ, windowWidth / 2, windowHeight / 2.3, imageHeight, imageWidth)
  } else if (keyCode == BACKSPACE) {
    background(255);
  }
}

var Letters = ["A","B","C","D","E","F","G","H","I","J","K","J","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

function  mousePressed() {
  if( windowWidth < 900 ) {

    var rand = round(random(Letters.length -1));
    var order = Letters[rand];
    background(255);
    text(order, 20,20);
    text(rand,20,40);

    let me ='img'+ [order];
    text(me, 20, 60);

    print(me);

    image(me, windowWidth / 2, windowHeight / 2.3, imageHeight/2, imageWidth/2);

  }
}
