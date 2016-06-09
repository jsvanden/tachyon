// Main Menu
var MainMenu = new Scene("Main Menu");
MainMenu.onLoad = function()
{
  MainMenu.add(go_character, {x:320, y:240, name: "Main Character"});
  MainMenu.add(go_mainMenu, {x:320, y:240});
}

// Transition Level
var TransitionLevel = new Scene("Transition Level");
TransitionLevel.onLoad = function()
{
  TransitionLevel.add(go_transition, {x:320, y:240});
  AudioManager.play('resources/music/waaauup.mp3', "Transition Sound", {loop: false});
  AudioManager.setVolume("Level 1 Song", 0);
}

//Level 1
var Level_1 = new Scene("Level 1");
Level_1.onLoad = function()
{
  if(!AudioManager.musicMuted) AudioManager.setVolume("Level 1 Song", 1);
  Level_1.add(go_character, {x:320, y:240, name: "Main Character"});
  Level_1.add(go_room01, {x:320, y:240, z:-3});
  Level_1.add(go_lockedDoor1, {x:40, y:240, z:-3});
  Level_1.add(go_buttonSystem1, {z:-2, name: "Button System"});
}

// Level 2
var Level_2 = new Scene("Level 2");
Level_2.onLoad = function()
{
  if(!AudioManager.musicMuted) AudioManager.setVolume("Level 1 Song", 1);
  Level_2.add(go_character, {x:120, y:240, name: "Main Character"});
  Level_2.add(go_room02, {x:320, y:240, z:-3});
  Level_2.add(go_lockedDoor2, {x:30, y:230, z:-2});
  
  Level_2.add(go_piston, {x:200, y:1, z:-2});
  Level_2.add(go_piston, {x:300, y:1, z:-2});
  Level_2.add(go_piston, {x:400, y:1, z:-2});
  Level_2.add(go_piston_up, {x:200, y:500, z:-2});
  Level_2.add(go_piston_up, {x:300, y:500, z:-2});
  Level_2.add(go_piston_up, {x:400, y:500, z:-2});
  
  Level_2.add(go_Door2, {x:610, y: 232});
}

// Level 3
var Level_3 = new Scene("Level 3");
Level_3.onLoad = function()
{
  if(!AudioManager.musicMuted) AudioManager.setVolume("Level 1 Song", 1);
  Level_3.add(go_character, {x:80, y:240, name: "Main Character"});
  Level_3.add(go_room03, {x:320, y:240, z:-3});
  Level_3.add(go_lockedDoor3, {x:40, y:240, z:-3});
  Level_3.add(go_piston, {x:200, y:30, z:-2});
  Level_3.add(go_piston, {x:400, y:-11, z:-2});
  Level_3.add(go_piston_up, {x:200, y:530, z:-2});
  Level_3.add(go_piston_up, {x:400, y:490, z:-2});
  Level_3.add(go_Door3, {x:470, y: 445});
} 

var Level_4 = new Scene("Level 4");
Level_4.onLoad = function()
{
  if(!AudioManager.musicMuted) AudioManager.setVolume("Level 1 Song", 1);
  Level_4.add(go_character, {x:120, y:240, name: "Main Character"});
  Level_4.add(go_room02, {x:320, y:240, z:-3});
  Level_4.add(go_lockedDoor2, {x:30, y:230, z:-2});
  
  Level_4.add(go_piston2, {name: "piston1a", x:280, y:101, z:-2});
  Level_4.add(go_piston2, {name: "piston3a", x:360, y:101, z:-2});
  Level_4.add(go_piston_up2, {name: "piston1b", x:280, y:400, z:-2});
  Level_4.add(go_piston_up2, {name: "piston3b", x:360, y:400, z:-2});
  
  Level_4.add(go_Door2, {x:610, y: 232});
  
  Level_4.add(go_pressurePlateSystem1, {name: "buttons", z:-2})
}

var Level_5 = new Scene("Level 5");
Level_5.onLoad = function()
{
  if(!AudioManager.musicMuted) AudioManager.setVolume("Level 1 Song", 1);
  Level_5.add(go_character, {x:120, y:240, name: "Main Character"});
  Level_5.add(go_room02, {x:320, y:240, z:-3});
  Level_5.add(go_lockedDoor2, {x:30, y:230, z:-2});
  
  Level_5.add(go_piston2, {name: "piston1a", x:260, y:101, z:-2});
  Level_5.add(go_piston2, {name: "piston2a", x:340, y:101, z:-2});
  Level_5.add(go_piston2, {name: "piston3a", x:420, y:101, z:-2});
  Level_5.add(go_piston_up2, {name: "piston1b", x:260, y:400, z:-2});
  Level_5.add(go_piston_up2, {name: "piston2b", x:340, y:400, z:-2});
  Level_5.add(go_piston_up2, {name: "piston3b", x:420, y:400, z:-2});
  
  Level_5.add(go_Door2, {x:610, y: 232});
  
  Level_5.add(go_pressurePlateSystem2, {name: "buttons", z:-2})
}