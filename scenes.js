// Main Menu
var MainMenu = new Scene("Main Menu");
MainMenu.onLoad = function()
{
  MainMenu.add(go_character, {x:320, y:240, name: "Main Character"});
  MainMenu.add(go_mainMenu, {x:320, y:240});
}

// Transition Levela

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
  AudioManager.setVolume("Level 1 Song", 1);
  Level_1.add(go_character, {x:320, y:240, name: "Main Character"});
  Level_1.add(go_room01, {x:320, y:240, z:-3});
  Level_1.add(go_lockedDoor1, {x:40, y:240, z:-3});
  Level_1.add(go_buttonSystem1, {z:-2, name: "Button System"});
}

// Level 2
var Level_2 = new Scene("Level 2");
Level_2.onLoad = function()
{
  AudioManager.setVolume("Level 1 Song", 1);
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

//Level 3
var Level_3 = new Scene("Level 3");
Level_3.onLoad = function()
{
  Level_3.add(go_character, {x:100, y:240, name: "Main Character"});
  Level_3.add(go_room03, {x:320, y:240, z:-4});
  Level_3.add(go_piston, {x:200, y:-120, z:-2});
  Level_3.add(go_piston_up, {x:200, y:600, z:-2});
  Level_3.add(go_buttonSystem3, {z:-3, name: "Button System"})
  Level_3.add(go_lockedDoor1, {x:40, y:240, z:-2});
}
  

  

// Level 4
var Level_4 = new Scene("Level 4");
{
  Level_4.add(go_character, {x:80, y:240, name: "Main Character"});
  Level_4.add(go_room04, {x:320, y:240, z:-3});
  Level_4.add(go_lockedDoor2, {x:40, y:240, z:-1});
  Level_4.add(go_piston, {x:200, y:30, z:-2});
  Level_4.add(go_piston, {x:400, y:-10, z:-2});
  Level_4.add(go_piston_up, {x:200, y:530, z:-2});
  Level_4.add(go_piston_up, {x:400, y:490, z:-2});
} 


// Level 5
var Level_5 = new Scene("Level 5");
Level_5.onLoad = function()
{
  Level_5.add(go_character, {x:500, y:90, name: "Main Character"});
  Level_5.add(go_room05, {x:320, y:240, z:-3});
  Level_5.add(go_buttonSystem5, {z:-2, name: "Button System"})
  Level_5.add(go_lockedDoor5, {x:495, y:45, z:-2});
  
}


// Level 11

var Level_11 = new Scene("Level 11");
Level_11.onLoad = function()
{
  Level_11.add(go_character, {x:320, y:240, name: "Main Character"});
  Level_11.add(go_room01, {x:320, y:240, z:-3});
  Level_11.add(go_chainDoors, {x:320, y:447.6, z:-2});
  Level_11.add(go_buttonSystem11, {z:-2, name: "Button System"});
  
  //Level_1.add(go_SampleObject, {name: "test", x:320, y:240, z:5})
  //Level_1.add(go_speedGauge, {name: "guage", x: 320,y: 240,z:5})
}