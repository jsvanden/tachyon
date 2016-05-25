function LoadingCharacter()
{
  this.character;
  this.characterMovement;
  this.characterBody;
  this.direction = 0;
  this.percent = 0;
  this.continueTimer = 0;
  this.timerLimit = 120;
  
  this.start = function()
  {
    this.character = MainMenu.find("Main Character");
    this.characterMovement = this.character.getComponent("movement");
    this.characterBody = this.character.getComponent("body");
    this.characterMovement.enabled = false;
  }

  this.draw = function()
  {
    context.font = "30px sans-serif";
    context.textAlign = "center";
    context.textBaseline = 'middle';
    context.fillText("Hold shift to start.",320,130);
    
    
    context.save();
    context.translate(320,380);
    
    context.fillText(Math.floor(this.percent) + "%",0,0);
    
    context.rotate(-90*Math.PI/180);
    
    context.beginPath();
		context.arc(0, 0, 50, Math.PI * 2, 0, true);
		context.strokeStyle = '#efefef';
    context.lineCap = 'round'; // butt, round or square
		context.lineWidth = 7
		context.stroke();
    
		context.beginPath();
		context.arc(0, 0, 50, 0, Math.PI * 2 * (this.percent/100), false);
		context.strokeStyle = '#555555';
    context.lineCap = 'round'; // butt, round or square
		context.lineWidth = 7
		context.stroke();
    
    context.restore();
  }
  
  this.update = function()
  {
    if(this.continueTimer == 0)
    {
      this.percent = (100 / (this.characterMovement.tierCap-1)) * (this.characterMovement.ramp / 180) + ((this.characterMovement.tier-1) * (100 / (this.characterMovement.tierCap-1)));
    }
    
    if(this.characterMovement.tier == this.characterMovement.tierCap)
    {
      this.percent = 100;
    }
    
    if(this.percent == 100)
    {
      this.continueTimer++;
    }
    
    if(this.continueTimer >= this.timerLimit)
    {
      g_currentLevel = 1;
      sceneManager.play("Transition Level");
    }
    
    if (InputManager.isPressed("shift") || this.percent == 100)
    {
      this.characterBody.applyForce(this.direction, 1000);
      this.characterMovement.ramp += this.characterMovement.fillSpeed;
      
      if (this.characterMovement.ramp > 180)
      {
        this.characterMovement.ramp = 0;
        this.characterMovement.tier++;
      }
    }
    else
    {
      this.characterMovement.ramp -= 8;
      if (this.characterMovement.ramp < 0 && this.characterMovement.tier > 1)
      {
        this.characterMovement.ramp = 170;
        this.characterMovement.tier--;
      }
      else
      {
        if (this.characterMovement.ramp < 0)
        {
          this.characterMovement.ramp = 0;
        }
      }
    }
    
    if(this.character.x > 560)
    {
      this.direction = 180;
    }
    
    if (this.character.x < 80)
    {
      this.direction = 0;
    }
    
    if(this.character.x > 600)
    {
      this.character.x = 600;
      this.characterBody.applyForce(180, 1000);
    }
    
    if (this.character.x < 40)
    {
      this.character.x = 40;
      this.characterBody.applyForce(0, 1000);
    }
  }
}