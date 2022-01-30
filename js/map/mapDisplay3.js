var mapDisplay3 = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function GamePlay() {
        Phaser.Scene.call(this, {key: '7000'});
    },

    preload: function() {

    },

    create: function() {

        this.display3bg = this.add.image(0, 0, 'st-3').setOrigin(0, 0);

        numberNow = this.add.image(912, 58, 'number').setDepth(100);
        numberCount = this.add.sprite(898, 77, 'count').setDepth(100);

        this.st11 = this.add.image(200, 210, 'st3-11');
        this.st12 = this.add.image(400, 210, 'st3-12');
        this.st13 = this.add.image(590, 210, 'st3-13');
        this.st14 = this.add.image(760, 205, 'st3-14');
        this.st15 = this.add.image(900, 210, 'st3-15');
        this.st21 = this.add.image(170, 320, 'st3-21');
        this.st22 = this.add.image(330, 320, 'st3-22');
        this.st22.setInteractive().on('pointerdown', function() { LIKE_IT = true; EFFECT_HINT.play(); }, this);
        this.st23 = this.add.image(460, 340, 'st3-23');
        this.st24 = this.add.image(535, 335, 'st3-24');
        this.st25 = this.add.image(610, 350, 'st3-25');
        this.st26 = this.add.image(730, 340, 'st3-26');
        this.st27 = this.add.image(860, 345, 'st3-27');
        this.st28 = this.add.image(930, 350, 'st3-28');
        this.st29 = this.add.image(960, 322, 'st3-29');
        this.st32 = this.add.image(130, 465, 'st3-32');
        this.st31 = this.add.image(80, 470, 'st3-31');
        this.st33 = this.add.image(200, 465, 'st3-33');
        this.st34 = this.add.image(310, 470, 'st3-34');
        this.st35 = this.add.image(435, 460, 'st3-35');
        this.st36 = this.add.image(590, 470, 'st3-36');
        this.st37 = this.add.image(750, 450, 'st3-37');
        this.st38 = this.add.image(860, 455, 'st3-38');
        this.st39 = this.add.image(945, 455, 'st3-39');
        this.st41 = this.add.image(130, 580, 'st3-41');
        this.st42 = this.add.image(230, 580, 'st3-42');
        this.st43 = this.add.image(380, 580, 'st3-43');
        this.st44 = this.add.image(560, 590, 'st3-44');
        this.st45 = this.add.image(720, 590, 'st3-45');
        this.st46 = this.add.image(890, 575, 'st3-46');

        this.dalgona = this.add.image(1151, 216, 'st3-goldfish');
        this.dalgona.setInteractive().on('pointerdown', function() {
            if (CheckMet.includes('JUNHA')) {
                this.TALK_FISH = this.add.sprite(this.dalgona.x + 50, this.dalgona.y - 130, 'talk-comingsoon');
                this.TALK_FISH.anims.play('comingSoon', true);
            } else {
                LIKE_IT = true;
            }

        }, this);
        this.st50 = this.add.image(1083, 370, 'st3-50');

        this.dressup = this.add.image(852, 322, 'st3-dressup');
        this.dressup.setInteractive().on('pointerdown', function() {  
            if (CheckMet.includes('JUNHA')) {
                this.dressup.visible = false;
                JOY.visible = true; EFFECT_BOOM.play();
                this.BOOM_JOY = this.add.sprite(JOY.x, JOY.y, 'boom'); this.BOOM_JOY.anims.play('boom', true);
                this.TALK_JOY = this.add.sprite(JOY.x + 130, JOY.y - 200, 'talk-joy');
                this.TALK_JOY.anims.play('talk-jo', true);
            } else {
                LIKE_IT = true;
            }
        }, this);

        this.btn_1_display3 = this.physics.add.image(326, 365, 'st3-btn');
        if (Collection.includes('number-1')) { this.btn_1_display3.disableBody(true, true); }
        this.btn_1_display3.setInteractive().on('pointerdown', function() {
            if (CheckMet.includes('JUNHA')) {
                Collection.push('number-1'); this.btn_1_display3.disableBody(true, true);
                EFFECT_GETITEM.play();
            }
        }, this);

        JOY = this.add.sprite(896, 490, 'joy'); JOY.visible = false;
        JOY.setInteractive().on('pointerdown', function() { 
            if (!Collection.includes('joy')) {
                BGM_MAP.pause(); BGM_JOY.play(); EFFECT_START.play();
                game.scene.sleep('7000'); game.scene.start('joy'); 
            }
        }, this);

        player = this.add.sprite(200, 523, 'player');
        if (sceneBefore == 9000) { player.x = 1100; }
        else { player.x = 200; }

        main = this.cameras.main; main.startFollow(player);
        main.setBounds(0, 0, this.display3bg.displayWidth, this.display3bg.displayHeight);

        this.toFront = this.add.image(63, 386, 'l-arrow');
        this.toFront.setInteractive().on('pointerdown', function() { 
            sceneBefore = 7000;
            game.scene.stop('7000'); game.scene.start('1000'); 
        }, this);
        this.toBack = this.add.image(1217, 386, 'r-arrow');
        this.toBack.setInteractive().on('pointerdown', function() { 
            sceneBefore = 7000;
            game.scene.stop('7000'); game.scene.start('8000'); 
        }, this);

    },

    update: function() {

        playerMove(); numberCount.setFrame(Collection.length);
        stay(numberNow, 25, ECT_WIDTH); stay(numberCount, 55, ECT_WIDTH);

        if (player.x < 180) { player.x = 180; }
        else if (player.x > 1100) { player.x = 1100; }

        if (JOY.visible) { 
            if (!Collection.includes('joy')) { JOY.anims.play('joy-1', true); }
            else { JOY.anims.play('joy-2', true); }
        }

    }
});

myGame.scenes.push(mapDisplay3);