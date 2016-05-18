function CharacterRendering()
{	
  var yellow = 'resources/images/YChar.png';

  this.start = function()
  {
	this.parent.getComponent("sprite").image.src = yellow;
	  
	this.parent.getComponent("sprite").draw = function()
	{
		context.save();
		context.translate(this.parent.x+this.xOffset, this.parent.y+this.yOffset);
		context.rotate(this.parent.rotation * (Math.PI/180));
		if(this.flipped) context.scale(-1, 1);
		context.drawImage(this.image, -this.width/2,-this.height/2, this.width, this.height);
		context.restore();
	}
  }
}