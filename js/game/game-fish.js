var gameFishState = new Phaser.Class({

    Extends: Phaser.Scene,
    initialize:
    function gameByuri() {
        Phaser.Scene.call(this, {key: 'fish'});
    },

    preload: function() {

    },

    create: function() {
        gameBG = this.add.image(0, 0, 'game').setOrigin(0, 0); 
        out = this.add.image(912, 50, 'game-out');
        out.setInteractive().on('pointerdown', function() { game.scene.stop('fish'); }, this)

    },

    update: function() {

    }

});

myGame.scenes.push(gameFishState);