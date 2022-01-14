var mapFrontFlip = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: 
    function GamePlay() {
        Phaser.Scene.call(this, {key: '2000'});
    },

    preload: function() {

    },

    create: function() {

        this.frontFlipBg = this.add.image(0, 0, 'front-2').setOrigin(0, 0);

        this.flip = this.add.image(912, 146, 'flip-btn').setDepth(100);
        this.flip.setInteractive().on('pointerdown', function() { 
            posBefore = player.x; sceneBefore = 2000;
            game.scene.stop('2000'); game.scene.start('1000'); 
        }, this);
        numberNow = this.add.image(912, 58, 'number').setDepth(100);
        numberCount = this.add.sprite(898, 77, 'count').setDepth(100);

        this.gameConsole = this.add.image(1383, 454, 'f2-gc');
        this.gameConsole.setInteractive().on('pointerdown', function() {
            if (CheckMet.includes('JUNHA')) {
                ZKP.visible = true; this.gameConsole.visible = false; 
                this.BOOM_ZKP = this.add.sprite(ZKP.x, ZKP.y, 'boom'); 
                this.BOOM_ZKP.anims.play('boom', true);
                if (!Collection.includes('zkp')) {
                    this.TALK_ZKP = this.add.sprite(ZKP.x + 160, ZKP.y - 150, 'talk-zkp');
                    this.TALK_ZKP.anims.play('talk-z', true);
                }
                EFFECT_BOOM.play();
            } else {
                LIKE_IT = true; 
            }
        }, this);
        this.woods = this.add.image(1504, 605, 'f2-woods');
        
        ZKP = this.add.sprite(1350, 483, 'zkp'); ZKP.visible = false;
        ZKP.setInteractive().on('pointerdown', function() { 
            if (!Collection.includes('zkp')) {
                BGM_MAP.pause(); BGM_ZKP.play(); EFFECT_START.play();
                game.scene.sleep('2000'); game.scene.start('zkp');
            }
        }, this);

        player = this.add.sprite(830, 523, 'player');
        if (sceneBefore == 1000) { player.x = 1690 - posBefore; }
        
        main = this.cameras.main; main.startFollow(player);
        main.setBounds(0, 0, this.frontFlipBg.displayWidth, this.frontFlipBg.displayHeight);

        this.fire = this.add.image(831, 615, 'f2-fire');
        this.fire.setInteractive().on('pointerdown', function() { DISLIKE_IT = true; }, this);

        this.phone = this.add.image(400, 400, 'f2-dummyphone');
        this.phone.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);

    },

    update: function() {

        playerMove(); numberCount.setFrame(Collection.length);
        stay(this.flip, 10, FRONT_BACK_WIDTH); stay(numberNow, 25, FRONT_BACK_WIDTH); stay(numberCount, 55, FRONT_BACK_WIDTH);

        if (player.x < 540) { player.x = 540; }
        else if (player.x > 1390) { player.x = 1390; }

        if (ZKP.visible) { 
            if (Collection.includes('zkp')) { ZKP.anims.play('zkp-2', true); }
            else { ZKP.anims.play('zkp-1', true); }
        }

    }

});

myGame.scenes.push(mapFrontFlip);