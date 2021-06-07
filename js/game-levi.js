var gameLeviState = new Phaser.Class({

    Extends: Phaser.Scene,
    initialize:
    function gameLevi() {
        Phaser.Scene.call(this, {key: 'levi'});
    },

    preload: function() {
        this.load.image('ball', 'assets/game-levi/levi-ball.png');
        this.load.image('levi-area', 'assets/game-levi/levi-bg.png');
        this.load.image('shooter', 'assets/game-levi/shooter.png');
        this.load.spritesheet('blocks', 'assets/game-levi/levi-blocks.png', {frameWidth: 124, frameHeight: 52});

    },

    create: function() {
        game.scene.sleep('map');
        this.isStarted = false;

        gameBG = this.add.image(0, 0, 'levi-area').setOrigin(0, 0); 
        out = this.add.image(890, 670, 'game-out');
        out.setInteractive().on('pointerdown', function() { game.scene.stop('levi'); game.scene.wake('map');; }, this);

        rmc = this.physics.add.sprite(480, 740, 'shooter');
        ball = this.physics.add.sprite(480, 560, 'ball');

        bricks1 = this.physics.add.group({
            key: 'blocks',
            frame: Phaser.Math.Between(0, 4),
            repeat: 6,
            immovable: true,
            setXY: {
                x: 109, y: 63, stepX: 124
            }
        });
        bricks2 = this.physics.add.group({
            key: 'blocks',
            frame: Phaser.Math.Between(0, 4),
            repeat: 6,
            immovable: true,
            setXY: {
                x: 109, y: 115, stepX: 124
            }
        });
        bricks3 = this.physics.add.group({
            key: 'blocks',
            frame: Phaser.Math.Between(0, 4),
            repeat: 6,
            immovable: true,
            setXY: {
                x: 109, y: 167, stepX: 124
            }
        });
        bricks4 = this.physics.add.group({
            key: 'blocks',
            frame: Phaser.Math.Between(0, 4),
            repeat: 6,
            immovable: true,
            setXY: {
                x: 109, y: 219, stepX: 124
            }
        });
        bricks5 = this.physics.add.group({
            key: 'blocks',
            frame: Phaser.Math.Between(0, 4),
            repeat: 6,
            immovable: true,
            setXY: {
                x: 109, y: 271, stepX: 124
            }
        });

        rmc.setCollideWorldBounds(true);
        ball.setCollideWorldBounds(true);
        this.physics.world.checkCollision.down = false;
        ball.setBounce(1, 1);

        this.physics.add.collider(ball, bricks1, this.hitBrick, null, this);
        this.physics.add.collider(ball, bricks2, this.hitBrick, null, this);
        this.physics.add.collider(ball, bricks3, this.hitBrick, null, this);
        this.physics.add.collider(ball, bricks4, this.hitBrick, null, this);
        this.physics.add.collider(ball, bricks5, this.hitBrick, null, this);

        rmc.setImmovable(true);
        this.physics.add.collider(ball, rmc, this.hitPlayer, null, this);

        pressToStart = this.add.image(480, 360, 'press-to-start'); 


    },

    update: function() {

        if (this.isGameOver(this.physics.world)) {
            // 게임오버 메시지 보여주기
            this.isStarted = false;
            game.scene.stop('levi');
            game.scene.wake('map');

        } else if  (this.isWon()) {
            // 승리 메시지 보여주기
            Collection.push('levi-rimo'); 
            game.scene.stop('levi');
            game.scene.wake('map');
        } else {
            // 레귤러 게임 타임
            rmc.body.setVelocityX(0);

            if (cursors.left.isDown) {
                rmc.body.setVelocityX(-350);
            } else if (cursors.right.isDown) {
                rmc.body.setVelocityX(350);
            }

            if (!this.isStarted) {
                ball.setX(rmc.x);

                if (cursors.space.isDown) {
                    this.isStarted = true; pressToStart.visible = false;
                    ball.setVelocityY(-300);
                }
            }

        }

    },

    isGameOver: function (world) {
        return ball.body.y > world.bounds.height;
    },

    isWon: function (world) {
        return bricks1.countActive() + bricks2.countActive() + bricks3.countActive() + bricks4.countActive() + bricks5.countActive() === 0;
    },
    
    hitBrick: function(ball, brick) {
        brick.disableBody(true, true);

        if (ball.body.velocity.x === 0) {
            randomNum = Math.random();
            if (randomNum >= 0.5) {
                ball.body.setVelocityX(150);
            } else {
                ball.body.setVelocityX(-150);
            }
        }
    },

    hitPlayer: function(ball, player) {
        ball.setVelocityY(ball.body.velocity.y - 5);

        let newXVelocity = Math.abs(ball.body.velocity.x) + 5;
    
        if (ball.x < player.x) {
            ball.setVelocityX(-newXVelocity);
        } else {
            ball.setVelocityX(newXVelocity);
        }
    }

});

let rmc, ball, bricks1, bricks2, bricks3, bricks4, bricks5;

myGame.scenes.push(gameLeviState);