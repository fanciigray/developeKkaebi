var gameCiderState = new Phaser.Class({

    Extends: Phaser.Scene,
    initialize:
    function gameCider() {
        Phaser.Scene.call(this, {key: 'cider'});
    },

    preload: function() {
        this.load.image('7-bg', 'assets/game-cider/cider-area.png');
        this.load.spritesheet('7-puzzles', 'assets/game-cider/cider-puzzles.png', {frameWidth: 240, frameHeight: 190});
    },

    create: function() {
        this.isStarted = false;

        gameBG = this.add.image(0, 0, 'game').setOrigin(0, 0); 
        out = this.add.image(902, 60, 'game-out');
        out.setInteractive().on('pointerdown', function() { game.scene.stop('cider'); game.scene.wake('map'); }, this)

        this.ciderArea = this.add.image(441, 360, '7-bg');
        this.ciderPuzzles = this.physics.add.group();
        
        this.ciderP1 = this.physics.add.sprite(202, 172, '7-puzzles', this.shuffleArray[0]);
        this.ciderPuzzles.add(this.ciderP1);
        this.ciderP2 = this.physics.add.sprite(442, 172, '7-puzzles', this.shuffleArray[1]);
        this.ciderPuzzles.add(this.ciderP2);
        this.ciderP3 = this.physics.add.sprite(682, 172, '7-puzzles', this.shuffleArray[2]);
        this.ciderPuzzles.add(this.ciderP3);
        this.ciderP4 = this.physics.add.sprite(202, 362, '7-puzzles', this.shuffleArray[3]);
        this.ciderPuzzles.add(this.ciderP4);
        this.ciderP5 = this.physics.add.sprite(442, 362, '7-puzzles', this.shuffleArray[4]);
        this.ciderPuzzles.add(this.ciderP5);
        this.ciderP6 = this.physics.add.sprite(682, 362, '7-puzzles', this.shuffleArray[5]);
        this.ciderPuzzles.add(this.ciderP6);
        this.ciderP7 = this.physics.add.sprite(202, 552, '7-puzzles', this.shuffleArray[6]);
        this.ciderPuzzles.add(this.ciderP7);

        this.ciderblack = this.physics.add.sprite(442, 552, '7-puzzles', this.shuffleArray[7]);

        // 충돌 설정해놓고 충돌하지 않는 방향으로 움직이도록 해야할듯
        this.physics.add.collider(this.ciderPuzzles, this.ciderblack, this.collideOtherPuzzle, null, this);
        
        this.ciderPuzzles.children.iterate(function(child) {
            let isColliding = child.touching;
            child.setInteractive().on('pointerdown', function() {
                console.log('눌렀다');
                console.log(isColliding);
            })
        });

        pressToStart = this.add.image(441, 360, 'press-to-start'); 

    },

    update: function() {

        if (this.isWon()) {
            Collection.push('cider');
            game.scene.stop('cider');
            game.scene.wake('map');
        } else {
            
            if (!this.isStarted) {

                if (cursors.space.isDown) {
                    this.isStarted = true; pressToStart.visible = false;
                }
            }
        }
    },

    shuffleArray: [ 3, 2, 0, 6, 1, 7, 4, 5, 8 ],

    isWon: function() {

    },

    collideOtherPuzzle: function(puzzle, blackpuzzle) {

    }

});

myGame.scenes.push(gameCiderState);