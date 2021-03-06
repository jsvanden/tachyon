// JavaScript source code
function movement() {
    var body;
    var speedCap = 8;
    this.tier = 1;
    var prevTier = 1;
    this.tierCap = 5;
    var walking = 3;
    this.ramp = 0;
    this.fillSpeed = 2.6;
    this.enabled = true;
    var delay = 0;
    
// Happens At Start
  this.start = function()
  {
    if (g_currentLevel == 0)
    {
      this.fillSpeed = 2;
    }
    body = this.parent.getComponent("body");
  }


// Happens Every Frame
  this.update = function()
  {
      if (delay > 0) delay--;
      if(prevTier != this.tier && prevTier)
      {
        if(this.tier >this.tierCap) this.tier = this.tierCap;
        
        AudioManager.setPlaybackRate("Level 1 Song", 1.5-(this.tier*0.2));
        
        if(prevTier < this.tier && this.tier !=0)
        {
          AudioManager.play("resources/music/thud.wav", "Speed Up")
        }
        
        prevTier = this.tier;
      }
    
      if (InputManager.isPressed("right")&& !InputManager.isPressed("left")) {
          if (this.enabled) body.applyForce(0, 1000);
          if (InputManager.isPressed("shift")) {
              this.ramp += this.fillSpeed;
              if (this.ramp > 180) {
                  this.ramp = 0;
                  this.tier++;
              }
          }
      }
      if (InputManager.isPressed("up")&&!InputManager.isPressed("down")) {
          if (this.enabled) body.applyForce(90, 1000);
          if (InputManager.isPressed("shift")) {
              this.ramp += this.fillSpeed;
              if (this.ramp > 180) {
                  this.ramp = 0;
                  this.tier++;
              }
          }
      }
      if (InputManager.isPressed("left")&&!InputManager.isPressed("right")) {
          if (this.enabled) body.applyForce(180, 1000);
          if (InputManager.isPressed("shift")) {
              this.ramp += this.fillSpeed;
              if (this.ramp > 180) {
                  this.ramp = 0;
                  this.tier++;
              }
          }
      }
      if (InputManager.isPressed("down")&&!InputManager.isPressed("up")) {
          if (this.enabled) body.applyForce(270, 1000);
          if (InputManager.isPressed("shift")) {
              this.ramp += this.fillSpeed;
              if (this.ramp > 180) {
                  this.ramp = 0;
                  this.tier++;
              }
          }
      }
      if (!InputManager.isPressed("shift") && this.enabled) {
          this.ramp -= 10;
          if (this.ramp < 0 && this.tier > 1) {
              this.ramp = 170;
              this.tier--;
          }
          else {
              if (this.ramp < 0) {
                  this.ramp = 0;
              }
          }
      }
      else if (!InputManager.isPressed("left") && !InputManager.isPressed("right") && !InputManager.isPressed("up") && !InputManager.isPressed("down") && this.enabled)
      {
        this.ramp -= 0.5;
        if (this.ramp < 0 && this.tier > 1) {
              this.ramp = 170;
              this.tier--;
          }
          else {
              if (this.ramp < 0) {
                  this.ramp = 0;
              }
          }
      }
      
      if (this.tier < 1) {
		  this.tier = 1;
	  }
      if (this.tier > this.tierCap) this.tier = this.tierCap;
      if (this.tier == 1 && body.getVelocityMagnitude() > walking) body.setVelocityMagnitude(walking);
      if (body.getVelocityMagnitude() > speedCap * this.tier) body.setVelocityMagnitude(speedCap * this.tier);
  }

  this.onCollision = function()
  {
      if(delay==0){
          this.tier--;
          this.ramp -= 90;
          delay = 60;
      }
  }
}