var canvas = document.getElementById ('myGame');
var context = canvas.getContext ('2d');

var g_currentLevel = 0;

var AudioManager = new AudioManager();


var InputManager = new InputManager();
InputManager.add("left", [65, 37]);
InputManager.add("right", [68, 39]);
InputManager.add("up", [87, 38]);
InputManager.add("down", [83, 40]);
InputManager.add("shift", [16]);
InputManager.add("enter", [13,32]);

sceneManager.drawDebug = true;
sceneManager.init();
AudioManager.play('resources/music/echo melody.mp3', "Loading Song", {loop: false});
sceneManager.play("Main Menu");

requestAnimFrame(sceneManager.run);