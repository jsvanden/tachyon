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
        this.parent.getComponent("sprite").image.src = 'resources/images/Dilation.png';
        break;
      case 2:
        this.parent.getComponent("sprite").image.src = 'resources/images/Level 2 Placeholder.png';
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
      }
    }
  }
}