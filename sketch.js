var incX = 0.09;
var incY = 0.08;
var distance = 25;
var wavesHeight = 42;
var looping = true;
var frame = 0;

var xoff = 0;
var yoff = 0.5;
var roff = 1;
var goff = 2;
var boff = 3;

var bgRch = 0;
var bgGch = 0;
var bgBch = 0;
var bgCounter = 0;

let myFont;
function preload() {
  myFont = loadFont('Noe-Text-Black.otf');
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch-holder');
  background(0);
  noiseDetail(2);
}

function draw() {
  var zOff = frameCount * 0.01;
  var noiseyX = noise(xoff);
  var x = map(noiseyX, 0, 1, 0, width);
  var noiseyY = noise(yoff);
  var y = map(noiseyY, 0, 1, 0, height);
  background(noise(roff)*bgRch,noise(goff)*bgGch,noise(boff)*bgBch);

  if(frameCount % 60 === 0) {
  
    if(bgCounter === 0) {
      bgRch = 197;
      bgGch = 248;
      bgBch = 243; 
    } 
    else if(bgCounter === 1) {
      bgRch = 0;
      bgGch = 233;
      bgBch = 255;  
    }
    else if(bgCounter === 2) {
      bgRch = 0;
      bgGch = 176;
      bgBch = 255;  
    } 
    else if(bgCounter === 3) {
      bgRch = 33;
      bgGch = 98;
      bgBch = 227;  
    }
    else if(bgCounter === 4) {
      bgRch = 68;
      bgGch = 0;
      bgBch = 242;  
    }
    else if(bgCounter === 5) {
      bgRch = 0;
      bgGch = 0;
      bgBch = 0;  
    }
    else if(bgCounter === 6) {
      bgRch = 0;
      bgGch = 0;
      bgBch = 0;  
    }
    else if(bgCounter === 7) {
      bgRch = 0;
      bgGch = 0;
      bgBch = 0;  
    }

    bgCounter += 1;
    if(bgCounter === 8) {
      bgCounter = 0;
    }
  }


  

  //noStroke();
  strokeWeight(0.5);
  stroke(0);
  var yOff = 0;
  for(var y = - wavesHeight; y < height + wavesHeight; y += distance) {
    var xOff = 0;
    var r = xOff;
    beginShape();
    for(var x = -wavesHeight; x < width *2; x += distance) {
      var n = noise(xOff, yOff, zOff);
      var g = n;
      var b = yOff;
      var value = map(n, 0, 1, -wavesHeight, wavesHeight);
      curveVertex(x, y + value);
      xOff += incX;
      r = map(xOff, 0, 3.5, 0, 100);
      g = map(n, 0.2, 0.7, 100, 200);
      b = map(yOff, 0, 4, 0, 255);
      fill(r, g, b, b*1.5);
    }

    endShape();
    yOff += incY;
  
  }

  xoff += 0.005;
  yoff += 0.005;
  roff += 0.01;
  goff += 0.01;
  boff += 0.01;

  // big screen
  if(width > 1479) {
    noStroke();
    textFont(myFont);
    fill(0, noise(goff)*bgGch, noise(boff)*bgBch, 255);
    textSize(450);
    text('Flux', width/2 - 690, height/2-50);
    text('Island', width/2 - 690, height/2+320);
  }
  // mid sized screen/iPad
  else if(width <= 1479 && width > 1000){
    noStroke();
    textFont(myFont);
    fill(0, noise(goff)*bgGch, noise(boff)*bgBch, 255);
    textSize(350);
    text('Flux', width/2 - 500, height/2-50);
    text('Island', width/2 - 500, height/2+240);
  }
  //phone
  else {
    noStroke();
    textFont(myFont);
    fill(0, noise(goff)*bgGch, noise(boff)*bgBch, 255);
    textSize(110);
    text('Flux', width/2 - 180, height/2-80);
    text('Island', width/2 - 180, height/2+50);

  }


  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}