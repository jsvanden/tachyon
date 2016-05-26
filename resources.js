// Sprites


var spr_room01 = new Sprite('resources/images/level01.png', {width:640, height:480});
var spr_room02 = new Sprite('resources/images/level02.JPG', {width:640, height:480});
var spr_room03 = new Sprite('resources/images/level03.png', {width:640, height:480});
var spr_room04 = new Sprite('resources/images/level04.png', {width:960, height:480}); //room 4 is longer than the rest on purpose, it exists to have the player go fast over 3 buttons


var spr_tempChar = new Sprite('resources/images/Wchar.png', {width:62, height:85, yOffset:3});
//var spr_tempChar2 = new Sprite('resources/Wchar.png', {width:62, height:85, yOffset:3});

var spr_greenUp = new Sprite('resources/images/greenUp.png', {width: 58, height: 40});
var spr_greenDown = new Sprite('resources/images/greenDown.png', { width: 58, height: 35, yOffset: 2.5 });

var spr_redUp = new Sprite('resources/images/redUp.png', {width: 58, height: 40});
var spr_redDown = new Sprite('resources/images/redDown.png', { width: 58, height: 35, yOffset: 2.5 });

var spr_mainMenu = new Sprite('resources/images/MainMenu.png', {width: 640, height:480});

var spr_transition = new Sprite('resources/images/Dilation.png', {width: 640, height: 480});

var spr_dialDoors = new Sprite('resources/images/DialDoorsDown.png', {width: 106, height: 47});
var spr_lockedDoor_l = new Sprite('resources/images/LockedDoorUp.png', {width: 110, height: 41, xOffset: -181});
var spr_lockedDoor_r = new Sprite('resources/images/LockedDoorUp.png', {width: 110, height: 41, xOffset: 181});

var spr_greenDots = new Sprite('resources/images/GBtnDots.png', {width: 186, height: 185, xOffset: -181, yOffset: -285});
var spr_redDots = new Sprite('resources/images/RBtnDots.png', {width: 186, height: 185, xOffset: 181, yOffset: -285});

// Rigid Body

var rb_character = new RigidBody({isDynamic: true, listenForCollision: true, height:46, yOffset: 5, linearDamping:4});
var rb_green = new RigidBody({ width: 58, height: 40, isTrigger: true });
var rb_red = new RigidBody({ width: 58, height: 40, isTrigger: true });
var rb_bDoor = new RigidBody({ width: 90, height: 40 });




var rb_wallLeft = new RigidBody({width:10, height:480, xOffset: -325});
var rb_wallRight = new RigidBody({width:10, height:480, xOffset: 325});

var rb_wallBottom1 = new RigidBody({ width: 215, height: 10, xOffset: -215, yOffset: 195 });
var rb_wallBottom2 = new RigidBody({ width: 50, height: 10, xOffset: -97, yOffset: 214, rotationOffset: 59 });
var rb_wallBottom3 = new RigidBody({ width: 185, height: 10, yOffset: 238 });
var rb_wallBottom4 = new RigidBody({ width: 50, height: 10, xOffset: 97, yOffset: 214, rotationOffset: -59 });
var rb_wallBottom5 = new RigidBody({ width: 215, height: 10, xOffset: 215, yOffset: 195 });

var rb_wallTop1 = new RigidBody({width: 135, height: 10, xOffset: -255, yOffset: -230});
var rb_wallTop2 = new RigidBody({width: 75, height: 10, xOffset: -163, yOffset: -207, rotationOffset: 44 });
var rb_wallTop3 = new RigidBody({width: 85, height: 10, xOffset: -97, yOffset: -182});
var rb_wallTop4 = new RigidBody({width: 75, height: 10, xOffset: 163, yOffset: -207, rotationOffset: -44 });
var rb_wallTop5 = new RigidBody({width: 85, height: 10, xOffset: 97, yOffset: -182});
var rb_wallTop6 = new RigidBody({width: 135, height: 10, xOffset: 255, yOffset: -230});





var rb_level2_wallRightTop = new RigidBody({width: 30, height: 250, xOffset: 280, yOffset: -170});
var rb_level2_wallLeftBot = new RigidBody({width: 30, height: 250, xOffset: -280, yOffset: 170});
var rb_level2_wallLeftTop = new RigidBody({width:30, height: 250, xOffset: -280, yOffset:-170});
var rb_level2_wallRightBot = new RigidBody({width: 30, height: 250, xOffset: 280, yOffset: 170});
var rb_level2_wallTop = new RigidBody({width: 640, height: 30, xOffset: 0, yOffset: -240});
var rb_level2_wallBot = new RigidBody({width: 640, height: 30, xOffset: 0, yOffset: 240});

var rb_level2_pistonArmLeftTop = new RigidBody ({width: 40, height: 250, xOffset: -145, yOffset: -160});
var rb_level2_pistonArmLeftBot = new RigidBody ({width: 40, height: 250, xOffset: -145, yOffset: 160});
var rb_level2_pistonArmMidTop = new RigidBody ({width: 40, height: 200, xOffset: 5, yOffset: -190});
var rb_level2_pistonArmMidBot = new RigidBody ({width: 40, height: 200, xOffset: 5, yOffset: 190});
var rb_level2_pistonArmRightTop = new RigidBody ({width: 40, height: 150, xOffset: 155, yOffset: -230});
var rb_level2_pistonArmRightBot = new RigidBody ({width: 40, height: 150, xOffset: 155, yOffset: 230});





var rb_level3_wallLeft = new RigidBody ({width: 40, height: 480, xOffset: -330, yOffset: 0});
var rb_level3_wallTop = new RigidBody ({width: 640, height: 10, xOffset: 0, yOffset: -230});
var rb_level3_wallRight = new RigidBody ({width: 40, height: 480, xOffset: 330, yOffset: 0});
var rb_level3_wallDownRight = new RigidBody ({width: 640, height: 10, xOffset: 200, yOffset: 195});
var rb_level3_wallDownLeft = new RigidBody ({width: 80, height: 10, xOffset: -280, yOffset: 195});
var rb_level3_wallInsideTop = new RigidBody ({width:640, height: 15, xOffset: 160, yOffset: -100});
var rb_level3_wallInsideBot = new RigidBody ({width:640, height: 15, xOffset: -160, yOffset: 95});



var rb_level4_wallTop = new RigidBody ({width:640, height: 10, xOffset: -140, yOffset: -170});
var rb_level4_wallBot = new RigidBody ({width:640, height: 10, xOffset: -140, yOffset: 170});
var rb_level4_wallLeftTop = new RigidBody ({width:10, height: 120, xOffset: -470, yOffset: 110});
var rb_level4_wallLeftBot = new RigidBody ({width:10, height: 120, xOffset: -470, yOffset: -110});

// Scripts

var script_sample = new sampleScript();
var script_movement = new movement();
var script_loadingCharacter = new LoadingCharacter();
var script_twoButtons = new twoButtons();
var script_characterRendering = new CharacterRendering();
var script_transition = new transition();

// GameObjects

var go_character = new GameObject();
go_character.addComponent(spr_tempChar, "sprite");
go_character.addComponent(rb_character, "body");
go_character.addComponent(script_movement, "movement");
go_character.addComponent(script_characterRendering, "Character Rendering");
//go_character.addComponent(spr_tempChar2, "sprite2");




var go_room01 = new GameObject();
go_room01.addComponent(spr_room01, "sprite");
go_room01.addComponent(rb_wallLeft, "left wall");
go_room01.addComponent(rb_wallRight, "right wall");
go_room01.addComponent(rb_wallBottom1, "bottom wall 1");
go_room01.addComponent(rb_wallBottom2, "bottom wall 2");
go_room01.addComponent(rb_wallBottom3, "bottom wall 3");
go_room01.addComponent(rb_wallBottom4, "bottom wall 4");
go_room01.addComponent(rb_wallBottom5, "bottom wall 5");
go_room01.addComponent(rb_wallTop1, "top wall 1");
go_room01.addComponent(rb_wallTop2, "top wall 2");
go_room01.addComponent(rb_wallTop3, "top wall 3");
go_room01.addComponent(rb_wallTop4, "top wall 4");
go_room01.addComponent(rb_wallTop5, "top wall 5");
go_room01.addComponent(rb_wallTop6, "top wall 6");



var go_room02 = new GameObject();
go_room02.addComponent(spr_room02, "sprite");
go_room02.addComponent(rb_level2_wallLeftTop, "left wall");
go_room02.addComponent(rb_level2_wallRightTop,"right wall");
go_room02.addComponent(rb_level2_wallLeftBot, "left wall");
go_room02.addComponent(rb_level2_wallRightBot,"right wall");
go_room02.addComponent(rb_level2_pistonArmLeftTop,"left piston top");
go_room02.addComponent(rb_level2_pistonArmLeftBot,"left piston bottom");
go_room02.addComponent(rb_level2_pistonArmMidTop,"middle piston top");
go_room02.addComponent(rb_level2_pistonArmMidBot,"middle piston bottom");
go_room02.addComponent(rb_level2_pistonArmRightTop,"middle piston top");
go_room02.addComponent(rb_level2_pistonArmRightBot,"middle piston bottom");
go_room02.addComponent(rb_level2_wallTop,"top wall");
go_room02.addComponent(rb_level2_wallBot,"bottom wall");




var go_room03 = new GameObject();
go_room03.addComponent(spr_room03, "sprite");
go_room03.addComponent(rb_level3_wallLeft, "left wall");
go_room03.addComponent(rb_level3_wallTop, "top wall");
go_room03.addComponent(rb_level3_wallRight, "top wall");
go_room03.addComponent(rb_level3_wallDownLeft, "down left wall");
go_room03.addComponent(rb_level3_wallDownRight, "down right wall");
go_room03.addComponent(rb_level3_wallInsideTop, "inside wall top");
go_room03.addComponent(rb_level3_wallInsideBot, "inside wall bottom");



var go_room04 = new GameObject();
go_room04.addComponent(spr_room04, "sprite");
go_room04.addComponent(rb_level4_wallLeftTop, "top right wall");
go_room04.addComponent(rb_level4_wallLeftBot, "down right wall");
go_room04.addComponent(rb_level4_wallTop, "top wall");
go_room04.addComponent(rb_level4_wallBot, "bot wall");


var go_chainDoors = new GameObject();
go_chainDoors.addComponent(spr_lockedDoor_l, "sprite_l");
go_chainDoors.addComponent(spr_lockedDoor_r, "sprite_r");
go_chainDoors.addComponent(spr_greenDots, "shouldn't be here");
go_chainDoors.addComponent(spr_redDots, "shouldn't be here");

var go_green = new GameObject({x:100,y:250});
go_green.addComponent(spr_greenUp, "sprite");
go_green.addComponent(rb_green, "body");

var go_red = new GameObject({ x: 540, y: 250 });
go_red.addComponent(spr_redUp, "sprite");
go_red.addComponent(rb_red, "body");

var go_bDoor = new GameObject({ x: 320, y: 43 });
go_bDoor.addComponent(spr_dialDoors, "sprite");
go_bDoor.addComponent(rb_bDoor, "body");

var go_buttonSystem = new GameObject();
go_buttonSystem.addComponent(go_green, "green");
go_buttonSystem.addComponent(go_red, "red");
go_buttonSystem.addComponent(go_bDoor, "door");
go_buttonSystem.addComponent(script_twoButtons, "script");




var go_green3 = new GameObject({x:80,y:80});
go_green3.addComponent(spr_greenUp, "sprite");
go_green3.addComponent(rb_green, "body");

var go_red3 = new GameObject({ x: 550, y: 400 });
go_red3.addComponent(spr_redUp, "sprite");
go_red3.addComponent(rb_red, "body");

var go_bDoor3 = new GameObject({ x: 140, y: 450 });
go_bDoor3.addComponent(spr_dialDoors, "sprite");
go_bDoor3.addComponent(rb_bDoor, "body");

var go_buttonSystem3 = new GameObject();
go_buttonSystem3.addComponent(go_green3, "green");
go_buttonSystem3.addComponent(go_red3, "red");
go_buttonSystem3.addComponent(go_bDoor3, "door");
go_buttonSystem3.addComponent(script_twoButtons, "script");





//var go_SampleObject = new GameObject();
//go_SampleObject.addComponent(script_sample, "Sample Script");
//go_SampleObject.addComponent(spr_john, "sprite");

var go_mainMenu = new GameObject();
go_mainMenu.addComponent(script_loadingCharacter, "script");

/*var go_mainMenu = new GameObject();
go_mainMenu.addComponent(script_mainMenu, "input");
go_mainMenu.addComponent(spr_mainMenu, "sprite");*/

var go_transition = new GameObject();
go_transition.addComponent(script_transition, "script");
go_transition.addComponent(spr_transition, "sprite");






