// JavaScript source code
function openDoor()
{
  this.onCollision = function ()
  {
    g_currentLevel++;
        console.log(g_currentLevel);
    sceneManager.play("Transition Level");
  }
}