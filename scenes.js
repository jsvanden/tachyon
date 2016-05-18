// Main Menu
var MainMenu = new Scene("Main Menu");
MainMenu.onLoad = function()
{
  MainMenu.add(go_mainMenu, {x:320, y:240});
}

// Level 1
var Level_1 = new Scene("Level 1");
Level_1.onLoad = function()
{
  Level_1.add(go_character, {x:320, y:240, name: "Main Character"});
  Level_1.add(go_room01, {x:320, y:240, z:-2});
  Level_1.add(go_buttonSystem, {z:-1});
}
