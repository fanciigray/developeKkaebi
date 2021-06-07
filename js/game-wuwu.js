var gameWuwuState = new Phaser.Class({

    Extends: Phaser.Scene,
    initialize:
    function gameWuwu() {
        Phaser.Scene.call(this, {key: 'wuwu'});
    },

    preload: function() {
        
        // this.plugins.get('rexwebfontloaderplugin').addToScene(this);
        // this.load.rexWebFont(this.fontConfig);

        this.load.image('wuwu-area', 'assets/game-wuwu/wuwu-area.png');
        this.load.image('wuwu-heart-default', 'assets/game-wuwu/wuwu-heart-default.png');
        this.load.image('wuwu-heart', 'assets/game-wuwu/wuwu-heart-inable.png');
        this.load.spritesheet('wuwu-bubbles', 'assets/game-wuwu/wuwu-bubbles.png', {frameWidth: 72, frameHeight: 72});
    },

    create: function() {
        game.scene.sleep('map');

        this.started = false;

        this.initialTime = 30;
        WUWU_HEARTS = 0; 

        gameBG = this.add.image(0, 0, 'game').setOrigin(0, 0); 
        out = this.add.image(912, 50, 'game-out');
        out.setInteractive().on('pointerdown', function() { game.scene.stop('wuwu'); game.scene.wake('map'); }, this);

        this.add.image(441, 360, 'wuwu-area');
        this.add.image(275, 111, 'wuwu-heart-default');
        this.hearts1 = this.add.image(265, 94, 'wuwu-heart').setCrop(0, 0, 0, 31);
        this.hearts2 = this.add.image(286, 129, 'wuwu-heart').setCrop(0, 0, 0, 31);

        this.heartbubbles = this.physics.add.group();
        for (var i = 0; i < 10; i++) {
            let bubble = this.add.sprite(440 + Phaser.Math.Between(-330, 330), 400 + Phaser.Math.Between(-200, 200), 'wuwu-bubbles', 0);
            this.heartbubbles.add(bubble);
        }
        this.sadbubbles = this.physics.add.group();
        for (var i = 0; i < 100; i++) {
            let bubble = this.add.sprite(440 + Phaser.Math.Between(-330, 330), 400 + Phaser.Math.Between(-200, 200), 'wuwu-bubbles', 1);
            this.sadbubbles.add(bubble);
        }
        this.badbubbles = this.physics.add.group();
        for (var i = 0; i < 100; i++) {
            let bubble = this.add.sprite(440 + Phaser.Math.Between(-330, 330), 400 + Phaser.Math.Between(-200, 200), 'wuwu-bubbles', 2);
            this.badbubbles.add(bubble);
        };

        pressToStart = this.add.image(441, 360, 'press-to-start'); 

        this.timer = this.add.text(715, 80, this.initialTime.toString(), {fontFamily: 'Arial', fontSize: 63, color: '#593C60'}).setDepth(100);

    },

    update: function() {

        if (this.isGameOver()) {
            game.scene.stop('wuwu');
            game.scene.wake('map');
        } else if (this.isWon()) {
            Collection.push('wuwu'); 
            game.scene.stop('wuwu');
            game.scene.wake('map');
        } else {
            if (!this.started) {
                if (cursors.space.isDown) {
                    this.started = true;
                    pressToStart.visible = false;
                    this.time.addEvent({delay: 1000, callback: function() { this.initialTime -= 1; this.timer.setText(this.initialTime.toString()); }, callbackScope: this, loop: true})

                    this.sadbubbles.children.iterate(function(child) {
                        child.setInteractive().on('pointerdown', function() { child.visible = false; });
                    });
                    this.badbubbles.children.iterate(function(child) {
                        child.setInteractive().on('pointerdown', function() { child.visible = false; });
                    });
                    this.heartbubbles.children.iterate(function(child) {
                        child.setInteractive().on('pointerdown', function() { 
                            child.visible = false; WUWU_HEARTS += 1; 
                        });
                    });
                }
            } else {
                this.hearts1.setCrop(0, 0, WUWU_HEARTS * 41, 31);
                this.hearts2.setCrop(0, 0, (WUWU_HEARTS - 5) * 41, 31);
            }


        }
    },

    isGameOver: function() {
        return this.initialTime === 0;
    },

    isWon: function() {
        return WUWU_HEARTS === 10;
    },

});

myGame.scenes.push(gameWuwuState);