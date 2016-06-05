var canvas = document.getElementById ('myGame');
var context = canvas.getContext ('2d');

var g_currentLevel = 1;

var AudioManager = new AudioManager();
AudioManager.play('resources/music/synthpop.mp3', "Level 1 Song", {loop: true});
AudioManager.setPlaybackRate("Level 1 Song", 1.4);

var InputManager = new InputManager();
InputManager.add("left", [65, 37]);
InputManager.add("right", [68, 39]);
InputManager.add("up", [87, 38]);
InputManager.add("down", [83, 40]);
InputManager.add("shift", [16]);
InputManager.add("enter", [13,32]);

sceneManager.drawDebug = true;
sceneManager.init();
sceneManager.play("Main Menu");
sceneManager.play("Level 1");


//sceneManager.play("Level 3"); 

requestAnimFrame(sceneManager.run);

//MainMenu.setCamera(200,220);