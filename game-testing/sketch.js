//variables setting
var bear, cat, cir, hexa, penta, squa, star, tri;
const numRows = 4
const numColumns = 4
var faceUpImages
var imagesDeck = []
var ghost;

function setup() {
    createCanvas(720, 560);
    background(155);

    createTiles();
    createImagesDeck(faceUpImages);


}

function draw() {

  drawSprites();

}

//카드 생성(뒤집은 상태)
function createTiles() {
    for(var i=0; i<numRows; i++) {
        for (var j =0 ; j<numColumns; j++) {
        var back = createSprite(i * 95 + 60, j * 115 + 70);
        back.addImage(loadImage('../src/background.png'));
        }
    }
    }

function loadFaceUpImages() {
    faceUpImages = [
        loadImage('../src/bear.png'),
        loadImage('../src/cat.png'),
        loadImage('../src/circle.png'),
        loadImage('../src/hexagon.png'),
        loadImage('../src/pentagon.png'),
        loadImage('../src/square.png'),
        loadImage('../src/star.png'),
        loadImage('../src/triangle.png')
    ]
      }

//짝 생성되도록 리스트 생성하기
      function createImagesDeck(images) {
    for (let i = 0; i < faceUpImages.length; i++) {
          imagesDeck.push(images[i])
          imagesDeck.push(images[i])
        }
      
    imagesDeck.sort(function() {
          return 0.5 - random()
          //난수 지정해서 랜덤하게 섞이도록 함 (-1.5~1.5이내 범위)
        })
    }

        /*ghost = createSprite(100, 100);
    ghost.addAnimation('change', '../src/background.png', '../src/bear.png');
    ghost.animation.playing = false;


    ghost.onMousePressed = function() {
        this.animation.nextFrame();
    }*/

