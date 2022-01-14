var gameWuwuState = new Phaser.Class({

    Extends: Phaser.Scene,
    initialize:
    function gameWuwu() {
        Phaser.Scene.call(this, {key: 'wuwu'});
    },

    preload: function() {
        this.load.image('wuwu-area', 'assets/game-wuwu/wuwu-area.png');
        this.load.image('wuwu-heart-default', 'assets/game-wuwu/wuwu-heart-default.png');
        this.load.image('wuwu-heart', 'assets/game-wuwu/wuwu-heart-inable.png');
        this.load.spritesheet('wuwu-bubbles', 'assets/game-wuwu/wuwu-bubbles.png', {frameWidth: 72, frameHeight: 72});
    },

    create: function() {
        game.scene.sleep('map');

        wuwuHappy = this.sound.add('wuwu-happy', { loop: false, volume: 0.5 });
        wuwuSad = this.sound.add('wuwu-sad', { loop: false });

        this.started = false;

        this.initialTime = 30;
        WUWU_HEARTS = 0; 

        gameBG = this.add.image(0, 0, 'game').setOrigin(0, 0); 
        out = this.add.image(912, 50, 'game-out');
        out.setInteractive().on('pointerdown', function() { 
            BGM_WUWU.stop(); BGM_MAP.resume();
            game.scene.stop('wuwu'); game.scene.wake('8000'); 
        }, this);

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

        this.sadbubbles.children.iterate(function(child) {
            child.setInteractive().on('pointerdown', function() { 
                if (!pressToStart.visible) { child.visible = false; wuwuSad.play(); }
            });
        });
        this.badbubbles.children.iterate(function(child) {
            child.setInteractive().on('pointerdown', function() { 
                if (!pressToStart.visible) { child.visible = false; wuwuSad.play(); }
            });
        });
        this.heartbubbles.children.iterate(function(child) {
            child.setInteractive().on('pointerdown', function() { 
                if (!pressToStart.visible) { child.visible = false; WUWU_HEARTS += 1; wuwuHappy.play(); }
            });
        }); 

        pressToStart = this.add.image(441, 360, 'press-to-start'); 

        this.timer = this.add.text(
            725, 80, this.initialTime.toString(), 
            {fontFamily: 'joyfulStory', fontSize: 63, color: '#593C60'}
        ).setDepth(100);

    },

    update: function() {

        if (this.isGameOver()) {
            BGM_WUWU.stop(); BGM_MAP.resume(); EFFECT_GAMEOVER.play();
            game.scene.stop('wuwu');
            game.scene.wake('8000');
        } else if (this.isWon()) {
            BGM_WUWU.stop(); BGM_MAP.resume(); EFFECT_CLEAR.play();
            Collection.push('wuwu'); 
            game.scene.stop('wuwu');
            game.scene.wake('8000');
        } else {
            if (!this.started) {
                if (cursors.space.isDown) {
                    this.started = true;
                    pressToStart.visible = false;
                    this.time.addEvent({delay: 1000, callback: function() { 
                        this.initialTime -= 1; this.timer.setText(this.initialTime.toString()); }, 
                        callbackScope: this, 
                        loop: true})
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