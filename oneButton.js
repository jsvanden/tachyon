// JavaScript source code
function twoButtons() {
    var buttonTime = 0;
    var clock;
    var cap;
    var script = this;
    var button;
    var player;
    var isOpen = false;
    var opening = 0;
    var drainSpeed = 1.15;
    var tierEffect = 3;

    this.start = function () {
        player = Level_1.find("Main Character");
        clock = player.getComponent("movement").tier;
        cap = player.getComponent("movement").tierCap;
        button = this.parent.getComponent("button").getComponent("body"); 
        
		button.onTriggerEnter = function () {
            button.parent.getComponent("sprite").image.src = 'resources/images/buttonDown.png';
            buttonTime = 60 * cap;
            this.openDoor();
			console.log("on button");
		}
    }

    this.update = function () {
        clock = player.getComponent("movement").tier;
        cap = player.getComponent("movement").tierCap;


        /*if (gTime > 0 && rTime > 0 && !isOpen && opening == 0) {
            opening = 30;
            AudioManager.play('resources/music/heaven.mp3', "Win Sound")
            AudioManager.setVolume("Level 1 Song", 0.1)
        }*/
        /*if (opening > 0) {
            opening--;
            if (opening == 0) {
                this.openDoor();
                isOpen = true;
            }
        }*/
        if (buttonTime > 0) {
            buttonTime -= ((drainSpeed * cap) / (clock / tierEffect));
        }
        else {
            button.parent.getComponent("sprite").image.src = 'resources/images/buttonUp.png';
        }
		
        if (buttonTime < 0) {
            buttonTime = 0;
            this.closeDoor();
        }
    }

    this.draw = function () {
        if (!isOpen) {
            context.beginPath();
            context.arc(296, 46, 5, 0, Math.PI * 2 * buttonTime / (60 * cap));
            context.strokeStyle = 'blue';
            context.lineWidth = 11;
            context.stroke();
            //context.fillRect(20,20,150,100);
        }
    }

    this.openDoor = function () {
        var door = Level_1.find("Button System").getComponent("door");
        door.getComponent("sprite").image.src = 'resources/images/OpenDoor.png';
        door.getComponent("sprite").width = 125;
        door.getComponent("body").turnIntoTrigger();
        door.getComponent("body").onTriggerEnter = function () {
            g_currentLevel = 2;
            sceneManager.play("Transition Level");
        }
    }

    this.closeDoor = function () {
        var door = Level_1.find("Button System").getComponent("door");
        door.getComponent("sprite").image.src = 'resources/image/ClosedDoor.png';
        door.getComponent("sprite").width = 106;
        door.getComponent("body").onTriggerEnter = function () {}
    }