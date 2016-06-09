function pistonUnlockButton(buttonNumber)
{
  this.pistonHi;
  this.pistonLo;
  this.time = 0;
  this.drainSpeed = 2;
  this.tierEffect = 1;
  this.player;
  this.clock;
  this.cap;
  this.pressed = false;
  this.closed = true;
  this.master;
  
  this.start = function()
  {
    this.player = Level_3.find("Main Character");
    this.clock = this.player.getComponent("movement").tier;
    this.cap = this.player.getComponent("movement").tierCap;
    this.master = Level_3.find("buttons").getComponent("master");
    
    if(buttonNumber == 1)
    {
      this.pistonHi = Level_3.find("piston1a");
      this.pistonLo = Level_3.find("piston1b");
    }
    if(buttonNumber == 3)
    {
      this.pistonHi = Level_3.find("piston3a");
      this.pistonLo = Level_3.find("piston3b");
    }
    
    this.pistonHi.getComponent("spikes").onCollision = function (other)
    {
      if (other.name == "Main Character")
      {
				AudioManager.play('resources/music/short death.mp3', "Piston Death", {loop: false});
        sceneManager.play("Level 3");
      }
    }
    
    this.pistonLo.getComponent("spikes").onCollision = function (other)
    {
      if (other.name == "Main Character")
      {
				AudioManager.play('resources/music/short death.mp3', "Piston Death", {loop: false});
        sceneManager.play("Level 3");
      }
    }
  }
  
  this.update = function()
  {
    if(this.master.solved)
    {
      this.pistonHi.setTransform({y: 101 - 190});
      this.pistonLo.setTransform({y: 400 + 160});
      return;
    }
    
    this.clock = this.player.getComponent("movement").tier;
    this.cap = this.player.getComponent("movement").tierCap;
    
    if (this.time > 0 && this.pressed == false)
    {
      this.time -= ((this.drainSpeed * this.cap) / (this.clock / this.tierEffect));
    }
    else if (this.pressed == false)
    {
      this.parent.getComponent("sprite").image.src = 'resources/images/blueUp.png';
    }
    if (this.time <= 0)
    {
      this.time = 0;
      this.close();
    }
    
    if(!this.closed)
    {
      this.pistonHi.setTransform({y: 101 - 190});
      this.pistonLo.setTransform({y: 400 + 160});
    }
    else
    {
      this.pistonHi.setTransform({y: 101});
      this.pistonLo.setTransform({y: 400});
    }
  }
  
  this.open = function()
  {
    this.closed = false;
    this.master.updateButton(buttonNumber, true);
  }
  
  this.close = function()
  {
    this.closed = true;
    this.master.updateButton(buttonNumber, false);
  }
  
  this.onTriggerEnter = function ()
  {
    this.parent.getComponent("sprite").image.src = 'resources/images/blueDown.png';
    this.time = 30 * this.cap;
    this.open();
    this.pressed = true;
  }
  
  this.onTriggerExit = function ()
  {
    this.pressed = false;
  }
}