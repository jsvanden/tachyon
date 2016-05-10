// To-Do List
//  Pause
//  Audio
//  Input
//  Reload Scene


window.requestAnimFrame = (
  function()
  {
    return  window.requestAnimationFrame || 
      window.webkitRequestAnimationFrame || 
      window.mozRequestAnimationFrame    || 
      window.oRequestAnimationFrame      || 
      window.msRequestAnimationFrame     || 
      function(/* function */ callback, /* DOMElement */ element)
    	{
      	window.setTimeout(callback, 1000 / 60);
    	};
  })();

  //Box2D setup
  var b2Vec2 = Box2D.Common.Math.b2Vec2;
  var b2BodyDef = Box2D.Dynamics.b2BodyDef;
  var b2Body = Box2D.Dynamics.b2Body;
  var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
  var b2Fixture = Box2D.Dynamics.b2Fixture;
  var b2World = Box2D.Dynamics.b2World;
  var b2MassData = Box2D.Collision.Shapes.b2MassData;
  var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
  var b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;
  var b2DebugDraw = Box2D.Dynamics.b2DebugDraw;

  var SCALE = 30;
  
  //World
  var world = new b2World(new b2Vec2(0,0), true);
  var debugDraw = new b2DebugDraw();

  
  
//---------------------------------------------
//---------------------------------------------
//---------------------------------------------

var g_sceneList = new Array();
var sceneManager = new SceneManager();

//---------------------------------------------

function Scene(name)
{
  this.name = name || "Untitled";
  this.isPaused = false;
  g_sceneList.push(this);
  
  this.gameObjects = new Array();
  
  this.add = function(gameObject, options)
  {
    this.options = options || {};
    var temp = Object.create(gameObject);
    temp.x = (this.options.x + temp.x) || temp.x;
    temp.y = (this.options.y + temp.y) || temp.y;
    temp.z = (this.options.z + temp.z) || temp.z;
    temp.rotation = (this.options.rotation + temp.rotation) || temp.rotation;
    temp.copyComponents(gameObject);
    temp.scene = this;
    this.gameObjects.push(temp);
    return temp;
  }
  
  this.update = function()
  {
  	for (var i=0; i<this.gameObjects.length; i++)
    {
      this.gameObjects[i].update();
    }
  }
  
  this.draw = function()
  {
  	for (var i=0; i<this.gameObjects.length; i++)
    {
      this.gameObjects[i].draw();
    }
  }
}

//---------------------------------------------

function SceneManager()
{
  this.init = function()
  {
    debugDraw.SetSprite(context);
    debugDraw.SetDrawScale(SCALE);
    debugDraw.SetFillAlpha(0.3);
    debugDraw.SetLineThickness(1.0);
    debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
    world.SetDebugDraw(debugDraw);
  }
  
  this.activeScenes = new Array();
  
  for (var i=0; i<this.activeScenes.length; i++)
  {
    this.activeScenes[i].parent = this;
  }
  
  this.play = function(name)
  {
    this.activeScenes = [];
    
    for (var i=0; i<g_sceneList.length; i++)
    {
      if(g_sceneList[i].name == name)
      {
        this.activeScenes.push(g_sceneList[i]);
        
        if(typeof g_sceneList[i].onLoad === "function")
        {
          g_sceneList[i].onLoad();
        }
      }
    }
  }
  
  this.push = function(name)
  {
    for (var i=0; i<g_sceneList.length; i++)
    {
      if(g_sceneList[i].name == name)
      {
        this.activeScenes.push(g_sceneList[i]);
      }
    }
  }
  
  this.pop = function()
  {
    this.activeScenes.pop();
  }
  
  this.run = function()
  {
    world.Step(1/60, 10, 10);
    world.DrawDebugData();
    world.ClearForces();
    
    sceneManager.update();
    sceneManager.draw(); 
    
    requestAnimFrame(sceneManager.run);
  }
  
  this.update = function()
  {
    for (var i=0; i<this.activeScenes.length; i++)
    {
      this.activeScenes[i].update();
    }
  }
  
  this.draw = function()
  {    
    for (var i=0; i<this.activeScenes.length; i++)
    {
      this.activeScenes[i].draw();
    }
    
    context.rect(0,0,canvas.width, canvas.height);
    context.strokeStyle = '#000000';
    context.stroke();
  }
}






function GameObject(options)
{
  this.options = options || {};
  
	this.x = this.options.x || 0;
  this.y = this.options.y || 0;
  this.z = this.options.z || 0;
  this.rotation = this.options.rotation || 0;
  this.zPrev = 0;

	this.componentList = new Array();
  
  this.addComponent = function(object, name)
  {
  	if(typeof name !== 'string')
    {
    	throw "addComponent given invalid name";
    }
    
  	this.object = Object.create(object);
  	this.componentList.push({object:this.object, name:name});
    this.object.parent = this;
  }
  
  this.copyComponents = function(original)
  {
    this.componentList = [];
    
    for (var i=0; i<original.componentList.length; i++)
    {
      this.addComponent(original.componentList[i].object, original.componentList[i].name)
    }
  }
  
  this.getComponent = function(name)
  {
  	for (var i=0; i<this.componentList.length; i++)
    {
    	if (this.componentList[i].name == name)
      {
      	return this.componentList[i].object;
      }
    }
  }
  
  this.draw = function()
  {
  	for (var i=0; i<this.componentList.length; i++)
    {
    	if (typeof this.componentList[i].object.draw === "function")
      {
      	this.componentList[i].object.draw();
      }
    }
  }
  
  this.update = function()
  {
    if(this.zPrev != this.z)
    {
      this.scene.gameObjects.sort(function(a,b){return a.z-b.z})
    }
    
  	for (var i=0; i<this.componentList.length; i++)
    {
    	if (typeof this.componentList[i].object.update === "function")
      {
      	this.componentList[i].object.update();
      }
    }
  }
}

//-------------------------------------------------------------

function Sprite(source, options)
{
	this.options = options || {};
  
  this.image = new Image();
  this.image.src = source;
  this.width = this.options.width || 50;
  this.height = this.options.height || 50;
  this.xOffset = this.options.xOffset || 0;
  this.yOffset = this.options.yOffset || 0;
  this.flipped = this.options.flipped || false;
  
  this.draw = function()
  {
  	context.save();
    context.translate(this.parent.x+this.xOffset, this.parent.y+this.yOffset);
    context.rotate(this.parent.rotation * (Math.PI/180));
    if(this.flipped) context.scale(-1, 1);
  	context.drawImage(this.image, -this.width/2,-this.height/2, this.width, this.height);
    context.restore();
  }
}

//-------------------------------------------------------------

function RigidBody()
{
  var fixDef = new b2FixtureDef;
  fixDef.density = 1.0;
  fixDef.friction = 0.5;
  fixDef.restitution = 0.2;
  
  var bodyDef = new b2BodyDef;
  //bodyDef.type = b2Body.b2_staticBody;
  bodyDef.type = b2Body.b2_dynamicBody;
  bodyDef.position.x = 250/SCALE;
  bodyDef.position.y = 250 / SCALE;
  
  fixDef.shape = new b2PolygonShape;
  fixDef.shape.SetAsBox((200/SCALE)/2, (200/SCALE)/2);

  var body = world.CreateBody(bodyDef).CreateFixture(fixDef);

  this.applyImpulse = function(degrees, power)
  {
    body.m_body.ApplyImpulse(new b2Vec2(Math.cos(degrees * (Math.PI / 180)) * power,
                                 Math.sin(degrees * (Math.PI / 180)) * power),
                                 body.m_body.GetWorldCenter());
  }
  
  this.update = function()
  {
    this.applyImpulse(0,1);
  }
}






