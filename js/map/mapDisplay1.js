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