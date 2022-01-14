var mapBackFlip = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function GamePlay() {
        Phaser.Scene.call(this, {key: '9000'});
    },

    preload: function() {

    },

    create: function() {

        FROM_FRONT_OR_BACK = 9000;

        this.backFlipBg = this.add.image(0, 0, 'back-2').setOrigin(0, 0);

        this.flip = this.add.image(912, 146, 'flip-btn').setDepth(100);
        this.flip.setInteractive().on('pointerdown', function() { 
            posBefore = player.x; sceneBefore = 9000;
            game.scene.stop('9000'); game.scene.start('8000'); 
        }, this); 
        numberNow = this.add.image(912, 58, 'number').setDepth(100);
        numberCount = this.add.sprite(898, 77, 'count').setDepth(100);

        this.toIcecream = this.add.image(1320, 550, 'u-arrow');
        this.toIcecream.setInteractive().on('pointerdown', function() { 
            sceneBefore = 9000;
            game.scene.stop('9000'); game.scene.start('4000'); 
        }, this)
        this.toDisplay1 = this.add.image(1070, 550, 'u-arrow');
        this.toDisplay1.setInteractive().on('pointerdown', function() { 
            sceneBefore = 9000;
            game.scene.stop('9000'); game.scene.start('5000'); 
        }, this)
        this.toDisplay2 = this.add.image(600, 550, 'u-arrow');
        this.toDisplay2.setInteractive().on('pointerdown', function() { 
            sceneBefore = 9000;
            game.scene.stop('9000'); game.scene.start('6000'); 
        }, this)
        this.toDisplay3 = this.add.image(350, 550, 'u-arrow');
        this.toDisplay3.setInteractive().on('pointerdown', function() { 
            sceneBefore = 9000;
            game.scene.stop('9000'); game.scene.start('7000'); 
        }, this)

        player = this.add.sprite(200, 523, 'player');
        if ( sceneBefore == 8000) { player.x = 1720 - posBefore; }
        main = this.cameras.main; main.startFollow(player);
        main.setBounds(0, 0, this.backFlipBg.displayWidth, this.backFlipBg.displayHeight);
        
    },

    update: function() {

        playerMove(); numberCount.setFrame(Collection.length);
        stay(this.flip, 10, FRONT_BACK_WIDTH); stay(numberNow, 25, FRONT_BACK_WIDTH); stay(numberCount, 55, FRONT_BACK_WIDTH);

        if (player.x < 160) { player.x = 160; }
        else if (player.x > 1560) { player.x = 1560; }

    }
});

myGame.scenes.push(mapBackFlip);