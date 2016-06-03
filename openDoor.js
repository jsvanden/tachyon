// JavaScript source code
function openDoor()
{
  this.onCollision = function ()
  {
    console.log("test");
    g_currentLevel++;
    sceneManager.play("Transition Level");
  }
}