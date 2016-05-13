// Main Menu
var MainMenu = new Scene("Main Menu");
MainMenu.onLoad = function()
{
  MainMenu.add(go_character, {x:320, y:240});
  MainMenu.add(go_room01, {x:320, y:240, z:-2});
}
