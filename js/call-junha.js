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

        this.load.image('end-mom', 'assets/cuts/1.png');
    },

    create: function() {

        this.add.image(480, 360, 'call-bg');
        this.toCall = [];
        
        this.phone_number1 = this.add.sprite(555, 414, 'junha-buttons', 0);
        this.phone_number1.setInteractive().on('pointerdown', function() {
            this.toCall.push('1');
        }, this);
        this.phone_number2 = this.add.sprite(628, 414, 'junha-buttons', 1);
        this.phone_number2.setInteractive().on('pointerdown', function() {
            this.toCall.push('2'); 
        }, this);
        this.phone_number3 = this.add.sprite(702, 414, 'junha-buttons', 2);
        this.phone_number3.setInteractive().on('pointerdown', function() {
            this.toCall.push('3'); 
        }, this);
        this.phone_number4 = this.add.sprite(555, 472, 'junha-buttons', 3);
        this.phone_number4.setInteractive().on('pointerdown', function() {
            this.toCall.push('4'); 
        }, this);
        this.phone_number5 = this.add.sprite(628, 472, 'junha-buttons', 4);
        this.phone_number5.setInteractive().on('pointerdown', function() {
            this.toCall.push('5'); 
        }, this);
        this.phone_number6 = this.add.sprite(702, 472, 'junha-buttons', 5);
        this.phone_number6.setInteractive().on('pointerdown', function() {
            this.toCall.push('6'); 
        }, this);
        this.phone_number7 = this.add.sprite(555, 531, 'junha-buttons', 6);
        this.phone_number7.setInteractive().on('pointerdown', function() {
            this.toCall.push('7'); 
        }, this);
        this.phone_number8 = this.add.sprite(628, 531, 'junha-buttons', 7);
        this.phone_number8.setInteractive().on('pointerdown', function() {
            this.toCall.push('8'); 
        }, this);
        this.phone_number9 = this.add.sprite(702, 531, 'junha-buttons', 8);
        this.phone_number9.setInteractive().on('pointerdown', function() {
            this.toCall.push('9'); 
        }, this);
        this.phone_number_star = this.add.sprite(555, 589, 'junha-buttons', 9);
        this.phone_number_star.setInteractive().on('pointerdown', function() {
            this.toCall.push('*'); 
        }, this);
        this.phone_number0 = this.add.sprite(628, 589, 'junha-buttons', 10);
        this.phone_number0.setInteractive().on('pointerdown', function() {
            this.toCall.push('0'); 
        }, this);
        this.phone_number_shap = this.add.sprite(702, 589, 'junha-buttons', 11);
        this.phone_number_shap.setInteractive().on('pointerdown', function() {
            this.toCall.push('#'); 
        }, this);

        this.reciever = this.add.image(627, 285, 'call-reciever');
        this.reciever.setInteractive().on('pointerdown', function() {
            if (this.numberText.text == '0163347288') {
                endMom = this.add.image(480, 360, 'end-mom');
                // this.tweens.add({targets: endMom, alpha: 1, ease: 'Cubic', duration: 10000});
            } else { this.toCall.length = 0; }
        }, this);


        this.numberText = this.add.text(430, 50, '', {fontFamily: 'Arial', fontSize: 72, color: '#593C60'})

        

    }, 

    update: function() {

        this.numberText.setText(this.callNumber(this.toCall));

    },

    callNumber: function(arr) {

        let callNumber = [];

        for (element of arr) {
            callNumber += element.toString();
        }
        // console.log(callNumber);

        return callNumber;
    }

});

myGame.scenes.push(gameCallState);