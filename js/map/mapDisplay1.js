var mapDisplay1 = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function GamePlay() {
        Phaser.Scene.call(this, {key: '5000'});
    },

    preload: function() {
        
    },

    create: function() {

        this.display1bg = this.add.image(0, 0, 'st-1').setOrigin(0, 0);

        numberNow = this.add.image(912, 58, 'number').setDepth(100);
        numberCount = this.add.sprite(898, 77, 'count').setDepth(100);

        this.st11 = this.add.image(180, 280, 'st1-11');
        this.st11.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        this.st12 = this.add.image(290, 280, 'st1-12');
        this.st12.setInteractive().on('pointerdown', function() { DISLIKE_IT = true; }, this);
        this.st13 = this.add.image(400, 280, 'st1-13');
        this.st13.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        this.st14 = this.add.image(510, 280, 'st1-14');
        this.st14.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        this.st15 = this.add.image(630, 280, 'st1-15');
        this.st15.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        this.st16 = this.add.image(740, 280, 'st1-16');
        this.st16.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        this.st17 = this.add.image(850, 280, 'st1-17');
        this.st17.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        this.st18 = this.add.image(960, 280, 'st1-18');
        this.st18.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        this.st19 = this.add.image(1070, 280, 'st1-19');
        this.st19.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        this.st21 = this.add.image(175, 410, 'st1-21');
        this.st21.setInteractive().on('pointerdown', function() { DISLIKE_IT = true; }, this);
        this.st22 = this.add.image(250, 410, 'st1-22');
        this.st22.setInteractive().on('pointerdown', function() { DISLIKE_IT = true; }, this);
        this.st23 = this.add.image(325, 410, 'st1-23');
        this.st23.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        this.st24 = this.add.image(395, 410, 'st1-24');
        this.st24.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        this.st25 = this.add.image(450, 410, 'st1-25');
        this.st25.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        this.st26 = this.add.image(495, 410, 'st1-26');
        this.st26.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        this.st27 = this.add.image(610, 410, 'st1-27');
        this.st27.setInteractive().on('pointerdown', function() { DISLIKE_IT = true; }, this);
        this.st28 = this.add.image(735, 410, 'st1-28');
        this.st28.setInteractive().on('pointerdown', function() { DISLIKE_IT = true; }, this);
        this.st29 = this.add.image(815, 410, 'st1-29');
        this.st29.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        this.st210 = this.add.image(880, 410, 'st1-210');
        this.st210.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        this.st211 = this.add.image(930, 410, 'st1-211');
        this.st211.setInteractive().on('pointerdown', function() { DISLIKE_IT = true; }, this);
        this.st212 = this.add.image(990, 410, 'st1-212');
        this.st212.setInteractive().on('pointerdown', function() { DISLIKE_IT = true; }, this);
        this.st213 = this.add.image(1060, 410, 'st1-213');
        this.st213.setInteractive().on('pointerdown', function() { DISLIKE_IT = true; }, this);
        this.st31 = this.add.image(210, 540, 'st1-31');
        this.st31.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        this.st32 = this.add.image(350, 540, 'st1-32');
        this.st32.setInteractive().on('pointerdown', function() { DISLIKE_IT= true; }, this);
        this.st33 = this.add.image(490, 540, 'st1-33');
        this.st33.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        this.st34 = this.add.image(630, 540, 'st1-34');
        this.st34.setInteractive().on('pointerdown', function() { DISLIKE_IT = true; }, this);
        this.st35 = this.add.image(770, 540, 'st1-35');
        this.st35.setInteractive().on('pointerdown', function() { DISLIKE_IT = true; }, this);
        this.st36 = this.add.image(870, 540, 'st1-36');
        this.st36.setInteractive().on('pointerdown', function() { DISLIKE_IT = true; }, this);
        this.st37 = this.add.image(925, 540, 'st1-37');
        this.st37.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        this.st38 = this.add.image(1010, 540, 'st1-38');
        this.st38.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        this.st39 = this.add.image(1110, 540, 'st1-39');
        this.st39.setInteractive().on('pointerdown', function() { DISLIKE_IT = true; }, this);

        this.bag = this.add.image(177, 668, 'st1-bag').setDepth(101);
        this.bag.setInteractive().on('pointerdown', function() {  
            if (CheckMet.includes('JUNHA')) {
                this.bag.visible = false;
                DUNGSIL.visible = true;
                this.BOOM_DUNGSIL = this.add.sprite(DUNGSIL.x, DUNGSIL.y, 'boom'); 
                this.BOOM_DUNGSIL.anims.play('boom', true); EFFECT_BOOM.play(); EFFECT_START.play();
                this.TALK_DUNGSIL = this.add.sprite(DUNGSIL.x + 120, DUNGSIL.y - 120, 'talk-comingsoon');
                this.TALK_DUNGSIL.anims.play('comingSoon', true);
            } else {
                LIKE_IT = true;
            }
        }, this);

        player = this.add.sprite(200, 523, 'player');
        if (sceneBefore == 9000) { player.x = 1100; }
        else { player.x = 200; }
        main = this.cameras.main; main.startFollow(player);
        main.setBounds(0, 0, this.display1bg.displayWidth, this.display1bg.displayHeight);

        DUNGSIL = this.add.sprite(200, 300, 'dd'); DUNGSIL.visible = false;

        this.toFront = this.add.image(63, 386, 'l-arrow');
        this.toFront.setInteractive().on('pointerdown', function() { 
            sceneBefore = 5000;
            game.scene.stop('5000'); game.scene.start('1000'); 
        }, this);
        this.toBack = this.add.image(1217, 386, 'r-arrow');
        this.toBack.setInteractive().on('pointerdown', function() { 
            sceneBefore = 5000;
            game.scene.stop('5000'); game.scene.start('8000'); 
        }, this);
        
    },

    update: function() {

        playerMove(); numberCount.setFrame(Collection.length);
        stay(numberNow, 25, ECT_WIDTH); stay(numberCount, 55, ECT_WIDTH);

        if (player.x < 180) { player.x = 180; }
        else if (player.x > 1100) { player.x = 1100; }

        if (DUNGSIL.visible) { DUNGSIL.anims.play('dd-1', true); }

    }
});

myGame.scenes.push(mapDisplay1);