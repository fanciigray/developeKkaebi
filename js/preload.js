var preloadState = new Phaser.Class({

    Extends: Phaser.Scene,
    initialize:
    function Preload(){
        Phaser.Scene.call(this, {key: 'Preload'});
    },

    preload: function() {
        // 로딩 완료 로고
        this.load.image('logo', 'assets/logo/logo.png');

        // Preload images for this state
        var progressbox = this.add.graphics();
        var progressbar = this.add.graphics();
        
        var percentagetxt = this.add.text(
            460, 360 - 10,
            '0 %',
            {fontFamily: 'joyfulStory', fontSize: 20, color: '#2b2b2b'}
        );

        progressbox.fillStyle(0x2b2b2b, 1);
        progressbox.fillRect(320, 335, 320, 50);

        this.load.on('progress', function(value) {
            // console.log(value);
            progressbar.clear();
            progressbar.fillStyle(0xf8f0de, 1);
            progressbar.fillRect(330, 345, 300 * value, 30);
            percentagetxt.setText(parseInt(value * 100) + ' %');
        });
        this.load.on('complete', function() {
            // console.log('complete');
            progressbox.destroy();
            progressbar.destroy();
            percentagetxt.destroy();
        });

        // 배경
        this.load.image('front-1', 'assets/map/front-1.png');
        this.load.image('f1-gc', 'assets/map/front-1-gc.png');
        this.load.image('f1-phone', 'assets/map/front-1-phone.png');

        this.load.image('sideroom', 'assets/map/side.png');
        this.load.image('side-blanket', 'assets/map/side-blanket.png');
        this.load.image('side-rmc', 'assets/map/side-rmc.png');
        this.load.image('side-tv', 'assets/map/side-tv.png');

        this.load.image('front-2', 'assets/map/front-2.png');
        this.load.image('f2-fire', 'assets/map/front-2-fire.png');
        this.load.image('f2-gc', 'assets/map/front-2-gc.png');
        this.load.image('f2-woods', 'assets/map/front-2-woods.png');
        this.load.image('f2-dummyphone', 'assets/map/front-2-dummy phone.png');

        this.load.image('icecream', 'assets/map/icecream.png');
        this.load.image('i-candy', 'assets/map/icecream-candy.png'); 
        this.load.image('i-btn', 'assets/map/icecream-button5.png');

        this.load.image('st-1', 'assets/map/stationary-1.png');
        this.load.image('st1-bag', 'assets/map/stationary-1-plasticbag.png');
        this.load.image('st1-11', 'assets/map/stationary-1-101.png');
        this.load.image('st1-12', 'assets/map/stationary-1-102.png');
        this.load.image('st1-13', 'assets/map/stationary-1-103.png');
        this.load.image('st1-14', 'assets/map/stationary-1-104.png');
        this.load.image('st1-15', 'assets/map/stationary-1-105.png');
        this.load.image('st1-16', 'assets/map/stationary-1-106.png');
        this.load.image('st1-17', 'assets/map/stationary-1-107.png');
        this.load.image('st1-18', 'assets/map/stationary-1-108.png');
        this.load.image('st1-19', 'assets/map/stationary-1-109.png');
        this.load.image('st1-21', 'assets/map/stationary-1-201.png');
        this.load.image('st1-22', 'assets/map/stationary-1-202.png');
        this.load.image('st1-23', 'assets/map/stationary-1-203.png');
        this.load.image('st1-24', 'assets/map/stationary-1-204.png');
        this.load.image('st1-25', 'assets/map/stationary-1-205.png');
        this.load.image('st1-26', 'assets/map/stationary-1-206.png');
        this.load.image('st1-27', 'assets/map/stationary-1-207.png');
        this.load.image('st1-28', 'assets/map/stationary-1-208.png');
        this.load.image('st1-29', 'assets/map/stationary-1-209.png');
        this.load.image('st1-210', 'assets/map/stationary-1-210.png');
        this.load.image('st1-211', 'assets/map/stationary-1-211.png');
        this.load.image('st1-212', 'assets/map/stationary-1-212.png');
        this.load.image('st1-213', 'assets/map/stationary-1-213.png');
        this.load.image('st1-31', 'assets/map/stationary-1-301.png');
        this.load.image('st1-32', 'assets/map/stationary-1-302.png');
        this.load.image('st1-33', 'assets/map/stationary-1-303.png');
        this.load.image('st1-34', 'assets/map/stationary-1-304.png');
        this.load.image('st1-35', 'assets/map/stationary-1-305.png');
        this.load.image('st1-36', 'assets/map/stationary-1-306.png');
        this.load.image('st1-37', 'assets/map/stationary-1-307.png');
        this.load.image('st1-38', 'assets/map/stationary-1-308.png');
        this.load.image('st1-39', 'assets/map/stationary-1-309.png');

        this.load.image('st-2', 'assets/map/stationary-2.png');
        this.load.image('st2-btn', 'assets/map/stationary-2-button3.png');      
        this.load.image('st2-11', 'assets/map/stationary-2-101.png');
        this.load.image('st2-12', 'assets/map/stationary-2-102.png');
        this.load.image('st2-13', 'assets/map/stationary-2-103.png');
        this.load.image('st2-14', 'assets/map/stationary-2-104.png');
        this.load.image('st2-15', 'assets/map/stationary-2-105.png');
        this.load.image('st2-16', 'assets/map/stationary-2-106.png');
        this.load.image('st2-17', 'assets/map/stationary-2-107.png');
        this.load.image('st2-18', 'assets/map/stationary-2-108.png');
        this.load.image('st2-19', 'assets/map/stationary-2-109.png');
        this.load.image('st2-110', 'assets/map/stationary-2-110.png');
        this.load.image('st2-111', 'assets/map/stationary-2-111.png');  
        this.load.image('st2-21', 'assets/map/stationary-2-201.png');
        this.load.image('st2-22', 'assets/map/stationary-2-202.png');
        this.load.image('st2-23', 'assets/map/stationary-2-203.png');
        this.load.image('st2-24', 'assets/map/stationary-2-204.png');
        this.load.image('st2-25', 'assets/map/stationary-2-205.png');
        this.load.image('st2-26', 'assets/map/stationary-2-206.png');
        this.load.image('st2-27', 'assets/map/stationary-2-207.png');
        this.load.image('st2-28', 'assets/map/stationary-2-208.png');
        this.load.image('st2-29', 'assets/map/stationary-2-209.png');
        this.load.image('st2-210', 'assets/map/stationary-2-210.png');
        this.load.image('st2-211', 'assets/map/stationary-2-211.png');
        this.load.image('st2-31', 'assets/map/stationary-2-301.png');
        this.load.image('st2-32', 'assets/map/stationary-2-302.png');
        this.load.image('st2-33', 'assets/map/stationary-2-303.png');
        this.load.image('st2-34', 'assets/map/stationary-2-304.png');
        this.load.image('st2-35', 'assets/map/stationary-2-305.png');
        this.load.image('st2-36', 'assets/map/stationary-2-306.png');
        this.load.image('st2-37', 'assets/map/stationary-2-307.png');
        this.load.image('st2-38', 'assets/map/stationary-2-308.png');
        
        this.load.image('st-3', 'assets/map/stationary-3.png');
        this.load.image('st3-dressup', 'assets/map/stationary-3-dressup.png');
        this.load.image('st3-goldfish', 'assets/map/stationary-3-goldfish.png');
        this.load.image('st3-btn', 'assets/map/stationary-3-button1.png');
        this.load.image('st3-11', 'assets/map/stationary-3-11.png');
        this.load.image('st3-12', 'assets/map/stationary-3-12.png');
        this.load.image('st3-13', 'assets/map/stationary-3-13.png');
        this.load.image('st3-14', 'assets/map/stationary-3-14.png');
        this.load.image('st3-15', 'assets/map/stationary-3-15.png');
        this.load.image('st3-21', 'assets/map/stationary-3-21.png');
        this.load.image('st3-22', 'assets/map/stationary-3-22.png');
        this.load.image('st3-23', 'assets/map/stationary-3-23.png');
        this.load.image('st3-24', 'assets/map/stationary-3-24.png');
        this.load.image('st3-25', 'assets/map/stationary-3-25.png');
        this.load.image('st3-26', 'assets/map/stationary-3-26.png');
        this.load.image('st3-27', 'assets/map/stationary-3-27.png');
        this.load.image('st3-28', 'assets/map/stationary-3-28.png');
        this.load.image('st3-29', 'assets/map/stationary-3-29.png');
        this.load.image('st3-31', 'assets/map/stationary-3-31.png');
        this.load.image('st3-32', 'assets/map/stationary-3-32.png');
        this.load.image('st3-33', 'assets/map/stationary-3-33.png');
        this.load.image('st3-34', 'assets/map/stationary-3-34.png');
        this.load.image('st3-35', 'assets/map/stationary-3-35.png');
        this.load.image('st3-36', 'assets/map/stationary-3-36.png');
        this.load.image('st3-37', 'assets/map/stationary-3-37.png');
        this.load.image('st3-38', 'assets/map/stationary-3-38.png');
        this.load.image('st3-39', 'assets/map/stationary-3-39.png');
        this.load.image('st3-41', 'assets/map/stationary-3-41.png');
        this.load.image('st3-42', 'assets/map/stationary-3-42.png');
        this.load.image('st3-43', 'assets/map/stationary-3-43.png');
        this.load.image('st3-44', 'assets/map/stationary-3-44.png');
        this.load.image('st3-45', 'assets/map/stationary-3-45.png');
        this.load.image('st3-46', 'assets/map/stationary-3-46.png');
        this.load.image('st3-50', 'assets/map/stationary-3-50.png');

        this.load.image('back-1', 'assets/map/back-1.png');
        this.load.image('b1-soda', 'assets/map/back-1-soda.png');
        this.load.image('b1-milk', 'assets/map/back-1-milk.png');
        this.load.image('b1-btr', 'assets/map/back-1-battery.png');
        this.load.image('b1-d11', 'assets/map/back-1-drink-1-1.png');
        this.load.image('b1-d12', 'assets/map/back-1-drink-1-2.png');
        this.load.image('b1-d21', 'assets/map/back-1-drink-1-3.png');
        this.load.image('b1-d22', 'assets/map/back-1-drink-1-4.png');
        this.load.image('b1-d31', 'assets/map/back-1-drink-1-5.png');
        this.load.image('b1-d32', 'assets/map/back-1-drink-1-6.png');
        this.load.image('b1-dd1', 'assets/map/back-1-drink-2-1.png');
        this.load.image('b1-dd2', 'assets/map/back-1-drink-2-2.png');
        this.load.image('b1-dd3', 'assets/map/back-1-drink-2-3.png');
        this.load.image('b1-ddd11', 'assets/map/back-1-drink-3-11.png');
        this.load.image('b1-ddd12', 'assets/map/back-1-drink-3-12.png');
        this.load.image('b1-ddd13', 'assets/map/back-1-drink-3-13.png');
        this.load.image('b1-ddd21', 'assets/map/back-1-drink-3-21.png');
        this.load.image('b1-ddd22', 'assets/map/back-1-drink-3-22.png');
        this.load.image('b1-ddd30', 'assets/map/back-1-drink-3-30.png');
        this.load.image('b1-st11', 'assets/map/back-1-stationary-11.png');
        this.load.image('b1-st12', 'assets/map/back-1-stationary-12.png');
        this.load.image('b1-st13', 'assets/map/back-1-stationary-13.png');
        this.load.image('b1-st14', 'assets/map/back-1-stationary-14.png');
        this.load.image('b1-st21', 'assets/map/back-1-stationary-21.png');
        this.load.image('b1-st22', 'assets/map/back-1-stationary-22.png');
        this.load.image('b1-st23', 'assets/map/back-1-stationary-23.png');
        this.load.image('b1-st24', 'assets/map/back-1-stationary-24.png');
        this.load.image('b1-st25', 'assets/map/back-1-stationary-25.png');
        this.load.image('b1-st31', 'assets/map/back-1-stationary-31.png');
        this.load.image('b1-st32', 'assets/map/back-1-stationary-32.png');
        this.load.image('b1-st33', 'assets/map/back-1-stationary-33.png');
        this.load.image('b1-st34', 'assets/map/back-1-stationary-34.png');
        this.load.image('b1-st35', 'assets/map/back-1-stationary-35.png');
        this.load.image('b1-st36', 'assets/map/back-1-stationary-36.png');
        this.load.image('b1-st37', 'assets/map/back-1-stationary-37.png');
        this.load.image('b1-st38', 'assets/map/back-1-stationary-38.png');
        this.load.image('b1-st41', 'assets/map/back-1-stationary-41.png');
        this.load.image('b1-st42', 'assets/map/back-1-stationary-42.png');
        this.load.image('b1-st43', 'assets/map/back-1-stationary-43.png');
        this.load.image('b1-st44', 'assets/map/back-1-stationary-44.png');
        this.load.image('b1-st45', 'assets/map/back-1-stationary-45.png');
        this.load.image('b1-st46', 'assets/map/back-1-stationary-46.png');
        this.load.image('b1-st51', 'assets/map/back-1-stationary-51.png');
        this.load.image('b1-st52', 'assets/map/back-1-stationary-52.png');
        this.load.image('b1-st53', 'assets/map/back-1-stationary-53.png');
        this.load.image('b1-st54', 'assets/map/back-1-stationary-54.png');
        this.load.image('b1-st55', 'assets/map/back-1-stationary-55.png');
        this.load.image('b1-st56', 'assets/map/back-1-stationary-56.png');
        this.load.image('b1-st57', 'assets/map/back-1-stationary-57.png');
        this.load.image('b1-st58', 'assets/map/back-1-stationary-58.png');
        this.load.image('b1-st59', 'assets/map/back-1-stationary-59.png');
        
        this.load.image('back-2', 'assets/map/back-2.png');

        // 버튼
        this.load.image('r-arrow', 'assets/main-ui/right-arrow.png');
        this.load.image('d-arrow', 'assets/main-ui/down-arrow.png');
        this.load.image('u-arrow', 'assets/main-ui/up-arrow.png');
        this.load.image('l-arrow', 'assets/main-ui/left-arrow.png');
        this.load.image('flip-btn', 'assets/main-ui/flip-view-btn.png');
        this.load.image('t-arrow', 'assets/main-ui/t-arrow.png');
        this.load.image('number', 'assets/main-ui/number-get-test.png');
        this.load.spritesheet('count', 'assets/main-ui/number-get-count.png', {frameWidth: 14, frameHeight: 20});


        // 미니게임 배경
        this.load.image('game-out', 'assets/game-ui/game-out-btn.png');
        this.load.image('game', 'assets/game-ui/game-bg.png');
        this.load.image('press-to-start', 'assets/game-ui/press-to-start.png');


        // 스프라이트
        this.load.spritesheet('player', 'assets/sprite/player-wooju-re.png', { frameWidth: 173, frameHeight: 321 });
        this.load.spritesheet('like', 'assets/sprite/player-like.png', { frameWidth: 173, frameHeight: 321 });
        this.load.spritesheet('dislike', 'assets/sprite/player-dislike.png', { frameWidth: 173, frameHeight: 321 });
        this.load.spritesheet('k-junha', 'assets/sprite/kkeabi-junha.png', { frameWidth: 209, frameHeight: 281 });
        this.load.spritesheet('levi', 'assets/sprite/kkaebi-levi.png', { frameWidth: 353, frameHeight: 468 });
        this.load.spritesheet('rimo', 'assets/sprite/kkeabi-rimo.png', { frameWidth: 219, frameHeight: 336 });
        this.load.spritesheet('zkp', 'assets/sprite/kkeabi-zangkenpo.png', { frameWidth: 254, frameHeight: 381 });
        this.load.spritesheet('byuri', 'assets/sprite/kkeabi-byuri.png', { frameWidth: 302, frameHeight: 330 });
        this.load.spritesheet('wuwu', 'assets/sprite/kkaebi-wuwu.png', { frameWidth: 223, frameHeight: 639 });
        this.load.spritesheet('cider', 'assets/sprite/kkaebi-cider.png', { frameWidth: 246, frameHeight: 607 });
        this.load.spritesheet('joy', 'assets/sprite/kkaebi-joy.png', { frameWidth: 515, frameHeight: 390 });
        this.load.spritesheet('dd', 'assets/sprite/kkaebi-float.png', { frameWidth: 300, frameHeight: 258 });
        this.load.spritesheet('boom', 'assets/sprite/meet-effect.png', { frameWidth: 269, frameHeight: 241 });
        this.load.spritesheet('talk-junha', 'assets/sprite/talk-junha.png', { frameWidth: 150, frameHeight: 150 });
        this.load.spritesheet('talk-comingsoon', 'assets/sprite/talk-comingSoon.png', { frameWidth: 150, frameHeight: 150 });
        this.load.spritesheet('talk-zkp', 'assets/sprite/talk-zkp.png', { frameWidth: 150, frameHeight: 150 });
        this.load.spritesheet('talk-wuwu', 'assets/sprite/talk-wuwu.png', { frameWidth: 150, frameHeight: 150 });
        this.load.spritesheet('talk-byuri', 'assets/sprite/talk-byuri.png', { frameWidth: 150, frameHeight: 150 });
        this.load.spritesheet('talk-cider', 'assets/sprite/talk-cider.png', { frameWidth: 150, frameHeight: 150 });
        this.load.spritesheet('talk-joy', 'assets/sprite/talk-joy.png', { frameWidth: 150, frameHeight: 150 });
        this.load.spritesheet('talk-levi', 'assets/sprite/talk-levi.png', { frameWidth: 150, frameHeight: 150 });
        this.load.spritesheet('talk-nimo', 'assets/sprite/talk-nimo.png', { frameWidth: 150, frameHeight: 150 });
        
        // 배경음악
        this.load.audio('bgm-map', 'assets/bgm/map.mp3');
        this.load.audio('bgm-zkp', 'assets/bgm/zkp.mp3');
        this.load.audio('bgm-byuri', 'assets/bgm/byuri.mp3');
        this.load.audio('bgm-wuwu', 'assets/bgm/wuwu.mp3')
        this.load.audio('bgm-joy', 'assets/bgm/joy.mp3');
        this.load.audio('bgm-levi', 'assets/bgm/levi.wav');
        this.load.audio('bgm-end', 'assets/bgm/ending.mp3');
        this.load.audio('bgm-cider', 'assets/bgm/cider.mp3');

        // 이펙트 사운드
        this.load.audio('boom-sound', 'assets/bgm/effect/boom sound.mp3');
        this.load.audio('ministart', 'assets/bgm/effect/game-start.mp3');
        this.load.audio('clear', 'assets/bgm/effect/game-clear.wav');
        this.load.audio('gameover', 'assets/bgm/effect/game-over.mp3');
        this.load.audio('getitem', 'assets/bgm/effect/get-item.mp3');
        this.load.audio('cider-pop','assets/bgm/effect/cider-pop.wav');
        this.load.audio('byuri-correct', 'assets/bgm/effect/byuri-correct.mp3');
        this.load.audio('byuri-no', 'assets/bgm/effect/byuri-no.mp3');
        this.load.audio('joy-collect', 'assets/bgm/effect/joy-collect.mp3');
        this.load.audio('levi-block', 'assets/bgm/effect/levi-block.mp3');
        this.load.audio('levi-pop', 'assets/bgm/effect/levi-poping sound.mp3');
        this.load.audio('phone-bbip', 'assets/bgm/effect/phone-bbip.mp3');
        this.load.audio('call', 'assets/bgm/effect/call.mp3');
        this.load.audio('call-without', 'assets/bgm/effect/call-without.mp3');
        this.load.audio('wuwu-happy', 'assets/bgm/effect/wuwu-happy-pop.mp3');
        this.load.audio('wuwu-sad', 'assets/bgm/effect/wuwu-sad-pop.mp3');
        this.load.audio('zkp-win', 'assets/bgm/effect/zkp-win.wav');

        // 컷씬
        this.load.image('scene-junha', 'assets/cuts/scene-junha.png');
        this.load.image('end-mom', 'assets/cuts/ending-mom.png');
        this.load.image('end-cop', 'assets/cuts/ending-cop.png');
        this.load.image('end-collectcall', 'assets/cuts/ending-collectcall.png');

    },

    create: function() {
        this.anims.create({ key: 'right', frames: this.anims.generateFrameNumbers('player', {start: 5, end: 8}), frameRate: 5 });
        this.anims.create({ key: 'left', frames: this.anims.generateFrameNumbers('player', {start:0, end:3}), frameRate: 5 });
        this.anims.create({ key: 'standing', frames: [ {key: 'player', frame: 4} ], frameRate: 20 });
        this.anims.create({ 
            key: 'like', 
            frames: this.anims.generateFrameNumbers('player', {start: 9, end: 21}), 
            frameRate: 10, 
            // showOnStart: true,
            hideOnComplete: true
        });
        this.anims.create({ 
            key: 'dislike', 
            frames: this.anims.generateFrameNumbers('player', {start: 22, end: 31}), 
            frameRate: 10, 
            // showOnStart: true,
            hideOnComplete: true
        });

        this.anims.create({ key: 'boom', frames: this.anims.generateFrameNumbers('boom', {start: 0, end: 6} ), frameRate: 15, hideOnComplete: true });
        this.anims.create({ key: 'comingSoon', frames: [ {key: 'talk-comingsoon', frame: 0} ], frameRate: 1, hideOnComplete: true });

        this.anims.create({ key: 'junha-1', frames: this.anims.generateFrameNumbers('k-junha', {start: 0, end: 1}), frameRate: 2 });
        this.anims.create({ key: 'junha-2', frames: this.anims.generateFrameNumbers('k-junha', {start: 2, end: 5}), frameRate: 5 });
        this.anims.create({ 
            key: 'talk-j', 
            frames: this.anims.generateFrameNumbers('talk-junha', {start: 0, end: 3}), 
            frameRate: 1, 
            hideOnComplete: true 
        });

        this.anims.create({ key: 'levi-1', frames: this.anims.generateFrameNumbers('levi', {start: 0, end: 1}), frameRate: 2 });
        this.anims.create({ key: 'levi-2', frames: this.anims.generateFrameNumbers('levi', {start: 2, end: 5}), frameRate: 5 });
        this.anims.create({ key: 'levi-3', frames: this.anims.generateFrameNumbers('levi', {start: 2, end: 9}), frameRate: 5 });
        this.anims.create({
            key: 'talk-l',
            frames: this.anims.generateFrameNumbers('talk-levi', {start: 0, end: 1}),
            frameRate: 1,
            hideOnComplete: true
        });

        this.anims.create({ key: 'rimo-1', frames: this.anims.generateFrameNumbers('rimo', {start: 0, end: 1}), frameRate: 2 });
        this.anims.create({ key: 'rimo-2', frames: this.anims.generateFrameNumbers('rimo', {start: 2, end: 5}), frameRate: 5 });
        this.anims.create({ key: 'rimo-3', frames: this.anims.generateFrameNumbers('rimo', {start: 6, end: 9}), frameRate: 5 });
        this.anims.create({
            key: 'talk-battery',
            frames: [{ key: 'talk-nimo', frame: 0 }],
            frameRate: 1,
            hideOnComplete: true
        });
        this.anims.create({
            key: 'talk-r',
            frames: this.anims.generateFrameNumbers('talk-nimo', {start: 1, end: 2}),
            frameRate: 1,
            hideOnComplete: true
        });

        this.anims.create({ key: 'zkp-1', frames: this.anims.generateFrameNumbers('zkp', {start: 0, end: 7}), frameRate: 3});
        this.anims.create({ key: 'zkp-2', frames: this.anims.generateFrameNumbers('zkp', {start: 8, end: 17}), frameRate: 7});
        this.anims.create({
            key: 'talk-z',
            frames: this.anims.generateFrameNumbers('talk-zkp', {start: 0, end: 2}),
            frameRate: 1,
            hideOnComplete: true
        });

        this.anims.create({ key: 'byuri-1', frames: this.anims.generateFrameNumbers('byuri', {start: 0, end: 3}), frameRate: 2 });
        this.anims.create({ key: 'byuri-2', frames: this.anims.generateFrameNumbers('byuri', {start: 4, end: 7}), frameRate: 5 });
        this.anims.create({ 
            key: 'talk-b', 
            frames: this.anims.generateFrameNumbers('talk-byuri', {start: 0, end: 2}), 
            frameRate: 1,
            hideOnComplete: true
        });

        this.anims.create({ key: 'wuwu-1', frames: this.anims.generateFrameNumbers('wuwu', {start: 0, end: 11}), frameRate: 5 });
        this.anims.create({ key: 'wuwu-2', frames: this.anims.generateFrameNumbers('wuwu', {start: 0, end: 15}), frameRate: 5 });
        this.anims.create({ 
            key: 'talk-w', 
            frames: this.anims.generateFrameNumbers('talk-wuwu', {start: 0, end: 2}), 
            frameRate: 1, 
            hideOnComplete: true 
        });

        this.anims.create({ key: 'dd-1', frames: this.anims.generateFrameNumbers('dd', {start: 0, end: 5}), frameRate: 5 });
        this.anims.create({ key: 'dd-2', frames: this.anims.generateFrameNumbers('dd', {start: 6, end: 11}), frameRate: 5 });

        this.anims.create({ key: 'cider-1', frames: this.anims.generateFrameNumbers('cider', {start: 0, end: 1}), frameRate: 2 });
        this.anims.create({ key: 'cider-2', frames: this.anims.generateFrameNumbers('cider', {start: 3, end: 9}), frameRate: 5 });
        this.anims.create({
            key: 'talk-c',
            frames: this.anims.generateFrameNumbers('talk-cider', {start: 0, end: 2}),
            frameRate: 1,
            hideOnComplete: true
        });

        this.anims.create({ key: 'joy-1', frames: this.anims.generateFrameNumbers('joy', {start: 0, end: 12}), frameRate: 5 });
        this.anims.create({ key: 'joy-2', frames: this.anims.generateFrameNumbers('joy', {start: 13, end: 14}), frameRate: 5 });
        this.anims.create({
            key: 'talk-jo',
            frames: this.anims.generateFrameNumbers('talk-joy', {start: 0, end: 2}),
            frameRate: 1,
            hideOnComplete: true
        });

        // 입력 이벤트
        cursors = this.input.keyboard.createCursorKeys();

        // 배경음악
        BGM_MAP = this.sound.add('bgm-map', { loop: true, volume: 0.5 }); 
        BGM_END = this.sound.add('bgm-end', { loop: true, volume: 0.5 });
        BGM_ZKP = this.sound.add('bgm-zkp', { loop: true, volume: 0.5 });
        BGM_BYURI = this.sound.add('bgm-byuri', { loop: true, volume: 0.5 });
        BGM_WUWU = this.sound.add('bgm-wuwu', { loop: true, volume: 0.5 });
        BGM_JOY = this.sound.add('bgm-joy', { loop: true, volume: 0.5 });
        BGM_LEVI = this.sound.add('bgm-levi', { loop: true, volume: 0.5 });
        BGM_CIDER = this.sound.add('bgm-cider', { loop: true, volume: 0.5 });

        // 이펙트
        EFFECT_BOOM = this.sound.add('boom-sound', { loop: false });
        EFFECT_START = this.sound.add('ministart', { loop: false });
        EFFECT_CLEAR = this.sound.add('clear', { loop: false });
        EFFECT_GAMEOVER = this.sound.add('gameover', { loop: false });
        EFFECT_GETITEM = this.sound.add('getitem', { loop: false });

        BGM_MAP.play();

        // 로딩 로고
        this.add.image(480, 360, 'logo');

        // 게임 시작하기
        this.time.addEvent({
            delay: 1000,
            callback: function() { game.scene.start('1000'); },
            callbackScope: this,
            loop: false
        });

    },

    update: function() {
        // Update objects & variables
    }
});
// Add scene to list of scenes
myGame.scenes.push(preloadState);