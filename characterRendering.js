function CharacterRendering()
{	
  this.white = 'resources/images/WChar.png';
	this.blue = 'resources/images/BChar.png';
	this.green = 'resources/images/GChar.png';
	this.yellow = 'resources/images/YChar.png';
	this.red = 'resources/images/RChar.png';
	
	this.movement;
	this.sprite;
	
	this.start = function()
	{
		this.movement = this.parent.getComponent("movement");
		this.sprite = this.parent.getComponent("sprite");
		
		this.sprite.image.src = this.white;
		this.sprite.draw = function()
		{
			context.save();
			context.translate(this.parent.x+this.xOffset, this.parent.y+this.yOffset);
			context.rotate(this.parent.rotation * (Math.PI/180));
			if(this.flipped) context.scale(-1, 1);
			context.drawImage(this.image, -this.width/2,-this.height/2, this.width, this.height);
			context.restore();
		}
		
		this.update = function()
		{
			console.log(this.movement);
		}
	}
}