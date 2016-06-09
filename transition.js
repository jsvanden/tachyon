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
        this.parent.getComponent("sprite").image.src = 'resources/images/Space.png';
        break;
      case 2:
        this.parent.getComponent("sprite").image.src = 'resources/images/Time.png';
        break;
      case 3:
        this.parent.getComponent("sprite").image.src = 'resources/images/placeholder.jpg';
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