// JavaScript source code
function transition()
{
  this.countDown;
  
  this.start = function()
  {
    this.countDown = 120;
    
    switch(g_currentLevel)
    {
      case 1:
        this.parent.getComponent("sprite").image.src = 'resources/images/Acceleration.png';
        break;
      case 2:
        this.parent.getComponent("sprite").image.src = 'resources/images/Dilation.png';
        break;
      case 3:
        this.parent.getComponent("sprite").image.src = 'resources/images/Curvature.png';
        break;
      case 4:
        this.parent.getComponent("sprite").image.src = 'resources/images/Relativity.png';
        break; 
      case 5:
        this.parent.getComponent("sprite").image.src = 'resources/images/Velocity.png';
        break;
      case 6:
        this.parent.getComponent("sprite").image.src = 'resources/images/Ending.png';
        AudioManager.setVolume("Level 1 Song", 0);
        AudioManager.play('resources/music/ending song.mp3', "End Song", {loop: true});
        if(!AudioManager.musicMuted) AudioManager.setVolume("End Song", 1);
        break;
    }
  }
  
  this.update = function()
  {
    this.countDown--;
    
    if(this.countDown <= 0)
    {
      switch(g_currentLevel)
      {
        case 1:
          sceneManager.play("Level 1");
          break;
        case 2:
          sceneManager.play("Level 2");
          break;
        case 3:
          sceneManager.play("Level 3");
          break;
        case 4:
          sceneManager.play("Level 4");
          break;
        case 5:
          sceneManager.play("Level 5");
          break;
      }
    }
  }
}