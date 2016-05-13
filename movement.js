// JavaScript source code
function movement() {
    var body;
    var speed = 30;
    var speedCap = 10;
    var walking = 5;
    
// Happens At Start
  this.start = function()
  {
    body = this.parent.getComponent("body");
  }


// Happens Every Frame
  this.update = function()
  {
      if (InputManager.isPressed("right")) body.applyForce(0, speed);
      if (InputManager.isPressed("up")) body.applyForce(90, speed);
      if (InputManager.isPressed("left")) body.applyForce(180, speed);
      if (InputManager.isPressed("down")) body.applyForce(270, speed);
      if (!InputManager.isPressed("shift") && body.getVelocityMagnitude() >= walking) body.setVelocityMagnitude(walking);
      else {
          if (body.getVelocityMagnitude() >= speedCap) body.setVelocityMagnitude(speedCap);
      }
  }
}

//InputManager.isPressed("right");
//InputManager.isPressed("up");
//InputManager.isPressed("left");
//InputManager.isPressed("down");
//InputManager.isPressed("shift");

//var body = this.parent.getComponent("body");
//body.applyForce(angle, power);
//body.applyImpulse(angle, power);
//body.getVelocityMagnitude();
//body.setVelocityMagnitude(newMagnitude);