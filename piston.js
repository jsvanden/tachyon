// JavaScript source code
function piston() {
    this.base;
    this.origin;
    this.goal;
    this.speed = 1;
    this.clock;
    this.cap;
    this.player;
    this.spike;
    this.down = true;

    this.start = function () {
        this.player = Level_2.find("Main Character");
        this.clock = this.player.getComponent("movement").tier; // Changed to lowercase
        this.cap = this.player.getComponent("movement").tierCap; // Changed to lowercase
        this.base = this.parent;
        this.origin = this.base.y;
        this.goal = this.origin + 160;
        this.spike = this.base.getComponent("spikes"); // Changed to lowercase

        this.spike.onCollision = function (other) {
            if (other.name == "Main Character") { // Changed to other.name == "Main Character"
                sceneManager.play("Level 2"); // Implemented Death Hopefully
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
    this.speed = 1;
    this.clock;
    this.cap;
    this.player;
    this.spike;
    this.down = false;

    this.start = function () {
        this.player = Level_2.find("Main Character");
        this.clock = this.player.getComponent("movement").tier; // Changed to lowercase
        this.cap = this.player.getComponent("movement").tierCap; // Changed to lowercase
        this.base = this.parent;
        this.origin = this.base.y;
        this.goal = this.origin - 160;
        this.spike = this.base.getComponent("spikes"); // Changed to lowercase

        this.spike.onCollision = function (other) {
            if (other.name == "Main Character") { // Changed to other.name == "Main Character"
                sceneManager.play("Level 2"); // Implemented Death Hopefully
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