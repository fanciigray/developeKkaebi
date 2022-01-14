var mapFront = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function GamePlay() {
        Phaser.Scene.call(this, {key: '1000'});
    },

    preload: function() {
        // 맵 사이즈: 1666
        // 움직일 수 있는 범위: 

    },

    create: function() {
                
        this.frontbg = this.add.image(0, 0, 'front-1').setOrigin(0, 0);
        
        this.flip = this.add.image(912, 146, 'flip-btn').setDepth(100);
        this.flip.setInteractive().on('pointerdown', function() { 
            posBefore = player.x; sceneBefore = 1000;
            game.scene.stop('1000'); game.scene.start('2000'); 
        }, this);
        numberNow = this.add.image(912, 58, 'number').setDepth(100);
        numberCount = this.add.sprite(898, 77, 'count').setDepth(100);

        this.phone = this.add.image(1465, 570, 'f1-phone');
        JUNHA = this.add.sprite(1345, 433, 'k-junha'); JUNHA.visible = false;
        this.phone.setInteractive().on('pointerdown', function() {
            this.phone.visible = false;
            JUNHA.visible = true; 
            if (CheckMet.includes('JUNHA')) {
                this.BOOM_JUNHA = this.add.sprite(JUNHA.x, JUNHA.y, 'boom'); 
                this.BOOM_JUNHA.anims.play('boom', true); EFFECT_BOOM.play();
            }
            else {
                EFFECT_BOOM.play();
                game.scene.sleep('1000'); game.scene.start('metJunha');
            }
        }, this);
        JUNHA.setInteractive().on('pointerdown', function() {
            if (Collection.length == 9) {
                game.scene.stop('1000'); game.scene.start('call');
            } else {
                // 메인 퀘스트 힌트 애니메이션 추가
                this.talk = this.add.sprite(JUNHA.x + 100, JUNHA.y - 120, 'talk-junha');
                this.talk.anims.play('talk-j', true);
            }
        }, this);

        this.toIcecream = this.add.image(370, 390, 'u-arrow');
        this.toIcecream.setInteractive().on('pointerdown', function() { game.scene.stop('1000'); game.scene.start('4000'); }, this);
        this.toDisplay1 = this.add.image(630, 390, 'u-arrow');
        this.toDisplay1.setInteractive().on('pointerdown', function() { game.scene.stop('1000'); game.scene.start('5000'); }, this);
        this.toDisplay2 = this.add.image(1036, 390, 'u-arrow');
        this.toDisplay2.setInteractive().on('pointerdown', function() { game.scene.stop('1000'); game.scene.start('6000'); }, this);
        this.toDisplay3 = this.add.image(1194, 399, 't-arrow');
        this.toDisplay3.setInteractive().on('pointerdown', function() { game.scene.stop('1000'); game.scene.start('7000'); }, this);
        this.toSideroom = this.add.image(1560, 400, 'r-arrow');
        this.toSideroom.setInteractive().on('pointerdown', function() {  game.scene.stop('1000'); game.scene.start('3000'); }, this);

        player = this.add.sprite(830, 523, 'player');
        if (sceneBefore == 2000) { player.x = 1690 - posBefore; }
        else if (sceneBefore == 3000) { player.x = 1150; }
        else if (sceneBefore == 4000 || sceneBefore == 5000) { player.x = 500; }
        else if (sceneBefore == 6000 || sceneBefore == 7000) { player.x = 1100; }
        
        main = this.cameras.main; main.startFollow(player);
        main.setBounds(0, 0, this.frontbg.displayWidth, this.frontbg.displayHeight);

        this.gameConsole = this.add.image(285, 600, 'f1-gc');
        this.gameConsole.setInteractive().on('pointerdown', function() { LIKE_IT = true; }, this);
        
    },

    update: function() {

        playerMove(); numberCount.setFrame(Collection.length);
        stay(this.flip, 10, FRONT_BACK_WIDTH); stay(numberNow, 25, FRONT_BACK_WIDTH); stay(numberCount, 55, FRONT_BACK_WIDTH);
        
        if (player.x < 300) { player.x = 300; }
        else if (player.x > 1150) { player.x = 1150; }

        if (JUNHA.visible) { JUNHA.anims.play('junha-1', true); }

    }

})

var metJunha = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function GamePlay() {
        Phaser.Scene.call(this, {key: 'metJunha'});
    },
    create: function() {
        MET_JUNHA = this.add.image(480, 360, 'scene-junha'); 
        this.tweens.add({targets: MET_JUNHA, alpha: 1, duration: 3000});
        this.tweens.add({targets: MET_JUNHA, alpha: 0, ease: 'Cubic', delay: 3000});

        main = this.cameras.main; main.startFollow(player);
        main.setBounds(0, 0, MET_JUNHA.displayWidth, MET_JUNHA.displayHeight);

        CheckMet.push('JUNHA');
    },
    update: function() {
        if (MET_JUNHA.alpha == 0) { game.scene.stop('metJunha'); game.scene.wake('1000'); }
    }
});

myGame.scenes.push(metJunha);
myGame.scenes.push(mapFront);