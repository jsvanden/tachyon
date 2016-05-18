// Sprites

var spr_room01 = new Sprite('resources/level01.png', {width:640, height:480});

var spr_tempChar = new Sprite('resources/MoveDown.png', {width:62, height:88, yOffset:5});

var spr_greenUp = new Sprite('resources/greenUp.png', {width: 58, height: 40});
var spr_greenDown = new Sprite('resources/greenDown.png', { width: 58, height: 35, yOffset: 2.5 });

var spr_redUp = new Sprite('resources/redUp.png', {width: 58, height: 40});
var spr_redDown = new Sprite('resources/redDown.png', { width: 58, height: 35, yOffset: 2.5 });

var spr_mainMenu = new Sprite('resources/MainMenu.png', {width: 640, height:480});

//var spr_bDoor = new Sprite('resources/bDoor.png', {width: 60, height: 60});

// Rigid Body

var rb_character = new RigidBody({isDynamic: true, listenForCollision: true, height:55, linearDamping:0.75});
var rb_wallLeft = new RigidBody({width:10, height:480, xOffset: -320});
var rb_wallTop = new RigidBody({width: 640, height: 10, yOffset: -240});
var rb_wallRight = new RigidBody({width:10, height:480, xOffset: 320});
var rb_wallBottom = new RigidBody({ width: 640, height: 10, yOffset: 240 });
var rb_green = new RigidBody({ width: 58, height: 40, isTrigger: true });
var rb_red = new RigidBody({ width: 58, height: 40, isTrigger: true });
var rb_bDoor = new RigidBody({ width: 60, height: 60 });

// Scripts

var script_sample = new sampleScript();
var script_movement = new movement();
var script_mainMenu = new MainMenu();
var script_twoButtons = new twoButtons();

// GameObjects

var go_character = new GameObject();
go_character.addComponent(spr_tempChar, "sprite");
go_character.addComponent(rb_character, "body");
go_character.addComponent(script_movement, "movement");
//go_character.addComponent(script_sample, "Sample Script");

var go_room01 = new GameObject();
go_room01.addComponent(spr_room01, "sprite");
go_room01.addComponent(rb_wallLeft, "left wall");
go_room01.addComponent(rb_wallTop, "top wall");
go_room01.addComponent(rb_wallRight, "right wall");
go_room01.addComponent(rb_wallBottom, "bottom wall");

var go_green = new GameObject({x:100,y:250});
go_green.addComponent(spr_greenUp, "sprite");
go_green.addComponent(rb_green, "body");

var go_red = new GameObject({ x: 500, y: 250 });
go_red.addComponent(spr_redUp, "sprite");
go_red.addComponent(rb_red, "body");

var go_bDoor = new GameObject({ x: 300, y: 100 });
//go_bDoor.addComponent(spr_bDoor, "sprite");
//go_bDoor.addComponent(rb_bDoor, "body");

var go_buttonSystem = new GameObject();
go_buttonSystem.addComponent(go_green, "green");
go_buttonSystem.addComponent(go_red, "red");
go_buttonSystem.addComponent(go_bDoor, "door");
go_buttonSystem.addComponent(script_twoButtons, "script");

var go_SampleObject = new GameObject();
go_SampleObject.addComponent(script_sample, "Sample Script");

var go_mainMenu = new GameObject();
go_mainMenu.addComponent(script_mainMenu, "input");
go_mainMenu.addComponent(spr_mainMenu, "sprite");










