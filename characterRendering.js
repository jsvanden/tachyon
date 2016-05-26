function CharacterRendering()
{	
	this.movement;
	this.sprite;
	
	var percent = 1.1;
	
	this.start = function()
	{
		this.sprite = this.parent.getComponent("sprite");
		this.sprite.movement = this.parent.getComponent("movement");
		
		this.sprite.prevTier = this.sprite.movement.tier;
		
		this.sprite.white = 'resources/images/W.png';
		this.sprite.blue = 'resources/images/B.png';
    //this.sprite.blueFill = 'resources/images/B.png';
		this.sprite.green = 'resources/images/G.png';
		//this.sprite.greenFill = 'resources/images/G.png';
		this.sprite.yellow = 'resources/images/Y.png';
		//this.sprite.yellowFill = 'resources/images/Y.png';
		this.sprite.red = 'resources/images/R.png';
		//this.sprite.redFill = 'resources/images/R.png';
		
		this.sprite.image.src = this.sprite.white;
		this.sprite.imageTop = new Image();
		this.sprite.imageTop.src = this.sprite.blue;
    this.sprite.imageShadow = new Image();
    this.sprite.imageShadow.src = 'resources/images/Shadow.png'
		
		this.sprite.draw = function()
		{
			this.percent = 1 - (this.movement.ramp/180)*1;
			this.tier = this.movement.tier;
			
			if(this.tier != this.prevTier)
			{
				switch(this.tier)
				{
					case 1:
						this.image.src = this.white;
						this.imageTop.src = this.blue;
						break;
					case 2:
						this.image.src = this.blue;
						this.imageTop.src = this.green;
						break;
					case 3:
						this.image.src = this.green;
						this.imageTop.src = this.yellow;
						break;
					case 4:
						this.image.src = this.yellow;
						this.imageTop.src = this.red;
						break;
					case 5:
						this.image.src = this.red;
						this.imageTop.src = this.red;
						break;	
				}
				this.prevTier = this.tier;
			}
			
			context.save();
			context.translate(this.parent.x+this.xOffset, this.parent.y+this.yOffset);
			context.rotate(this.parent.rotation * (Math.PI/180));
			if(this.flipped) context.scale(-1, 1);
      
      
			context.drawImage(this.imageShadow, -this.width/2,-this.height/2, this.width, this.height)
			context.drawImage(this.image, -this.width/2,-this.height/2, this.width, this.height);
      context.drawImage(this.imageTop, 0,this.height*this.percent,this.width,this.height, -this.width/2,-this.height/2+this.height*this.percent, this.width, this.height);
			//context.drawImage(this.imageTop, 0, this.height*this.percent, this.width, this.height, -this.width/2,-this.height/2+this.height, this.width, this.height);
			
			context.restore();
		}
	}
}