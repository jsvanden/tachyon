var canvas = document.getElementById ('myGame');
var context = canvas.getContext ('2d');

sceneManager.init();
sceneManager.play("Main Menu");
requestAnimFrame(sceneManager.run);