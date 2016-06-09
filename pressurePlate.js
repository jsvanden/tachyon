function pressurePlate()
{
  this.on = true;
  this.playerStandingOn = true;
  
  this.start = function()
  {
    this.player = Level_5.find("Main Character");
    this.master = Level_5.find("buttons").getComponent("master");
    
    this.pistonHi = Level_5.find("piston2a");
    this.pistonLo = Level_5.find("piston2b");
    
    this.pistonHi.getComponent("spikes").onCollision = function (other)
    {
      if (other.name == "Main Character")
      {
				AudioManager.play('resources/music/short death.mp3', "Piston Death", {loop: false});
        sceneManager.play("Level 5");
      }
    }
    
    this.pistonLo.getComponent("spikes").onCollision = function (other)
    {
      if (other.name == "Main Character")
      {
				AudioManager.play('resources/music/short death.mp3', "Piston Death", {loop: false});
        sceneManager.play("Level 5");
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

    this.tier = this.player.getComponent("movement").tier;

    if (this.playerStandingOn && this.tier == 1)
    {
      this.on = true
    }
    else
    {
      this.on = false;
    }
    
    if(this.on)
    {
      this.parent.getComponent("light").width = 253;
      this.parent.getComponent("light").height = 244;
      this.parent.getComponent("light").image.src = 'resources/images/PPlateDown.png';
      
      this.master.updateButton(2, true);
      
      this.pistonHi.setTransform({y: 101 - 190});
      this.pistonLo.setTransform({y: 400 + 160});
    }
    else
    {
      this.parent.getComponent("light").width = 53;
      this.parent.getComponent("light").height = 48;
      this.parent.getComponent("light").image.src = 'resources/images/PPlateUp.png';
      
      this.master.updateButton(2, false);
      
      this.pistonHi.setTransform({y: 101});
      this.pistonLo.setTransform({y: 400});
    }
  }
  
  this.onTriggerEnter = function ()
  {
    //AudioManager.play('resources/music/waaap.mp3', "Open Door Sound", {loop: false});
    this.playerStandingOn = true;
  }
  
  this.onTriggerExit = function ()
  {
    this.playerStandingOn = false;
  }
}