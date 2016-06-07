// JavaScript source code
function underPressure() {
    var player;
    var button1;
    var button2;
    var plate;
    var obstacle1;
    var obstacle2;
    var obstacle3;
    var clock;
    var cap;
    var press1 = false;
    var press2 = false;
    var pressPlate = false;
    var time1 = 0;
    var time2 = 0;
    var drainSpeed = 2;
    var tierEffect = 3;
    var solved = false;

    this.start = function () {
        player = Level_3.find("Main Character");
        clock = player.getComponent("Movement").tier;
        cap = player.getComponent("Movement").tierCap;
        button1 = this.parent.getComponent("button1").getComponent("body");
        button2 = this.parent.getComponent("button2").getComponent("body");
        plate = this.parent.getComponent("pressure plate").getComponent("body");
        obstacle1 = this.parent.getComponent("piston1");
        obstacle2 = this.parent.getComponent("piston2");
        obstacle3 = this.parent.getComponent("piston3");

        button1.onTriggerEnter = function () {
            button1.parent.getComponent("sprite").image.src = 'resources/images/blueDown.png';
            time1 = 30 * cap;
            obstacle1.setTransform({ y: obstacle1.y - 60 })
            press1 = true;
        }

        button1.onTriggerExit = function () {
            press1 = false;
        }

        button2.onTriggerEnter = function () {
            button2.parent.getComponent("sprite").image.src = 'resources/images/blueDown.png';
            time2 = 30 * cap;
            obstacle3.setTransform({ y: obstacle3.y - 60 })
            press2 = true;
        }

        button2.onTriggerExit = function () {
            press2 = false;
        }

        plate.onTriggerEnter = function () {
            if (clock == 1) {
                plate.parent.getComponent("sprite").image.src = 'resources/images/plateDown.png';
                obstacle2.setTransform({ y: obstacle2.y - 60 })
                pressPlate = true;
            }
        }

        plate.onTriggerExit = function () {
            pressPlate = false;
            if (!solved) {
                plate.parent.getComponent("sprite").image.src = 'resources/images/plateUp.png';
                obstacle2.setTransform({ y: obstacle2.y + 60 })
            }
        }
    }

    this.update = function () {
        clock = player.getComponent("movement").tier;
        cap = player.getComponent("movement").tierCap;

        if (time1 > 0 && press1 == false) {
            time1 -= ((drainSpeed * cap) / (clock / tierEffect));
        }
        else {
            if (press1 == false) { button1.parent.getComponent("sprite").image.src = 'resources/images/blueUp.png'; }
        }
        if (time1 <= 0) {
            time1 = 0;
            if (!solved) obstacle1.setTransform({ y: obstacle1.y + 60 })
        }

        if (time2 > 0 && press2 == false) {
            time2 -= ((drainSpeed * cap) / (clock / tierEffect));
        }
        else {
            if (press2 == false) { button2.parent.getComponent("sprite").image.src = 'resources/images/blueUp.png'; }
        }
        if (time2 <= 0) {
            time2 = 0;
            if (!solved) obstacle3.setTransform({ y: obstacle3.y + 60 })
        }

        if (press1 && press2 && pressPlate) solved = true;
    }
}