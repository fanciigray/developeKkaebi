var gameByuriState = new Phaser.Class({

    Extends: Phaser.Scene,
    initialize:
    function gameByuri() {
        Phaser.Scene.call(this, {key: 'byuri'});
    },

    preload: function() {
        this.load.image('byuri-img', 'assets/game-byuri/byuri-img.png');
        this.load.image('byuri-found', 'assets/game-byuri/byuri-found.png');
        this.load.image('byuri-default', 'assets/game-byuri/byuri-count.png');
        this.load.image('byuri-hearts', 'assets/game-byuri/byuri-hearts.png');
        this.load.image('byuri-dummy', 'assets/game-byuri/byuri-dummy.png');
        this.load.spritesheet('byuri-correct', 'assets/game-byuri/byuri-correct.png', { frameWidth: 44, frameHeight: 44 });

    },

    create: function() {
        game.scene.sleep('map');

        this.started = false;
        this.HEARTS = 5;

        gameBG = this.add.image(0, 0, 'game').setOrigin(0, 0); 
        out = this.add.image(912, 50, 'game-out');
        out.setInteractive().on('pointerdown', function() { game.scene.stop('byuri'); game.scene.wake('map');  }, this);

        this.add.image(441, 360, 'byuri-img');
        this.add.image(343, 94, 'byuri-default');
        this.found = this.add.image(343, 94, 'byuri-found').setCrop(0, 0, 0, 31);
        this.hearts = this.add.image(719, 96, 'byuri-hearts');
        this.foundNum = 0;

        this.dummy = this.add.image(625, 380, 'byuri-dummy').setInteractive().on('pointerdown', function() {
            this.HEARTS -= 1;
        }, this);

        this.answer1 = this.add.sprite(675, 510, 'byuri-correct', 0).setInteractive().on('pointerdown', function() { 
            this.answer1Open = this.add.sprite(675, 510, 'byuri-correct', 1); this.answer1.visible = false;
            this.foundNum += 1;
        }, this);
        this.answer2 = this.add.sprite(571, 432, 'byuri-correct', 0).setInteractive().on('pointerdown', function() {
            this.answer2Open = this.add.sprite(571, 432, 'byuri-correct', 1); this.answer2.visible = false;
            this.foundNum += 1;
        }, this);
        this.answer3 = this.add.sprite(732, 400, 'byuri-correct', 0).setInteractive().on('pointerdown', function() {
            this.answer3Open = this.add.sprite(732, 400, 'byuri-correct', 1); this.answer3.visible = false;
            this.foundNum += 1;  
        }, this);
        this.answer4 = this.add.sprite(770, 379, 'byuri-correct', 0).setInteractive().on('pointerdown', function() {
            this.answer4Open = this.add.sprite(770, 379, 'byuri-correct', 1); this.answer4.visible = false;
            this.foundNum += 1;
        }, this);
        this.answer5 = this.add.sprite(632, 313, 'byuri-correct', 0).setInteractive().on('pointerdown', function() {
            this.answer5Open = this.add.sprite(632, 313, 'byuri-correct', 1); this.answer5.visible = false;
            this.foundNum += 1;
        }, this);

        this.pointer = this.input.activePointer;

        pressToStart = this.add.image(441, 360, 'press-to-start'); 


    },

    update: function() {

        if (this.isGameOver()) {
            game.scene.stop('byuri');
            game.scene.wake('map');
        } else if (this.isWon()) {
            Collection.push('byuri');
            game.scene.stop('byuri');
            game.scene.wake('map');
        } else {
            if (!this.started) {
                this.dummy.disableInteractive();
                this.answer1.disableInteractive();
                this.answer2.disableInteractive();
                this.answer3.disableInteractive();
                this.answer4.disableInteractive();
                this.answer5.disableInteractive();
                if (cursors.space.isDown) {
                    this.started = true; pressToStart.visible = false;
                }
            } else {
                this.dummy.setInteractive();
                this.answer1.setInteractive();
                this.answer2.setInteractive();
                this.answer3.setInteractive();
                this.answer4.setInteractive();
                this.answer5.setInteractive();
                this.found.setCrop(0, 0, this.foundNum * 36, 31);
                this.hearts.setCrop((this.HEARTS - 5) * 36, 0, this.HEARTS * 36, 31);
            }
        }

    }, 

    isWon: function() {
        return this.foundNum === 5;
    },

    isGameOver: function() {
        return this.HEARTS === 0;
    }

});

myGame.scenes.push(gameByuriState);