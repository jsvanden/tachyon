// Sprites

var spr_john = new Sprite('resources/john.jpg');

// Rigid Body

var rb_character = new RigidBody({isDynamic: true});

// Scripts

var script_sample = new sampleScript();
var script_movement = new movement();

// GameObjects

var go_character = new GameObject();
go_character.addComponent(spr_john, "sprite");
go_character.addComponent(rb_character, "body");
go_character.addComponent(script_movement, "movement");

/*
var go_SampleGameObject = new GameObject();
go_SampleGameObject.addComponent(spr_john, "john");
//go_SampleGameObject.addComponent(script_sample, "consoleLog");
go_SampleGameObject.addComponent(rb_test, "physics");

var go_SampleGameObject2 = new GameObject();
go_SampleGameObject2.addComponent(spr_john, "john");
go_SampleGameObject2.addComponent(rb_test2, "physics");
go_SampleGameObject2.addComponent(script_sample, "consoleLog");
*/