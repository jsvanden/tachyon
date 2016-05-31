// JavaScript source code
function piston() {
    var base;
    var origin;
    var goal;
    var speed = 1;
    var clock;
    var cap;
    var player;
    var spike;
    var down = true;

    this.start = function () {
        player = Level_2.find("Main Character");
        clock = player.getComponent("movement").tier; // Changed to lowercase
        cap = player.getComponent("movement").tierCap; // Changed to lowercase
        base = this.parent;
        origin = base.y;
        goal = origin + 60;
        spike = base.getComponent("spikes"); // Changed to lowercase

        spike.onCollision = function (other) {
            if (other.name == "Main Character") { // Changed to other.name == "Main Character"
                sceneManager.play("Level 2"); // Implemented Death Hopefully
            }
        }
    }
    
    // Changed base.y to base.setTransform({y: })
    this.update = function () {
        clock = player.getComponent("movement").tier;
        cap = player.getComponent("movement").tierCap;

        if (down) {
            base.setTransform({y: base.y + ((speed*cap)/clock)})
            if (base.y >= goal) {
                base.setTransform({y: goal})
                down = false;
            }
        }
        else {
            base.setTransform({y: base.y - ((speed*cap)/clock)})
            if (base.y <= origin) {
                base.setTransform({y: origin})
                down = true;
            }
        }
    }
}