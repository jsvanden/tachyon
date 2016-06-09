// Sprites

var spr_room01 = new Sprite('resources/images/level01.png', {width:640, height:480});
var spr_room02 = new Sprite('resources/images/level02Placeholder.png', {width:640, height:480});
var spr_room03 = new Sprite('resources/images/level04.png', {width:640, height:480});

var spr_tempChar = new Sprite('resources/images/W.png', {width:51, height:67, yOffset:3});

var spr_blueUp = new Sprite('resources/images/blueUp.png', {width: 58, height: 40});
var spr_blueDown = new Sprite('resources/images/blueDown.png', { width: 58, height: 35, yOffset: 2.5 });

var spr_blueUp2 = new Sprite('resources/images/blueUp.png', {width: 58, height: 40});

var spr_transition = new Sprite('resources/images/Dilation.png', {width: 640, height: 480});

var spr_lockedDoor_r = new Sprite('resources/images/MonoDoor.png', {width: 25, height: 60});
var spr_openDoor_r = new Sprite('resources/images/OpenDoorLeft.png', {width: 40, height: 110});

var spr_openDoor_d = new Sprite('resources/images/OpenDoorUp.png', {width: 90, height: 40});

var spr_chainDoorRightSmall = new Sprite('resources/images/LockedDoorRight.png', {width: 21, height: 55});

var spr_chainDoorRight = new Sprite('resources/images/LockedDoorRight.png', {width: 41, height: 110});
var spr_chainDoorRight2 = new Sprite('resources/images/LockedDoorRight.png', {width: 40, height: 70});


var spr_piston =  new Sprite('resources/images/pistonPlaceholder.png', {width: 80, height: 290});
var spr_piston_up =  new Sprite('resources/images/pistonPlaceholderUp.png', {width: 80, height: 290, rotationOffset: 180});

var spr_pressurePlate = new Sprite('resources/images/PPlateUp.png', {width: 53, height: 48});
var spr_pressureOn = new Sprite('resources/images/PPlateDown.png', {width: 253, height: 244});



// Rigid Body

var rb_character = new RigidBody({isDynamic: true, listenForCollision: true, width: 38, height:36, yOffset: 5, linearDamping:8});
var rb_blue = new RigidBody({ width: 58, height: 40, isTrigger: true });

var rb_bDoor = new RigidBody({ width: 25, height: 70 , xOffset: -2});
var rb_bDoor2 = new RigidBody({ width: 25, height: 70 , xOffset: -2, listenForCollision: true});
var rb_bDoor3 = new RigidBody({ width: 70, height: 40 , xOffset: -2, listenForCollision: true});

var rb_pressurePlate = new RigidBody({isTrigger: true, width: 53, height: 48});

var rb_spike = new RigidBody({listenForCollision: true, width: 70, height:15, yOffset: 130});
var rb_pistonBase = new RigidBody({width: 50, height:250, yOffset: -10});

var rb_spike_up = new RigidBody({listenForCollision: true, width: 70, height:15, yOffset: -130});
var rb_pistonBase_up = new RigidBody({width: 50, height:250, yOffset: 10});


var rb_level1_wallLeft = new RigidBody({width: 10, height:400, xOffset: -270, yOffset: 0});
var rb_level1_wallTop = new RigidBody({width: 550, height: 10, xOffset: 0, yOffset: -190});
var rb_level1_wallRightTop = new RigidBody({width: 10, height: 150, xOffset: 270, yOffset: -115});
var rb_level1_wallRightBot = new RigidBody({width: 10, height: 150, xOffset: 270, yOffset: 115});
var rb_level1_wallBot = new RigidBody({width: 550, height: 10, xOffset: 0, yOffset: 190});

var rb_level2_wallLeft = new RigidBody({width:30, height: 480, xOffset: -290});
var rb_level2_wallTop = new RigidBody({width: 640, height: 30, xOffset: 0, yOffset: -240});
var rb_level2_wallRightTop = new RigidBody({width: 30, height: 180, xOffset: 290, yOffset: -150});
var rb_level2_wallRightBot = new RigidBody({width: 30, height: 180, xOffset: 290, yOffset: 140});

var rb_level2_wallTop1 = new RigidBody({width: 180, height: 30, xOffset: -180, yOffset: -240});
var rb_level2_wallTop2 = new RigidBody({width: 180, height: 30, xOffset: 200, yOffset: -240});
var rb_level2_wallBot1 = new RigidBody({width: 180, height: 30, xOffset: -180, yOffset: 240});
var rb_level2_wallBot2 = new RigidBody({width: 180, height: 30, xOffset: 200, yOffset: 240});
var rb_level2_lockedDoor = new RigidBody({width: 31, height: 60, xOffset:-5, yOffset:0}); 


var rb_level3_wallLeft = new RigidBody({width: 10, height:400, xOffset: -270, yOffset: 0});
var rb_level3_wallTop = new RigidBody({width: 550, height: 10, xOffset: 0, yOffset: -190});
var rb_level3_wallRight = new RigidBody({width: 10, height: 400, xOffset: 270, yOffset: 0});
var rb_level3_wallBotLeft = new RigidBody({width: 430, height: 10, xOffset: -100, yOffset: 190});
var rb_level3_wallBotRight = new RigidBody({width: 60, height: 10, xOffset: 210, yOffset: 190});


// Scripts

var script_movement = new movement();
var script_loadingCharacter = new LoadingCharacter();
var script_characterRendering = new CharacterRendering();
var script_transition = new transition();
var script_oneButton = new oneButton();
var script_openDoor = new openDoor();
var script_piston = new piston();
var script_piston_up = new pistonUp();
var script_underPressure = new underPressure();
var script_pistonUnlockButton1 = new pistonUnlockButton(1);
var script_pistonUnlockButton3 = new pistonUnlockButton(3);
var script_pressurePlate = new pressurePlate();


// GameObjects

var go_character = new GameObject();
go_character.addComponent(spr_tempChar, "sprite");
go_character.addComponent(rb_character, "body");
go_character.addComponent(script_movement, "movement");
go_character.addComponent(script_characterRendering, "Character Rendering");

var go_mainMenu = new GameObject();
go_mainMenu.addComponent(script_loadingCharacter, "script");

var go_transition = new GameObject();
go_transition.addComponent(script_transition, "script");
go_transition.addComponent(spr_transition, "sprite");

var go_room01 = new GameObject();
go_room01.addComponent(spr_room01, "sprite");
go_room01.addComponent(rb_level1_wallLeft, "left wall");
go_room01.addComponent(rb_level1_wallTop, "top wall");
go_room01.addComponent(rb_level1_wallRightTop, "right wall top");
go_room01.addComponent(rb_level1_wallRightBot, "right wall bottom");
go_room01.addComponent(rb_level1_wallBot, "bottom wall");

var go_room02 = new GameObject();
go_room02.addComponent(spr_room02, "sprite");
go_room02.addComponent(rb_level2_wallLeft, "left wall top");
go_room02.addComponent(rb_level2_wallRightTop,"right wall top");
go_room02.addComponent(rb_level2_wallRightBot, "right wall bot");
go_room02.addComponent(rb_level2_wallTop1,"left wall top");
go_room02.addComponent(rb_level2_wallTop2,"left wall top mid");
go_room02.addComponent(rb_level2_wallBot1,"left wall bot");
go_room02.addComponent(rb_level2_wallBot2,"left wall bot mid");

var go_room03 = new GameObject();
go_room03.addComponent(spr_room03, "sprite");
go_room03.addComponent(rb_level3_wallLeft, "left wall");
go_room03.addComponent(rb_level3_wallRight, "down right wall");
go_room03.addComponent(rb_level3_wallTop, "top wall");
go_room03.addComponent(rb_level3_wallBotLeft, "left bot wall");
go_room03.addComponent(rb_level3_wallBotRight, "right bot wall");

var go_lockedDoor1 = new GameObject();
go_lockedDoor1.addComponent(spr_chainDoorRightSmall, "sprite");

var  go_lockedDoor2 = new GameObject();
go_lockedDoor2.addComponent(spr_chainDoorRight, "sprite");
go_lockedDoor2.addComponent(rb_level2_lockedDoor, "body");

var  go_lockedDoor3 = new GameObject();
go_lockedDoor3.addComponent(spr_chainDoorRight2, "sprite");

var go_blue1 = new GameObject({x:110,y:240});
go_blue1.addComponent(spr_blueUp, "sprite");
go_blue1.addComponent(rb_blue, "body");

var go_bDoor1 = new GameObject({ x: 600, y: 240 });
go_bDoor1.addComponent(spr_lockedDoor_r, "sprite");
go_bDoor1.addComponent(rb_bDoor, "body");

var go_Door2 = new GameObject();
go_Door2.addComponent(spr_openDoor_r, "sprite");
go_Door2.addComponent(rb_bDoor2, "body");
go_Door2.addComponent(script_openDoor, "script");

var go_Door3 = new GameObject();
go_Door3.addComponent(spr_openDoor_d, "sprite");
go_Door3.addComponent(rb_bDoor3, "body");
go_Door3.addComponent(script_openDoor, "script");

var go_buttonSystem1 = new GameObject();
go_buttonSystem1.addComponent(go_blue1, "blue");
go_buttonSystem1.addComponent(go_bDoor1, "door");
go_buttonSystem1.addComponent(script_oneButton, "script");

var go_piston = new GameObject();
go_piston.addComponent(spr_piston, "sprite");
go_piston.addComponent(script_piston, "script");
go_piston.addComponent(rb_spike, "spikes");
go_piston.addComponent(rb_pistonBase, "body");

var go_piston_up = new GameObject();
go_piston_up.addComponent(spr_piston_up, "sprite");
go_piston_up.addComponent(script_piston_up, "script");
go_piston_up.addComponent(rb_spike_up, "spikes");
go_piston_up.addComponent(rb_pistonBase_up, "body");

var go_piston2 = new GameObject();
go_piston2.addComponent(spr_piston, "sprite");
go_piston2.addComponent(rb_spike, "spikes");
go_piston2.addComponent(rb_pistonBase, "body");

var go_piston_up2 = new GameObject();
go_piston_up2.addComponent(spr_piston_up, "sprite");
go_piston_up2.addComponent(rb_spike_up, "spikes");
go_piston_up2.addComponent(rb_pistonBase_up, "body");

var go_blue2 = new GameObject({x:110,y:100});
go_blue2.addComponent(spr_blueUp2, "sprite");
go_blue2.addComponent(rb_blue, "body");
go_blue2.addComponent(script_pistonUnlockButton1, "button1Script");

var go_blue3 = new GameObject({x:110,y:380});
go_blue3.addComponent(spr_blueUp, "sprite");
go_blue3.addComponent(rb_blue, "body");
go_blue3.addComponent(script_pistonUnlockButton3, "button3Script");

var go_pressurePlate = new GameObject({x:110, y:240});
go_pressurePlate.addComponent(spr_pressurePlate, "sprite");
go_pressurePlate.addComponent(spr_pressureOn, "light");
go_pressurePlate.addComponent(script_pressurePlate, "script");
go_pressurePlate.addComponent(rb_pressurePlate, "body");


var go_pressurePlateSystem1 = new GameObject();
go_pressurePlateSystem1.addComponent(go_blue2, "button1");
go_pressurePlateSystem1.addComponent(go_blue3, "button2");
go_pressurePlateSystem1.addComponent(script_underPressure, "master");

var go_pressurePlateSystem2 = new GameObject();
go_pressurePlateSystem2.addComponent(go_blue2, "button1");
go_pressurePlateSystem2.addComponent(go_blue3, "button2");
go_pressurePlateSystem2.addComponent(go_pressurePlate, "pressurePlate");
go_pressurePlateSystem2.addComponent(script_underPressure, "master");