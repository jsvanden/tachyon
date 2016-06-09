// JavaScript source code
function underPressure() {
    this.buttonOneDown = false;
    this.buttonThreeDown = false;
    this.solved = false;
    
    this.updateButton = function(buttonNumber, isDown)
    {
      if(buttonNumber == 1)
      {
        this.buttonOneDown = isDown;
      }
      if(buttonNumber == 3)
      {
        this.buttonThreeDown = isDown;
      }
      
      if(this.buttonOneDown && this.buttonThreeDown)
      {
        this.solved = true;
      }
    }
    
    /*this.player;
    this.button1;
    this.button2;
    this.plate;
    this.obstacle1;
    this.obstacle2;
    this.obstacle3;
    this.clock;
    this.cap;
    this.press1 = false;
    this.press2 = false;
    this.pressPlate = false;
    this.time1 = 0;
    this.time2 = 0;
    this.drainSpeed = 2;
    this.tierEffect = 3;
    this.solved = false;

    this.start = function () {
        this.player = Level_3.find("Main Character");
        this.clock = this.player.getComponent("movement").tier;
        this.cap = this.player.getComponent("movement").tierCap;
        this.button1 = this.parent.getComponent("button1").getComponent("body");
        this.button2 = this.parent.getComponent("button2").getComponent("body");
        //this.plate = this.parent.getComponent("pressure plate").getComponent("body");
        this.obstacle1 = this.parent.getComponent("piston1");
        this.obstacle2 = this.parent.getComponent("piston2");
        this.obstacle3 = this.parent.getComponent("piston3");

        //this.parent.getComponent("button1Script").open();
        //this.parent.getComponent("button1Script").close();
        
        /*
        this.button1.onTriggerEnter = function () {
            this.parent.getComponent("sprite").image.src = 'resources/images/blueDown.png';
            //this.time1 = 30 * this.cap;
            //Level_3.find("piston1").setTransform({ y:  Level_3.find("piston1").y - 60 })
            //this.press1 = true;
        }

        this.button1.onTriggerExit = function () {
           // this.press1 = false;
        }*/
        
        
/*
        this.button2.onTriggerEnter = function () {
            this.button2.parent.getComponent("sprite").image.src = 'resources/images/blueDown.png';
            this.time2 = 30 * this.cap;
            this.obstacle3.setTransform({ y: this.obstacle3.y - 60 })
            this.press2 = true;
        }

        this.button2.onTriggerExit = function () {
            this.press2 = false;
        }*/
/*
        this.plate.onTriggerEnter = function () {
            if (this.clock == 1) {
                this.plate.parent.getComponent("sprite").image.src = 'resources/images/plateDown.png';
                this.obstacle2.setTransform({ y: this.obstacle2.y - 60 })
                this.pressPlate = true;
            }
        }

        this.plate.onTriggerExit = function () {
            this.pressPlate = false;
            if (!this.solved) {
                this.plate.parent.getComponent("sprite").image.src = 'resources/images/plateUp.png';
                this.obstacle2.setTransform({ y: this.obstacle2.y + 60 })
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
    }*/
}