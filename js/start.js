var startGame = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function startGame() {
        Phaser.Scene.call(this, {key: 'start'});
    },

    preload: function() {

    },

    create: function() {
        this.add.image(480, 360, 'start');
        btnStart = this.add.image(250, 600, 'game-start');
        btnHow = this.add.image(700, 600, 'game-how');
        btnStart.setInteractive().on('pointerdown', function() {
            BGM_MAP.play();
            game.scene.stop('start'); game.scene.start('1000');
        }, this);
        btnHow.setInteractive().on('pointerdown', function() {
            this.how = this.add.sprite(480, 360, 'talk-howto');
            this.how.anims.play('talk-how', true);
        }, this);
    },

    update: function() {

    }
});

myGame.scenes.push(startGame);