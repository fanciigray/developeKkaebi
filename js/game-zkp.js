var gameZkpState = new Phaser.Class({

    Extends: Phaser.Scene,
    initialize:
    function gameZkp() {
        Phaser.Scene.call(this, {key: 'zkp'});
    },

    preload: function() {
        this.load.image('zkp-bg', 'assets/game-zkp/zkp-bg.png');
        this.load.image('zkp-count-default', 'assets/game-zkp/default.png');
        this.load.image('zkp-count-win', 'assets/game-zkp/win-coins.png');
        this.load.spritesheet('zkp-rsp', 'assets/game-zkp/screen-rsp.png',  { frameWidth: 197, frameHeight: 256 });
        this.load.spritesheet('player-rsp', 'assets/game-zkp/buttons.png', { frameWidth: 206, frameHeight: 159 });
        this.load.spritesheet('zkp-result', 'assets/game-zkp/results.png', { frameWidth: 323, frameHeight: 322 });

    },

    create: function() {
        game.scene.sleep('map');

        this.isStarted = false;
        isRockPressed = false;
        isScissorPressed = false;
        isPaperPressed = false;

        this.BG = this.add.image(480, 360, 'zkp-bg');
        out = this.add.image(912, 50, 'game-out');
        out.setInteractive().on('pointerdown', function() { game.scene.stop('zkp'); game.scene.wake('map'); }, this);

        this.WIN_COUNT = 0;
        this.defaultCoin = this.add.image(866, 196, 'zkp-count-default');
        this.winCoin = this.add.image(866, 196, 'zkp-count-win').setCrop(0, 0, 0, 0);
        
        this.zkp_rcp = this.add.sprite(470, 280, 'zkp-rsp');
        this.anims.create({key: 'zkp-on', frames: this.anims.generateFrameNumbers('zkp-rsp', {start: 0, end: 2}), frameRate: 10});

        this.rockButton = this.add.sprite(194, 624, 'player-rsp', 0);
        this.rockButton.setInteractive()
            .on('pointerdown', function() {
                this.rockButton.setFrame(1); isRockPressed = true;
            }, this)
            .on('pointerup', function() {
                this.rockButton.setFrame(0); 
            }, this);
        this.scissorButton = this.add.sprite(480, 624, 'player-rsp', 2);
        this.scissorButton.setInteractive()
            .on('pointerdown', function() {
                this.scissorButton.setFrame(3); isScissorPressed = true;
            }, this)
            .on('pointerup', function() {
                this.scissorButton.setFrame(2); 
            }, this);
        this.paperButton = this.add.sprite(766, 624, 'player-rsp', 4);
        this.paperButton.setInteractive()
            .on('pointerdown', function() {
                this.paperButton.setFrame(5); isPaperPressed = true;
            }, this)
            .on('pointerup', function() {
                this.paperButton.setFrame(4); 
            }, this);

        this.result = this.add.sprite(this.zkp_rcp.x + 15, this.zkp_rcp.y + 5, 'zkp-result', 1); this.result.visible = false;
        this.anims.create({key: 'zkp-win', frames: this.anims.generateFrameNumbers('zkp-result', {start: 0, end: 1}), repeat: 3, frameRate: 5});
        this.anims.create({key: 'zkp-lose', frames: this.anims.generateFrameNumbers('zkp-result', {start: 2, end: 1}), repeat: 3, frameRate: 5});

        pressToStart = this.add.image(480, 280, 'press-to-start'); 

    },

    update: function() {

        if (this.isGameOver()) {
            game.scene.stop('zkp');
            game.scene.wake('map');
        } else if (this.isWon()) {
            Collection.push('zkp');
            game.scene.stop('zkp');
            game.scene.wake('map');
        } else {
            if (!this.isStarted) {
                
                if (cursors.space.isDown) {
                    this.isStarted = true; pressToStart.visible = false;
                }
            } else {
                this.winCoin.setCrop(0, 0, 52, 60 * this.WIN_COUNT);
                if (this.checkIfButtonClicked()) {
                    this.zkp_rcp.stop(); 

                    let rockWin = isRockPressed && this.zkp_rcp.anims.getFrameName() === 1;
                    let scissorWin = isScissorPressed && this.zkp_rcp.anims.getFrameName() === 0;
                    let paperWin = isPaperPressed && this.zkp_rcp.anims.getFrameName() === 2;

                    if (rockWin || scissorWin || paperWin) {
                        isRockPressed = false; isScissorPressed = false; isPaperPressed = false;
                        this.result.visible = true;
                        this.result.anims.play('zkp-win', true);
                        this.result.on('animationcomplete-' + 'zkp-win', function() {
                            isRockPressed = false; isScissorPressed = false; isPaperPressed = false;
                            this.visible  = false;
                        })
                        this.WIN_COUNT += 1;
                    } else {
                        isRockPressed = false; isScissorPressed = false; isPaperPressed = false;
                        this.result.visible = true;
                        this.result.anims.play('zkp-lose', true);
                        this.result.on('animationcomplete-' + 'zkp-lose', function() {
                            isRockPressed = false; isScissorPressed = false; isPaperPressed = false;
                            this.visible = false;
                        })
                    }
                } else {
                    if (this.result.visible) {
                        this.zkp_rcp.visible = false;
                    } else { this.zkp_rcp.visible = true; }
                    this.zkp_rcp.anims.play('zkp-on', true);
                }
            }
        }
    },

    isGameOver: function() {
        return;
    },

    isWon: function() {
        return this.WIN_COUNT === 5;
    },

    checkIfButtonClicked: function() {
        return isRockPressed || isScissorPressed || isPaperPressed;
    },

});

myGame.scenes.push(gameZkpState);