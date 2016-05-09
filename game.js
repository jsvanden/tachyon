var canvas = document.getElementById ('myGame');
var context = canvas.getContext ('2d');
var sceneManager = new SceneManager();

sceneManager.play("Main Menu");

function game_loop()
{
  sceneManager.update();
  sceneManager.draw(); 
}

console.log(g_sceneList);

var loop = setInterval(game_loop, 30);
