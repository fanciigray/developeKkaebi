var preloadState = new Phaser.Class({

    Extends: Phaser.Scene,
    initialize:
    function Preload(){
        Phaser.Scene.call(this, {key: 'Preload'});
    },

    preload: function() {
        // Preload images for this state
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

        this.load.image('icecream', 'assets/map/icecream.png');
        this.load.image('i-candy', 'assets/map/icecream-candy.png'); 
        this.load.image('i-btn', 'assets/map/icecream-button5.png');

        this.load.image('st-1', 'assets/map/stationary-1.png');
        this.load.image('st1-bag', 'assets/map/stationary-1-plasticbag.png');

        this.load.image('st-2', 'assets/map/stationary-2.png');
        this.load.image('st2-btn', 'assets/map/stationary-2-button3.png');        
        
        this.load.image('st-3', 'assets/map/stationary-3.png');
        this.load.image('st3-dressup', 'assets/map/stationary-3-dressup.png');
        this.load.image('st3-goldfish', 'assets/map/stationary-3-goldfish.png');
        this.load.image('st3-btn', 'assets/map/stationary-3-button1.png');

        this.load.image('back-1', 'assets/map/back-1.png');
        this.load.image('b1-soda', 'assets/map/back-1-soda.png');
        this.load.image('b1-milk', 'assets/map/back-1-milk.png');
        this.load.image('b1-btr', 'assets/map/back-1-battery.png');
        
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
        this.load.spritesheet('player', 'assets/sprite/player-wooju.png', { frameWidth: 173, frameHeight: 320 });
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


        // 컷씬
        this.load.image('scene-junha', 'assets/cuts/scene-junha.png');

    },

    create: function() {
        this.anims.create({ key: 'right', frames: this.anims.generateFrameNumbers('player', {start: 5, end: 8}), frameRate: 5 });
        this.anims.create({ key: 'left', frames: this.anims.generateFrameNumbers('player', {start:0, end:3}), frameRate: 5 });
        this.anims.create({ key: 'standing', frames: [ {key: 'player', frame: 4} ], frameRate: 20 });

        this.anims.create({ key: 'boom', frames: this.anims.generateFrameNumbers('boom', {start: 0, end: 6} ), frameRate: 15, hideOnComplete: true });

        this.anims.create({ key: 'junha-1', frames: this.anims.generateFrameNumbers('k-junha', {start: 0, end: 1}), frameRate: 2 });
        this.anims.create({ key: 'junha-2', frames: this.anims.generateFrameNumbers('k-junha', {start: 2, end: 5}), frameRate: 5 });
        
        this.anims.create({ key: 'levi-1', frames: this.anims.generateFrameNumbers('levi', {start: 0, end: 1}), frameRate: 2 });
        this.anims.create({ key: 'levi-2', frames: this.anims.generateFrameNumbers('levi', {start: 2, end: 5}), frameRate: 5 });
        this.anims.create({ key: 'levi-3', frames: this.anims.generateFrameNumbers('levi', {start: 2, end: 9}), frameRate: 5 });

        this.anims.create({ key: 'rimo-1', frames: this.anims.generateFrameNumbers('rimo', {start: 0, end: 1}), frameRate: 2 });
        this.anims.create({ key: 'rimo-2', frames: this.anims.generateFrameNumbers('rimo', {start: 2, end: 5}), frameRate: 5 });
        this.anims.create({ key: 'rimo-3', frames: this.anims.generateFrameNumbers('rimo', {start: 6, end: 9}), frameRate: 5 });

        this.anims.create({ key: 'zkp-1', frames: this.anims.generateFrameNumbers('zkp', {start: 0, end: 7}), frameRate: 2});
        this.anims.create({ key: 'zkp-2', frames: this.anims.generateFrameNumbers('zkp', {start: 8, end: 17}), frameRate: 5});

        this.anims.create({ key: 'byuri-1', frames: this.anims.generateFrameNumbers('byuri', {start: 0, end: 3}), frameRate: 2 });
        this.anims.create({ key: 'byuri-2', frames: this.anims.generateFrameNumbers('byuri', {start: 4, end: 7}), frameRate: 5 });

        this.anims.create({ key: 'wuwu-1', frames: this.anims.generateFrameNumbers('wuwu', {start: 0, end: 11}), frameRate: 5 });
        this.anims.create({ key: 'wuwu-2', frames: this.anims.generateFrameNumbers('wuwu', {start: 12, end: 15}), frameRate: 5 });

        this.anims.create({ key: 'dd-1', frames: this.anims.generateFrameNumbers('dd', {start: 0, end: 5}), frameRate: 5 });
        this.anims.create({ key: 'dd-2', frames: this.anims.generateFrameNumbers('dd', {start: 6, end: 11}), frameRate: 5 });

        this.anims.create({ key: 'cider-1', frames: this.anims.generateFrameNumbers('cider', {start: 0, end: 1}), frameRate: 5 });
        this.anims.create({ key: 'cider-2', frames: this.anims.generateFrameNumbers('cider', {start: 3, end: 9}), frameRate: 5 });

        this.anims.create({ key: 'joy-1', frames: this.anims.generateFrameNumbers('joy', {start: 0, end: 12}), frameRate: 5 });
        this.anims.create({ key: 'joy-2', frames: this.anims.generateFrameNumbers('joy', {start: 13, end: 14}), frameRate: 5 });

        console.log("Preload");
        game.scene.start('map');

        cursors = this.input.keyboard.createCursorKeys();


    },
    update: function() {
        // Update objects & variables
    }
});

// Add scene to list of scenes
myGame.scenes.push(preloadState);

