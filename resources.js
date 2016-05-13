// Sprites

var spr_john = new Sprite('resources/john.jpg');
var spr_room01 = new Sprite('resources/level01.png', {width:640, height:480});
var spr_tempChar = new Sprite('resources/MoveDown.png', {width:62, height:88, yOffset:5});
var spr_greenUp = new Sprite('resources/greenUp.png', {width: 58, height: 40});
var spr_greenDown = new Sprite('resources/greenDown.png', {width: 58, height: 35, yOffset:2.5});

// Rigid Body

var rb_character = new RigidBody({isDynamic: true, height:55});
var rb_wallLeft = new RigidBody({width:10, height:480, xOffset: -320});
var rb_wallTop = new RigidBody({width: 640, height: 10, yOffset: -240});
var rb_wallRight = new RigidBody({width:10, height:480, xOffset: 320});
var rb_wallBottom = new RigidBody({width: 640, height: 10, yOffset: 240});


// Scripts

var script_sample = new sampleScript();
var script_movement = new movement();

// GameObjects

var go_character = new GameObject();
go_character.addComponent(spr_tempChar, "sprite");
go_character.addComponent(rb_character, "body");
go_character.addComponent(script_movement, "movement");
go_character.addComponent(script_sample, "Sample Script");

var go_room01 = new GameObject();
go_room01.addComponent(spr_room01, "sprite");
go_room01.addComponent(rb_wallLeft, "left wall");
go_room01.addComponent(rb_wallTop, "top wall");
go_room01.addComponent(rb_wallRight, "right wall");
go_room01.addComponent(rb_wallBottom, "bottom wall");

var go_buttonSystem = new GameObject();





