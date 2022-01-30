var gameCallState = new Phaser.Class({
    
    Extends: Phaser.Scene,
    initialize:
    function gameJunha() {
        Phaser.Scene.call(this, {key: 'call'});
    },

    preload: function() {
        this.load.image('call-bg', 'assets/game-call/bg.png');
        this.load.image('call-reciever', 'assets/game-call/call.png');
        this.load.spritesheet('junha-buttons', 'assets/game-call/buttons.png', {frameWidth: 50, frameHeight: 50});
    },

    create: function() {

        bbip = this.sound.add('phone-bbip', { loop: false });
        call = this.sound.add('call', { loop: false });
        connect1541 = this.sound.add('effect-collectCallSound', { loop: false });

        this.add.image(480, 360, 'call-bg');
        this.toCall = [];
        
        this.phone_number1 = this.add.sprite(555, 414, 'junha-buttons', 0);
        this.phone_number1.setInteractive().on('pointerdown', function() {
            this.toCall.push('1'); bbip.play(); 
        }, this);
        this.phone_number2 = this.add.sprite(628, 414, 'junha-buttons', 1);
        this.phone_number2.setInteractive().on('pointerdown', function() {
            this.toCall.push('2'); bbip.play(); 
        }, this);
        this.phone_number3 = this.add.sprite(702, 414, 'junha-buttons', 2);
        this.phone_number3.setInteractive().on('pointerdown', function() {
            this.toCall.push('3'); bbip.play(); 
        }, this);
        this.phone_number4 = this.add.sprite(555, 472, 'junha-buttons', 3);
        this.phone_number4.setInteractive().on('pointerdown', function() {
            this.toCall.push('4'); bbip.play(); 
        }, this);
        this.phone_number5 = this.add.sprite(628, 472, 'junha-buttons', 4);
        this.phone_number5.setInteractive().on('pointerdown', function() {
            this.toCall.push('5'); bbip.play(); 
        }, this);
        this.phone_number6 = this.add.sprite(702, 472, 'junha-buttons', 5);
        this.phone_number6.setInteractive().on('pointerdown', function() {
            this.toCall.push('6'); bbip.play(); 
        }, this);
        this.phone_number7 = this.add.sprite(555, 531, 'junha-buttons', 6);
        this.phone_number7.setInteractive().on('pointerdown', function() {
            this.toCall.push('7'); bbip.play(); 
        }, this);
        this.phone_number8 = this.add.sprite(628, 531, 'junha-buttons', 7);
        this.phone_number8.setInteractive().on('pointerdown', function() {
            this.toCall.push('8'); bbip.play(); 
        }, this);
        this.phone_number9 = this.add.sprite(702, 531, 'junha-buttons', 8);
        this.phone_number9.setInteractive().on('pointerdown', function() {
            this.toCall.push('9'); bbip.play(); 
        }, this);
        this.phone_number_star = this.add.sprite(555, 589, 'junha-buttons', 9);
        this.phone_number_star.setInteractive().on('pointerdown', function() {
            this.toCall.push('*'); bbip.play(); 
        }, this);
        this.phone_number0 = this.add.sprite(628, 589, 'junha-buttons', 10);
        this.phone_number0.setInteractive().on('pointerdown', function() {
            this.toCall.push('0'); bbip.play(); 
        }, this);
        this.phone_number_shap = this.add.sprite(702, 589, 'junha-buttons', 11);
        this.phone_number_shap.setInteractive().on('pointerdown', function() {
            this.toCall.push('#'); bbip.play(); 
        }, this);

        this.reciever = this.add.image(627, 285, 'call-reciever');
        this.reciever.setInteractive().on('pointerdown', function() {
            if (this.numberText.text == '0163347288') {
                call.play(); BGM_MAP.stop(); 
                game.scene.stop('call'); game.scene.start('callMom');
            } else if (this.numberText.text == '112'){
                call.play(); BGM_MAP.stop(); 
                game.scene.stop('call'); game.scene.start('callCop');
            } else if (this.numberText.text == '1541') {
                connect1541.play();
            }
            else { this.toCall.length = 0; }
        }, this);


        this.numberText = this.add.text(430, 50, '', {fontFamily: 'joyfulStory', fontSize: 72, color: '#593C60'})

    }, 

    update: function() {

        this.numberText.setText(this.callNumber(this.toCall));
        if (this.numberText.text == '15410163347288#') {
            call.play(); BGM_MAP.stop();
            game.scene.stop('call'); game.scene.start('callCollectcall');
        } else {
            // BGM_MAP.resume();
        }

    },

    callNumber: function(arr) {
        let callNumber = [];
        for (element of arr) {
            callNumber += element.toString();
        }
        return callNumber;
    }

});

myGame.scenes.push(gameCallState);

var callMom = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function GamePlay() {
        Phaser.Scene.call(this, {key: 'callMom'});
    },
    create: function() {
        endMom = this.add.image(480, 360, 'end-mom'); endMom.alpha = 0;
        credit = this.add.text(600, 1500, 
            "기획\nTEAM ME.A\n뛰뛰, 밤톨, 용요\n\n\n그림/디자인\n배경/캐릭터/컷씬: 용요\n미니게임: 밤톨, 용요\nUI/UX 디자인: 밤톨, 뛰뛰\n\n\n음악\n배경음악\nhttp://pixabay.com/\nhttp://opengameart.org/\n\n효과음\nhttp://freesfx.co.uk/\nhttp://pixabay.com/\nhttp://opengameart.org/\n\n\n제작기간\n2020년 2월부터 2022년 1월까지\n\n\n",
            { fontFamily: 'joyfulStory', fontSize: 24}); 
        thx = this.add.text(600, 2300, "플레이해주셔서 감사합니다", {fontFamily: 'joyfulStory', fontSize: 24});
        credit.alpha = 0; thx.alpha = 0;
        this.time.addEvent({
            delay: 16000,
            callback: function() { 
                BGM_END.play();
                this.tweens.add({targets: endMom, alpha: 1, ease: 'Cubic', duration: 1000});
                this.tweens.add({targets: credit, alpha: 1, ease: 'Cubic', duration: 1000}); 
                this.tweens.add({targets: thx, alpha: 1, ease: 'Cubic', duration: 1000}); 
            },
            callbackScope: this,
            loop: false
        });
    },
    update: function() {
        this.time.addEvent({
            delay: 1000,
            callback: function() {
                credit.y -= 1; 
                if (thx.y != 360) { thx.y -= 1;}
                else { thx.y = 360; }
            },
            callbackScope: this,
            loop: false
        });
    }
});
myGame.scenes.push(callMom);

var callCop = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function GamePlay() {
        Phaser.Scene.call(this, {key: 'callCop'});
    },
    create: function() {
        endCop = this.add.image(480, 360, 'end-cop'); endCop.alpha = 0;
        credit = this.add.text(600, 1500, 
            "기획\nTEAM ME.A\n뛰뛰, 밤톨, 용요\n\n\n그림/디자인\n배경/캐릭터/컷씬: 용요\n미니게임: 밤톨, 용요\nUI/UX 디자인: 밤톨, 뛰뛰\n\n\n음악\n배경음악\nhttp://pixabay.com/\nhttp://opengameart.org/\n\n효과음\nhttp://freesfx.co.uk/\nhttp://pixabay.com/\nhttp://opengameart.org/\n\n\n제작기간\n2020년 2월부터 2022년 1월까지\n\n\n",
            { fontFamily: 'joyfulStory', fontSize: 24}); 
        thx = this.add.text(600, 2300, "플레이해주셔서 감사합니다", {fontFamily: 'joyfulStory', fontSize: 24});
        credit.alpha = 0; thx.alpha = 0;
        this.time.addEvent({
            delay: 16000,
            callback: function() { 
                BGM_END.play();
                this.tweens.add({targets: endCop, alpha: 1, ease: 'Cubic', duration: 1000}); 
                this.tweens.add({targets: credit, alpha: 1, ease: 'Cubic', duration: 1000}); 
                this.tweens.add({targets: thx, alpha: 1, ease: 'Cubic', duration: 1000}); 
            },
            callbackScope: this,
            loop: false
        });

    },
    update: function() {
        this.time.addEvent({
            delay: 1000,
            callback: function() {
                credit.y -= 1; 
                if (thx.y != 360) { thx.y -= 1;}
                else { thx.y = 360; }
            },
            callbackScope: this,
            loop: false
        });
    }
});
myGame.scenes.push(callCop);

var callCollectcall = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function GamePlay() {
        Phaser.Scene.call(this, {key: 'callCollectcall'});
    },
    create: function() {
        endCollectcall = this.add.image(480, 360, 'end-collectcall'); endCollectcall.alpha = 0;
        credit = this.add.text(600, 1500, 
            "기획\nTEAM ME.A\n뛰뛰, 밤톨, 용요\n\n\n그림/디자인\n배경/캐릭터/컷씬: 용요\n미니게임: 밤톨, 용요\nUI/UX 디자인: 밤톨, 뛰뛰\n\n\n음악\n배경음악\nhttp://pixabay.com/\nhttp://opengameart.org/\n\n효과음\nhttp://freesfx.co.uk/\nhttp://pixabay.com/\nhttp://opengameart.org/\n\n\n제작기간\n2020년 2월부터 2022년 1월까지\n\n\n",
            { fontFamily: 'joyfulStory', fontSize: 24}); 
        thx = this.add.text(600, 2300, "플레이해주셔서 감사합니다", {fontFamily: 'joyfulStory', fontSize: 24});
        credit.alpha = 0; thx.alpha = 0;
        this.time.addEvent({
            delay: 16000,
            callback: function() { 
                BGM_END.play();
                this.tweens.add({targets: endCollectcall, alpha: 1, ease: 'Cubic', duration: 1000}); 
                this.tweens.add({targets: credit, alpha: 1, ease: 'Cubic', duration: 1000}); 
                this.tweens.add({targets: thx, alpha: 1, ease: 'Cubic', duration: 1000}); 
            },
            callbackScope: this,
            loop: false
        });

    },
    update: function() {
        this.time.addEvent({
            delay: 1000,
            callback: function() {
                credit.y -= 1; 
                if (thx.y != 360) { thx.y -= 1;}
                else { thx.y = 360; }
            },
            callbackScope: this,
            loop: false
        });
    }
});
myGame.scenes.push(callCollectcall);