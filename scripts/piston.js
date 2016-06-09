// JavaScript source code
function piston() {
    this.base;
    this.origin;
    this.goal;
    this.speed = 1.5;   //WAS 1.0
    this.clock;
    this.cap;
    this.player;
    this.spike;
    this.down = true;

    this.start = function () {
        this.player = Level_2.find("Main Character") || Level_3.find("Main Character") || Level_4.find("Main Character");
        this.clock = this.player.getComponent("movement").tier; // Changed to lowercase
        this.cap = this.player.getComponent("movement").tierCap; // Changed to lowercase
        this.base = this.parent;
        this.origin = this.base.y;
        this.goal = this.origin + 110;   //WAS +160
        this.spike = this.base.getComponent("spikes"); // Changed to lowercase

        this.spike.onCollision = function (other) {
            if (other.name == "Main Character")
            {
              AudioManager.play('resources/music/short death.mp3', "Piston Death", {loop: false});
              if(g_currentLevel == 2) sceneManager.play("Level 2");
              if(g_currentLevel == 3) sceneManager.play("Level 3");
            }
        }
    }
    
    // Changed this.base.y to this.base.setTransform({y: })
    this.update = function () {
        this.clock = this.player.getComponent("movement").tier;
        this.cap = this.player.getComponent("movement").tierCap;

        if (this.down) {
            this.base.setTransform({y: this.base.y + ((this.speed*this.cap)/this.clock)})
            if (this.base.y >= this.goal) {
                this.base.setTransform({y: this.goal})
                this.down = false;
				AudioManager.play('resources/music/Bass Hit.mp3', "Piston Impact", {loop: false});
            }
        }
        else {
            this.base.setTransform({y: this.base.y - ((this.speed*this.cap)/this.clock)})
            if (this.base.y <= this.origin) {
                this.base.setTransform({y: this.origin})
                this.down = true;
            }
        }
    }
}

function pistonUp() {
    this.base;
    this.origin;
    this.goal;
    this.speed = 1.5;  //WAS 1.0
    this.clock;
    this.cap;
    this.player;
    this.spike;
    this.down = false;

    this.start = function () {
        this.player = Level_2.find("Main Character") || Level_3.find("Main Character") || Level_4.find("Main Character");
        this.clock = this.player.getComponent("movement").tier; // Changed to lowercase
        this.cap = this.player.getComponent("movement").tierCap; // Changed to lowercase
        this.base = this.parent;
        this.origin = this.base.y;
        this.goal = this.origin - 110;   //WAS 160
        this.spike = this.base.getComponent("spikes"); // Changed to lowercase

        this.spike.onCollision = function (other) {
            if (other.name == "Main Character")
            {
              AudioManager.play('resources/music/short death.mp3', "Piston Death", {loop: false});
              if(g_currentLevel == 2) sceneManager.play("Level 2");
              if(g_currentLevel == 3) sceneManager.play("Level 3");
            }
        }
    }
    
    // Changed this.base.y to this.base.setTransform({y: })
    this.update = function () {
        this.clock = this.player.getComponent("movement").tier;
        this.cap = this.player.getComponent("movement").tierCap;

        if (this.down) {
            this.base.setTransform({y: this.base.y + ((this.speed*this.cap)/this.clock)})
            if (this.base.y >= this.origin) {
                this.base.setTransform({y: this.origin})
                this.down = false;
            }
        }
        else {
            this.base.setTransform({y: this.base.y - ((this.speed*this.cap)/this.clock)})
            if (this.base.y <= this.goal) {
                this.base.setTransform({y: this.goal})
                this.down = true;
            }
        }
    }
}