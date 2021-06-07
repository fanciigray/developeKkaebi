var gameJoyState = new Phaser.Class({

    Extends: Phaser.Scene,
    initialize:
    function gameJoy() {
        Phaser.Scene.call(this, {key: 'joy'});
    },

    preload: function() {
        this.load.image('joy-closet-0', 'assets/game-joy/joy-back.png');
        this.load.image('joy-closet-1', 'assets/game-joy/joy-back-1.png');
        this.load.image('joy-closet-2', 'assets/game-joy/joy-back-2.png');
        this.load.image('joy-closet-3', 'assets/game-joy/joy-back-3.png');
        this.load.image('joy-timer', 'assets/game-joy/timer.png');
        this.load.spritesheet('joy-cards', 'assets/game-joy/cards.png', { frameWidth: 98, frameHeight: 98 });

    },

    create: function() {
        game.scene.sleep('map');

        this.isStarted = false;
        this.initialTime = 30;

        gameBG = this.add.image(0, 0, 'game').setOrigin(0, 0); 
        out = this.add.image(902, 60, 'game-out');
        out.setInteractive().on('pointerdown', function() { game.scene.stop('joy'); game.scene.wake('map'); }, this)

        this.area = this.add.image(441, 360, 'joy-closet-0');
        this.closet1 = this.add.image(441, 360, 'joy-closet-1'); this.closet1.visible = false;
        this.closet2 = this.add.image(441, 360, 'joy-closet-2'); this.closet2.visible = false;
        this.closet3 = this.add.image(441, 360, 'joy-closet-3'); this.closet3.visible = false;
        this.add.image(881, 198, 'joy-timer');

        this.zone = this.add.zone(325, 382, 286, 258).setRectangleDropZone(286, 258);
        var graphics = this.add.graphics();
        graphics.lineStyle(2, 0xffff00);
        graphics.strokeRect(this.zone.x - this.zone.input.hitArea.width / 2, this.zone.y - this.zone.input.hitArea.height / 2, this.zone.input.hitArea.width, this.zone.input.hitArea.height);

        this.Clothes = this.physics.add.group();
        for (let i = 0; i < 36; i++) {
            let clothes = this.physics.add.sprite(710 + Phaser.Math.Between(-40, 40), 420 + Phaser.Math.Between(-130, 130), 'joy-cards', Phaser.Math.Between(1, 12)).setInteractive({ draggable: true });
            this.Clothes.add(clothes);
        }

        this.input.on('drag', function(pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });

        this.input.on('drop', function(pointer, gameObject, dropZone) {
            gameObject.x = dropZone.x;
            gameObject.y = dropZone.y;
            gameObject.input.enabled = false;
            gameObject.disableBody(true, true);
        })

        this.timer = this.add.text(860, 198, this.initialTime.toString(), {fontFamily: 'Arial', fontSize: 36, color: '#000000'}).setDepth(100);

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
                    this.time.addEvent({delay: 1000, callback: function() { this.initialTime -= 1; this.timer.setText(this.initialTime.toString()); }, callbackScope: this, loop: true})
                }
            } else {
                
                if (this.Clothes.countActive() == 26) {
                    this.closet1.visible = true;
                } else if (this.Clothes.countActive() == 16) {
                    this.closet2.visible = true;
                } else if (this.Clothes.countActive() == 6) {
                    this.closet3.visible = true;
                }

            }
        }

    },

    isGameOver: function() {
        return this.initialTime === 0;
    },

    isWon: function() {
        return this.Clothes.countActive() === 0;
    },


});


myGame.scenes.push(gameJoyState);