function pistonUnlockButton(buttonNumber)
{
  this.time = 0;
  this.pressed = false;
  this.closed = true;
  
  this.start = function()
  {
    this.drainSpeed = (g_currentLevel == 4) ? 2 : 2;
    this.tierEffect = (g_currentLevel == 4) ? 2.5 : 1;
    
    this.player = (g_currentLevel == 4) ? Level_4.find("Main Character") : Level_5.find("Main Character");
    this.clock = this.player.getComponent("movement").tier;
    this.cap = this.player.getComponent("movement").tierCap;
    this.master = (g_currentLevel == 4) ? Level_4.find("buttons").getComponent("master") : Level_5.find("buttons").getComponent("master");
    
    if(buttonNumber == 1)
    {
      this.pistonHi = (g_currentLevel == 4) ? Level_4.find("piston1a") : Level_5.find("piston1a");
      this.pistonLo = (g_currentLevel == 4) ? Level_4.find("piston1b") : Level_5.find("piston1b");
    }
    if(buttonNumber == 3)
    {
      this.pistonHi = (g_currentLevel == 4) ? Level_4.find("piston3a") : Level_5.find("piston3a");
      this.pistonLo = (g_currentLevel == 4) ? Level_4.find("piston3b") : Level_5.find("piston3b");
    }
    
    this.pistonHi.getComponent("spikes").onCollision = function (other)
    {
      if (other.name == "Main Character")
      {
				AudioManager.play('resources/music/short death.mp3', "Piston Death", {loop: false});
        if (g_currentLevel == 4) {sceneManager.play("Level 4")} else {sceneManager.play("Level 5")};
      }
    }
    
    this.pistonLo.getComponent("spikes").onCollision = function (other)
    {
      if (other.name == "Main Character")
      {
				AudioManager.play('resources/music/short death.mp3', "Piston Death", {loop: false});
        if (g_currentLevel == 4) {sceneManager.play("Level 3")} else {sceneManager.play("Level 4")};
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
      if(!this.master.buttonOneDown || !this.master.buttonThreeDown)
      {
        this.time -= ((this.drainSpeed * this.cap) / (this.clock / this.tierEffect));
        if (this.clock == 1) this.time = 0;
      }
      else
      {
        this.time -= 1;
      }
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
    if(this.closed) AudioManager.play('resources/music/waaap.mp3', "Open Door Sound", {loop: false});
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