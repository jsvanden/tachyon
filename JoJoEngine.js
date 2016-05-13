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
  var b2Listener = Box2D.Dynamics.b2ContactListener;

  var SCALE = 30;
  
  //World
  var world = new b2World(new b2Vec2(0,0), true);
  var debugDraw = new b2DebugDraw();

  var listener = new b2Listener;
  world.SetContactListener(listener);
  
  listener.BeginContact = function(contact)
  {
    if(contact.m_fixtureA.m_parent.isTrigger)
    {
      var trigger = contact.m_fixtureA.m_parent.parent;
      var collider = contact.m_fixtureB.m_parent.parent;
      
      for (var i=0; i<trigger.componentList.length; i++)
      {
        if (typeof trigger.componentList[i].object.onTriggerEnter === "function")
        {
          trigger.componentList[i].object.onTriggerEnter(collider);
        }
      }
    }
    
    if(contact.m_fixtureB.m_parent.isTrigger)
    {
      var trigger = contact.m_fixtureB.m_parent.parent;
      var collider = contact.m_fixtureA.m_parent.parent;
      
      for (var i=0; i<trigger.componentList.length; i++)
      {
        if (typeof trigger.componentList[i].object.onTriggerEnter === "function")
        {
          trigger.componentList[i].object.onTriggerEnter(collider);
        }
      }
    }
  }
  
  listener.EndContact = function(contact)
  {
    if(contact.m_fixtureA.m_parent.isTrigger)
    {
      var trigger = contact.m_fixtureA.m_parent.parent;
      var collider = contact.m_fixtureB.m_parent.parent;
      
      for (var i=0; i<trigger.componentList.length; i++)
      {
        if (typeof trigger.componentList[i].object.onTriggerExit === "function")
        {
          trigger.componentList[i].object.onTriggerExit(collider);
        }
      }
    }
    
    if(contact.m_fixtureB.m_parent.isTrigger)
    {
      var trigger = contact.m_fixtureB.m_parent.parent;
      var collider = contact.m_fixtureA.m_parent.parent;
      
      for (var i=0; i<trigger.componentList.length; i++)
      {
        if (typeof trigger.componentList[i].object.onTriggerExit === "function")
        {
          trigger.componentList[i].object.onTriggerExit(collider);
        }
      }
    }
  }
  
//---------------------------------------------
var g_inputManager;

function InputManager()
{
  g_inputManager = this;
  
  this.inputs = new Array();
  this.mouse = {isDown: false, x:0, y:0};
  
  this.add = function(name, codes)
  {
    this.inputs.push({name: name, codes: codes, pressed: false});
  }
  
  this.isPressed = function(button)
  {
    for(var i=0; i<this.inputs.length; i++)
    {
      if (this.inputs[i].name == button)
      {
        return (this.inputs[i].pressed);
      }
    }
    return false;
  }
  
  this.mouseDown = function(event)
  {
    this.mouse.isDown = true;
    this.mouse.x = event.pageX - canvas.offsetLeft;
    this.mouse.y = event.pageY - canvas.offsetTop;
  }
  
  this.mouseUp = function(event)
  {
    this.mouse.isDown = false;
  }
  
  this.keyDown = function(event)
  {
    for(var i=0; i<this.inputs.length; i++)
    {
      for(k=0; k<this.inputs[i].codes.length; k++)
      {
        if(event.keyCode == this.inputs[i].codes[k])
        {
          this.inputs[i].pressed = true;
        }
      }
    }
  }
  
  this.keyUp = function(event)
  {
    for(var i=0; i<this.inputs.length; i++)
    {
      for(k=0; k<this.inputs[i].codes.length; k++)
      {
        if(event.keyCode == this.inputs[i].codes[k])
        {
          this.inputs[i].pressed = false;
        }
      }
    }
  }
  
  canvas.onmousedown = function(event)
  {
    g_inputManager.mouseDown(event);
  }
  canvas.onmouseup = function(event)
  {
    g_inputManager.mouseUp(event);
  }
  document.onkeydown = function(event)
  {
    g_inputManager.keyDown(event);
  }
  document.onkeyup = function(event)
  {
    g_inputManager.keyUp(event);
  }
}

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
  
  this.camera = new Camera();
  
  this.setCamera = function(x,y)
  {
    var deltaX = x - this.camera.x;
    var deltaY = y - this.camera.y;
    
    this.camera.x = x;
    this.camera.y = y;
    
    for (var i=0; i<this.gameObjects.length; i++)
    {
      this.gameObjects[i].setTransform({x: this.gameObjects[i].x + deltaX, y: this.gameObjects[i].y + deltaY});
    }
  }
  
  this.gameObjects = new Array();
  
  this.add = function(gameObject, options)
  {
    this.options = options || {};
    var temp = Object.create(gameObject);
    temp.x = (this.options.x + temp.x + this.camera.x) || temp.x + this.camera.x;
    temp.y = (this.options.y + temp.y + this.camera.y) || temp.y + this.camera.y;
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
  
  this.clear = function()
  {
    this.gameObjects = [];
  }
}

function Camera()
{
  this.x = 0;
  this.y = 0;
}

//---------------------------------------------

function SceneManager()
{
  this.init = function()
  {
    debugDraw.SetSprite(context);
    debugDraw.SetDrawScale(SCALE);
    debugDraw.SetFillAlpha(1);
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
    //world.DestroyWorld();
    world = new b2World(new b2Vec2(0,0), true);
    world.SetContactListener(listener);
    world.SetDebugDraw(debugDraw);
    
    for (var i=0; i<this.activeScenes.length; i++)
    {
      this.activeScenes[i].clear();
    }
    
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
        
        for(var k=0; k<g_sceneList[i].gameObjects.length; k++)
        {
          for(var j=0; j<g_sceneList[i].gameObjects[k].componentList.length; j++)
          {
            if(typeof g_sceneList[i].gameObjects[k].componentList[j].object.start == "function")
            {
              g_sceneList[i].gameObjects[k].componentList[j].object.start();
            }
          }
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

  this.setTransform = function(options) 
  {
    var options = options || {};
    this.x = options.x || this.x;
    this.y = options.y || this.y;
    this.z = options.z || this.z;
    this.rotation = options.rotation || this.rotation;
    
    for (var i=0; i<this.componentList.length; i++)
    {
      var temp = this.componentList[i].object;
      
    	if (temp.constructor.name == "RigidBody")
      {
        temp.body.GetBody().SetPositionAndAngle(new b2Vec2(((this.x+temp.xOffset)/SCALE),
        (this.y+temp.yOffset)/SCALE),
        (this.rotation+temp.rotationOffset)*(Math.PI / 180));
      }
    }
  }
  
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

function RigidBody(options)
{
  this.options = options || {};
  
  var fixDef = new b2FixtureDef;
  fixDef.density = this.options.density || 1.0;
  fixDef.friction = this.options.friction || 0.5;
  fixDef.restitution = this.options.restitution || 0.2;
  this.isTrigger = this.options.isTrigger || false;
  fixDef.isSensor = (this.isTrigger) ? true : false;
  
  var bodyDef = new b2BodyDef;
  this.isDynamic = this.options.isDynamic || false;
  bodyDef.type = (this.isDynamic) ? b2Body.b2_dynamicBody : b2Body.b2_staticBody;
  this.xOffset = (this.options.xOffset) || 0;
  this.yOffset = (this.options.yOffset) || 0;
  this.rotationOffset = this.options.rotationOffset || 0;
  
  this.shape = this.options.shape || "square";
  fixDef.shape = new b2PolygonShape;
  
  if(this.shape == "square")
  {
    this.width = this.options.width || 50;
    this.height = this.options.height || 50;
    fixDef.shape.SetAsBox((this.width/SCALE)/2, (this.height/SCALE)/2);
  }
  if(this.shape == "circle")
  {
    var circleShape = new b2CircleShape;
    circleShape.m_p.Set(0, 0); //position, relative to body position
    circleShape.m_radius = this.options.radius/SCALE || 50/SCALE; //radius
    fixDef.shape = circleShape;
  }
  
  this.body;

  this.start = function()
  {
    bodyDef.position.x = (this.parent.x+this.xOffset)/SCALE;
    bodyDef.position.y = (this.parent.y+this.yOffset)/SCALE;
    bodyDef.angle = (this.parent.rotation+this.rotationOffset)*(Math.PI / 180);
    this.body = world.CreateBody(bodyDef).CreateFixture(fixDef);
    this.body.m_parent = this;
  }

  this.applyImpulse = function(degrees, power)
  {
    this.body.m_body.ApplyImpulse(new b2Vec2(Math.cos(degrees * (Math.PI / 180)) * power,
                                 -Math.sin(degrees * (Math.PI / 180)) * power),
                                 this.body.m_body.GetWorldCenter());
    this.parent.x = this.body.GetBody().GetPosition().x*SCALE - this.xOffset;
    this.parent.y = this.body.GetBody().GetPosition().y*SCALE - this.yOffset;
    this.parent.rotation = this.body.GetBody().GetAngle()*(180 / Math.PI);
  }
  
  this.applyForce = function(degrees, power)
  {
    this.body.m_body.ApplyForce(new b2Vec2(Math.cos(degrees * (Math.PI / 180)) * power,
                                 -Math.sin(degrees * (Math.PI / 180)) * power),
                                 this.body.m_body.GetWorldCenter());
    this.parent.x = (this.body.GetBody().GetPosition().x)*SCALE - this.xOffset;
    this.parent.y = (this.body.GetBody().GetPosition().y)*SCALE - this.yOffset;
    this.parent.rotation = this.body.GetBody().GetAngle()*(180 / Math.PI);
  }
  
  this.getVelocityMagnitude = function()
  {
    return Math.abs(this.body.GetBody().GetLinearVelocity().x) + Math.abs(this.body.GetBody().GetLinearVelocity().y);
  }
  
  this.setVelocityMagnitude = function(newMagnitude)
  {
    var oldMagnitude = this.getVelocityMagnitude();
    if(oldMagnitude == 0 || newMagnitude < 0)
    {
      console.log("Cannot complete setVelocityMagnitude()")
      return;
    }
    
    var ratio = newMagnitude / oldMagnitude;
    var newX = this.body.GetBody().GetLinearVelocity().x * ratio;
    var newY = this.body.GetBody().GetLinearVelocity().y * ratio;
    
    this.body.GetBody().SetLinearVelocity(new b2Vec2(newX, newY));
  }
  
  this.update = function()
  {
    if(this.parent.x != this.body.GetBody().GetPosition().x*SCALE - this.xOffset);
      this.parent.x = this.body.GetBody().GetPosition().x*SCALE - this.xOffset;
      
    if(this.parent.y != this.body.GetBody().GetPosition().y*SCALE - this.yOffset)
      this.parent.y = this.body.GetBody().GetPosition().y*SCALE - this.yOffset;
    
    if(this.parent.rotation != this.body.GetBody().GetAngle()*(180 / Math.PI))
      this.parent.rotation = this.body.GetBody().GetAngle()*(180 / Math.PI);
  }
}










