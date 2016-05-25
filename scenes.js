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

// Level 1
var Level_1 = new Scene("Level 1");
Level_1.onLoad = function()
{
  Level_1.add(go_character, {x:320, y:240, name: "Main Character"});
  Level_1.add(go_room01, {x:320, y:240, z:-3});
  Level_1.add(go_chainDoors, {x:320, y:447.6, z:-2});
  Level_1.add(go_buttonSystem, {z:-2, name: "Button System"});
  
  //Level_1.add(go_SampleObject, {name: "test", x:320, y:240, z:5})
  //Level_1.add(go_speedGauge, {name: "guage", x: 320,y: 240,z:5})
}

// Level 2
var Level_2 = new Scene("Level 2");
Level_2.onLoad = function()
{
  Level_2.add(go_character, {x:320, y:240, name: "Main Character"});
}