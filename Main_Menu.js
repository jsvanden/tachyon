function MainMenu()
{
  this.update = function()
  {
    if (InputManager.isPressed("enter"))
    {
      g_currentLevel = 1;
      sceneManager.play("Transition Level");
    }
  }
}