var canvas = document.getElementById ('myGame');
var context = canvas.getContext ('2d');

var InputManager = new InputManager();
InputManager.add("left", [65, 37]);
InputManager.add("right", [68, 39]);
InputManager.add("up", [87, 38]);
InputManager.add("down", [83, 40]);
InputManager.add("shift", [16]);

sceneManager.drawDebug = true;
sceneManager.init();
sceneManager.play("Level 1");
requestAnimFrame(sceneManager.run);

//MainMenu.setCamera(200,220);