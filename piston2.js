// JavaScript source code
function piston2() {
    var base;
    var origin;
    var goal;
    var speed = 1;
    var clock;
    var cap;
    var player;
    var spike;
    var down = false;

    this.start = function () {
        player = Level_2.find("Main Character");
        clock = player.getComponent("Movement").tier;
        cap = player.getComponent("Movement").tierCap;
        base = this.parent;
        origin = base.y;
        goal = origin - 60;
        spike = base.parent.getComponent("Spikes");

        spike.onCollision(other) = function () {
            if (other.parent == player) {
                //implement death
            }
        }
    }

    this.update = function () {
        clock = player.getComponent("movement").tier;
        cap = player.getComponent("movement").tierCap;

        if (down) {
            base.y.setTransform(base.y + ((speed * cap) / clock));
            if (base.y >= origin) {
                base.y.setTransform(origin);
                down = false;
            }
        }
        else {
            base.y.setTransform(base.y - ((speed * cap) / clock));
            if (base.y <= goal) {
                base.y.setTransform(goal);
                down = true;
            }
        }
    }
}