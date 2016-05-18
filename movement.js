// JavaScript source code
function movement() {
    var body;
    //var speed = 30;
    var speedCap = 5;
    var tier = 1;
    var prevTier = 1;
    this.tierCap = 3;
    //var walking = 1;
    var ramp = 0;
    
// Happens At Start
  this.start = function()
  {
    body = this.parent.getComponent("body");
  }


// Happens Every Frame
  this.update = function()
  {
      if(prevTier != tier)
      {
        AudioManager.setPlaybackRate("Level 1 Song", 1.175-(tier*0.175));
        
        if(prevTier < tier)
        {
          AudioManager.play("resources/music/thud.wav", "Speed Up")
        }
        
        prevTier = tier;
      }
    
      if (InputManager.isPressed("right")) {
          body.applyForce(0, 1000);
          if (InputManager.isPressed("shift")) {
              ramp++;
              if (ramp > 180) {
                  ramp = 0;
                  tier++;
              }
          }
      }
      if (InputManager.isPressed("up")) {
          body.applyForce(90, 1000);
          if (InputManager.isPressed("shift")) {
              ramp++;
              if (ramp > 180) {
                  ramp = 0;
                  tier++;
              }
          }
      }
      if (InputManager.isPressed("left")) {
          body.applyForce(180, 1000);
          if (InputManager.isPressed("shift")) {
              ramp++;
              if (ramp > 180) {
                  ramp = 0;
                  tier++;
              }
          }
      }
      if (InputManager.isPressed("down")) {
          body.applyForce(270, 1000);
          if (InputManager.isPressed("shift")) {
              ramp++;
              if (ramp > 180) {
                  ramp = 0;
                  tier++;
              }
          }
      }
      if (!InputManager.isPressed("shift")) {
          ramp--;
          if (ramp < 0) {
              ramp = 170;
              tier--;
          }
      }
      if (tier < 1) {
		  tier = 1;
	  }
      if (tier > this.tierCap) tier = this.tierCap;
      if (body.getVelocityMagnitude() > speedCap * tier) body.setVelocityMagnitude(speedCap * tier);
      /*if (!InputManager.isPressed("shift") && body.getVelocityMagnitude() >= walking) body.setVelocityMagnitude(walking);
      else {
          if (body.getVelocityMagnitude() >= speedCap) body.setVelocityMagnitude(speedCap);
      }*/
  }
  
  // Happens when colliding with a non-trigger RigidBody
  this.onCollision = function()
  {
      if (body.getVelocityMagnitude() != 0) {
          body.setVelocityMagnitude(0);
          ramp = 0;
          tier = 1;
      }
    //console.log("hit")
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