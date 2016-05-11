# API

## Scene Manager ()

###Functions

**init()**

**play(name)**

**push(name)**

**pop()**

**run()**

## Scene (name)

###Parameters

**name**

###Functions

**setCamera(x,y)**

**add(gameObject, options)** *{x, y, z, rotation}*

## GameObect (options)

###Parameters

**options** *{x, y, z, rotation}*

###Functions

**setTransform(options)** *{x, y, z, rotation}*

**addComponent(object, name)**

**getComponent(name)**

## Sprite (source, options)

###Parameters

**source**

**options** *{width, height, xOffset, yOffset, flipped}*

## RigidBody (options)

###Parameters

**options** *{density, friction, restitution, isDynamic, xOffset, yOffset, shape, width, height, radius}*

###Functions

**applyImpulse(degrees, power)**

**applyForce(degrees, power)**

**getVelocityMagnitude()**

**setVelocityMagnitude(newMagnitude)**