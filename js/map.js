var mapPlayState = new Phaser.Class({
    // Define scene
    Extends: Phaser.Scene,
    initialize:
    function GamePlay(){
        Phaser.Scene.call(this, {key: 'map'});
    },
  
    preload: function() {
        // Preload images for this state
    },

    create: function() {
        // Create objects
        console.log("GamePlay");

        this.btnCollect = this.physics.add.group();

        // 기본 요소 ( 플레이어, 카메라, ui 버튼, 효과)
        player = this.add.sprite(830, 523, 'player'); player.setDepth(1); 
        main = this.cameras.main; main.startFollow(player);
        
        flip = this.add.image(912, 146, 'flip-btn').setDepth(300);
        flip.setInteractive().on('pointerdown', function() {
            if (STATE == 1000) { STATE = 2000; } else if (STATE == 2000) { STATE = 1000; } else if (STATE == 8000) { STATE = 9000; } else if (STATE == 9000) { STATE = 8000; }
        }, this);
        numberNow = this.add.image(912, 58, 'number').setDepth(300);
        numberCount = this.add.sprite(898, 77, 'count').setDepth(300);


        // 프론트 1
        front1BG = this.add.image(0, 0, 'front-1').setOrigin(0, 0); front1BG.setDepth(0);
        main.setBounds(0, 0, front1BG.displayWidth, front1BG.displayHeight); 

        f1gc = this.add.image(285, 600, 'f1-gc'); f1gc.setDepth(2);
        f1phone = this.add.image(1465, 570, 'f1-phone');
        boomJunha = this.add.sprite(0, 0, 'boom'); boomJunha.visible = false;
        junha = this.add.sprite(1345, 433, 'k-junha'); junha.visible = false;
        fF1toI = this.add.image(370, 390, 'u-arrow');
        fF1toS = this.add.image(1560, 400, 'r-arrow');
        fF1toST1 = this.add.image(630, 390, 'u-arrow');
        fF1toST2 = this.add.image(1036, 390, 'u-arrow');
        fF1toST3 = this.add.image(1194, 399, 't-arrow');
        f1phone.setInteractive().on('pointerdown', function() {
            f1phone.visible = false; junha.visible = true; 
            boomJunha.setPosition(junha.x, junha.y); boomJunha.visible = true; boomJunha.anims.play('boom', true);
            sceneJunha = this.add.image(player.x, 360, 'scene-junha').setDepth(300);
            this.tweens.add({targets: sceneJunha, alpha: 1, duration: 2000});
            this.tweens.add({targets: sceneJunha, alpha: 0, ease: 'Cubic', duration: 1000, delay: 2000});
        }, this);
        fF1toS.setInteractive().on('pointerdown', function() { 
            STATE = 3000; 
            sideBG = this.add.image(0, 0, 'sideroom').setOrigin(0, 0); sideBG.setDepth(100);
            main.setBounds(0, 0, sideBG.displayWidth, sideBG.displayHeight);
            fStoF1.visible = true; player.setPosition(850, 523); player.setDepth(102);
            sBlanket.visible = true; sTv.visible = true; sRMC.visible = true;
        }, this);
        fF1toI.setInteractive().on('pointerdown', function() {
            STATE = 4000; icecreamBG.visible = true; player.setDepth(102); player.setPosition(300, 506); 
            iCcandy.visible = true; fItoF1.visible = true; fItoB1.visible = true;
            main.setBounds(0, 0, icecreamBG.displayWidth, icecreamBG.displayHeight);
        }, this);
        fF1toST1.setInteractive().on('pointerdown', function() {
            STATE = 5000; st1BG.visible = true; player.setDepth(102).setPosition(300, 506);
            st1bag.visible = true; fSt1toF1.visible = true; fSt1toB1.visible = true;
            main.setBounds(0, 0, st1BG.displayWidth, st1BG.displayHeight);
        }, this);
        fF1toST2.setInteractive().on('pointerdown', function() {
            STATE = 6000; st2BG.visible = true; player.setDepth(102).setPosition(300, 506);
            st2phonebtn.visible = true; fSt2toF1.visible = true; fSt2toB1.visible = true;
            main.setBounds(0, 0, st2BG.displayWidth, st2BG.displayHeight);
        }, this);
        fF1toST3.setInteractive().on('pointerdown', function(){
            STATE = 7000; st3BG.visible = true; player.setDepth(102); player.setPosition(300, 500);
            fSt3toF1.visible = true; fSt3toB1.visible = true; st3dressup.visible = true; st3goldfish.visible = true;
            main.setBounds(0, 0, st3BG.displayWidth, st3BG.displayHeight);
        }, this);
        junha.setInteractive().on('pointerdown', function() {
            if (Collection.length === 9) { 
                game.scene.start('call'); 
            }
        }, this);


        // 프론트 2
        front2BG = this.add.image(0, 0, 'front-2').setOrigin(0, 0); front2BG.setDepth(100); front2BG.visible = false;
        f2fire = this.add.image(831, 615, 'f2-fire').setDepth(103); f2fire.visible = false;
        f2gc = this.add.image(1383, 454, 'f2-gc').setDepth(101); f2gc.visible = false;
        f2wood = this.add.image(1504, 605, 'f2-woods').setDepth(102); f2wood.visible = false;
        zkp = this.add.sprite(1350, 480, 'zkp').setDepth(101); zkp.visible = false;
        boomzkp = this.add.sprite(0, 0, 'boom'); boomzkp.visible = false;
        f2gc.setInteractive().on('pointerdown', function() {
            zkp.visible = true;
            boomzkp.setPosition(zkp.x, zkp.y).setDepth(101); boomzkp.visible = true; boomzkp.anims.play('boom', true);
        }, this);
        zkp.setInteractive().on('pointerdown', function() { game.scene.start('zkp'); }, this);
        

        // 작은방
        var sBlanket = this.add.image(179, 620, 'side-blanket').setDepth(102); sBlanket.visible = false;
        var sTv = this.add.image(835, 432, 'side-tv').setDepth(101); sTv.visible = false;
        var sRMC = this.add.image(1062, 659, 'side-rmc').setDepth(101); sRMC.visible = false;
        var fStoF1 = this.add.image(863, 680, 'd-arrow'); fStoF1.setDepth(102); fStoF1.visible = false;
        boomLevi = this.add.sprite(0, 0, 'boom'); boomLevi.visible = false;
        levi = this.add.sprite(810, 442, 'levi').setDepth(101); levi.visible = false;
        boomRimo = this.add.sprite(1050, 546, 'boom').setDepth(101); boomRimo.visible = false;
        rimo = this.add.sprite(1050, 546, 'rimo').setDepth(103); rimo.visible = false;
        sTv.setInteractive().on('pointerdown', function() {
            levi.visible = true; sTv.visible = false;
            boomLevi.setPosition(levi.x, levi.y).setDepth(101); boomLevi.visible = true; boomLevi.anims.play('boom', true);
        }, this)
        fStoF1.setInteractive().on('pointerdown', function() {
            STATE = 1000;
            main.setBounds(0, 0, front1BG.displayWidth, front1BG.displayHeight);
            sideBG.visible = false; fStoF1.visible = false;
            player.setPosition(1000, 523); player.setDepth(1);
            sBlanket.visible = false; sTv.visible = false; sRMC.visible = false; rimo.visible = false;
        }, this);
        sRMC.setInteractive().on('pointerdown', function() {
            if (invenArr.includes('b1-btr')) {
                rimo.visible = true; sRMC.visible = false;
                boomRimo.visible = true; boomRimo.anims.play('boom', true);
            }
        }, this);
        levi.setInteractive().on('pointerdown', function() { if (rimo.visible) { game.scene.start('levi'); } }, this);

        
        // 아이스크림 가판대
        icecreamBG = this.add.image(0, 0, 'icecream').setOrigin(0, 0); icecreamBG.setDepth(100); icecreamBG.visible = false;
        iCcandy = this.add.image(390, 682, 'i-candy').setDepth(101); iCcandy.visible = false;
        this.iBTN = this.physics.add.image(929, 287, 'i-btn').setDepth(101); this.iBTN.visible = false; 
        fItoF1 = this.add.image(63, 386, 'l-arrow').setDepth(101); fItoF1.visible = false;
        fItoB1 = this.add.image(1217, 386, 'r-arrow').setDepth(101); fItoB1.visible = false;
        boombyuri = this.add.sprite(338, 534, 'boom').setDepth(103); boombyuri.visible = false;
        byuri = this.add.sprite(338, 534, 'byuri').setDepth(103); byuri.visible = false;
        byuri.setInteractive().on('pointerdown', function() { game.scene.start('byuri'); }, this);
        iCcandy.setInteractive().on('pointerdown', function() {
            byuri.visible = true; boombyuri.visible = true; boombyuri.anims.play('boom', true);
        }, this);
        fItoF1.setInteractive().on('pointerdown', function() {
            STATE = 1000; icecreamBG.visible = false; iCcandy.visible = false; fItoF1.visible = false; fItoB1.visible = false;
            main.setBounds(0, 0, front1BG.displayWidth, front1BG.displayHeight);
        }, this);
        fItoB1.setInteractive().on('pointerdown', function() {
            STATE = 8000; back1BG.visible = true;  iCcandy.visible = false; fItoB1.visible = false; fItoF1.visible = false; player.x = 380;
            b1milk.visible = true; b1soda.visible = true; //b1btr.visible = true;
            main.setBounds(0, 0, back1BG.displayWidth, back1BG.displayHeight);
        }, this);
        this.iBTN.setInteractive().on('pointerdown', function() {
            Collection.push('number-5'); console.log(Collection);
            this.iBTN.disableBody(true, true);
        }, this)


        // 아이스크림 옆 매대 (st1)
        st1BG = this.add.image(0, 0, 'st-1').setOrigin(0, 0).setDepth(100); st1BG.visible = false;
        st1bag = this.add.image(177, 668, 'st1-bag').setDepth(103); st1bag.visible = false;
        fSt1toF1 = this.add.image(63, 386, 'l-arrow').setDepth(101); fSt1toF1.visible = false;
        fSt1toB1 = this.add.image(1217, 386, 'r-arrow').setDepth(101); fSt1toB1.visible = false;
        this.dungsil = this.add.sprite(200, 300, 'dd').setDepth(101); this.dungsil.visible = false;
        this.boomDungsil = this.add.sprite(this.dungsil.x, this.dungsil.y, 'boom').setDepth(100); this.boomDungsil.visible = false;
        fSt1toF1.setInteractive().on('pointerdown', function() {
            STATE = 1000; st1BG.visible = false; player.setPosition(500, 533); 
            main.setBounds(0, 0, front1BG.displayWidth, front1BG.displayHeight);
            fSt1toF1.visible = false; fSt1toB1.visible = false; st1bag.visible = false; this.dungsil.visible = false;
        }, this);
        fSt1toB1.setInteractive().on('pointerdown', function() {
            STATE = 8000; back1BG.visible = true; player.setPosition(380, 506);
            main.setBounds(0, 0, back1BG.displayWidth, back1BG.displayHeight); 
            fSt1toF1.visible = false; fSt1toB1.visible = false; st1bag.visible = false; this.dungsil.visible = false;
            b1milk.visible = true; b1soda.visible = true;
        }, this);
        st1bag.setInteractive().on('pointerdown', function() {
            st1bag.visible = false; this.dungsil.visible = true; this.boomDungsil.visible = true; this.boomDungsil.anims.play('boom', true);
        }, this);
        // this.dungsil.setInteractive().on('pointerdonw', function() {  }, this);



        // 나무 가판대 옆 매대 (st2)
        st2BG = this.add.image(0, 0, 'st-2').setOrigin(0, 0).setDepth(100); st2BG.visible = false;
        st2phonebtn = this.physics.add.image(1112, 430, 'st2-btn').setDepth(101); st2phonebtn.visible = false; 
        fSt2toF1 = this.add.image(63, 386, 'l-arrow').setDepth(101); fSt2toF1.visible = false; 
        fSt2toB1 = this.add.image(1217, 386, 'r-arrow').setDepth(101); fSt2toB1.visible = false;
        fSt2toF1.setInteractive().on('pointerdown', function() {
            STATE = 1000; st2BG.visible = false; player.setPosition(1350, 533);  
            main.setBounds(0, 0, front1BG.displayWidth, front1BG.displayHeight);
            fSt2toF1.visible = false; fSt2toB1.visible = false; st2phonebtn.visible = false;
        }, this);
        fSt2toB1.setInteractive().on('pointerdown', function() {
            STATE = 8000; back1BG.visible = true; player.setPosition(1300, 506);
            main.setBounds(0, 0, back1BG.displayWidth, back1BG.displayHeight);
            fSt2toF1.visible = false; fSt2toB1.visible = false; st2phonebtn.visible = false;
            b1milk.visible = true; b1soda.visible = true;
        }, this);
        st2phonebtn.setInteractive().on('pointerdown', function() {
            Collection.push('number-3'); console.log(Collection);
            st2phonebtn.disableBody(true, true);
        }, this);


        // 나무 가판대 (st3)
        st3BG = this.add.image(0, 0, 'st-3').setOrigin(0, 0).setDepth(100); st3BG.visible = false;
        st3dressup = this.add.image(884, 322, 'st3-dressup').setDepth(101); st3dressup.visible = false;
        st3goldfish = this.add.image(1151, 216, 'st3-goldfish').setDepth(101); st3goldfish.visible = false;
        this.st3BTN = this.physics.add.image(326, 365, 'st3-btn').setDepth(101); this.st3BTN.visible = false; 
        fSt3toF1 = this.add.image(63, 386, 'l-arrow').setDepth(101); fSt3toF1.visible = false;
        fSt3toB1 = this.add.image(1217, 386, 'r-arrow').setDepth(101); fSt3toB1.visible = false;
        this.joy = this.add.sprite(896, 503, 'joy').setDepth(103); this.joy.visible = false;
        this.boomjoy = this.add.sprite(this.joy.x, this.joy.y, 'boom').setDepth(100); this.boomjoy.visible = false;
        fSt3toF1.setInteractive().on('pointerdown', function() {
            STATE = 1000; player.setPosition(1350, 533); st3BG.visible = false;
            fSt3toF1.visible = false; fSt3toB1.visible = false; st3dressup.visible = false; st3goldfish.visible = false;
            main.setBounds(0, 0, front1BG.displayWidth, front1BG.displayHeight);
        }, this);
        fSt3toB1.setInteractive().on('pointerdown', function() {
            STATE = 8000; back1BG.visible = true; main.setBounds(0, 0, back1BG.displayWidth, back1BG.displayHeight); player.setPosition(1300, 506);
            st3dressup.visible = false; st3goldfish.visible = false; fSt3toF1.visible = false; fSt3toB1.visible = false; 
            b1milk.visible = true; b1soda.visible = true; 
        }, this);
        st3goldfish.setInteractive().on('pointerdown', function() {  }, this);
        st3dressup.setInteractive().on('pointerdown', function() { 
            st3dressup.visible = false; this.boomjoy.visible = true; this.joy.visible = true; this.boomjoy.anims.play('boom', true);
        }, this);
        this.joy.setInteractive().on('pointerdown', function() { game.scene.start('joy'); }, this);
        st3goldfish.setInteractive().on('pointerdown', function() {  }, this);
        this.st3BTN.setInteractive().on('pointerdown', function() {
            Collection.push('number-1'); console.log(Collection);
            this.st3BTN.disableBody(true, true); 
        }, this)



        // 백 1 
        back1BG = this.add.image(0, 0, 'back-1').setOrigin(0, 0); back1BG.setDepth(100); back1BG.visible = false;
        b1soda = this.add.image(738, 689, 'b1-soda').setDepth(101); b1soda.visible = false;
        b1milk = this.add.image(86, 670, 'b1-milk').setDepth(101); b1milk.visible = false;
        b1btr = this.add.image(1017, 59, 'b1-btr').setDepth(101); b1btr.visible = false;
        wuwu = this.add.sprite(146, 380, 'wuwu').setDepth(103); wuwu.visible = false;
        boomWuwu = this.add.sprite(wuwu.x, wuwu.y, 'boom').setDepth(100); boomWuwu.visible = false;
        this.chilsung = this.add.sprite(732, 397, 'cider').setDepth(103); this.chilsung.visible = false;
        this.boomChilsung = this.add.sprite(this.chilsung.x, this.chilsung.y, 'boom').setDepth(100); this.boomChilsung.visible = false;
        b1btr.setInteractive().on('pointerdown', function() {
            b1btr.visible = false;
            invenArr.push('b1-btr'); console.log(invenArr);
        }, this);
        b1milk.setInteractive().on('pointerdown', function() {
            b1milk.visible = false; boomWuwu.visible = true; wuwu.visible = true; boomWuwu.anims.play('boom', true); 
        }, this);
        b1soda.setInteractive().on('pointerdown', function() {
            b1soda.visible = false; this.chilsung.visible = true; this.boomChilsung.visible = true; this.boomChilsung.anims.play('boom', true);    
        }, this);
        wuwu.setInteractive().on('pointerdown', function() { game.scene.start('wuwu'); }, this);
        this.chilsung.setInteractive().on('pointerdown', function() { game.scene.start('cider'); }, this);
        


        // 백 2
        back2BG = this.add.image(0, 0, 'back-2').setOrigin(0, 0); back2BG.setDepth(100); back2BG.visible = false;
        fB2toST3 = this.add.image(350, 550, 'u-arrow').setDepth(101); fB2toST3.visible = false;
        fB2toST2 = this.add.image(600, 550, 'u-arrow').setDepth(101); fB2toST2.visible = false;
        fB2toST1 = this.add.image(1070, 550, 'u-arrow').setDepth(101); fB2toST1.visible = false;
        fB2toI = this.add.image(1320, 550, 'u-arrow').setDepth(101); fB2toI.visible = false;
        fB2toI.setInteractive().on('pointerdown', function() {
            STATE = 4000; player.x = 1100; 
            icecreamBG.visible = true; st1BG.visible = false; st2BG.visible = false; st3BG.visible = false;
            fItoB1.visible = true; fItoF1.visible = true; 
            back2BG.visible = false; fB2toI.visible = false; fB2toST3.visible = false; fB2toST1.visible = false; fB2toST2.visible = false;
            main.setBounds(0, 0, icecreamBG.displayWidth, icecreamBG.displayHeight);
        }, this);
        fB2toST1.setInteractive().on('pointerdown', function() {
            STATE = 5000; player.setPosition(1100, 506); 
            icecreamBG.visible = false; st1BG.visible = true; st2BG.visible = false; st3BG.visible = false;
            st1bag.visible = true; fSt1toF1.visible = true; fSt1toB1.visible = true;
            back2BG.visible = false; fB2toI.visible = false; fB2toST3.visible = false; fB2toST1.visible = false; fB2toST2.visible = false;
            main.setBounds(0, 0, st1BG.displayWidth, st1BG.displayHeight);
        }, this);
        fB2toST2.setInteractive().on('pointerdown', function() {
            STATE = 6000; player.setPosition(1100, 506); 
            icecreamBG.visible = false; st1BG.visible = true; st2BG.visible = true; st3BG.visible = false; console.log(st2BG.visible);
            st2phonebtn.visible = true; fSt2toF1.visible = true; fSt2toB1.visible = true;
            fB2toI.visible = false; fB2toST3.visible = false; fB2toST1.visible = false; fB2toST2.visible = false;
            main.setBounds(0, 0, st2BG.displayWidth, st2BG.displayHeight);
        }, this);
        fB2toST3.setInteractive().on('pointerdown', function() {
            STATE = 7000; player.setPosition(1000, 506); //st3BG.visible = true;
            icecreamBG.visible = false; st1BG.visible = false; st2BG.visible = false; st3BG.visible = true;
            fSt3toF1.visible = true; fSt3toB1.visible = true; st3dressup.visible = true; st3goldfish.visible = true;
            back2BG.visible = false; fB2toI.visible = false; fB2toST3.visible = false; fB2toST1.visible = false; fB2toST2.visible = false;
            main.setBounds(0, 0, st3BG.displayWidth, st3BG.displayHeight);
        }, this);


        // 키보드 인풋 받기
        moveKeys = this.input.keyboard.addKeys('LEFT, RIGHT');


    },

    update: function() {
        // Update objects & variables
        // console.log(STATE);

        this.stay(flip, 10, STATE); this.stay(numberNow, 25, STATE); this.stay(numberCount, 55, STATE);
        this.playerMove(); // 플레이어 움직이기
        numberCount.setFrame(Collection.length);


        // 맵 이동하는 거 그리기
        switch (STATE) {

            case 2000:
                front2BG.visible = true; player.setDepth(102); flip.setDepth(102); flip.visible = true;
                f2fire.visible = true; f2gc.visible = true; f2wood.visible = true;
                fF1toS.visible = false; f1phone.disableInteractive(); fF1toST2.disableInteractive();
                if (player.x < 540) { player.x = 540; } else if (player.x > 1390) { player.x = 1390; };
            break;

            case 3000: 
                flip.visible = false; fF1toST2.disableInteractive();
                if (player.x < 140) { player.x = 140; } else if (player.x > 1120) { player.x = 1120; };
            break;

            case 4000:
                player.y = 506; flip.visible = false;  fF1toST2.disableInteractive();
                if (player.x < 180) { player.x = 180; } else if (player.x > 1100) { player.x = 1100; };
            break;

            case 5000:
                flip.visible = false; fF1toST2.disableInteractive();
                if (player.x < 180) { player.x = 180; } else if (player.x > 1100) { player.x = 1100; };
            break;

            case 6000:
                flip.visible = false; 
                if (player.x < 180) { player.x = 180; } else if (player.x > 1100) { player.x = 1100; };
            break;

            case 7000:
                flip.visible = false; fF1toST2.disableInteractive();
                if (player.x < 180) { player.x = 180; } else if (player.x > 1100) { player.x = 1100; };
            break;

            case 8000:
                back2BG.visible = false; back1BG.visible = true; flip.setDepth(102); flip.visible = true;
                fB2toST3.visible = false; fB2toST1.visible = false; fB2toST2.visible = false; fB2toI.visible = false;
                if (!invenArr.includes('b1-btr')) { b1btr.visible = true; } else { b1btr.visible = false; }
                f1phone.disableInteractive(); fF1toST2.disableInteractive();
                if (player.x < 160) { player.x = 160; } else if (player.x > 1560) { player.x = 1560; }
            break;

            case 9000:
                back2BG.visible = true; flip.setDepth(102); player.y = 540; flip.visible = true; player.setDepth(102);
                fB2toST3.visible = true; fB2toST1.visible = true; fB2toST2.visible = true; fB2toI.visible = true;
                b1milk.visible = false; b1soda.visible = false; back1BG.visible = false; wuwu.visible = false; this.chilsung.visible = false; f1phone.disableInteractive(); fF1toST2.disableInteractive();
                if (player.x < 160) { player.x = 160; } else if (player.x > 1560) { player.x = 1560; }
            break;

            default: 
                front2BG.visible = false; player.setDepth(1); flip.setDepth(1); flip.visible = true;
                fF1toS.visible = true; f1phone.setInteractive();
                f2fire.visible = false; f2gc.visible = false; f2wood.visible = false; levi.visible = false;
                if (player.x < 300) { player.x = 300; } else if (player.x > 1150) { player.x = 1150; };
        };


        // 캐릭터 조절
        if (STATE == 1000) {
            if (junha.visible) { junha.anims.play('junha-1', true); f1phone.visible = false; }
        };

        if (STATE == 2000) {
            if (zkp.visible) { zkp.anims.play('zkp-1', true); f2gc.visible = false; }
        } else { zkp.visible = false; };

        if (STATE == 3000) {
            if (levi.visible) { 
                if (rimo.visible) { levi.anims.play('levi-3', true); }
                else  { levi.anims.play('levi-1', true);  }
            } 
            if (rimo.visible) { rimo.anims.play('rimo-1', true); }
        };

        if (STATE == 4000) {
            if (byuri.visible) { byuri.anims.play('byuri-1', true); iCcandy.visible = false; }
            else { iCcandy.visible = true; }
            if (!Collection.includes('number-5')) { this.iBTN.visible = true }
        } else { byuri.visible = false; iCcandy.visible = false; this.iBTN.visible = false; }

        if (STATE == 5000) {
            if (this.dungsil.visible) { this.dungsil.anims.play('dd-1', true); }
        } else { this.dungsil.visible = false; }

        if (STATE == 6000) {
            if (!Collection.includes('number-3')) { st2phonebtn.visible = true; }
        } else { st2phonebtn.visible = false; }

        if (STATE === 7000) {
            if (this.joy.visible) { this.joy.anims.play('joy-1', true); }
            if (!Collection.includes('number-1')) { this.st3BTN.visible = true; }
        } else { this.joy.visible = false; this.st3BTN.visible = false; }

        if (STATE == 8000) {
            if (wuwu.visible) { wuwu.anims.play('wuwu-1', true); }
            if (this.chilsung.visible) { this.chilsung.play('cider-1', true); }
            if (!invenArr.includes('b1-btr')) { b1btr.visible = true; } else { b1btr.visible = false; }
        } else { b1btr.visible = false; }

        
    },

    stay: function(sth, gap, STATE) {
        var mapsize, start, end;

        sth.x = player.x + (480 - ((sth.width / 2) + gap));
    
        switch (STATE) {
            case 1000: mapsize = 1666; start = 300; end = 1150; break; case 2000: mapsize = 1666; break; case 8000: mapsize = 1666; break; case 9000: mapsize = 1666; break;
            case 3000: mapsize = 1280; break; case 4000: mapsize = 1280; break; case 5000: mapsize = 1280; break; case 6000: mapsize = 1280; break; case 7000: mapsize = 1280; break;
    
            default: mapsize = 1666;
        };
    
        var standardStart = 960 - ( sth.width / 2 ) - gap; 
        var standardEnd = mapsize - ( sth.width / 2 ) - gap;
    
        if (sth.x <= standardStart) { sth.x = standardStart; }
        else if (sth.x >= standardEnd) { sth.x = standardEnd; }
        else {
            if (moveKeys.RIGHT.isDown) { sth.x += velocity; }
            else if (moveKeys.LEFT.isDown) { sth.x -= velocity; }
        }
    },

    playerMove: function() {
        if (moveKeys.RIGHT.isDown) { 
            player.anims.play('right', true); 
            player.x += velocity;
        }
        else if (moveKeys.LEFT.isDown) { 
            player.anims.play('left', true); 
            player.x -= velocity; 
        }
        else { player.anims.play('standing', true); }
    }

});

var player, main, flip;
var moveKeys;

var velocity = 5;
var FLIP = false;
var STATE = 1000;

// Add scene to list of scenes
myGame.scenes.push(mapPlayState);