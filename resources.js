// Sprites

var spr_john = new Sprite('resources/john.jpg', {width: 100, height: 100});

// Rigid Body

var rb_test = new RigidBody({width: 200, height:200, radius:100, shape:"square"});
var rb_test2 = new RigidBody({isTrigger:true, isDynamic:true, width: 200, height:200, radius:100, shape:"square"});

// Scripts

var script_sample = new sampleScript();

// GameObjects

var go_SampleGameObject = new GameObject();
go_SampleGameObject.addComponent(spr_john, "john");
//go_SampleGameObject.addComponent(script_sample, "consoleLog");
go_SampleGameObject.addComponent(rb_test, "physics");

var go_SampleGameObject2 = new GameObject();
go_SampleGameObject2.addComponent(spr_john, "john");
go_SampleGameObject2.addComponent(rb_test2, "physics");
go_SampleGameObject2.addComponent(script_sample, "consoleLog");