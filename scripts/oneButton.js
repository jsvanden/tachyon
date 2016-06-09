// JavaScript source code
function oneButton() {
    var buttonTime = 0;
    var clock;
    var cap;
    var script = this;
    var button;
    var player;
    var isOpen = false;
    var opening = 0;
    var drainSpeed = 2;
    var tierEffect = 3;
    var door;
    var pressed = false;

    this.start = function () {
        player = Level_1.find("Main Character");
        clock = player.getComponent("movement").tier;
        cap = player.getComponent("movement").tierCap;
        button = this.parent.getComponent("blue").getComponent("body");
        door = Level_1.find("Button System").getComponent("door");

        button.onTriggerEnter = function () {
            button.parent.getComponent("sprite").image.src = 'resources/images/blueDown.png';
            buttonTime = 60 * cap;
            Level_1.find("Button System").getComponent("script").openDoor();
            pressed = true;
        }

        button.onTriggerExit = function () {
            pressed = false;
        }
    }

    this.update = function () {
        clock = player.getComponent("movement").tier;
        cap = player.getComponent("movement").tierCap;

        if (buttonTime > 0 && pressed == false) {
            buttonTime -= ((drainSpeed * cap) / (clock / tierEffect));
        }
        else {
            if (pressed == false) { button.parent.getComponent("sprite").image.src = 'resources/images/blueUp.png'; }
        }
        
        if (buttonTime <= 0) {
            buttonTime = 0;
            this.closeDoor();
        }
    }

    this.openDoor = function () {
        door.getComponent("sprite").image.src = 'resources/images/OpenDoorLeft.png';
        door.getComponent("sprite").height = 110;
        AudioManager.play('resources/music/waaap.mp3', "Open Door Sound", {loop: false});
        isOpen = true;
        door.getComponent("body").listenForCollision = true;
        door.getComponent("body").onCollision = function () {
            if (isOpen) {
                g_currentLevel = 2;
                sceneManager.play("Transition Level");
            }
        }
    }

    this.closeDoor = function () {
        var door = Level_1.find("Button System").getComponent("door");
        door.getComponent("sprite").image.src = 'resources/images/MonoDoor.png';
        door.getComponent("sprite").height = 60;
        isOpen = false;
    }
}