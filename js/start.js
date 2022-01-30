var startGame = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function startGame() {
        Phaser.Scene.call(this, {key: 'start'});
    },

    preload: function() {

    },

    create: function() {
        this.add.image(480, 360, 'start-close');
        this.opendoor = this.add.image(480, 360, 'start'); this.opendoor.visible = false;
        btnStart = this.add.image(250, 600, 'game-start');
        btnHow = this.add.image(700, 600, 'game-how');

        btnStart.setInteractive().on('pointerdown', function() {
            this.opendoor.visible = true;
            btnHow.visible = false; btnStart.visible = false;
            EFFECT_GAMESTART.play(); BGM_OPENING.stop(); 
            this.time.addEvent({
                delay: 3000,
                callback: function() {
                    BGM_MAP.play();
                    game.scene.stop('start'); game.scene.start('1000'); 
                },
                callbackScope: this,
                loop: false
            })
            
        }, this);
        btnHow.setInteractive().on('pointerdown', function() {
            this.how = this.add.sprite(480, 360, 'howToPlay');
            EFFECT_HOWTOPLAY_BTN.play();
        }, this);
        btnHow.setInteractive().on('pointerup', function() {
            this.how.visible = false;
        }, this);
    },

    update: function() {

    }
});

myGame.scenes.push(startGame);