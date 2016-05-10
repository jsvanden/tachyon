// Sprites

var spr_john = new Sprite('resources/john.jpg', {width: 200, height: 200});

// Rigid Body

var rb_test = new RigidBody();

// Scripts

var script_sample = new sampleScript();

// GameObjects

var go_SampleGameObject = new GameObject();
go_SampleGameObject.addComponent(spr_john, "john");
go_SampleGameObject.addComponent(script_sample, "consoleLog");
go_SampleGameObject.addComponent(rb_test, "physics");