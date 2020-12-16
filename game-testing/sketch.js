//variables setting
const numRows = 4
const numColumns = 4
var faceUpImages = ['../src/bear.png', '../src/cat.png', '../src/circle.png', '../src/hexagon.png',
'../src/pentagon.png', '../src/square.png', '../src/star.png', '../src/triangle.png'];
var imagesDeck = [] ;
var cardMatch = [] ;
var flippedCards ;
var countFaceUp = 0;
var countDown = 0;

//setup
function setup() {
    createCanvas(720, 560);
    background(200);

    flippedCards = new Group();

    game();
    
}

function draw() {

  drawSprites();

}

//카드 생성
function game() {
    var count = 0;

    //이미지 리스트 불러오기
    createImagesDeck(faceUpImages);
    
    //카드 배열 및 생성
    for(var i=0; i<numRows; i++) {
        for (var j = 0 ; j<numColumns; j++) {
        var back = createSprite(i * 95 + 60, j * 115 + 70);

        //애니메이션 라벨이름을 'faceUpImage'로 설정하여 판단기준으로 활용
        back.addAnimation('stop', imagesDeck[count]);
        back.addAnimation(imagesDeck[count], '../src/background.png', imagesDeck[count]);
        back.changeAnimation(imagesDeck[count]);
        back.animation.playing = false;

        //다음 카드 만들기
        count ++;

        //게임 끝내기 위한 변수
        countDown ++;

        //마우스 클릭 시
        back.onMousePressed = function() {
          
          //카드 뒤집기
          this.animation.nextFrame();
                
          //카드 1개만 선택 시 자유롭게 뒤집기
          var flip = this.animation.getFrame();
          if (flip == 1) {

          //비교 위해 카드 애니메이션 라벨 추가
          cardMatch.push(this.getAnimationLabel());

          //애니메이션 적용 위해 그룹에 추가
          flippedCards.add(this);

          //뒤집혀진 카드 수 세기
          countFaceUp ++;
          }

          else {

            //비교 목록에서 제거
            cardMatch.pop();

            //그룹에서 제거
            flippedCards.remove(this);
            countFaceUp = 0;

          }
          
          //판정
          if (countFaceUp == 2) {
            
            if (cardMatch[0] == cardMatch[1]) {
              //애니메이션 멈추기
              flippedCards.get(0).changeAnimation('stop');
              this.changeAnimation('stop');

              //변수 초기화
              countFaceUp = 0;
              cardMatch.pop();
              cardMatch.pop();
              flippedCards.clear();
              
              //끝내기
              countDown = countDown-2;
              console.log(countDown);

              if (countDown ==  0) {
                var finish = createSprite(540, 260);
                finish.addAnimation('finish', '../src/finish.png');
              }

            }
            else {
              //카드 다시 뒤집기
              this.animation.frameDelay = 80;
              flippedCards.get(0).animation.frameDelay = 80;
              flippedCards.get(0).animation.goToFrame(0);
              this.animation.goToFrame(0);

              //변수 초기화
              countFaceUp = 0;
              cardMatch.pop();
              cardMatch.pop();
              flippedCards.clear();
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
    }