var mapIcecream = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function GamePlay() {
        Phaser.Scene.call(this, {key: '4000'});
    },

    preload: function() {

    },

    create: function() {

        this.IcecreamBg = this.add.image(0, 0, 'icecream').setOrigin(0, 0);

        numberNow = this.add.image(912, 58, 'number').setDepth(100);
        numberCount = this.add.sprite(898, 77, 'count').setDepth(100);

        this.candy = this.add.image(390, 682, 'i-candy');
        this.candy.setInteractive().on('pointerdown', function() {
            if (CheckMet.includes('JUNHA')) {
                this.candy.visible = false;
                BYURI.visible = true;
                this.BOOM_BYURI = this.add.sprite(BYURI.x, BYURI.y, 'boom'); 
                this.BOOM_BYURI.anims.play('boom', true); EFFECT_BOOM.play();
                this.TALK_BYURI = this.add.sprite(BYURI.x + 170, BYURI.y - 180, 'talk-byuri');
                this.TALK_BYURI.anims.play('talk-b', true);
            } else {
                LIKE_IT = true;
            }
        }, this);
        this.btn_5_inicecream = this.physics.add.image(929, 287, 'i-btn');
        if (Collection.includes('number-5')) { this.btn_5_inicecream.disableBody(true, true); }
        this.btn_5_inicecream.setInteractive().on('pointerdown', function() {
            if (CheckMet.includes('JUNHA')) {
                Collection.push('number-5'); this.btn_5_inicecream.disableBody(true, true);
                EFFECT_GETITEM.play();
            }
        }, this);

        BYURI = this.add.sprite(338, 500, 'byuri'); BYURI.visible = false;
        BYURI.setInteractive().on('pointerdown', function() { 
            // if (!Collection.includes('byuri')) {
                BGM_MAP.pause(); BGM_BYURI.play(); EFFECT_START.play();
                game.scene.sleep('4000'); game.scene.start('byuri'); 
            // }
        }, this);

        player = this.add.sprite(200, 523, 'player');
        if (sceneBefore == 9000) { player.x = 1100; }
        else { player.x = 200; }
        main = this.cameras.main; main.startFollow(player);
        main.setBounds(0, 0, this.IcecreamBg.displayWidth, this.IcecreamBg.displayHeight);

        this.toFront = this.add.image(63, 386, 'l-arrow');
        this.toFront.setInteractive().on('pointerdown', function() { 
            sceneBefore = 4000; 
            game.scene.stop('4000'); game.scene.start('1000'); 
        }, this);
        this.toBack = this.add.image(1217, 386, 'r-arrow');
        this.toBack.setInteractive().on('pointerdown', function() { 
            sceneBefore = 4000; 
            game.scene.stop('4000'); game.scene.start('8000'); 
        }, this);

    },

    update: function() {

        playerMove(); numberCount.setFrame(Collection.length);
        stay(numberNow, 25, ECT_WIDTH); stay(numberCount, 55, ECT_WIDTH);

        if (player.x < 180) { player.x = 180; }
        else if (player.x > 1100) { player.x = 1100; }
    
        if (BYURI.visible) { 
            if (!Collection.includes('byuri')) { BYURI.anims.play('byuri-2', true); }
            else { BYURI.anims.play('byuri-1', true); }
        }
    }
});

myGame.scenes.push(mapIcecream);