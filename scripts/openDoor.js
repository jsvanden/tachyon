// JavaScript source code
function openDoor()
{
  this.onCollision = function ()
  {
    g_currentLevel++;
    sceneManager.play("Transition Level");
  }
}