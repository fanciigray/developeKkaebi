var game_area = document.getElementById('game-area');

function setup() {
    createCanvas(960, 720);
    createSprite(400, 200, 50, 50);
}

function draw() {
    background(255, 255, 100);
    drawSprites();
}
