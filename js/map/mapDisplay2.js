var mapDisplay2 = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function GamePlay() {
        Phaser.Scene.call(this, {key: '6000'});
    },

    preload: function() {

    },

    create: function() {

        this.display2bg = this.add.image(0, 0, 'st-2').setOrigin(0, 0);

        numberNow = this.add.image(912, 58, 'number').setDepth(100);
        numberCount = this.add.sprite(898, 77, 'count').setDepth(100);

        this.st11 = this.add.image(180, 280, 'st2-11');
        this.st11.setInteractive().on('pointerdown', function() { DISLIKE_IT = true; }, this);
        this.st12 = this.add.image(285, 280, 'st2-12');
        this.st12.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        this.st13 = this.add.image(385, 280, 'st2-13');
        this.st13.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        this.st14 = this.add.image(475, 280, 'st2-14');
        this.st14.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        this.st15 = this.add.image(575, 280, 'st2-15');
        this.st15.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        this.st16 = this.add.image(675, 280, 'st2-16');
        this.st16.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        this.st17 = this.add.image(750, 280, 'st2-17');
        this.st17.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        this.st18 = this.add.image(800, 280, 'st2-18');
        this.st18.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        this.st19 = this.add.image(850, 280, 'st2-19');
        this.st19.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        this.st111 = this.add.image(1090, 280, 'st2-111');
        this.st111.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        this.st110 = this.add.image(950, 280, 'st2-110');
        this.st110.setInteractive().on('pointerdown', function() { DISLIKE_IT = true; }, this);
        this.st21 = this.add.image(170, 410, 'st2-21');
        this.st21.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        this.st22 = this.add.image(260, 410, 'st2-22');
        this.st22.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        this.st23 = this.add.image(360, 410, 'st2-23');
        this.st23.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        this.st24 = this.add.image(435, 410, 'st2-24');
        this.st24.setInteractive().on('pointerdown', function() { DISLIKE_IT = true; }, this);
        this.st25 = this.add.image(515, 410, 'st2-25');
        this.st25.setInteractive().on('pointerdown', function() { DISLIKE_IT = true; }, this);
        this.st26 = this.add.image(585, 410, 'st2-26');
        this.st26.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        this.st27 = this.add.image(655, 415, 'st2-27');
        this.st27.setInteractive().on('pointerdown', function() { DISLIKE_IT = true; }, this);
        this.st28 = this.add.image(745, 410, 'st2-28');
        this.st28.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        this.st29 = this.add.image(820, 410, 'st2-29');
        this.st29.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        this.st210 = this.add.image(910, 410, 'st2-210');
        this.st210.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        this.st211 = this.add.image(1050, 430, 'st2-211');
        this.st211.setInteractive().on('pointerdown', function() { DISLIKE_IT = true; }, this);
        this.st31 = this.add.image(220, 540, 'st2-31');
        this.st31.setInteractive().on('pointerdown', function() { DISLIKE_IT = true; }, this);
        this.st32 = this.add.image(390, 540, 'st2-32');
        this.st32.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        this.st33 = this.add.image(515, 540, 'st2-33');
        this.st33.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        this.st34 = this.add.image(585, 540, 'st2-34');
        this.st34.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        this.st35 = this.add.image(655, 540, 'st2-35');
        this.st35.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        this.st36 = this.add.image(750, 540, 'st2-36');
        this.st36.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        this.st38 = this.add.image(1050, 560, 'st2-38');
        this.st38.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        this.st37 = this.add.image(890, 560, 'st2-37');
        this.st37.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        
        this.btn_3_display2 = this.physics.add.image(1112, 420, 'st2-btn');
        if (Collection.includes('number-3')) { this.btn_3_display2.disableBody(true, true); }
        this.btn_3_display2.setInteractive().on('pointerdown', function() {
            if (CheckMet.includes('JUNHA')) {
                Collection.push('number-3'); this.btn_3_display2.disableBody(true, true);
                EFFECT_GETITEM.play();
            }
        }, this);

        player = this.add.sprite(200, 523, 'player');
        if (sceneBefore == 9000) { player.x = 1100; }
        else { player.x = 200; }
        main = this.cameras.main; main.startFollow(player);
        main.setBounds(0, 0, this.display2bg.displayWidth, this.display2bg.displayHeight);

        this.toFront = this.add.image(63, 386, 'l-arrow');
        this.toFront.setInteractive().on('pointerdown', function() { 
            sceneBefore = 6000;
            game.scene.stop('6000'); game.scene.start('1000'); 
        }, this);
        this.toBack = this.add.image(1217, 386, 'r-arrow');
        this.toBack.setInteractive().on('pointerdown', function() { 
            sceneBefore = 6000;
            game.scene.stop('6000'); game.scene.start('8000'); 
        }, this);

    },

    update: function() {

        playerMove(); numberCount.setFrame(Collection.length);
        stay(numberNow, 25, ECT_WIDTH); stay(numberCount, 55, ECT_WIDTH);

        if (player.x < 180) { player.x = 180; }
        else if (player.x > 1100) { player.x = 1100; }

    }
});

myGame.scenes.push(mapDisplay2);