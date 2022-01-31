var mapSideroom = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function GamePlay() {
        Phaser.Scene.call(this, {key: '3000'});
    },

    preload: function() {

    },

    create: function() {

        this.sideroombg = this.add.image(0, 0, 'sideroom').setOrigin(0, 0);

        numberNow = this.add.image(912, 58, 'number').setDepth(100);
        numberCount = this.add.sprite(898, 77, 'count').setDepth(100);

        this.television = this.add.image(835, 432, 'side-tv');
        this.television.setInteractive().on('pointerdown', function() {
            if (CheckMet.includes('JUNHA')) {
                this.television.visible = false;
                LEVI.visible = true;
                this.BOOM_LEVI = this.add.sprite(LEVI.x, LEVI.y, 'boom'); 
                this.BOOM_LEVI.anims.play('boom', true); EFFECT_BOOM.play();
                if (!isBtrCollected) { 
                    this.TALK_LEVI = this.add.sprite(LEVI.x + 120, LEVI.y - 200, 'talk-levi');
                    this.TALK_LEVI.anims.play('talk-l', true);
                }
            } else {
                LIKE_IT = true;
            }
        }, this);
        this.rmc = this.add.image(1062, 659, 'side-rmc');
        this.rmc.setInteractive().on('pointerdown', function() {
            if (!CheckMet.includes('JUNHA')) {
                LIKE_IT = true; 
            } else {
                if (isBtrCollected) {
                    this.rmc.visible = false;
                    RIMO.visible = true;
                    this.BOOM_RIMO = this.add.sprite(RIMO.x, RIMO.y, 'boom'); 
                    this.BOOM_RIMO.anims.play('boom', true); EFFECT_BOOM.play();
                    if (!Collection.includes('levi-rimo')) {
                        this.TALK_RIMO = this.add.sprite(RIMO.x + 150, RIMO.y - 210, 'talk-rimo');
                        this.TALK_RIMO.anims.play('talk-r', true);
                    }
                }
                else {
                    this.TALK_BEFORE_BATTERY = this.add.sprite(this.rmc.x + 60, this.rmc.y - 80, 'talk-rimo');
                    this.TALK_BEFORE_BATTERY.anims.play('talk-battery', true);
                }
            }
        }, this);
        this.blanket = this.add.image(179, 620, 'side-blanket').setDepth(100);
        this.blanket.setInteractive().on('pointerdown', function() { DISLIKE_IT = true; }, this);
        this.toFront = this.add.image(863, 680, 'd-arrow').setDepth(100);
        this.toFront.setInteractive().on('pointerdown', function() { 
            sceneBefore = 3000;
            game.scene.stop('3000'); game.scene.start('1000'); 
        }, this);

        LEVI = this.add.sprite(810, 442, 'levi'); LEVI.visible = false;
        LEVI.setInteractive().on('pointerdown', function() {
            if (LEVI.visible && RIMO.visible) { 
                if (!Collection.includes('levi-rimo')) {
                    BGM_MAP.pause(); BGM_LEVI.play(); EFFECT_START.play();
                    game.scene.sleep('3000'); game.scene.start('levi'); 
                }
            }
        }, this);
        RIMO = this.add.sprite(1050, 546, 'rimo'); RIMO.visible = false;

        player = this.add.sprite(850, 523, 'player');
        main = this.cameras.main; main.startFollow(player);
        main.setBounds(0, 0, this.sideroombg.displayWidth, this.sideroombg.displayHeight);

    },

    update: function() {

        playerMove(); numberCount.setFrame(Collection.length);
        stay(numberNow, 25, ECT_WIDTH); stay(numberCount, 55, ECT_WIDTH);

        if (player.x < 140) { player.x = 140; }
        else if (player.x > 1120) { player.x = 1120; }

        if (LEVI.visible) {
            if (!Collection.includes('levi-rimo')) { 
                if (RIMO.visible) { LEVI.anims.play('levi-3', true); }
                else { LEVI.anims.play('levi-2', true); }
            }
            else { LEVI.anims.play('levi-1', true); }
        }
        if (RIMO.visible) { 
            if (!Collection.includes('levi-rimo')) { RIMO.anims.play('rimo-3', true); }
            else { RIMO.anims.play('rimo-1', true); }
        }
    
    }
});

myGame.scenes.push(mapSideroom);