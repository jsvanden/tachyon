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
}

//Level 1
var Level_1 = new Scene("Level 1");
Level_1.onLoad = function()
{
  Level_1.add(go_character, {x:320, y:240, name: "Main Character"});
  Level_1.add(go_room01, {x:320, y:240, z:-3});
  Level_1.add(go_buttonSystem1, {z:-2, name: "Button System"});
}

// Level 2
var Level_2 = new Scene("Level 2");
Level_2.onLoad = function()
{
  Level_2.add(go_character, {x:320, y:240, name: "Main Character"});
  Level_2.add(go_room02, {x:320, y:240, z:-3});
  Level_2.add(go_piston, {x:400, y:240, z:-2});
}

// Level 3
var Level_3 = new Scene("Level 3");
Level_3.onLoad = function()
{
  Level_3.add(go_character, {x:500, y:90, name: "Main Character"});
  Level_3.add(go_room03, {x:320, y:240, z:-3});
  Level_3.add(go_buttonSystem3, {z:-2, name: "Button System"})
}

// Level 4
var Level_4 = new Scene("Level 4");
{
  Level_4.add(go_character, {x:40, y:240, name: "Main Character"});
  Level_4.add(go_room04, {x:480, y:240, z:-1});
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