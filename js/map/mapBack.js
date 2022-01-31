var mapBack = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function GamePlay() {
        Phaser.Scene.call(this, {key: '8000'});
    },

    preload: function() {

    },

    create: function() {

        this.backBg = this.add.image(0, 0, 'back-1').setOrigin(0, 0);

        this.flip = this.add.image(912, 146, 'flip-btn').setDepth(100);
        this.flip.setInteractive().on('pointerdown', function() { 
            posBefore = player.x; sceneBefore = 8000;
            game.scene.stop('8000'); game.scene.start('9000'); 
        }, this);
        numberNow = this.add.image(912, 58, 'number').setDepth(100);
        numberCount = this.add.sprite(898, 77, 'count').setDepth(100);

        this.drink11 = this.add.image(100, 265, 'b1-d11');
        this.drink12 = this.add.image(220, 265, 'b1-d12');
        this.drink21 = this.add.image(100, 380, 'b1-d21');
        this.drink22 = this.add.image(220, 380, 'b1-d22');
        this.drink31 = this.add.image(140, 475, 'b1-d31');
        this.drink32 = this.add.image(260, 475, 'b1-d32');
        this.drink_10 = this.add.image(445, 345, 'b1-dd1');
        this.drink_20 = this.add.image(445, 412, 'b1-dd2');
        this.drink_30 = this.add.image(445, 490, 'b1-dd3');
        this.drink__11 = this.add.image(600, 345, 'b1-ddd11');
        this.drink__12 = this.add.image(660, 345, 'b1-ddd12');
        this.drnik__13 = this.add.image(710, 345, 'b1-ddd13');
        this.drink__21 = this.add.image(605, 412, 'b1-ddd21');
        this.drink__22 = this.add.image(690, 412, 'b1-ddd22');
        this.drink__30 = this.add.image(655, 490, 'b1-ddd30');
        this.st11 = this.add.image(910, 55, 'b1-st11');
        this.st11.setInteractive().on('pointerdown', function() { DISLIKE_IT = true; }, this);
        this.st12 = this.add.image(1120, 55, 'b1-st12');
        this.st13 = this.add.image(1280, 55, 'b1-st13');
        this.st14 = this.add.image(1500, 30, 'b1-st14');
        this.st21 = this.add.image(900, 180, 'b1-st21');
        this.st22 = this.add.image(1050, 180, 'b1-st22');
        this.st23 = this.add.image(1250, 180, 'b1-st23');
        this.st24 = this.add.image(1400, 180, 'b1-st24');
        this.st25 = this.add.image(1550, 180, 'b1-st25');
        this.st32 = this.add.image(880, 295, 'b1-st32');
        this.st33 = this.add.image(1000, 295, 'b1-st33');
        this.st34 = this.add.image(1120, 290, 'b1-st34');
        this.st35 = this.add.image(1240, 290, 'b1-st35');
        this.st36 = this.add.image(1350, 295, 'b1-st36');
        this.st37 = this.add.image(1430, 295, 'b1-st37');
        this.st38 = this.add.image(1540, 285, 'b1-st38');     
        this.st41 = this.add.image(870, 410, 'b1-st41');
        this.st31 = this.add.image(825, 330, 'b1-st31');
        this.st42 = this.add.image(970, 410, 'b1-st42');
        this.st43 = this.add.image(1080, 410, 'b1-st43');
        this.st44 = this.add.image(1180, 410, 'b1-st44');
        this.st45 = this.add.image(1300, 410, 'b1-st45');
        this.st46 = this.add.image(1500, 410, 'b1-st46');
        this.st51 = this.add.image(850, 505, 'b1-st51');
        this.st52 = this.add.image(910, 505, 'b1-st52');
        this.st53 = this.add.image(970, 505, 'b1-st53');
        this.st54 = this.add.image(1060, 495, 'b1-st54');
        this.st55 = this.add.image(1160, 495, 'b1-st55');
        this.st56 = this.add.image(1260, 495, 'b1-st56');
        this.st57 = this.add.image(1360, 495, 'b1-st57');
        this.st58 = this.add.image(1460, 495, 'b1-st58');
        this.st59 = this.add.image(1570, 495, 'b1-st59');

        this.btr = this.physics.add.image(1017, 59, 'b1-btr');
        if (isBtrCollected) { this.btr.disableBody(true, true); }
        this.btr.setInteractive().on('pointerdown', function() {
            isBtrCollected = true; this.btr.disableBody(true, true);
            EFFECT_GETITEM.play();
        }, this);

        player = this.add.sprite(200, 523, 'player');
        if (sceneBefore == 9000) { player.x = 1720 - posBefore; }
        else if (sceneBefore == 4000 || sceneBefore == 5000) { player.x = 520; }
        else if (sceneBefore == 6000 || sceneBefore == 7000) { player.x = 1250; }
        main = this.cameras.main; main.startFollow(player);
        main.setBounds(0, 0, this.backBg.displayWidth, this.backBg.displayHeight);

        this.soda = this.add.image(738, 689, 'b1-soda');
        this.soda.setInteractive().on('pointerdown', function() {
            if (CheckMet.includes('JUNHA')) {
                this.soda.visible = false;
                CHILSUNG.visible = true;
                this.BOOM_CHILSUNG = this.add.sprite(CHILSUNG.x, CHILSUNG.y, 'boom'); 
                this.BOOM_CHILSUNG.anims.play('boom', true); EFFECT_BOOM.play();
                if (!Collection.includes('cider')) {
                    this.TALK_CHILSUNG = this.add.sprite(CHILSUNG.x + 130, CHILSUNG.y - 250, 'talk-cider');
                    this.TALK_CHILSUNG.anims.play('talk-c', true);
                }
            } else {
                LIKE_IT = true;
            }
        }, this);
        this.milk = this.add.image(86, 670, 'b1-milk');
        this.milk.setInteractive().on('pointerdown', function() {  
            if (CheckMet.includes('JUNHA')) {
                this.milk.visible = false; WUWU.visible = true;
                this.BOOM_WUWU = this.add.sprite(WUWU.x, WUWU.y, 'boom'); 
                this.BOOM_WUWU.anims.play('boom', true); 
                if (!Collection.includes('wuwu')) {
                    this.TALK_WUWU = this.add.sprite(WUWU.x + 150, WUWU.y - 300, 'talk-wuwu');
                    this.TALK_WUWU.anims.play('talk-w', true);
                }
                EFFECT_BOOM.play();
            } else {
                LIKE_IT = true;
            }
        }, this);

        CHILSUNG = this.add.sprite(732, 397, 'cider'); CHILSUNG.visible = false;
        CHILSUNG.setInteractive().on('pointerdown', function() { 
            sceneBefore = 8000;
            if (!Collection.includes('cider')) {
                BGM_MAP.pause(); BGM_CIDER.play();
                game.scene.sleep('8000'); game.scene.start('cider'); 
            }
        }, this);

        WUWU = this.add.sprite(146, 380, 'wuwu'); WUWU.visible = false;
        WUWU.setInteractive().on('pointerdown', function() { 
            sceneBefore = 8000;
            if (!Collection.includes('wuwu')) {
                BGM_MAP.pause(); BGM_WUWU.play();
                game.scene.sleep('8000'); game.scene.start('wuwu'); 
            }
        }, this);

    },

    update: function() {

        playerMove(); numberCount.setFrame(Collection.length);
        stay(this.flip, 10, FRONT_BACK_WIDTH); stay(numberNow, 25, FRONT_BACK_WIDTH); stay(numberCount, 55, FRONT_BACK_WIDTH);

        if (player.x < 160) { player.x = 160; }
        else if (player.x > 1560) { player.x = 1560; }

        if (CHILSUNG.visible) {
            if (!Collection.includes('cider')) { CHILSUNG.anims.play('cider-2', true); }
            else { CHILSUNG.anims.play('cider-1', true); }
        }
        if (WUWU.visible) { 
            if (!Collection.includes('wuwu')) { WUWU.anims.play('wuwu-1', true); }
            else { WUWU.anims.play('wuwu-2', true); }
        }
    }
});

myGame.scenes.push(mapBack);