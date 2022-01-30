// Declare myGame, the object that contains our game's states
var myGame = {
    //Define our game states
    scenes: [],
  
    // Define common framerate to be referenced in animations
    frameRate: 10,
};

// 게임 플레이 관련해서 필요한 정보도 json으로 묶어서 깔끔하게 보일 수 잇으면 좋을텐데

var Collection = [];
var CheckMet = [];
var isBtrCollected = false;
var LIKE_IT = false;
var DISLIKE_IT = false;
var velocity = 5;
var FRONT_BACK_WIDTH = 1666;
var ECT_WIDTH = 1280;
var JUNHA, ZKP, BYURI, DUNGSIL, JOY, WUWU, CHILSUNG;
var MET_JUNHA;
var player, main, cursors, numberNow, numberCount, posBefore;
var sceneBefore = 1000;

var endingCredit;
endingCredit = "기획\nTEAM ME.A\n뛰뛰, 밤톨, 용요\n\n\n그림/디자인\n배경/캐릭터/컷씬: 용요\n미니게임: 밤톨, 용요\nUI/UX 디자인: 밤톨, 뛰뛰\n\n\n음악\n배경음악\nhttp://pixabay.com/\nhttp://opengameart.org/\n\n효과음\nhttp://freesfx.co.uk/\nhttp://pixabay.com/\nhttp://opengameart.org/\n\n\n제작기간\n2020년 2월부터 2022년 1월까지\n\n\n플레이해주셔서 감사합니다"

function playerMove() {
if (cursors.right.isDown) { 
    LIKE_IT = false; DISLIKE_IT = false;
    player.anims.play('right', true); 
    player.x += velocity;
  }
else if (cursors.left.isDown) { 
   LIKE_IT = false; DISLIKE_IT = false;
    player.anims.play('left', true); 
    player.x -= velocity; 
  }
else { 
  playerReact(); 
}
};

function playerReact() {

    if (player.visible != true) {
      LIKE_IT = false; DISLIKE_IT = false;
      player.visible = true;
    } else {
      if (LIKE_IT == true) {
        player.anims.play('like', true);
      }
      else if (DISLIKE_IT == true) {
        player.anims.play('dislike', true);
      }
      else {
        player.anims.play('standing', true);
      }
    }
}

function stay(sth, gap, mapsize) {
    var start, end;

    sth.x = player.x + (480 - ((sth.width / 2) + gap));

    var standardStart = 960 - ( sth.width / 2 ) - gap; 
    var standardEnd = mapsize - ( sth.width / 2 ) - gap;

    if (sth.x <= standardStart) { sth.x = standardStart; }
    else if (sth.x >= standardEnd) { sth.x = standardEnd; }
    else {
        if (cursors.right.isDown) { sth.x += velocity; }
        else if (cursors.left.isDown) { sth.x -= velocity; }
    }
}