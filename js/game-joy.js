var gameJoyState = new Phaser.Class({

    Extends: Phaser.Scene,
    initialize:
    function gameJoy() {
        Phaser.Scene.call(this, {key: 'joy'});
    },

    preload: function() {
        this.load.image('joy-area', 'assets/game-joy/joy-back.png');
        this.load.spritesheet('joy-cards', 'assets/game-joy/cards.png', { frameWidth: 98, frameHeight: 98 });

    },

    create: function() {

        this.isStarted = false;

        gameBG = this.add.image(0, 0, 'game').setOrigin(0, 0); 
        out = this.add.image(902, 60, 'game-out');
        out.setInteractive().on('pointerdown', function() { game.scene.stop('joy'); game.scene.wake('map'); }, this)

        this.area = this.add.image(441, 360, 'joy-area');
        this.level = [
            [1, 1, 4, 5, 12, 3],
            [2, 3, 11, 10, 9, 6],
            [9, 8, 7, 5, 11, 12],
            [10, 8, 4, 6, 7, 2]
        ];
        now = [];

        this.cardsOpen = this.add.group();
        Cards = this.physics.add.group();
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 6; j++) {
                var open = this.physics.add.sprite(165 + (109 * j), 241 + (109 * i), 'joy-cards', this.level[i][j]);
                this.cardsOpen.add(open);
                var card = this.physics.add.sprite(165 + (109 * j), 241 + (109 * i), 'joy-cards');
                Cards.add(card);
            }
        }

        Cards.children.iterate(function(child) {
            child.setInteractive().on('pointerdown', function() {
                let COL = (child.y - 241) / 109;
                let ROW = (child.x - 165) / 109;
                now.push(ROW, COL);
                child.disableBody(true, true); 
            }, this);
        });

        pressToStart = this.add.image(441, 360, 'press-to-start'); 

    },

    update: function() {

        if (this.isGameOver()) {
            game.scene.stop('joy');
            game.scene.wake('map');
        } else if (this.isWon()) {
            Collection.push('joy');
            game.scene.stop('joy');
            game.scene.wake('map');
        } else {
            if (!this.isStarted) {

                if (cursors.space.isDown) {
                    this.isStarted = true; pressToStart.visible = false;
                }
            } else {
                if (now.length === 4) {
                    console.log(now);
                    if (!this.checkNow(now)) {

                        var wrongOne = this.physics.add.sprite(165 + (109 * now[0]), 241 + (109 * now[1]), 'joy-cards');
                        var wrongTwo = this.physics.add.sprite(165 + (109 * now[2]), 241 + (109 * now[3]), 'joy-cards');
                        Cards.add(wrongOne); Cards.add(wrongTwo);
                        

                        now.length = 0;

                    } else {

                        now.length = 0;

                    }
                
                }

            }
        }

    },

    isGameOver: function() {

    },

    isWon: function() {
        return Cards.countActive() === 0;
    },

    checkNow: function(arr) {
        let oneCol = arr[0];
        let oneRow = arr[1];
        let twoCol = arr[2];
        let twoRow = arr[3];
        let result;


        if (this.level[oneRow][oneCol] === this.level[twoRow][twoCol]) {
            console.log('맞췄다!');
            result = true;
        } else {
            console.log('틀렸다');
            result = false; 
        }

        return result;
    }


});


myGame.scenes.push(gameJoyState);