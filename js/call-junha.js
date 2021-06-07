var gameCallState = new Phaser.Class({
    
    Extends: Phaser.Scene,
    initialize:
    function gameJunha() {
        Phaser.Scene.call(this, {key: 'call'});
    },

    preload: function() {
        this.load.image('call-bg', 'assets/game-call/bg.png');
        this.load.image('call-reciever', 'assets/game-call/call.png');
        this.load.image('call-buttons', 'assets/game-call/buttons.png', {frameWidth: 49, frameHeight: 50});
    },

    create: function() {

        this.add.image(480, 360, 'call-bg');
        this.toCall = [];
        
        this.reciever = this.add.image(627, 285, 'call-reciever');
        
        this.phone_number1 = this.add.sprite(555, 414, 'call-buttons', 0);
        this.phone_number2 = this.add.sprite(628, 414, 'call-buttons', 1);
        this.phone_number3 = this.add.sprite(702, 414, 'call-buttons', 2);
        this.phone_number4 = this.add.sprite(555, 472, 'call-buttons', 3);
        this.phone_number5 = this.add.sprite(628, 472, 'call-buttons', 4);
        this.phone_number6 = this.add.sprite(702, 472, 'call-buttons', 5);
        this.phone_number7 = this.add.sprite(555, 531, 'call-buttons', 6);
        this.phone_number8 = this.add.sprite(628, 531, 'call-buttons', 7);
        this.phone_number9 = this.add.sprite(702, 531, 'call-buttons', 8);
        this.phone_number_star = this.add.sprite(555, 589, 'call-buttons', 9);
        this.phone_number0 = this.add.sprite(628, 589, 'call-buttons', 10);
        this.phone_number_shap = this.add.sprite(702, 589, 'call-buttons', 11);

    }, 

    update: function() {

    }

});

myGame.scenes.push(gameCallState);