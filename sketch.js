var gameArea = document.getElementById('game-area');

var hero, junha;
var starCracker;
var map;
var frame;

var SCENE_W = 1920;
var SCENE_H = 1440;

function setup() {
    createCanvas(960, 720);
    hero = createSprite(400, 200, 50, 80);
    junha = createSprite(200, 500, 50, 80)

    var heroAnimation = hero.addAnimation('walking', 'src/hero_1.png', 'src/hero_3.png')
    heroAnimation.offY = 18;
    var junhaAnimation = junha.addAnimation('standing', 'src/junha_01.png');

    map = new Group();
    for (var i=0; i<80; i++) {
        var rock = createSprite(random(-width, SCENE_W+width), random(-height, SCENE_H+height));
        rock.addAnimation('normal', 'src/rocks'+i%3+'.png');
        map.add(rock);
    }

    starCracker = new Group();
    for (var i=0; i<10; i++) {
        var star = createSprite(random(0, width), random(0, height));
        star.addAnimation('normal', 'src/star_01.png');
        starCracker.add(star);
    }

    frame = loadImage('src/frame.png');
}

function draw() {
    background(255, 255, 255);
    
    //hero move
    hero.velocity.x = (camera.mouseX - hero.position.x)/100;
    hero.velocity.y = (camera.mouseY - hero.position.y)/100;

    if (mouseIsPressed) {
        camera.zoom = 0.8
    } else {camera.zoom = 1};

    //camera posion = hero position
    camera.position.x = hero.position.x;
    camera.position.y = hero.position.y;

    //limit movement
    if (hero.position.x < 0) {hero.position.x = 0;}
    if (hero.position.y < 0) {hero.position.y = 0;}
    if (hero.position.x > SCENE_W) {hero.position.x = SCENE_W;}
    if (hero.position.y > SCENE_H) {hero.position.y = SCENE_H;}

    //맵 그리기
    drawSprites(map);
    drawSprites();

    //캐릭터 그림자 그리기
    noStroke();
    fill(0, 0, 0, 20);
    //그림자
    ellipse(hero.position.x, hero.position.y+90, 80, 30);
    //그 위에 캐릭터
    drawSprite(hero);
    drawSprite(junha);

    //상호작용
    hero.collide(junha);
    hero.overlap(starCracker, collect);

    //
    camera.off();
    image(frame, 0, 0);
}

function collect(collector, collected) {
    collected.remove();
}