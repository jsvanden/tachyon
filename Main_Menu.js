function MainMenu()
{
  this.update = function()
  {
    if (InputManager.isPressed("enter"))
    {
      sceneManager.play("Level 1");
    }
  }
}