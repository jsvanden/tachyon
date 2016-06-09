// Sprites


var spr_room01 = new Sprite('resources/images/level01.png', {width:640, height:480});
var spr_room02 = new Sprite('resources/images/level02Placeholder.png', {width:640, height:480});
var spr_room03 = new Sprite('resources/images/level03.png', {width:640, height:480});
var spr_room04 = new Sprite('resources/images/level04.png', {width:640, height:480});
var spr_room05 = new Sprite('resources/images/level05.png', {width:640, height:480});
var spr_room11 = new Sprite('resources/images/level11.png', {width:640, height:480});

var spr_tempChar = new Sprite('resources/images/W.png', {width:51, height:67, yOffset:3});
//var spr_tempChar = new Sprite('resources/images/W.png', {width:102, height:134, yOffset:3});
//var spr_tempChar2 = new Sprite('resources/Wchar.png', {width:62, height:85, yOffset:3});

var spr_greenUp = new Sprite('resources/images/greenUp.png', {width: 58, height: 40});
var spr_greenDown = new Sprite('resources/images/greenDown.png', { width: 58, height: 35, yOffset: 2.5 });

var spr_redUp = new Sprite('resources/images/redUp.png', {width: 58, height: 40});
var spr_redDown = new Sprite('resources/images/redDown.png', { width: 58, height: 35, yOffset: 2.5 });

var spr_redUp = new Sprite('resources/images/redUp.png', {width: 58, height: 40});
var spr_redDown = new Sprite('resources/images/redDown.png', { width: 58, height: 35, yOffset: 2.5 });

var spr_blueUp = new Sprite('resources/images/blueUp.png', {width: 58, height: 40});
var spr_blueDown = new Sprite('resources/images/blueDown.png', { width: 58, height: 35, yOffset: 2.5 });

var spr_blueUp2 = new Sprite('resources/images/blueUp.png', {width: 58, height: 40});
var spr_blueDown2 = new Sprite('resources/images/blueDown.png', { width: 58, height: 35, yOffset: 2.5 });

var spr_mainMenu = new Sprite('resources/images/MainMenu.png', {width: 640, height:480});

var spr_transition = new Sprite('resources/images/Dilation.png', {width: 640, height: 480});

var spr_dialDoors = new Sprite('resources/images/DialDoorsDown.png', {width: 106, height: 47});
var spr_dialDoors_up = new Sprite('resources/images/DialDoorsUp.png', {width: 106, height: 47});
var spr_dialDoors_leftSmall = new Sprite('resources/images/DialDoorsLeft.png', {width: 30, height: 82});
//var spr_lockedDoor_l = new Sprite('resources/images/LockedDoorUp.png', {width: 110, height: 41, xOffset: -181});
//var spr_lockedDoor_r = new Sprite('resources/images/LockedDoorUp.png', {width: 110, height: 41, xOffset: 181});

var spr_lockedDoor_r = new Sprite('resources/images/MonoDoor.png', {width: 25, height: 60});
var spr_openDoor_r = new Sprite('resources/images/OpenDoorLeft.png', {width: 40, height: 110});

var spr_greenDots = new Sprite('resources/images/GBtnDots.png', {width: 186, height: 185, xOffset: -181, yOffset: -285});
var spr_redDots = new Sprite('resources/images/RBtnDots.png', {width: 186, height: 185, xOffset: 181, yOffset: -285});

var spr_chainDoorRightSmall = new Sprite('resources/images/LockedDoorRight.png', {width: 21, height: 55});

var spr_chainDoorRight = new Sprite('resources/images/LockedDoorRight.png', {width: 41, height: 110});

var spr_chainDoorDown = new Sprite('resources/images/LockedDoorDown.png', {width: 110, height: 41});

var spr_piston =  new Sprite('resources/images/pistonPlaceholder.png', {width: 80, height: 290});
var spr_piston_up =  new Sprite('resources/images/pistonPlaceholderUp.png', {width: 80, height: 290, rotationOffset: 180});









// Rigid Body

var rb_character = new RigidBody({isDynamic: true, listenForCollision: true, width: 38, height:36, yOffset: 5, linearDamping:8});
var rb_green = new RigidBody({ width: 58, height: 40, isTrigger: true });
var rb_red = new RigidBody({ width: 58, height: 40, isTrigger: true });
var rb_bDoor = new RigidBody({ width: 25, height: 70 , xOffset: -2});
var rb_bDoor2 = new RigidBody({ width: 25, height: 70 , xOffset: -2, listenForCollision: true});


var rb_spike = new RigidBody({listenForCollision: true, width: 70, height:15, yOffset: 130});
var rb_pistonBase = new RigidBody({width: 50, height:250, yOffset: -10});

var rb_spike_up = new RigidBody({listenForCollision: true, width: 70, height:15, yOffset: -130});
var rb_pistonBase_up = new RigidBody({width: 50, height:250, yOffset: 10});


var rb_level1_wallLeft = new RigidBody({width: 10, height:400, xOffset: -270, yOffset: 0});
var rb_level1_wallTop = new RigidBody({width: 550, height: 10, xOffset: 0, yOffset: -190});
var rb_level1_wallRightTop = new RigidBody({width: 10, height: 150, xOffset: 270, yOffset: -115});
var rb_level1_wallRightBot = new RigidBody({width: 10, height: 150, xOffset: 270, yOffset: 115});
var rb_level1_wallBot = new RigidBody({width: 550, height: 10, xOffset: 0, yOffset: 190});



//var rb_level2_wallLeftBot = new RigidBody({width: 30, height: 250, xOffset: -280, yOffset: 170});
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
var rb_level3_wallRightTop = new RigidBody({width: 10, height: 150, xOffset: 270, yOffset: -115});
var rb_level3_wallRightBot = new RigidBody({width: 10, height: 150, xOffset: 270, yOffset: 115});
var rb_level3_wallBot = new RigidBody({width: 550, height: 10, xOffset: 0, yOffset: 190});
var rb_level3_MidTop = new RigidBody({width: 200, height: 10, xOffset: -150, yOffset: -50});
var rb_level3_MidBot = new RigidBody({width: 200, height: 10, xOffset: -150, yOffset: 50});




var rb_level4_wallLeft = new RigidBody({width: 10, height:400, xOffset: -270, yOffset: 0});
var rb_level4_wallTop = new RigidBody({width: 550, height: 10, xOffset: 0, yOffset: -190});
var rb_level4_wallRight = new RigidBody({width: 10, height: 400, xOffset: 270, yOffset: 0});
var rb_level4_wallBotLeft = new RigidBody({width: 430, height: 10, xOffset: -100, yOffset: 190});
var rb_level4_wallBotRight = new RigidBody({width: 60, height: 10, xOffset: 210, yOffset: 190});





var rb_level5_wallLeft = new RigidBody ({width: 40, height: 480, xOffset: -330, yOffset: 0});
var rb_level5_wallTop = new RigidBody ({width: 640, height: 10, xOffset: 0, yOffset: -230});
var rb_level5_wallRight = new RigidBody ({width: 40, height: 480, xOffset: 330, yOffset: 0});
var rb_level5_wallDownRight = new RigidBody ({width: 640, height: 10, xOffset: 200, yOffset: 195});
var rb_level5_wallDownLeft = new RigidBody ({width: 80, height: 10, xOffset: -280, yOffset: 195});
var rb_level5_wallInsideTop = new RigidBody ({width:640, height: 15, xOffset: 160, yOffset: -100});
var rb_level5_wallInsideBot = new RigidBody ({width:640, height: 15, xOffset: -160, yOffset: 95});
var rb_level5_wallInsideBot = new RigidBody ({width:640, height: 15, xOffset: -160, yOffset: 95});

var rb_level5_wallMidTop = new RigidBody ({width:540, height: 10, xOffset: 110, yOffset: -100});
var rb_level5_wallMidBot = new RigidBody ({width:540, height: 10, xOffset: -117, yOffset: 97});

var rb_level5_wallTop2 = new RigidBody({width: 75, height: 10, xOffset: 77, yOffset: -207, rotationOffset: 44 });
var rb_level5_wallTop3 = new RigidBody({width: 100, height: 10, xOffset: 170, yOffset: -182});

//var rb_level5_wallTop4 = new RigidBody({width: 75, height: 10, xOffset: 163, yOffset: -207, rotationOffset: 44 });   //For some reason this rotates the entire room so I have a placeholder below to provide collision
var rb_level5_wallTopPlace = new RigidBody({width: 60, height: 80, xOffset: 260, yOffset: -217})
var rb_bDoor5 = new RigidBody({ width: 70, height: 25 , xOffset: -2, yOffset: -10});
var rb_level5_lockedDoor = new RigidBody({ width: 70, height: 25 , xOffset: 500, yOffset: -200}); 



var rb_level11_wallLeft = new RigidBody({width:10, height:480, xOffset: -325});
var rb_level11_wallRight = new RigidBody({width:10, height:480, xOffset: 325});

var rb_level11_wallBottom1 = new RigidBody({ width: 215, height: 10, xOffset: -215, yOffset: 195 });
var rb_level11_wallBottom2 = new RigidBody({ width: 50, height: 10, xOffset: -97, yOffset: 214, rotationOffset: 59 });
var rb_level11_wallBottom3 = new RigidBody({ width: 185, height: 10, yOffset: 238 });
var rb_level11_wallBottom4 = new RigidBody({ width: 50, height: 10, xOffset: 97, yOffset: 214, rotationOffset: -59 });
var rb_level11_wallBottom5 = new RigidBody({ width: 215, height: 10, xOffset: 215, yOffset: 195 });

var rb_level11_wallTop1 = new RigidBody({width: 135, height: 10, xOffset: -255, yOffset: -230});
var rb_level11_wallTop2 = new RigidBody({width: 75, height: 10, xOffset: -163, yOffset: -207, rotationOffset: 44 });
var rb_level11_wallTop3 = new RigidBody({width: 85, height: 10, xOffset: -97, yOffset: -182});
var rb_level11_wallTop4 = new RigidBody({width: 75, height: 10, xOffset: 163, yOffset: -207, rotationOffset: -44 });
var rb_level11_wallTop5 = new RigidBody({width: 85, height: 10, xOffset: 97, yOffset: -182});
var rb_level11_wallTop6 = new RigidBody({width: 135, height: 10, xOffset: 255, yOffset: -230});








// Scripts

var script_sample = new sampleScript();
var script_movement = new movement();
var script_loadingCharacter = new LoadingCharacter();
var script_twoButtons = new twoButtons();
var script_characterRendering = new CharacterRendering();
var script_transition = new transition();
var script_oneButton = new oneButton();
var script_openDoor = new openDoor();
var script_piston = new piston();
var script_piston_up = new pistonUp();
var script_underPressure = new underPressure();
var script_pistonUnlockButton1 = new pistonUnlockButton(1);
var script_pistonUnlockButton3 = new pistonUnlockButton(3);



// GameObjects

var go_character = new GameObject();
go_character.addComponent(spr_tempChar, "sprite");
go_character.addComponent(rb_character, "body");
go_character.addComponent(script_movement, "movement");
go_character.addComponent(script_characterRendering, "Character Rendering");
//go_character.addComponent(spr_tempChar2, "sprite2");





//  Room GameObjects
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
go_room03.addComponent(rb_level3_wallTop, "top wall");
go_room03.addComponent(rb_level3_wallRightTop, "right wall top");
go_room03.addComponent(rb_level3_wallRightBot, "right wall bottom");
go_room03.addComponent(rb_level3_wallBot, "bottom wall");
go_room03.addComponent(rb_level3_MidTop, "middle wall top");
go_room03.addComponent(rb_level3_MidBot, "middle wall bottom");





var go_room04 = new GameObject();
go_room04.addComponent(spr_room04, "sprite");
go_room04.addComponent(rb_level4_wallLeft, "left wall");
go_room04.addComponent(rb_level4_wallRight, "down right wall");
go_room04.addComponent(rb_level4_wallTop, "top wall");
go_room04.addComponent(rb_level4_wallBotLeft, "left bot wall");
go_room04.addComponent(rb_level4_wallBotRight, "right bot wall");




var go_room05 = new GameObject();
go_room05.addComponent(spr_room05, "sprite");
go_room05.addComponent(rb_level5_wallLeft, "left wall");
go_room05.addComponent(rb_level5_wallTop, "top wall");
go_room05.addComponent(rb_level5_wallRight, "top wall");
go_room05.addComponent(rb_level5_wallDownLeft, "down left wall");
go_room05.addComponent(rb_level5_wallDownRight, "down right wall");
go_room05.addComponent(rb_level5_wallMidTop, "middle top wall");
go_room05.addComponent(rb_level5_wallMidBot, "middle bottom wall");
go_room05.addComponent(rb_level5_wallTop, "inside wall top");
go_room05.addComponent(rb_level5_wallTop2, "inside wall bottom");
go_room05.addComponent(rb_level5_wallTop3, "inside wall bottom");
//go_room05.addComponent(rb_level5_wallTop4, "inside wall bottom"); //causes the entire room to rotate for some reason 
go_room05.addComponent(rb_level5_wallTopPlace, "inside wall bottom");





var go_room11 = new GameObject();
go_room11.addComponent(spr_room11, "sprite");
go_room11.addComponent(rb_level11_wallLeft, "left wall");
go_room11.addComponent(rb_level11_wallRight, "right wall");
go_room11.addComponent(rb_level11_wallBottom1, "bottom wall 1");
go_room11.addComponent(rb_level11_wallBottom2, "bottom wall 2");
go_room11.addComponent(rb_level11_wallBottom3, "bottom wall 3");
go_room11.addComponent(rb_level11_wallBottom4, "bottom wall 4");
go_room11.addComponent(rb_level11_wallBottom5, "bottom wall 5");
go_room11.addComponent(rb_level11_wallTop1, "top wall 1");
go_room11.addComponent(rb_level11_wallTop2, "top wall 2");
go_room11.addComponent(rb_level11_wallTop3, "top wall 3");
go_room11.addComponent(rb_level11_wallTop4, "top wall 4");
go_room11.addComponent(rb_level11_wallTop5, "top wall 5");
go_room11.addComponent(rb_level11_wallTop6, "top wall 6");










var go_chainDoors = new GameObject();
//go_chainDoors.addComponent(spr_lockedDoor_l, "sprite_l");
//go_chainDoors.addComponent(spr_lockedDoor_r, "sprite_r");
go_chainDoors.addComponent(spr_greenDots, "shouldn't be here");
go_chainDoors.addComponent(spr_redDots, "shouldn't be here");


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
//go_piston2.addComponent(script_piston, "script");
go_piston2.addComponent(rb_spike, "spikes");
go_piston2.addComponent(rb_pistonBase, "body");

var go_piston_up2 = new GameObject();
go_piston_up2.addComponent(spr_piston_up, "sprite");
//go_piston_up2.addComponent(script_piston_up, "script");
go_piston_up2.addComponent(rb_spike_up, "spikes");
go_piston_up2.addComponent(rb_pistonBase_up, "body");


var go_blue1 = new GameObject({x:110,y:240});
go_blue1.addComponent(spr_blueUp, "sprite");
go_blue1.addComponent(rb_green, "body");

var go_lockedDoor1 = new GameObject();
go_lockedDoor1.addComponent(spr_chainDoorRightSmall, "sprite");

var go_bDoor1 = new GameObject({ x: 600, y: 240 });
go_bDoor1.addComponent(spr_lockedDoor_r, "sprite");
go_bDoor1.addComponent(rb_bDoor, "body");

var go_buttonSystem1 = new GameObject();
go_buttonSystem1.addComponent(go_blue1, "blue");
go_buttonSystem1.addComponent(go_bDoor1, "door");
go_buttonSystem1.addComponent(script_oneButton, "script");



var go_Door2 = new GameObject();
go_Door2.addComponent(spr_openDoor_r, "sprite");
go_Door2.addComponent(rb_bDoor2, "body");
go_Door2.addComponent(script_openDoor, "script");


var  go_lockedDoor2 = new GameObject();
go_lockedDoor2.addComponent(spr_chainDoorRight, "sprite");
go_lockedDoor2.addComponent(rb_level2_lockedDoor, "body");




var go_green3 = new GameObject({x:200,y:110});
go_green3.addComponent(spr_greenUp, "sprite");
go_green3.addComponent(rb_green, "body");

var go_red3 = new GameObject({ x: 200, y: 380 });
go_red3.addComponent(spr_redUp, "sprite");
go_red3.addComponent(rb_red, "body");

var go_bDoor3 = new GameObject({ x: 600, y: 240 });
go_bDoor3.addComponent(spr_dialDoors_leftSmall, "sprite");
go_bDoor3.addComponent(rb_bDoor, "body");

var go_buttonSystem3 = new GameObject();
go_buttonSystem3.addComponent(go_green3, "green");
go_buttonSystem3.addComponent(go_red3, "red");
go_buttonSystem3.addComponent(go_bDoor3, "door");
go_buttonSystem3.addComponent(script_twoButtons, "script");





var go_green5 = new GameObject({x:80,y:80});
go_green5.addComponent(spr_greenUp, "sprite");
go_green5.addComponent(rb_green, "body");

var go_red5 = new GameObject({ x: 550, y: 400 });
go_red5.addComponent(spr_redUp, "sprite");
go_red5.addComponent(rb_red, "body");

var go_bDoor5 = new GameObject({ x: 140, y: 450 });
go_bDoor5.addComponent(spr_dialDoors_up, "sprite");
go_bDoor5.addComponent(rb_bDoor5, "body");

var go_buttonSystem5 = new GameObject();
go_buttonSystem5.addComponent(go_green5, "green");
go_buttonSystem5.addComponent(go_red5, "red");
go_buttonSystem5.addComponent(go_bDoor5, "door");
go_buttonSystem5.addComponent(script_twoButtons, "script");

var  go_lockedDoor5 = new GameObject();
go_lockedDoor5.addComponent(spr_chainDoorDown, "sprite");
go_lockedDoor5.addComponent(rb_level5_lockedDoor, "body");



var go_green11 = new GameObject({x:100,y:250});
go_green11.addComponent(spr_greenUp, "sprite");
go_green11.addComponent(rb_green, "body");

var go_red11 = new GameObject({ x: 540, y: 250 });
go_red11.addComponent(spr_redUp, "sprite");
go_red11.addComponent(rb_red, "body");

var go_bDoor11 = new GameObject({ x: 320, y: 43 });
go_bDoor11.addComponent(spr_dialDoors, "sprite");
go_bDoor11.addComponent(rb_bDoor, "body");

var go_buttonSystem11 = new GameObject();
go_buttonSystem11.addComponent(go_green11, "green");
go_buttonSystem11.addComponent(go_red11, "red");
go_buttonSystem11.addComponent(go_bDoor11, "door");
go_buttonSystem11.addComponent(script_twoButtons, "script");


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

var go_blue2 = new GameObject({x:110,y:100});
go_blue2.addComponent(spr_blueUp2, "sprite");
go_blue2.addComponent(rb_green, "body");
go_blue2.addComponent(script_pistonUnlockButton1, "button1Script");

var go_blue3 = new GameObject({x:110,y:380});
go_blue3.addComponent(spr_blueUp, "sprite");
go_blue3.addComponent(rb_green, "body");
go_blue3.addComponent(script_pistonUnlockButton3, "button3Script");


var go_pressurePlateSystem = new GameObject();
go_pressurePlateSystem.addComponent(go_blue2, "button1");
go_pressurePlateSystem.addComponent(go_blue3, "button2");

//go_pressurePlateSystem.addComponent(script_pistonUnlockButton3, "button3Script");
go_pressurePlateSystem.addComponent(script_underPressure, "master");




