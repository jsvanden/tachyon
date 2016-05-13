// JavaScript source code
function movement() {
    var body;
    
// Happens At Start
  this.start = function()
  {
    body = this.parent.getComponent("body");
  }


// Happens Every Frame
  this.update = function()
  {
      if (InputManager.isPressed("shift")) {
          if (InputManager.isPressed("right")) body.applyForce(0, 5);
          if (InputManager.isPressed("up")) body.applyForce(90, 5);
          if (InputManager.isPressed("left")) body.applyForce(180, 5);
          if (InputManager.isPressed("down")) body.applyForce(270, 5);
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