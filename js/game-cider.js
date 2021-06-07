var gameCiderState = new Phaser.Class({

    Extends: Phaser.Scene,
    initialize:
    function gameCider() {
        Phaser.Scene.call(this, {key: 'cider'});
    },

    preload: function() {
        this.load.image('7-bg', 'assets/game-cider/cider-area.png');
        this.load.image('7-cider', 'assets/game-cider/cider.png');
        this.load.image('7-timer', 'assets/game-cider/timer.png');
        this.load.spritesheet('7-dust', 'assets/game-cider/dusts.png', {frameWidth: 63, frameHeight: 63});
    },

    create: function() {
        game.scene.sleep('map');

        this.isStarted = false;
        this.initialTime = 30;

        gameBG = this.add.image(0, 0, 'game').setOrigin(0, 0); 
        out = this.add.image(902, 60, 'game-out');
        out.setInteractive().on('pointerdown', function() { game.scene.stop('cider'); game.scene.wake('map'); }, this)

        this.ciderArea = this.add.image(441, 360, '7-bg');
        this.ciderfigure = this.add.image(441, 360, '7-cider');
        this.add.image(881, 198, '7-timer');

        this.dust1 = this.physics.add.group();
        for (var i = 0; i < 50; i++) {
            let dust = this.physics.add.sprite(441 + Phaser.Math.Between(-330, 330), 400 + Phaser.Math.Between(-200, 200), '7-dust', 0);
            this.dust1.add(dust);
        }
        this.dust2 = this.physics.add.group();
        for (var i = 0; i < 50; i++) {
            let dust = this.physics.add.sprite(441 + Phaser.Math.Between(-330, 330), 400 + Phaser.Math.Between(-200, 200), '7-dust', 1);
            this.dust2.add(dust);
        }

        this.dust1.children.iterate(function(child) {
            child.setInteractive().on('pointerdown', function() {
                child.disableBody(true, true);
            }, this)
        })
        this.dust2.children.iterate(function(child) {
            child.setInteractive().on('pointerdown', function() {
                child.disableBody(true, true);
            }, this)
        })

        pressToStart = this.add.image(441, 360, 'press-to-start'); 

        this.timer = this.add.text(860, 198, this.initialTime.toString(), {fontFamily: 'Arial', fontSize: 36, color: '#FFFFFF'}).setDepth(100);

    },

    update: function() {

        if (this.isGameOver()) {
            game.scene.stop('cider');
            game.scene.wake('map');
        } else if (this.isWon()) {
            Collection.push('cider');
            game.scene.stop('cider');
            game.scene.wake('map');
        } else {
            
            if (!this.isStarted) {

                if (cursors.space.isDown) {
                    this.isStarted = true; pressToStart.visible = false;
                    this.time.addEvent({delay: 1000, callback: function() { this.initialTime -= 1; this.timer.setText(this.initialTime.toString()); }, callbackScope: this, loop: true})
                }
            } else {

            }
        }
    },

    isGameOver: function() {
        return this.initialTime === 0;
    },

    isWon: function() {
        return this.dust1.countActive() + this.dust2.countActive() === 0;
    }

});

myGame.scenes.push(gameCiderState);