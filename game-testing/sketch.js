//animation setting
var bear, cat, cir, hexa, penta, sq, star, tri;

function preload() {
    bear = loadAnimation('src/background.png', 'src/bear.png')
    bear.looping = false;

}

function setup() {
    createCanvas(720, 560);
    background(365);
}

function draw() {

    animation(bear, 300, 150);
    
}

function mousePressed() {
  
    //move ahead one frame
    bear.nextFrame();
    //glitch.previousFrame();

  }

