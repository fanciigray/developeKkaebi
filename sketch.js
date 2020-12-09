var redThing;
var shape;

function setup() {
    var canvas = createCanvas(960, 720);
    canvas.parent('game-kkeabimarket');

    redThing = new Draggable();
}

function draw() {
    background(248, 240, 222);
    redThing.update();
    redThing.over();
    redThing.show();

}

function mousePressed() {
    redThing.pressed();
}

function mouseReleased() {
    redThing.released();
}
