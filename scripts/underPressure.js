// JavaScript source code
function underPressure() {
    this.buttonOneDown = false;
    this.buttonTwoDown = true;
    this.buttonThreeDown = false;
    this.solved = false;
    
    this.updateButton = function(buttonNumber, isDown)
    {
      if(buttonNumber == 1)
      {
        this.buttonOneDown = isDown;
      }
      if(buttonNumber == 2)
      {
        this.buttonTwoDown = isDown;
      }
      if(buttonNumber == 3)
      {
        this.buttonThreeDown = isDown;
      }
      
      if(this.buttonOneDown && this.buttonThreeDown && g_currentLevel == 4)
      {
        if (!this.solved) AudioManager.play('resources/music/unlock.wav', "Piston Unlocked");
        this.solved = true;
      }
      
      if(this.buttonOneDown && this.buttonTwoDown && this.buttonThreeDown && g_currentLevel == 5)
      {
        if (!this.solved) AudioManager.play('resources/music/unlock.wav', "Piston Unlocked");
        this.solved = true;
      }
    }
}