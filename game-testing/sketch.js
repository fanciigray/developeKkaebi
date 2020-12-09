//variables setting
const numRows = 4
const numColumns = 4
var faceUpImages = ['../src/bear.png', '../src/cat.png', '../src/circle.png', '../src/hexagon.png',
'../src/pentagon.png', '../src/square.png', '../src/star.png', '../src/triangle.png'];
var imagesDeck = [] ;

//setup
function setup() {
    createCanvas(720, 560);
    background(155);

    createTiles();
    
}

function draw() {

  drawSprites();

}

//카드 생성
function createTiles() {
    var count = 0;
    var countFaceUp = 0;

    //이미지 리스트 불러오기
    createImagesDeck(faceUpImages);
    
    //카드 배열 및 생성
    for(var i=0; i<numRows; i++) {
        for (var j = 0 ; j<numColumns; j++) {
        var back = createSprite(i * 95 + 60, j * 115 + 70);
        back.addAnimation('change', '../src/background.png', imagesDeck[count]);
        back.animation.playing = false;
        count ++;
        

        back.onMousePressed = function() {
            
            //카드 최대 2개 선택
            if (countFaceUp == 2) {
                this.animation.playing = false;

                //여기서 판정 진행

            }
            else {
                this.animation.nextFrame();
                
                //카드 1개만 선택 시 자유롭게 뒤집기
                var flip = this.animation.getFrame();
                if (flip == 1) {
                countFaceUp ++;}
                else {
                        countFaceUp --;
                }
               
            }
         }
        
        }
      }
    }


//이미지 짝 리스트 생성
      function createImagesDeck(images) {
    for (let i = 0; i < faceUpImages.length; i++) {
          imagesDeck.push(images[i]);
          imagesDeck.push(images[i]);
        }
      
    imagesDeck.sort(function() {
          return 0.5 - random();
          //난수 지정해서 랜덤하게 섞이도록 함 (-1.5~1.5이내 범위)
        })

        console.log(faceUpImages[0]);
    }